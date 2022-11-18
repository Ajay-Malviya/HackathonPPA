import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='flex items-center bg-[#D9D9D9] w-100 h-14'>
        <div className='container flex justify-end'>
          <span className='px-2 py-1'>Screen Reader Access</span>
          <span className='px-2 py-1'>tT A-A-A</span>
          <span className='px-2 py-1'>English</span>
        </div>
      </div>

      <div className='flex items-center w-100 h-20'>
        <div className='container flex justify-between'>
          <button className='w-32 px-4 py-2 bg-[#474646] rounded text-white'>DCPCR</button>
          <button className='w-32 px-4 py-2 bg-[#474646] rounded text-white'>Child Rights</button>
        </div>
      </div>

      <nav className='flex items-center bg-[#D9D9D9] text-gray-900 w-100 h-14'>
        <div className='container'>
          <ul className='flex justify-between items-center'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/find-service'>Find the service</Link>
            </li>
            <li>
              <Link to='/disability-info'>Disability info</Link>
            </li>
            <li>
              <Link to='essential-docs'>Essential Docs</Link>
            </li>
            <li>
              <Link to='resources'>Resources</Link>
            </li>
            <li>
              <input className='h-6 w-72 px-2 py-4 rounded-md text-slate-900 outline-none placeholder:text-slate-900' type='text' placeholder='Search for schemes/services' />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
