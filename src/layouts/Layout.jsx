import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <main className='min-h-screen container' >
        {/* Header */}
        <Outlet/>
        </main>
        <footer className='p-10 text-center bg-gray-800 mt-10 ' >
            Made with ❤️ by WebDevAmit
        </footer>
    </>
    
  )
}

export default Layout