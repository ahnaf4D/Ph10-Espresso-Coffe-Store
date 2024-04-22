//eslint-disable-next-line
import { useLoaderData } from 'react-router-dom';
import './App.css';
import CoffeeCard from './components/CoffeeCard';

function App() {
  const coffeesData = useLoaderData();
  console.log(coffeesData);
  return (
    <>
      <h1 className='text-gray-500 text-3xl text-center'>
        Coffee : {coffeesData.length}
      </h1>
      <div className='grid grid-cols-1 gap-6 my-12 md:grid-cols-2'>
        {coffeesData.map((coffee) => (
          <CoffeeCard coffee={coffee} key={coffee._id}></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
