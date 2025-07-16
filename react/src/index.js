import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RooyLayout } from './routes/RootLayout'
import NewPost from './components/NewPost'

const router= createBrowserRouter([{
  path: '', element: <RooyLayout />, children: [
    {path: '', element: <App />},
    {path: '/create', element: <NewPost /> }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
