import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="bg-white border-b-4 rounded-r-sm border-cyan-900 flex flex-row justify-between w-full mx-auto py-2 sticky top-0 z-10">
        <h2 className="text-cyan-700 font-bold font-mono text-4xl cursor-pointer">
          AquaeValor
        </h2>
        <div className="flex flex-row justify-between gap-4">
          <Link to="/" className="font-mono text-2xl text-cyan-600 cursor-pointer">
            Dams 
          </Link>
          <Link to="/" className="font-mono text-2xl text-cyan-600 cursor-pointer">
            About
          </Link>
          <Link to="/" className="font-mono text-2xl text-cyan-600 cursor-pointer">
            Contact
          </Link>
        </div>
      </div>
  )
}

export default Header