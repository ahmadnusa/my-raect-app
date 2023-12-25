import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductPage from './components/Pages/products'
import LoginPage from './components/Pages/login'
import RegisterPage from './components/Pages/register'
import NotFoundPage from './components/Pages/404'
import ProfilePage from './components/Pages/profile.jsx'
import DetailProductPage from './components/Pages/detailProduct.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import DarkModeProvider from './context/darkMode.jsx'
import TotalPriceProvider from './context/TotalPrice.jsx'

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
  },
  {
    path: '/product/:id',
    element: <DetailProductPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeProvider>
        <TotalPriceProvider>
          <RouterProvider router={router} />
        </TotalPriceProvider>
      </DarkModeProvider>
    </Provider>
  </React.StrictMode>
)
