import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { sideMenuActions } from './store/sideMenu-slice';
import { FaSearch, FaBars, FaOpencart, FaHeart, FaHome } from "react-icons/fa";
import { MdDashboard, MdPerson, MdOutlineSettings, MdOutlineLogout,MdCopyright } from "react-icons/md"
import { Avatar } from '../CommonUi/Avatar';

export const SideMenu = () => {
  const { activeTab } = useSelector((state) => state.sideMenu);

  const dispatch = useDispatch()

  const handleActiveTab = (id) => {
    dispatch(sideMenuActions.setActiveTab(id));
  };
  const handleSideMenu = () => {
    dispatch(sideMenuActions.setMenu(false));
  };
  return (
    <div className='grid h-full content-between mb-5'>
      <div className='flex flex-col w-full gap-y-3 mt-5'>
        <div className='pl-6  flex justify-between items-center pr-5'>
          <div className='flex items-center gap-x-2 font-bold text-xl text-gray-300 pointer-cursor' onClick={() => { dispatch(sideMenuActions.setActiveTab(0)); }}><FaHome size="20" /> <span>Coding Tab</span></div>
          <button className='focus:outline-none' onClick={() => handleSideMenu()}><FaBars size="30" color="#D1D5DB" /></button>
        </div>
        {/* <div className='relative mx-4 mt-6 text-white '>
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <FaSearch size="20" />
          </div>
          <input className="block  p-4 pl-10 w-full text-sm text-white ease-in-out rounded-lg bg-gray-700 focus:outline-none  focus:bg-gray-500  " placeholder="Search ..." />
        </div> */}

        <button className={`focus:outline-none py-2 text-left text-lg px-2 text-gray-100 mt-6 flex gap-x-4 font-normal mx-4 hover:bg-gray-50  hover:text-gray-700 hover:rounded-lg hover:font-bold ${activeTab === 1 ? " bg-gray-600  text-gray-50 rounded-lg font-bold  " : ""}`}
          onClick={() => { handleActiveTab(1); }}><MdDashboard size="22" /> DashBoard</button>
        <button className={`focus:outline-none py-2 text-left text-lg  px-2 text-gray-100 flex gap-x-3 font-normal mx-4 hover:bg-gray-50  hover:text-gray-700 hover:rounded-lg hover:font-bold ${activeTab === 2 ? " bg-gray-600  text-gray-50 rounded-lg font-bold  " : ""}`}
          onClick={() => { handleActiveTab(2); }}><MdPerson size="25" /> Profile</button>
        <button className={`focus:outline-none py-2 text-left text-lg  px-2 text-gray-100 flex gap-x-3 font-normal mx-4 hover:bg-gray-50  hover:text-gray-700 hover:rounded-lg hover:font-bold ${activeTab === 3 ? " bg-gray-600  text-gray-50 rounded-lg font-bold  " : ""}`}
          onClick={() => { handleActiveTab(3); }}><FaOpencart size="24" />Cart </button>
        <button className={`focus:outline-none py-2 text-left text-lg  px-2 text-gray-100 flex gap-x-3 font-normal mx-4 hover:bg-gray-50  hover:text-gray-700 hover:rounded-lg hover:font-bold ${activeTab === 4 ? " bg-gray-600  text-gray-50 rounded-lg font-bold  " : ""}`}
          onClick={() => { handleActiveTab(4); }}><FaHeart size="20" />Favourites </button>
        <button className={`focus:outline-none py-2 text-left text-lg  px-2 text-gray-100 flex gap-x-3 font-normal mx-4 hover:bg-gray-50  hover:text-gray-700 hover:rounded-lg hover:font-bold ${activeTab === 5 ? " bg-gray-600  text-gray-50 rounded-lg font-bold  " : ""}`}
          onClick={() => { handleActiveTab(5); }}><MdOutlineSettings size="22" />Settings </button>
      </div>
      <div className=''>

        <div className='text-white flex items-center inline-flex h-full mb-8 px-5'>
          Copyrights <span className='px-2 py-2'><MdCopyright size="22" /> </span>2022.
        </div>
        
  
      </div>
    </div>
  )
}


