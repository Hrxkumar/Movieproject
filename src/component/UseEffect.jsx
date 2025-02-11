
import React, { useState, useEffect } from 'react';

const UseEffect = () => {

    const [data, setData] = useState(null);
    // State to handle loading state
    const [loading, setLoading] = useState(true);
    // State to handle errors
    const [error, setError] = useState(null);
  
   
    useEffect(() => {
      // Define the API URL
      const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  
      // Fetch data from the API
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false); 
        })
        .catch((error) => {
          setError(error.message); 
          setLoading(false);
        });
    }, []); 
  
    
    if (loading) {
      return <div>Loading...</div>;
    }
  
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data &&
          data.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default UseEffect
