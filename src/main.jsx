import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter ,
  RouterProvider,
} from 'react-router-dom'
import Users from './Users/Users'
import UserDetails from './UserDetails/UserDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/users',
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users />
      },
      {
        path: '/userDetails/:userDetailsId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userDetailsId}`),
        element: <UserDetails />
      },
      {
        path: '/about',
        element: <About />
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
  </React.StrictMode>,
)
