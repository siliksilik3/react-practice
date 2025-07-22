import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts, {loader as postsLoader} from './routes/Posts'
import './index.css'
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom'
import { RooyLayout } from './routes/RootLayout'
import NewPost, {action as postAction} from './routes/NewPost'
import PostDetails, {loader as uniquePostLoader} from './routes/PostDelatils'

const router= createBrowserRouter([{
  path: '', element: <RooyLayout />, children: [
    {path: '', element: <Posts />,
      loader: postsLoader,
       children:[
         {path: '/create', element: <NewPost />, action: postAction },
         {path: '/:id', element: <PostDetails />, loader: uniquePostLoader  }
    ]},
    
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
