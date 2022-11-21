import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className='h-4/5 flex bg-cover bg-[url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)]'>
      <div className='container flex flex-col items-center justify-center text-center max-w-6xl text-white'>
        <h1 className='text-5xl font-semibold'>Child Rights</h1>
        <p className='text-xl font-medium my-16'>
          The Delhi Commission for Protection of Child Rights has attempted to
          create extensive repository of all existing entitlements and relevant
          information which could be of benefit to Persons with Disabilities &
          their caregivers in Delhi. This website aims to address the
          information asymmetry by creating awareness about the rights of
          Persons with Disabilities, especially Children with Special Needs or
          Children who have parents with disabilities & assist them in
          understanding the means of leveraging rightful entitlements for their
          own benefit.
        </p>
        <Link className='text-base font-medium' to='/'>
          Click to know your rights & entitlement
        </Link>
        <button className='bg-black text-white text-xl font-semibold w-[300px] h-16 mt-8 rounded'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Homepage;
