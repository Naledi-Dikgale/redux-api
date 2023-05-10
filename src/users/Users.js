import { fetchUsers } from './usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

const Users = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((store) => store.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>An Error Occurred</h1>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <p>{user.id}</p>
              <p>{user}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
