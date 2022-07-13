import React from 'react'
import { Avatar } from '../CommonUi/Avatar'
import {MdExpandMore} from 'react-icons/md'

export const TopBar = () => {
  return (
    <div className='w-full h-auto flex justify-between  py-4 items-center px-8'>
      <div className='w-1/2'>
      <form className="flex items-center w-full">   
   
    <div className="relative w-full">
       
        <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by store, Email, ID, keywords..." required/>
        <button type="submit" className="flex absolute inset-y-0 right-0 items-center pr-3">
        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </button>
    </div>
    </form>
      </div>
      <div className='flex gap-x-5 items-center'>
        <div className='flex gap-x-3 items-center'>
<img className='w-4 h-4 rounded-full' src="/images/en.svg"/>
<div>English</div>
<button className='focus:outline-none'><MdExpandMore size={24}/></button>
        </div>
<div className='flex gap-x-4 items-center'>
    <div className='text-gray-500 font-semibold text-base'> James Suvillian</div>
    <img className='w-10 h-10 rounded-full'src="/images/150.jpg"/>
</div>
      </div>
    </div>
  )
}


