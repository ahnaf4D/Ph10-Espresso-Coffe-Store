import Banner from '../../assets/more/3.png';
import './Hero.css';
export default function Hero() {
  return (
    <div
      className='flex justify-between items-center h-[550px] bg-no-repeat bg-cover flex-col md:flex-row'
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div></div>
      <article className='navbar-start '>
        <h1 className='rancho text-5xl text-white'>
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className='raleway text-xl font-regular text-white my-4'>
          It<>&rsquo;</>s coffee time - Sip & Savor - Relaxation in every sip!
          Get the nostalgia back!! Your companion of every moment!!! Enjoy the
          beautiful moments and make them memorable.
        </p>
        <button className='bg-[#E3B577] text-[#242222] px-4 text-2xl rounded btn rancho'>
          Learn More
        </button>
      </article>
    </div>
  );
}
