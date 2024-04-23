import { LuCoffee } from 'react-icons/lu';
import Image from '../../assets/more/1.png';
import './Coffees.css';
import Coffee from '../Coffee/Coffee';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export default function Coffees() {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch(`https://coffee-store-server-ph.vercel.app/coffees`)
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);
  const handleDeleteCoffee = (id) => {
    // console.log(id);
    // fetch(`https://coffee-store-server-ph.vercel.app/coffees/${id}`, {
    //   method: 'DELETE',
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-ph.vercel.app/coffees/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
            const newCoffees = coffees.filter((coffee) => coffee._id !== id);
            setCoffees(newCoffees);
          });
      }
    });
  };
  return (
    <>
      <div
        style={{ backgroundImage: `url(${Image})` }}
        className='bg-no-repeat bg-cover h-[800px]'
      >
        <article className='text-center py-6'>
          <p className='text-xl raleway text-[#1B1A1A]'>--- Sip & Savor ---</p>
          <h1 className='my-2 text-[#331A15] rancho text-4xl font-bold drop-shadow-4xl'>
            Our Popular Products
          </h1>
          <Link to='/add-coffee'>
            <button className='bg-[#E3B577] text-[#242222] px-4 text-2xl rounded btn rancho py-2'>
              Add Coffee <LuCoffee />
            </button>
          </Link>
        </article>
        <div className='grid mb-24 gap-4 container mx-auto grid-cols-1 lg:grid-cols-2 '>
          {coffees.map((coffee) => (
            <Coffee
              key={coffee._id}
              handleDeleteCoffee={handleDeleteCoffee}
              coffee={coffee}
            />
          ))}
        </div>
      </div>
    </>
  );
}
