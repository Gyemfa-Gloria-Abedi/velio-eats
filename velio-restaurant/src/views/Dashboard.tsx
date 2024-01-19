import React from 'react'
import Navbar from '../components/Navbar'
import Introduction from '../components/Introduction'
import MenuList from '../components/MenuList';
import Blog from '../components/Blog';
import ContactusFooter from '../components/ContactusFooter'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="my-6  mx-8">
        <Introduction />
        <MenuList />
      </div>
          <Blog />
          <div  className="mt-[240px] mb-12 mx-8">
          <ContactusFooter/>
          </div>
    </div>
  )
}

export default Dashboard
