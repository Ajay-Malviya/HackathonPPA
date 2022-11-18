import React from 'react'

const FindServicePage = () => {
  return (
    <div className='my-10 w-[800px] border'>
      <div className='bg-[#D9D9D9] px-8 py-4'>
        <p>Let us help you find relevant scheme and services for you!</p>
      </div>
      <form className='space-y-4 px-8 py-4'>
        <div className='flex flex-col space-y-2'>
          <label>Date of Birth?</label>
          <input className='px-4 py-2 border rounded' type='text' name='date' value='' required />
        </div>
        <div className='flex flex-col space-y-2'>
          <label>Annual Family Income (Optional)</label>
          <input className='px-4 py-2 border rounded' type='text' name='annual income' value='' />
        </div>
        <div className='flex flex-col space-y-2'>
          <label>Any specific category of scheme and services, you are interested in? (Optional)</label>
          <input className='px-4 py-2 border rounded' type='text' name='category' value='' />
        </div>
        <div className='flex flex-col space-y-2'>
          <label>Type of disability?</label>
          <input className='px-4 py-2 border rounded' type='text' name='disability type' value='' />
        </div>
        <div className='flex flex-col space-y-2'>
          <label>Disability percentage % (Optional)</label>
          <input className='px-4 py-2 border rounded' type='text' name='disability percentage' value='' />
        </div>
        <div className='flex justify-around items-center'>
          <button className='w-28 bg-gray-500 px-4 py-2 rounded' type='submit'>
            Search
          </button>
          <button className='w-28 bg-gray-500 px-4 py-2 rounded' type='reset'>
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}

export default FindServicePage
