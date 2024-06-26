import React from 'react'
import chart from '../images/chart.png'

const Graph = () => {
  return (
    <div className='grahe w-[450px]'>
        <div className='flex gap-20 ml-[20px] mt-[20px] graph mt-[50px]'>
            <div className='flex gap-3'>
                <p className='font-bold'>Diagramme en bâtton</p>
                <select name="chart" id="">
                    <option value="chart">bar chart</option>
                </select>
            </div>
            <div className='flex ml-5px] gap-3'>
                <p className='font-bold'>Période</p>
                <select name="month" id="">
                    <option value="month">7 mois</option>
                </select>
            </div>
        </div>
        <img src={chart} alt="" className='w-[450px] h-[150px] ml-[20px] mt-[30px] rounded-md' />
    </div>
    
  )
}

export default Graph
