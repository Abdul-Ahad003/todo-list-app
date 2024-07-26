import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { useState } from 'react'

import Home from './assets/components/Home.jsx'
import Task from './assets/components/Task.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<><App/></>
  },

  {
    path:"/Home",
    element:<><Home/></>
  },
  
  {
    path:"/Task",
    element:<> <Task/> </>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} >
      <App/>
     </RouterProvider>
  </React.StrictMode>,
)
