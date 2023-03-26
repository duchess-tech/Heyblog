import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Signup from './pages/signup'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login'
import Viewmore from './pages/viewmore'
import Bloginit from './pages/bloginit'
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/bloginit", element: <Bloginit/> },
  { path: "/viewmore", element: <Viewmore/> },
  { path: "/:pid", element: <Viewmore/> }

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
