import React from 'react';

const UserDetails = ({ user }) => {
  if (!user) {
    return <div>Select a user to see details</div>;
  }

  return (
    <div>
      <h2>{user.name.first} {user.name.last}</h2>
      <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Location: {user.location.city}, {user.location.country}</p>
    </div>
  );
};

export default UserDetails;
