import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Home from './pages/Home/Home';
import Colophon from './pages/Colophon/Colophon';
import Contact from './pages/Contact/Contact';
import {Toaster} from "react-hot-toast"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/colophon',
        element: <Colophon />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ] 
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster/>
  </React.StrictMode>,
)
