import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='text-center mt-[50px]'>
        <p className='mb-[20px]'>Oups ! Page not found 😐</p>
        <Link to="/" className='bg-blue text-white'>Go Back Home</Link>
    </div>
  )
}

export default ErrorPage