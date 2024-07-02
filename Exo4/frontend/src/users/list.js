import React from 'react';

const UserList = ({ users, onUserClick }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.login.uuid} onClick={() => onUserClick(user)}>
          {user.name.first} {user.name.last}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
