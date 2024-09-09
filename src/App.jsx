import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './layouts/Layout'
import { Auth, Dashboard, LandingPage, Link, RedirectLink } from './pages'

const router = createBrowserRouter([
  {
    element : <Layout/>,
    children : [
      {
        path :'/',
        element : <LandingPage/>
      },
      {
        path :'/dashboard',
        element : <Dashboard/>
      },
      {
        path :'/auth',
        element : <Auth/>
      },
      {
        path :'/link/:id',
        element : <Link/>
      },
      {
        path :'/:id',
        element : <RedirectLink/>
      },
    ]
  }
])

function App() {

  return <RouterProvider router={router} />
}

export default App
