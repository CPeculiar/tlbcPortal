import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Gallery from './Pages/Gallery.jsx'
import Partners from './Pages/Partners.jsx'
import Register from './Pages/Register.jsx'
import Test from './Pages/Test.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Gallery",
    element: <Gallery />,
  },
  {
    path: "/Partners",
    element: <Partners />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Test",
    element: <Test />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
