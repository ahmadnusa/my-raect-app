import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProductPage from './components/Pages/product'
import LoginPage from './components/Pages/login'
import RegisterPage from './components/Pages/register'
import NotFoundPage from './components/Pages/404'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ProfilePage from './components/Pages/profile.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/products',
    element: <ProductPage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
