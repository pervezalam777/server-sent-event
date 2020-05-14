import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [nests, setNests] = useState([]);
  
  useEffect(()=> {
      const eventSource = new EventSource('http://localhost:5000/events');
      eventSource.addEventListener("message", (event) => {
        const parseData = JSON.parse(event.data);
        setNests((nests) => nests.concat(parseData));
      });

      eventSource.addEventListener("update", (event) => {
        console.log("on Update");
        console.log(event.data);
        setNests((nests) => {
          let updatedNest = JSON.parse(event.data);
          let updateNests = [...nests];
          let index = updateNests.findIndex(nest => nest.id == updatedNest.id);
          updateNests[index] = updatedNest;
          return updateNests;
        })
      })

      eventSource.addEventListener("notice", (event) => {
        console.log("on notice..")
        console.log(event.data);
      })
  }, [])
  return (
    <table className="stats-table">
      <thead>
        <tr>
          <th>Momma</th>
          <th>Eggs</th>
          <th>Temperature</th>
        </tr>
      </thead>
      <tbody>
        {
          nests && nests.length > 0 && nests.map((nest, i) => (
            <tr key={i}>
              <td>{nest.momma}</td>
              <td>{nest.eggs}</td>
              <td>{nest.temperature}</td>
            </tr>
          )) 
        }
      </tbody>
   </table> 
  );
}

export default App;
