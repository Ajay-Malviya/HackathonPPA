import React, { useState } from 'react'

const Accordian = ({ title, body, level, children }) => {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div className={`${level === 3 && 'pl-11 my-6 bg-[#F1F1F1]'}`}>
      <div className={`${level === 1 && 'border-b-2 mb-6'} flex justify-between py-2`}>
        <h3 className={`${level === 1 ? 'text-2xl' : level === 2 ? 'text-[22px]' : 'text-xl'} font-medium`}>{title}</h3>
        <button className='px-4 mr-2 font-bold text-lg' type='button' onClick={handleClick}>
          {`${!show ? '+' : '-'}`}
        </button>
      </div>
      <div className={`${!show && 'hidden'} transition-all`}>
        <p className={`${level === 2 ? 'text-xl mb-9' : 'text-lg'}`}>{body}</p>
        {children}
      </div>
    </div>
  )
}

export default Accordian
