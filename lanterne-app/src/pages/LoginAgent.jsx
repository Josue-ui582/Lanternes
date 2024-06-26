import React, {useState} from 'react'
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import Logo2 from '../images/Logo2.jpg'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GrLinkNext } from "react-icons/gr";


const LoginAgent = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleNameChange (e) {
    setUserName(e.target.value)
  }

  function handlePasswordChange (e) {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/agent')
  }

  return (
    <div className='flex justify-center items-center justify-around mt-[50px] element-flexible'>
        <div className=''>
          <p className=' font-semibold text-5xl uppercase text-black text-center'>Logo</p>
          <p className=' mt-[25px] text-#0F1928 font-bold text-4xl text-center'>Bienvenue</p>
          <p className='text-grey mt-[15px] text-center'>Connectez-vous ici en tant qu’agent</p>
          <form action="submit" onSubmit={handleSubmit}>
            <div className='flex gap-5 items-center bg-bgOne mt-[15px] p-[5px]'>
              <FaRegUser />
              <input onChange={handleNameChange} value={userName} type="text" placeholder="Nom d'utilisateur" className='rounded-md border-none bg-bgOne w-[100%] focus:outline-none'/>
            </div>
            <div className='flex gap-5 items-center bg-bgOne mt-[15px] p-[5px]'>
              <RiLockPasswordFill />
              <input onChange={handlePasswordChange} type="password" placeholder="Mot de passe" className='rounded-md border-none bg-bgOne w-[100%] focus:outline-none'/>
            </div>
            <button type='submit' className='rounded-md w-[100%] align-center mt-[10px] bg-red text-color hover:bg-red-400 mb-[10px] py-[5px]'>J'accède</button>
            <Link className='password mt-[10px] hover: text-grey'><small>Mot de passe oublié ?</small></Link>
          </form>
        </div>
        <div>
          <img src={Logo2} alt="Logo-agent" className='w-[407px] h-[400px]' />
        </div>
      </div>
  )
}

export default LoginAgent
