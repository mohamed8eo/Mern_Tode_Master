import User from '../db/User.js';
import { clerkClient } from '@clerk/express'
export const getSignin = async (req, res) => {
     try {
    // You get the Clerk user ID from the frontend (e.g., from the session)
    const { clerkId } = req.body;

    // Fetch user info from Clerk
    const clerkUser = await clerkClient.users.getUser(clerkId);

    // Map Clerk user data to your schema
    const userData = {
      username: clerkUser.username || ((clerkUser.firstName || '') + (clerkUser.lastName ? ' ' + clerkUser.lastName : '')) || clerkUser.emailAddresses?.[0]?.emailAddress || clerkUser.id,
      email: clerkUser.emailAddresses?.[0]?.emailAddress || '',
      password: clerkUser.passwordEnabled, // placeholder, not used
      clerkId: clerkUser.id,
    };

    // Upsert user in MongoDB
    const user = await User.findOneAndUpdate(
      { clerkId: userData.clerkId },
      userData,
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

