import PropTypes from 'prop-types';
import { MdRemoveRedEye } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
export default function CoffeeCard({ coffee }) {
  console.log(coffee);
  const { name, image, chef, taste, supplier } = coffee;
  return (
    <div>
      <div className='card card-side bg-base-100 shadow-xl py-2 my-4'>
        <figure>
          <img src={image} alt='Movie' />
        </figure>
        <div className='flex items-center justify-between px-2 gap-12 w-full'>
          <div>
            <h2 className='card-title'>{name}</h2>
            <p>Chef : {chef}</p>
            <p>Taste : {taste}</p>
            <p>Supplier : {supplier}</p>
          </div>
          <div className='join join-vertical space-y-4 '>
            <button className='btn join-item'>
              <MdRemoveRedEye className='text-2xl' />
            </button>
            <button className='btn join-item'>
              <MdModeEdit className='text-2xl' />
            </button>
            <button className='btn join-item'>
              <MdDelete className='text-2xl' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
CoffeeCard.propTypes = {
  coffee: PropTypes.object,
};
