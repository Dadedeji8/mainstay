
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from 'App'
import './index.css'

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from 'context'
import { AuthProvider } from 'context/AuthContext'
import { ToastContainer } from 'react-toastify'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <AuthProvider>

        <App />
        <ToastContainer autoClose={3000} theme="light" position="bottom-center" />
      </AuthProvider>
    </MaterialUIControllerProvider>
  </BrowserRouter>
)
