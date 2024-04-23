import { FaArrowLeftLong } from 'react-icons/fa6';
import './AddCoffees.css';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
import Swal from 'sweetalert2';

export default function AddCoffees() {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const addedCoffeeData = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    fetch('http://localhost:5000/add-coffee', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(addedCoffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: 'Success!',
          text: 'Coffee Added',
          icon: 'success',
        });
        form.reset();
      });
  };
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-8'>
        <Link
          to='/'
          className='flex items-center gap-2 rancho text-3xl font-medium'
        >
          <FaArrowLeftLong /> Back to home
        </Link>
      </div>
      <div className='bg-[#F4F3F0] p-12 rounded-xl'>
        <h1 className='my-2 text-[#331A15] rancho text-4xl font-bold drop-shadow-4xl text-center'>
          Add New Coffee
        </h1>
        <p className='text-xl raleway text-[#1B1A1A] mb-8 text-center'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form className='space-y-4' onSubmit={handleAddCoffee}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <label>
              Name <br />
              <input
                type='text'
                name='name'
                className='input input-primary block w-full'
                placeholder='Enter Coffee Name'
                required
              />
            </label>
            <label>
              Chef <br />
              <input
                type='text'
                name='chef'
                className='input input-primary block w-full'
                placeholder='Enter Coffee Chef'
                required
              />
            </label>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <label>
              Supplier <br />
              <input
                type='text'
                name='supplier'
                className='input input-primary block w-full'
                placeholder='Enter Coffee Supplier'
                required
              />
            </label>
            <label>
              Taste <br />
              <input
                type='text'
                name='taste'
                className='input input-primary block w-full'
                placeholder='Enter Coffee Taste'
                required
              />
            </label>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <label>
              Category <br />
              <input
                type='text'
                name='category'
                className='input input-primary block w-full'
                placeholder='Enter Coffee Category'
                required
              />
            </label>
            <label>
              Details <br />
              <input
                type='text'
                name='details'
                className='input input-primary block w-full'
                placeholder='Enter Coffee Details'
                required
              />
            </label>
          </div>
          <div>
            <label>
              Photo URL <br />
              <input
                type='url'
                name='photo'
                className='input input-primary block w-full'
                placeholder='Enter Photo URL'
                required
              />
            </label>
          </div>
          <div className='flex justify-center'>
            <input
              type='submit'
              value='Add Coffee'
              className='bg-[#E3B577] text-[#242222] px-6 py-2 text-2xl rounded btn rancho hover:bg-yellow-500 transition-colors duration-300'
            />
          </div>
        </form>
      </div>

      <Contact />
    </div>
  );
}
