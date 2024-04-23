import Logo from '../../assets/more/logo1.png';
import './Navbar.css';
export default function Navbar() {
  return (
    <nav className='rancho flex items-center  justify-center bg-[#382828]'>
      <img src={Logo} alt='Logo' className='w-16' />
      <span className='text-3xl font-medium text-white'>Espresso Emporium</span>
    </nav>
  );
}
