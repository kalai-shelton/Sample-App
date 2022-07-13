import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { sideMenuActions } from './store/sideMenu-slice';
import { FaSearch, FaBars, FaOpencart, FaHeart } from "react-icons/fa";
import { MdDashboard, MdPerson, MdOutlineSettings, MdOutlineLogout,MdCopyright } from "react-icons/md"



export const SideBar = () => {
    const { activeTab } = useSelector((state) => state.sideMenu);

    const dispatch = useDispatch()

    const handleSideMenu = () => {
        dispatch(sideMenuActions.setMenu(true));
    };
    return (
        <div className='grid h-full content-between mb-5'>
            <div className='flex flex-col w-full gap-y-3 mt-5 '>
                <div className='pl-5 flex items-center pr-5'>

                    <button className='focus:outline-none ' onClick={() => handleSideMenu()}><FaBars size="30" color="#D1D5DB" /> </button>
                </div>
                {/* <div className={`flex items-center tooltip mx-3  mt-6 text-gray-100 hover:text-gray-700 hover:rounded-lg hover:bg-gray-50 hover:font-bold p-4`}> */}
                    {/* <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"> */}
                    {/* <FaSearch size="20" /><span className="tooltiptext -ml-2 "> Search</span> */}
                    {/* </div> */}
                    {/* <input className="block  p-4 pl-10 w-full text-sm text-white  rounded-lg bg-gray-700 focus:outline-none  focus:bg-gray-500  my-6" placeholder="Search ..." /> */}
                {/* </div> */}

                <button className={`focus:outline-none tooltip py-2 text-lg px-2 mt-6 text-gray-100 flex gap-x-4 font-normal mx-4 hover:bg-gray-50  hover:text-gray-700 hover:rounded-lg hover:font-bold ${activeTab === 1 ? " bg-gray-600  text-gray-50 rounded-lg font-bold " : ""}`}>
                    <MdDashboard size="22" /> <span className="tooltiptext"> DashBoard</span></button>
                <button className={`focus:outline-none tooltip py-2  text-lg mt-1.5 px-2 text-gray-100 flex gap-x-3 font-normal mx-4 hover:bg-gray-50  hover:text-gray-700 hover:rounded-lg hover:font-bold ${activeTab === 2 ? "bg-gray-600  text-gray-50 rounded-lg font-bold " : ""}`}>
                    <MdPerson size="25" /> <span className="tooltiptext"> Profile</span> </button>
                <button className={`focus:outline-none tooltip py-2  text-lg  px-2 mt-1  text-gray-100 flex gap-x-3 font-normal mx-4 hover:bg-gray-50  hover:text-gray-700 hover:rounded-lg hover:font-bold ${activeTab === 2 ? "bg-gray-600  text-gray-50 rounded-lg font-bold " : ""}`}>
                    <FaOpencart size="24" /> <span className="tooltiptext"> Cart</span> </button>
                <button className={`focus:outline-none tooltip py-2  text-lg  px-2 mt-1  text-gray-100 flex gap-x-3 font-normal mx-4 hover:bg-gray-50  hover:text-gray-700 hover:rounded-lg hover:font-bold ${activeTab === 2 ? "bg-gray-600  text-gray-50 rounded-lg font-bold " : ""}`}>
                    <FaHeart size="20" /> <span className="tooltiptext"> Favourites</span> </button>
                <button className={`focus:outline-none tooltip py-2  text-lg  px-2 mt-2 text-gray-100 flex gap-x-3 font-normal mx-4 hover:bg-gray-50  hover:text-gray-700 hover:rounded-lg hover:font-bold ${activeTab === 2 ? "bg-gray-600  text-gray-50 rounded-lg font-bold " : ""}`}>
                    <MdOutlineSettings size="22" /> <span className="tooltiptext"> Settings</span> </button>


            </div>
            <div className='mb-5'>
                <button className={`focus:outline-none tooltip py-2  text-lg  px-2  text-gray-100 flex gap-x-3 font-normal mx-4 hover:bg-gray-50  hover:text-gray-700 hover:rounded-lg hover:font-bold  ${activeTab === 2 ? "bg-gray-600  text-gray-50 rounded-lg font-bold " : ""}`}>
                    <MdCopyright size="22" /> </button>
            </div>
        </div>
    )
}





