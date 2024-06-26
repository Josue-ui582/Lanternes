import React from 'react'
import car from '../images/car.png'

function LocationAdmin() {
  return (
    <div className='mt-[20px] flex items-center ml-[20px] location-admin py-[50px]'>
      <div>
        <img src={car} alt="office" className='w-[100px] h-[100]' />
      </div>
      <div>
        <p className='mb-[10px] font-bold'>Approvisionner une école en lanternes</p>
        <select name="name" id="">
          <option value="name">Bakhita</option>
          <option value="name">Godomey</option>
          <option value="name">Togoudo</option>
        </select>
        <button className='ml-[80px]'>Envoyer</button>
      </div>
    </div>
  )
}

export default LocationAdmin