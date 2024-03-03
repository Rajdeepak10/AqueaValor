import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='py-2 w-full mx-auto max-w-[1228px]'>
        <div className='border-t-4 rounded-r-sm border-cyan-900 flex flex-row justify-between'>
            <Link to="/" className='text-1xl font-mono text-cyan-500' >
                Terms and Conditions
            </Link>
            <Link to="/" className='text-1xl font-mono text-cyan-500' >
                Privacy Policy
            </Link>

        </div>
    </div>
  )
}

export default Footer