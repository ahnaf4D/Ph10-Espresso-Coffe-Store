import CupOne from '../../assets/cups/Rectangle 9.png';
import CupTwo from '../../assets/cups/Rectangle 10.png';
import CupThree from '../../assets/cups/Rectangle 11.png';
import CupFour from '../../assets/cups/Rectangle 12.png';
import CupFive from '../../assets/cups/Rectangle 13.png';
import CupSix from '../../assets/cups/Rectangle 14.png';
import CupSeven from '../../assets/cups/Rectangle 15.png';
import CupEight from '../../assets/cups/Rectangle 16.png';
import './Showcase.css';
export default function Showcase() {
  return (
    <div>
      <article className='text-center'>
        <p className='text-xl raleway text-[#1B1A1A]'>Follow us Now</p>
        <h1 className='my-2 text-[#331A15] rancho text-4xl font-bold drop-shadow-4xl'>
          Follow on Instagram
        </h1>
      </article>
      <div className='grid  gap-6 w-full container mx-auto grid-cols-1  md:grid-cols-3 lg:grid-cols-4'>
        <img src={CupOne} alt='' />
        <img src={CupTwo} alt='' />
        <img src={CupThree} alt='' />
        <img src={CupFour} alt='' />
        <img src={CupFive} alt='' />
        <img src={CupSix} alt='' />
        <img src={CupSeven} alt='' />
        <img src={CupEight} alt='' />
      </div>
    </div>
  );
}
