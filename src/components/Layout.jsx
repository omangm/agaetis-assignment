import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import FeaturedBlog from './FeaturedBlog'

const Layout = () => {
  return (
    <div className='w-full h-full'>
      <Navbar />
      <div className="max-w-screen-xl mx-auto w-full">
        <FeaturedBlog />
      </div>
      <div className="py-4 max-w-screen-xl mx-auto w-full">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout