import React, { useEffect, useState } from "react";

function Users() {
  // Example user data
  // const users = [
  //   { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin" },
  //   { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "Editor" },
  //   { id: 3, name: "Mike Johnson", email: "mike.johnson@example.com", role: "Viewer" },
  // ];
  const [data , setData] = useState([])
  const [mode , setMode] = useState('online')
  useEffect(()=> {
    let url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url).then((response)=> {
      response.json().then((result)=> {
        console.warn(result)
        setData(result)
        localStorage.setItem('users',JSON.stringify(result))
      })
    }).catch(err => {
      setMode('offline')
      let collection = localStorage.getItem('users');
      setData(JSON.parse(collection))
    })
  },[])

  // CSS styles
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    textAlign: "left",
  };

  const headerStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px",
  };

  const cellStyle = {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  };

  const rowHoverStyle = {
    backgroundColor: "#f2f2f2",
  };

  const containerStyle = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div style={containerStyle}>
     
      <div>
        {
          mode==='offline'?
          <div>you are in offline mode</div>:null
        }
      </div>

      <h2 style={{ color: "#555", marginTop: "20px" }}>User Information</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>ID</th>
            <th style={headerStyle}>Name</th>
            <th style={headerStyle}>Email</th>
            <th style={headerStyle}>Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr
              key={user.id}
              style={index % 2 === 0 ? rowHoverStyle : undefined}
            >
              <td style={cellStyle}>{user.id}</td>
              <td style={cellStyle}>{user.name}</td>
              <td style={cellStyle}>{user.email}</td>
              <td style={cellStyle}>
                {user.address?.street}, {user.address?.city}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
