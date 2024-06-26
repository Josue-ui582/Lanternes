import React from 'react'
import { FaRegSquarePlus } from "react-icons/fa6";
import schoolIcons from '../images/schoolIcons.png'

function School() {
  return (
    <div className='mt-[80px]'>
        <div className='flex gap-10 mt-[] ml-[15px] items-center'>
            <FaRegSquarePlus className='icon' />
            <p className='ml-[15px] scholl'>Liste noire par école</p>
        </div>
        <div className='ml-[15px] mt-[30px]'>
            <select name="" id="" className=' rounded-sm location-select'>
                <option value="">Toutes</option>
            </select>
        </div>
        <div className='h-[100px] school'>
            <div className='flex gap-10 ml-[15px] mt-[20px] bord'>
                <img src={schoolIcons} alt="" />
                <p className='font-bold'>Complexe Scolaire  St Bakhita</p>
            </div>
            <div className='flex gap-10 ml-[15px] mt-[20px] bord'>
                <img src={schoolIcons} alt="" />
                <p className='font-bold'>Complexe Scolaire  St Bakhita</p>
            </div>
            <div className='flex gap-10 ml-[15px] mt-[20px] bord'>
                <img src={schoolIcons} alt="" />
                <p className='font-bold'>Complexe Scolaire  St Bakhita</p>
            </div>
            <div className='flex gap-10 ml-[15px] mt-[20px] bord'>
                <img src={schoolIcons} alt="" />
                <p className='font-bold'>Complexe Scolaire  St Bakhita</p>
            </div>
            <div className='flex gap-10 ml-[15px] mt-[20px] bord'>
                <img src={schoolIcons} alt="" />
                <p className='font-bold'>Complexe Scolaire  St Bakhita</p>
            </div>
        </div>
    </div>
  )
}

export default School
