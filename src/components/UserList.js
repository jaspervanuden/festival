import React, { useState, useEffect } from "react";
import firebase from 'firebase';
import "firebase/database";
import firebaseConfig from "./firebaseConfig";  

// Initialiseer Firebase met de configuratiegegevens
firebase.initializeApp(firebaseConfig);

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Haal gebruikersgegevens op van Firebase-database
    const fetchUsers = async () => {
      const dbRef = firebase.database().ref("users");
      const snapshot = await dbRef.once("value");
      const userData = snapshot.val();
      if (userData) {
        const userList = Object.values(userData);
        setUsers(userList);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Gebruikerslijst</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
