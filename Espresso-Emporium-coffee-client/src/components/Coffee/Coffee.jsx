import { IoEye } from 'react-icons/io5';
import { HiOutlinePencil } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
export default function Coffee({ coffee, handleDeleteCoffee }) {
  const { photo, name, chef, _id } = coffee;
  return (
    <div>
      <div className='card card-side bg-[#F5F4F1] p-2 border-2 border-gray-200'>
        <figure>
          <img src={photo} className='size-60' alt='Movie' />
        </figure>
        <div className='flex items-center'>
          <div className='card-body'>
            <h2 className='card-title'>{name}</h2>
            <p>Chef : {chef}</p>
            <p>Price : ${36}</p>
          </div>
          <div className='join join-vertical '>
            <Link to={`/coffees/${_id}`}>
              <button className='btn join-item bg-[#D2B48C]'>
                <IoEye className='text-white text-2xl' />
              </button>
            </Link>
            <Link to={`/update-coffee/${_id}`}>
              <button className='btn join-item bg-[#3C393B]'>
                <HiOutlinePencil className='text-white text-2xl' />
              </button>
            </Link>
            <button
              className='btn join-item bg-[#EA4744]'
              onClick={() => handleDeleteCoffee(_id)}
            >
              <MdDelete className='text-white text-2xl' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
