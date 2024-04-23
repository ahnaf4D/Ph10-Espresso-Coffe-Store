import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { useLoaderData } from 'react-router-dom';

export default function Users() {
  const loadUsersData = useLoaderData();
  const [users, setUsers] = useState(loadUsersData);
  return (
    <div>
      <h2 className='text-4xl font-bold text-center my-6'>
        Users : {loadUsersData.length}
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
            {loadUsersData.map((user) => (
              <tr key={user._id}>
                <td>{user.email}</td>
                <td>{user.creationTime}</td>
                <td>
                  <button className='btn btn-ghost text-2xl'>
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
