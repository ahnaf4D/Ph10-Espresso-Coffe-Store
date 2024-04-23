import { FaLocationDot } from 'react-icons/fa6';
import Logo from '../../assets/more/logo1.png';
import './Contact.css';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <div className='flex justify-center my-14 gap-24 flex-col items-center md:flex-row'>
        <div className='text-center'>
          <img src={Logo} alt='' className='w-16 mx-auto mb-4' />
          <h1 className='text-[#331A15] rancho text-4xl font-bold drop-shadow-4xl mb-2'>
            Espresso Emporium
          </h1>
          <p className='text-xl raleway text-[#1B1A1A] max-w-md mx-auto'>
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className='flex justify-center mt-4'>
            <FaFacebook className='text-3xl mx-2' />
            <FaTwitter className='text-3xl mx-2' />
            <FaInstagram className='text-3xl mx-2' />
            <FaLinkedin className='text-3xl mx-2' />
          </div>
          <h1 className='text-[#331A15] rancho text-4xl font-bold drop-shadow-4xl mt-8'>
            Get in Touch
          </h1>
          <div className='mx-auto'>
            <div className='flex items-center justify-center gap-2 text-xl raleway text-[#1B1A1A] mt-4'>
              <FaPhoneAlt />
              <span>+88 01533 333 333</span>
            </div>
            <div className='flex items-center justify-center gap-2 text-xl raleway text-[#1B1A1A]'>
              <FaEnvelope />
              <span>coffee@emporium.com</span>
            </div>
            <div className='flex items-center justify-center gap-2 text-xl raleway text-[#1B1A1A]'>
              <FaLocationDot />
              <span>72, Wall street, King Road, Dhaka</span>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <h1 className='text-[#331A15] rancho text-4xl font-bold drop-shadow-4xl mb-4'>
            Contact With Us
          </h1>
          <form className='flex flex-col gap-6'>
            <input
              type='text'
              placeholder='Name'
              className='w-96 p-4 border rounded'
            />
            <input
              type='email'
              placeholder='Email'
              className='w-96 p-4 border rounded'
            />
            <textarea
              name='message'
              placeholder='Message'
              rows='4'
              className='w-96 p-4 border rounded'
            ></textarea>
            <button className='bg-[#E3B577] text-[#242222] px-4 py-2 rounded btn rancho text-3xl'>
              Submit
            </button>
          </form>
        </div>
      </div>
      <footer className='footer footer-center p-4 bg-[#1B0B0B] text-white'>
        <aside>
          <p className='raleway'>
            Copyright © 2024 - All right reserved by Espresso Espresso
          </p>
        </aside>
      </footer>
    </>
  );
}
