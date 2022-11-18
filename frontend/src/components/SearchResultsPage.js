import React from 'react'
import Accordian from './Accordian'

const SearchResultsPage = () => {
  const title = {
    name: 'subheading',
    size: 'text-2xl',
  }

  return (
    <div className='w-full place-self-start space-y-4 py-4'>
      <div className='px-4 py-2 w-full bg-[#D9D9D9] text-base font-medium text-black rounded-t-md'>Search Results</div>
      <Accordian title={'Education scheme & Entitilement'} level={1}>
        <Accordian title={'Sub heading'} body={'3% Reservation for CWSN with benchmark disability in private unaided school'} level={2}>
          <Accordian title={'level 3 heading'} body={'lorem rmeormeoam ddkfldahfah aa glkdh'} level={3} />
          <Accordian title={'level 3 heading'} body={'lorem rmeormeoam ddkfldahfah aa glkdh'} level={3} />
          <Accordian title={'level 3 heading'} body={'lorem rmeormeoam ddkfldahfah aa glkdh'} level={3} />
          <Accordian title={'level 3 heading'} body={'lorem rmeormeoam ddkfldahfah aa glkdh'} level={3} />
          <Accordian title={'level 3 heading'} body={'lorem rmeormeoam ddkfldahfah aa glkdh'} level={3} />
        </Accordian>
        <Accordian title={'Sub heading'} body={'3% Reservation for CWSN with benchmark disability in private unaided school'} level={2}>
          <Accordian title={'level 3 heading'} body={'lorem rmeormeoam ddkfldahfah aa glkdh'} level={3} />
          <Accordian title={'level 3 heading'} body={'lorem rmeormeoam ddkfldahfah aa glkdh'} level={3} />
          <Accordian title={'level 3 heading'} body={'lorem rmeormeoam ddkfldahfah aa glkdh'} level={3} />
          <Accordian title={'level 3 heading'} body={'lorem rmeormeoam ddkfldahfah aa glkdh'} level={3} />
          <Accordian title={'level 3 heading'} body={'lorem rmeormeoam ddkfldahfah aa glkdh'} level={3} />
        </Accordian>
      </Accordian>
      <Accordian title={'Education scheme & Entitilement'} body={'3% Reservation for CWSN with benchmark disability in private unaided school'} level={1} />
    </div>
  )
}

export default SearchResultsPage
