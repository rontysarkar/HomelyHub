import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router.jsx'
import './index.css'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
