import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import 'firebase/auth';

const UserFilter = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Fetch users from Firebase Authentication once when component mounts
    const fetchUsers = async () => {
      const userRecords = await firebase.auth().listUsers();
      const fetchedUsers = userRecords.users.map((userRecord) => userRecord.toJSON());
      setUsers(fetchedUsers);
    };

    fetchUsers();
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.displayName.toLowerCase().includes(filter.toLowerCase())
  );

  return (
<div>
<input type="text" value={filter} onChange={handleFilterChange} />
<ul>
        {filteredUsers.map((user) => (
<li key={user.uid}>{user.displayName}</li>
        ))}
</ul>
</div>
  );
};

export default UserFilter;