import React from 'react'
import AppRoutes from './component/routes/AppRoutes'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
export const API_URL="https://student-mentor-task-922r.onrender.com"
function App() {
  let router=createBrowserRouter(AppRoutes)
  return <RouterProvider router={router}/>
  
}

export default App
