import express from 'express';
import { getSignin  } from '../controllers/UserAuth.js';

const router = express.Router();

// User sync (create or upsert)
router.post('/sync-user', getSignin);


export default router;