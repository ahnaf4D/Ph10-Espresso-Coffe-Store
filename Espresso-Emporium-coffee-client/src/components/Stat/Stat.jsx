import FirstIcon from '../../assets/icons/1.png';
import SecondIcon from '../../assets/icons/2.png';
import ThirdIcon from '../../assets/icons/3.png';
import FourthIcon from '../../assets/icons/4.png';
import './Stat.css';
export default function Stat() {
  return (
    <div className='flex justify-center py-6 bg-[#ECEAE3] gap-8'>
      <div>
        <img src={FirstIcon} alt='' />
        <h2 className='text-2xl rancho'>Awesome Aroma</h2>
        <p className='raleway font-normal text-[#1B1A1A] w-60'>
          You will definitely be a fan of the design & aroma of your coffee
        </p>
      </div>
      <div>
        <img src={SecondIcon} alt='' />
        <h2 className='text-2xl rancho'>High Quality</h2>
        <p className='raleway font-normal text-[#1B1A1A] w-60'>
          We served the coffee to you maintaining the best quality
        </p>
      </div>
      <div>
        <img src={ThirdIcon} alt='' />
        <h2 className='text-2xl rancho'>Pure Grades</h2>
        <p className='raleway font-normal text-[#1B1A1A] w-60'>
          The coffee is made of the green coffee beans which you will love
        </p>
      </div>
      <div>
        <img src={FourthIcon} alt='' />
        <h2 className='text-2xl rancho'>Proper Roasting</h2>
        <p className='raleway font-normal text-[#1B1A1A] w-60'>
          Your coffee is brewed by first roasting the green coffee beans{' '}
        </p>
      </div>
    </div>
  );
}
