import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from './pages/Homepage'
import CreatTode from './pages/CreatTode'
import TodoDetails from './pages/TodoDetails'
import PageNotFound from './pages/PageNotFound'
import Navbar from './components/Navbar'
import EditTodoPage from './pages/EditTodoPage'
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/create' element={<CreatTode />} />
        <Route path='/todo/:id' element={<TodoDetails />} />
        <Route path='/edit/:id' element={<EditTodoPage />} />
        {/* <Route path='/completed' element={<CompletedTodos />} /> */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App