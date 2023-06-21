import "./App.css";
import Signup from "./componments/Signup";

import React, { useEffect, useState } from "react";

import {getDocs, collection, doc} from 'firebase/firestone';
import { db } from '../firebase-config';

const [getTaskList, setTaskList] = useState([]);
  const jobCollectionRef = collection(db, "tasks");

  useEffect(()=>{
    const getTasks = async () => {
      const data = await getDocs(jobCollectionRef);
      setTaskList(data.docs.map((docs) => ({...doc.data(), id: doc.id})));
    }
    getTasks();
  },[])

function App() {
  return (
    <div className="App">
      <Signup />
    </div>
  );
}

export default App;