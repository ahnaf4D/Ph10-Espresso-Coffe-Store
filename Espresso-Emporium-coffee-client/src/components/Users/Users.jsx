import axios from 'axios';
import { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Users() {
  const loadUsersData = useLoaderData();
  const [users, setUsers] = useState(loadUsersData);
  // useEffect(() => {
  //   fetch(`/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);
  // useEffect(() => {
  //   axios.get('/').then((data) => {
  //     console.log(data.data);
  //   });
  // }, []);
  const handleDeleteUser = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire('Success!', 'User Deleted', 'success');
          const remainingUsers = users.filter((user) => user._id !== id);
          setUsers(remainingUsers);
        }
      });
  };
  return (
    <div>
      <h2 className='text-4xl font-bold text-center my-6'>
        Users : {users.length}
      </h2>
      <div className='overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>Email</th>
              <th>Creation</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.email}</td>
                <td>{user.creationTime}</td>
                <td>
                  <button
                    className='btn btn-ghost text-2xl'
                    onClick={() => handleDeleteUser(user._id)}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
