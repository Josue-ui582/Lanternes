import React from 'react'
import office from '../images/office.jpg'

const Locations = () => {
  return (
    <div className='mt-[20px] flex items-center ml-[20px] location'>
      <div>
        <img src={office} alt="office" className='w-[100px] h-[100]' />
      </div>
      <div>
        <p className='mb-[10px] font-bold'>Enregister une location de lanterne</p>
        <select name="name" id="">
          <option value="name">Jonh Doe</option>
          <option value="name">Dan</option>
          <option value="name">Jan</option>
          <option value="name">Noah</option>
        </select>
        <button className='ml-[80px]'>Louer</button>
      </div>
    </div>
  )
}

export default Locations
