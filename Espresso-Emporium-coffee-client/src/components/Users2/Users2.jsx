import { useQuery } from '@tanstack/react-query';
import { MdDelete } from 'react-icons/md';

const Users2 = () => {
  //   const [users  setUsers] = useState([]);
  //   useEffect(() => {
  //     fetch(`https://coffee-store-server-ph.vercel.app/users`)
  //      .then((res) => res.json())
  //      .then((data) => {
  //         setUsers(data);
  //       });
  //   } , [])
  const {
    isPending,
    isError,
    data: users,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users`);
      return res.json();
    },
  });
  const handleDeleteUser = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if (data.deletedCount > 0) {
        //   Swal.fire('Success!', 'User Deleted', 'success');
        //   const remainingUsers = users.filter((user) => user._id !== id);
        // //   setUsers(remainingUsers);
        // }
      });
  };
  if (isPending) {
    return <span className='loading loading-bars loading-lg'></span>;
  }
  if (isError) {
    return <span className='error'>Something went wrong</span>;
  }
  return (
    <div>
      {/* <h2 className='text-4xl font-bold text-center my-6'>
        Users : {users.length}
      </h2> */}
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
            {users?.map((user) => (
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
};

export default Users2;
