import React from 'react'
import { CiHome } from "react-icons/ci";
import { FiUserPlus } from "react-icons/fi";
import Location from '../images/Location.png'
import Lanterne from '../images/Lanterne.png'
import Truck from '../images/truck.png'
import Wallet from '../images/wallet.png'
import { SlGraph } from "react-icons/sl";
import { RiSettings4Line } from "react-icons/ri";
import { LuHelpCircle } from "react-icons/lu";
import { TbDeviceImacCheck } from "react-icons/tb";
import { MdPeopleOutline } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import Locations from '../components/Locations';
import Graph from '../components/Graph';
import ProfileAgent from '../components/ProfileAgent';
import Activity from '../components/Activity';
import Tables from '../components/Table';

const Agent = () => {
  return (
    <div className='flex'>
      <div className=' dashe h-[130vh] w-[140px]'>
        <p className='uppercase w-[137px] h-[35px] mt-[30px] ml-[30px] font-semibold'>Logo</p>
        <ul>
          <li className='flex items-center gap-2 w-[220px] h-[5px] ml-[15px] rounded-s-xl py-[5px] mt-[10px] home'>
            <CiHome className='red' />
            <span className='red'>Tableau de bord</span>
          </li>
          <li className='flex items-center gap-2 w-[220px] h-[5px] ml-[15px] rounded-s-xl py-[5px] mt-[20px] others'>
            <FiUserPlus className='grey' />
            <span>Gestion des élèves</span>
          </li>
          <li className='flex items-center gap-2 w-[220px] h-[5px] ml-[15px] rounded-s-xl py-[5px] mt-[20px]'>
            <img src={Location} alt="Location" className='w-[15px] h-[15px]' />
            <span>Gestion des locations</span>
          </li>
          <li className='flex items-center gap-2 w-[220px] h-[5px] ml-[15px] rounded-s-xl py-[5px] mt-[20px]'>
            <img src={Lanterne} alt="Lanterne" className='w-[15px] h-[15px]' />
            <span>Gestion des lanternes</span>
          </li>
          <li className='flex items-center gap-2 w-[220px] h-[5px] ml-[15px] rounded-s-xl py-[5px] mt-[20px]'>
            <img src={Truck} alt="Icon-Truck" className='w-[15px] h-[15px]' />
            <span>Approvisionnement</span>
          </li>
          <li className='flex items-center gap-2 w-[220px] h-[5px] ml-[15px] rounded-s-xl py-[5px] mt-[20px]'>
            <img src={Wallet} alt="wallet" className='w-[15px] h-[15px]' />
            <span>Portefeuille</span>
          </li>
          <li className='flex items-center gap-2 w-[220px] h-[5px] ml-[15px] rounded-s-xl py-[5px] mt-[20px]'>
            <SlGraph className='w-[15px] h-[15px] grey' />
            <span>Journalisation</span>
          </li>
          <li className='flex items-center gap-2 w-[220px] h-[5px] ml-[15px] rounded-s-xl py-[5px] mt-[20px]'>
            <RiSettings4Line className='w-[15px] h-[15px] grey' />
            <span>Paramètre</span>
          </li>
          <li className='flex items-center gap-2 w-[220px] h-[5px] ml-[15px] rounded-s-xl py-[5px] mt-[20px]'>
            <LuHelpCircle className='w-[15px] h-[15px] grey' />
            <span>Aide</span>
          </li>
        </ul>
      </div>
      <div className='dash h-[130vh]'>
        <p className='mt-[30px] ml-[30px] font-semibold'>Bienvenue, Sylvie !</p>
        <div className='flex items-center gap-3 mt-[24px] ml-[20px] heade'>
          <div className='imac'>
            <TbDeviceImacCheck className='imacc' />
          </div>
          <div>
            <p className='font-bold'>250.000</p>
            <small>Revenu mensuel en fcfa</small>
          </div>
          <div className='imace'>
            <MdPeopleOutline className='imacc' />
          </div>
          <div>
            <p className='font-bold'>600</p>
            <small>Elèves enregistrés</small>
          </div>
          <div className='imacs'>
            <IoBagHandleOutline className='imacc' />
          </div>
          <div>
            <p className='font-bold'>700</p>
            <small>Lanternes Louées</small>
          </div>
        </div>
        <Locations />
        <Graph />
      </div>
      <div className='h-[130vh] w-[240px] dash'>
        <ProfileAgent />
        <Activity />
        <Tables />
      </div>
    </div>
  )
}

export default Agent
