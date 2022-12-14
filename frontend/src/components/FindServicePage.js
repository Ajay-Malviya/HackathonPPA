import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FindServicePage = () => {
  const [formData, setFormData] = useState({
    date: '',
    income: '',
    catagory: '0',
    dtype: '',
    dpercentage: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search-results?catagory=${formData.catagory}`);
  };

  return (
    <div className='container my-10 w-[800px] border rounded'>
      <div className='border-b-2 border-t-8 border-t-teal-800 px-8 py-4 rounded-t'>
        <h3 className='font-semibold text-xl'>
          Let us help you find relevant scheme and services for you!
        </h3>
      </div>
      <form className='space-y-4 px-8 py-4' onSubmit={handleSubmit}>
        <div className='flex flex-col space-y-2'>
          <label className='font-medium'>Date of Birth?</label>
          <input
            className='px-4 py-2 border rounded'
            type='date'
            name='date'
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className='flex flex-col space-y-2'>
          <label className='font-medium'>Annual Family Income (Optional)</label>
          <input
            className='px-4 py-2 border rounded'
            type='number'
            name='income'
            value={formData.income}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col space-y-2'>
          <label className='font-medium'>
            Any specific category of scheme and services, you are interested in?
            (Optional)
          </label>
          <select
            name='catagory'
            className='px-4 py-2 border rounded'
            value={formData.catagory}
            onChange={handleChange}
          >
            <option value='0'>All</option>
            <option value='1'>Educational</option>
            <option value='2'>Health</option>
            <option value='3'>Financial</option>
            <option value='4'>Travel</option>
            <option value='5'>Skill & employment</option>
          </select>
        </div>
        <div className='relative'>
          {' '}
          {/* container */}
          <div className='flex flex-col space-y-2'>
            {' '}
            {/* label - input */}
            <label className='font-medium'>Type of disability?</label>
            <select
              name='dtype'
              className='px-4 py-2 border rounded'
              value={formData.dtype}
              onChange={handleChange}
            >
              <option value=''>Select a disability</option>
              <option value='Physical disability'>Physical disability</option>
              <option value='Intellectual disability'>
                Intellectual disability
              </option>
              <option value='Mental disability'>Mental disability</option>
              <option value='Neurological'>Neurological</option>
              <option value='Blood disorder'>Blood disorder</option>
              <option value='Multiple disability'>Multiple disability</option>
            </select>
          </div>
        </div>
        <div className='flex flex-col space-y-2'>
          <label className='font-medium'>
            Disability percentage % (Optional)
          </label>
          <input
            className='px-4 py-2 border rounded'
            type='text'
            name='dpercentage'
            value={formData.dpercentage}
            onChange={handleChange}
          />
        </div>
        <div className='flex justify-around items-center'>
          <button
            className='w-28 border border-teal-800  px-4 py-2 rounded'
            type='reset'
          >
            Reset
          </button>
          <button
            className='w-28 bg-teal-800 text-white px-4 py-2 rounded'
            type='submit'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default FindServicePage;
