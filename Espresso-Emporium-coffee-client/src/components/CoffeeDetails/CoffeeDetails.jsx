import { Link, useLoaderData } from 'react-router-dom';
import './CoffeeDetails.css';
import { FaArrowLeftLong } from 'react-icons/fa6';
import Contact from '../Contact/Contact';
export default function CoffeeDetails() {
  const coffeeDetails = useLoaderData();
  console.log(coffeeDetails);
  const { photo, name, supplier, details } = coffeeDetails;
  return (
    <div>
      <div className='mb-8'>
        <Link
          to='/'
          className='flex items-center gap-2 rancho text-3xl font-medium'
        >
          <FaArrowLeftLong /> Back to home
        </Link>
      </div>
      <div className='hero bg-base-200'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img src={photo} className='max-w-sm rounded-lg shadow-2xl' />
          <div>
            <h1 className='text-5xl font-bold'>{name}</h1>
            <p className=''>{details}</p>
            <p>
              <span className='font-bold'>{name}</span> Supplied By the
              <>&nbsp;</>{' '}
              <span className='underline font-bold'>{supplier}</span>
            </p>
          </div>
        </div>
      </div>
      <Contact></Contact>
    </div>
  );
}
