import React, { useEffect, useState } from "react";


const Fetch_Data_Api = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await api.json();
      setApiData(data);
    };
    fetchDataFromApi();
  }, []);

  return (
    <>
      <div>
        {apiData.map((data) => (
          <div key={data.id} style={ { backgroundColor : 'cadetblue',
            color : 'black',
           borderRadius : '10px',
            border : '2px solid black',
             margin : '10px'}}>
            <h2>{data.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Fetch_Data_Api;
