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
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';
import Users from './components/Users/Users.jsx';
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
    loader: ({ params }) =>
      fetch(`https://coffee-store-server-ph.vercel.app/coffees/${params.id}`),
  },
  {
    path: '/update-coffee/:id',
    element: <UpdateCoffees></UpdateCoffees>,
    loader: ({ params }) =>
      fetch(`https://coffee-store-server-ph.vercel.app/coffees/${params.id}`),
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/register',
    element: <Signup></Signup>,
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: () => fetch(`https://coffee-store-server-ph.vercel.app/users`),
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
