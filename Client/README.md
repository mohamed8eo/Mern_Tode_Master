# MERN Stack Todo App (Client)

This is the React + Vite frontend for a full-featured MERN stack Todo application with Clerk authentication and a modern, elegant UI (DaisyUI + Tailwind).

## Features
- User authentication with Clerk (Sign in required for all actions)
- Create, edit, delete, and complete todos
- Todos are user-specific (each user sees only their own)
- Elegant, responsive UI using DaisyUI and Tailwind CSS
- Modern UX: newest todos on top, completed todos move down with animation

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- Backend server running (see backend setup)

### Install dependencies
```bash
npm install
```

### Environment Variables
- Configure Clerk frontend (see Clerk docs for setup)
- If using environment variables, add them to `.env` as needed

### Run the app
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or as shown in your terminal).

## Customization
- UI is built with DaisyUI and Tailwind; you can easily adjust colors and components in the source files.
- Sign-in and navigation are fully customizable using Clerk's React components.

## Clerk Integration
- All routes and actions are protected; users must sign in to use the app.
- To configure Clerk, follow the [Clerk documentation](https://clerk.com/docs) and ensure your frontend is connected to your Clerk project.

## Project Structure
- `src/components/` — Navbar, TodoCart, etc.
- `src/pages/` — Homepage, Create/Edit Todo, Details, Not Found
- `src/lib/` — Axios instances, utilities

## Backend
See the `/Backend` folder for backend setup and API details.

---

Built with ❤️ using React, Vite, DaisyUI, and Clerk.
