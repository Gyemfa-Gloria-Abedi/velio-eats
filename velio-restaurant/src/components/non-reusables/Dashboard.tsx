import React from 'react';
import Cards from '../reusables/Cards';
import MenuCards from './MenuCards';
import { MdOutlineAddBusiness } from "react-icons/md";
import DeliveryCards from './DeliveryCards';

const Dashboard = () => {
  return (
    <div className="card bg-slate-50 ml-80 w-screen  pl-16 py-8 gap-8">
        <Cards>
                <div className="flex justify-between">
                    <p className='font-bold self-center' >Menu</p>
                    <button className='flex px-2 py-1 rounded-lg gap-1 border-2 border-amber-600 '>
                        <MdOutlineAddBusiness className='self-center'/>
                         <p className='self-center'>Add menu</p> 
                    </button>
                </div>
                <p className='text-xs'>View menu list</p>
                <div className="grid grid-cols-3 gap-4 mt-8">
                <MenuCards/>
                <MenuCards/>
                <MenuCards/>
                </div>
        </Cards>
        <div className='mt-6'>
        <Cards >
            <p>Delivery contacts</p>
            <DeliveryCards/>
        </Cards>
        </div>
      </div>
  )
}

export default Dashboard