import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts from './routes/Posts'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RooyLayout } from './routes/RootLayout'
import NewPost from './routes/NewPost'

const router= createBrowserRouter([{
  path: '', element: <RooyLayout />, children: [
    {path: '', element: <Posts />, children:[
      {path: '/create', element: <NewPost /> }
    ]},
    
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
