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
// imported from tansStack Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Users2 from './components/Users2/Users2.jsx';
const queryClient = new QueryClient();
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
  {
    path: '/users',
    element: <Users></Users>,
    loader: () => fetch(`http://localhost:5000/users`),
  },
  {
    path: '/users2',
    element: <Users2></Users2>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
