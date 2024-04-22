import { useLoaderData } from 'react-router-dom';
import Nav from './Nav';
import Swal from 'sweetalert2';
export default function UpdateCoffee() {
  const coffee = useLoaderData();
  const { _id, name, image, chef, taste, supplier, category, details } = coffee;
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const chef = e.target.chef.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const image = e.target.url.value;
    const updatedCoffeeInfo = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      image,
    };
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedCoffeeInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            title: 'Success!',
            text: 'Coffee Updated successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };
  return (
    <div>
      <Nav></Nav>
      <div className='bg-[#F4F3F0] container mx-auto p-6 m-6 rounded-xl'>
        <h1 className='text-5xl my-6 text-center'>
          Update the Coffee : {name}
        </h1>
        <p className='text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          quisquam
          <br />
          quibusdam perferendis omnis repellendus non beatae commodi aut ipsam
          nobis.
        </p>
        <form className='container mx-auto ' onSubmit={handleUpdateCoffee}>
          <div className='flex justify-center items-center gap-8 my-4'>
            <label htmlFor=''>
              Name <br />
              <input
                className='input input-secondary w-80'
                type='text'
                name='name'
                defaultValue={name}
                placeholder='Coffee Name'
                required
              />
            </label>
            <label htmlFor=''>
              Chef <br />
              <input
                className='input input-secondary w-80'
                type='text'
                name='chef'
                defaultValue={chef}
                placeholder='Enter the Coffee Chef'
                required
              />
            </label>
          </div>
          <div className='flex justify-center items-center gap-8 my-4'>
            <label htmlFor=''>
              Supplier <br />
              <input
                className='input input-secondary w-80'
                type='text'
                name='supplier'
                defaultValue={supplier}
                placeholder='Enter Coffee Supplier'
                required
              />
            </label>
            <label htmlFor=''>
              Taste <br />
              <input
                className='input input-secondary w-80'
                type='text'
                name='taste'
                defaultValue={taste}
                placeholder='Enter the Coffee Taste'
                required
              />
            </label>
          </div>
          <div className='flex justify-center items-center gap-8 my-4 w-full'>
            <label htmlFor=''>
              Category <br />
              <input
                className='input input-secondary w-80'
                type='text'
                name='category'
                defaultValue={category}
                placeholder='Enter the Coffee Category'
                required
              />
            </label>
            <label htmlFor=''>
              Details <br />
              <input
                className='input input-secondary w-80'
                type='text'
                name='details'
                defaultValue={details}
                placeholder='Enter the Coffee Details'
                required
              />
            </label>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <label htmlFor='photo' className='text-left'>
              Photo
            </label>
            <input
              type='url'
              placeholder='Enter photo url'
              className='input input-secondary w-96'
              name='url'
              id='photo'
              defaultValue={image}
              required
            />
            <input
              type='submit'
              value='Add Coffee'
              className='btn btn-success text-center text-white btn-wide'
            />
          </div>
        </form>
      </div>
    </div>
  );
}
