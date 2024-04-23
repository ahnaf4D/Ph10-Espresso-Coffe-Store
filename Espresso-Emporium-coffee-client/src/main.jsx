import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddCoffees from './components/AddCoffees/AddCoffees.jsx';
import CoffeeDetails from './components/CoffeeDetails/CoffeeDetails.jsx';
import UpdateCoffees from './components/UpdateCoffees/UpdateCoffees.jsx';
import Login from './components/Login/Login.jsx';
import Signup from './components/Signup/Signup.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
  },
  {
    path: '/add-coffee',
    element: <AddCoffees></AddCoffees>,
  },
  {
    path: '/coffees/:id',
    element: <CoffeeDetails></CoffeeDetails>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
  },
  {
    path: '/update-coffee/:id',
    element: <UpdateCoffees></UpdateCoffees>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/register',
    element: <Signup></Signup>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);