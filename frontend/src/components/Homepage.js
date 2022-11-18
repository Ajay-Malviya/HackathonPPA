import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='flex flex-col items-center text-center max-w-6xl'>
      <h1 className='text-5xl font-semibold'>Child Rights</h1>
      <p className='text-xl font-medium my-16'>
        The Delhi Commission for Protection of Child Rights has attempted to create extensive repository of all existing entitlements and relevant information which could be of benefit to Persons with
        Disabilities & their caregivers in Delhi. This website aims to address the information asymmetry by creating awareness about the rights of Persons with Disabilities, especially Children with
        Special Needs or Children who have parents with disabilities & assist them in understanding the means of leveraging rightful entitlements for their own benefit.
      </p>
      <Link className='text-base font-medium' to='/'>
        Click to know your rights & entitlement
      </Link>
      <button className='bg-black text-white text-xl font-semibold w-[300px] h-16 mt-8 rounded'>Get Started</button>
    </div>
  )
}

export default Homepage
