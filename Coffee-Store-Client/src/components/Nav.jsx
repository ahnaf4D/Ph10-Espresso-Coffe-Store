import { Link } from 'react-router-dom';
export default function Nav() {
  return (
    <div>
      <Link to='/' className='text-2xl underline mr-6'>
        Home
      </Link>
      <Link to='/addCoffee' className='text-2xl underline'>
        AddCoffee
      </Link>
    </div>
  );
}
