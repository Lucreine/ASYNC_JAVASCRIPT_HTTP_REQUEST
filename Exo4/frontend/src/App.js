import './App.css';
import SearchBar from './users/recherche';
import UserList from './users/list';
import UserDetails from './users/details';
import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:4000/users');
      const data = await response.json();
      // console.log('Data from API:', data); // Vérifie les données dans la console
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App container">
      <div className="user-app">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
        <h1>Liste des utilisateurs</h1>
        <UserList users={filteredUsers} onUserClick={setSelectedUser} /> 
        <UserDetails user={selectedUser}/>  
      </div>
    </div>
  );
}

export default App;
