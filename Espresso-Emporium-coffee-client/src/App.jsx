import './App.css';
import Coffees from './components/Coffees/Coffees';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Showcase from './components/Showcase/Showcase';
import Stat from './components/Stat/Stat';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Stat></Stat>
      <Coffees></Coffees>
      <Showcase></Showcase>
      <Contact></Contact>
    </>
  );
}

export default App;
