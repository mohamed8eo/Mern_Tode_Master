# 📝 MERN Stack Todo Application

A full-stack todo application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring modern UI design, user authentication, and real-time task management.

![Todo App](https://img.shields.io/badge/React-19.1.0-blue)
![Todo App](https://img.shields.io/badge/Node.js-Express-green)
![Todo App](https://img.shields.io/badge/MongoDB-Mongoose-orange)
![Todo App](https://img.shields.io/badge/TailwindCSS-DaisyUI-purple)

## ✨ Features

- **🔐 User Authentication** - Secure authentication using Clerk
- **📋 Task Management** - Create, read, update, and delete todos
- **🏷️ Category Organization** - Organize todos by categories
- **✅ Completion Tracking** - Mark todos as complete/incomplete
- **📅 Date Tracking** - Automatic timestamp for all todos
- **🎨 Modern UI** - Beautiful interface with Tailwind CSS and DaisyUI
- **📱 Responsive Design** - Works seamlessly on desktop and mobile
- **⚡ Real-time Updates** - Instant feedback with React Hot Toast
- **🔍 Search & Filter** - Easy task discovery and organization

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Hot Toast** - Toast notifications
- **Lucide React** - Beautiful icons
- **Day.js** - Date manipulation library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Clerk** - Authentication service
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd Mern_Stack_Todo
   ```

2. **Install Backend Dependencies**
   ```bash
   cd Backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../Client
   npm install
   ```

4. **Environment Setup**

   Create a `.env` file in the Backend directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```

   Create a `.env` file in the Client directory:
   ```env
   VITE_API_URL=http://localhost:5000/api
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   ```

5. **Start the Development Servers**

   **Backend (Terminal 1):**
   ```bash
   cd Backend
   npm run dev
   ```

   **Frontend (Terminal 2):**
   ```bash
   cd Client
   npm run dev
   ```

6. **Open your browser**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
Mern_Stack_Todo/
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── todo.controllers.js
│   │   ├── db/
│   │   │   └── todoConnectDB.js
│   │   ├── model/
│   │   │   └── todoSchema.js
│   │   ├── routes/
│   │   │   └── todo.js
│   │   └── server.js
│   ├── package.json
│   └── package-lock.json
├── Client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── TodoCart.jsx
│   │   ├── lib/
│   │   │   ├── axios.js
│   │   │   └── utils.js
│   │   ├── pages/
│   │   │   ├── CreatTode.jsx
│   │   │   ├── EditTodoPage.jsx
│   │   │   ├── Homepage.jsx
│   │   │   ├── PageNotFound.jsx
│   │   │   └── TodoDetails.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🔌 API Endpoints

### Todos
- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `GET /api/todos/:id` - Get a specific todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

### Request/Response Examples

**Create Todo:**
```json
POST /api/todos
{
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API docs",
  "category": "Work"
}
```

**Todo Response:**
```json
{
  "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API docs",
  "completed": false,
  "category": "Work",
  "date": "2024-01-15T10:30:00.000Z",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

## 🎯 Usage

1. **Authentication**: Sign up or log in using Clerk authentication
2. **Create Todos**: Click "Create Todo" to add new tasks
3. **Organize**: Assign categories to your todos for better organization
4. **Track Progress**: Mark todos as complete when finished
5. **Edit/Delete**: Modify or remove todos as needed
6. **View Details**: Click on any todo to see full details

## 🚀 Deployment

### Backend Deployment (Heroku/Railway)
1. Set environment variables in your hosting platform
2. Configure MongoDB connection string
3. Deploy using Git integration

### Frontend Deployment (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Set environment variables for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- [Clerk](https://clerk.com/) for authentication
- [DaisyUI](https://daisyui.com/) for beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) for fast development

## 📞 Support

If you have any questions or need help, please open an issue in the GitHub repository or contact me directly.

---

⭐ **Star this repository if you found it helpful!** 