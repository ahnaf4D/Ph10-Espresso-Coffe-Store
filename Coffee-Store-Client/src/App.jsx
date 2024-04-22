//eslint-disable-next-line
import { Link, useLoaderData } from 'react-router-dom';
import './App.css';
import CoffeeCard from './components/CoffeeCard';
import Nav from './components/Nav';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

function App() {
  const coffeesData = useLoaderData();
  console.log(coffeesData);
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    setCoffees(coffeesData);
  }, [coffeesData]);
  const handleDelete = (id) => {
    console.log(id);
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
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your Coffee has been deleted.',
                icon: 'success',
              });
              const remainingCoffees = coffees.filter((cof) => cof._id !== id);
              console.log(remainingCoffees);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };
  return (
    <>
      <Nav></Nav>
      <h1 className='text-gray-500 text-3xl text-center'>
        Coffee : {coffeesData.length}
      </h1>
      <div className='grid grid-cols-1 gap-6 my-12 md:grid-cols-2'>
        {coffeesData.map((coffee) => (
          <CoffeeCard
            coffee={coffee}
            key={coffee._id}
            handleDelete={handleDelete}
          ></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
