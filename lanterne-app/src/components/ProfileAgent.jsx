import React from 'react'
import { MdOutlineNotificationsNone } from "react-icons/md";
import Photo from '../images/photo.jpg'
import { CiSquareChevDown } from "react-icons/ci";

function ProfileAgent() {
  return (
    <div>
      <div className='flex gap-10 ml-[30px] mt-[30px] items-center profile'>
            <div>
                <MdOutlineNotificationsNone className='notice' />
            </div>
            <div className='flex gap-3'>
                <div>
                    <p className='font-bold'>Sylvie Amessang</p>
                    <small className='float-right'>Agent</small>
                </div>
                <div>
                    <img src={Photo} alt="" className='w-[25px] h-[25px] rounded-full' />
                </div>
            </div>
            <div className='flex items-center mb-[15px]'>
                    <CiSquareChevDown className='chevron' />
            </div>
        </div>
    </div>
  )
}

export default ProfileAgent
