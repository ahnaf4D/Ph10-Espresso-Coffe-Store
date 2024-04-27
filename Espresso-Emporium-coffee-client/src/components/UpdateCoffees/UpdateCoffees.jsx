import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import './UpdateCoffees.css';
import Contact from '../Contact/Contact';
import Swal from 'sweetalert2';
import { FaArrowLeftLong } from 'react-icons/fa6';
export default function UpdateCoffees() {
  const navigate = useNavigate();
  const oldCoffeeData = useLoaderData();
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffeeData = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    fetch(`http://localhost:5000/update-coffee/${oldCoffeeData._id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedCoffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: 'Success!',
          text: 'Coffee Data Updated',
          icon: 'success',
        });
        form.reset();
        navigate('/');
      });
  };
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
      <div className='bg-[#F4F3F0] p-12 rounded-xl'>
        <h1 className='my-2 text-[#331A15] rancho text-4xl font-bold drop-shadow-4xl text-center'>
          Update {oldCoffeeData.name}
        </h1>
        <p className='text-xl raleway text-[#1B1A1A] mb-8 text-center'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form className='space-y-4' onSubmit={handleUpdateCoffee}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <label>
              Name <br />
              <input
                type='text'
                name='name'
                className='input input-primary block w-full'
                placeholder='Enter Coffee Name'
                required
                defaultValue={oldCoffeeData.name}
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
                defaultValue={oldCoffeeData.chef}
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
                defaultValue={oldCoffeeData.supplier}
              />
            </label>
            <label>
              Taste <br />
              <input
                type='text'
                name='taste'
                className='input input-primary block w-full'
                placeholder='Enter Coffee Taste'
                defaultValue={oldCoffeeData.taste}
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
                defaultValue={oldCoffeeData.category}
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
                defaultValue={oldCoffeeData.details}
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
                defaultValue={oldCoffeeData.photo}
              />
            </label>
          </div>
          <div className='flex justify-center'>
            <input
              type='submit'
              value='Update Coffee Data'
              className='bg-[#E3B577] text-[#242222] px-6 py-2 text-2xl rounded btn rancho hover:bg-yellow-500 transition-colors duration-300'
            />
          </div>
        </form>
      </div>
      <Contact></Contact>
    </div>
  );
}
