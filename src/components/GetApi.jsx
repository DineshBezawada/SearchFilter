import React from "react";
import * as axios from 'axios';
import { useState, useEffect } from "react";

const GetApi = () => {
  const [data, setData] = useState([]);
  const [search,setSearch]=useState('')
  useEffect(async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.data);
    setData(response.data);
  }, []);

  const handleChange =(e)=>{
    setSearch(e.target.value);
  }

  return (
    <div>
      <div className="container mt-3 text-center">
        <input type="text" onChange={(e)=>handleChange(e)} placeholder='Search here....'/>
        <div className="row">
          {data.filter((value)=>(value.title.toLowerCase().includes(search.toLowerCase()))).map((data1, index) => {
            return (
              <>
                <div className="col-md-4 col-sm-6">
                  <div
                    key={data1.id}
                    style={{
                      margin: "15px 5px",
                      background: "#E7E7E7",
                      textAlign: "justify",
                      padding: "15px",
                      boxShadow: "0 0 4px rgb(0 0 0 / 0.5)",
                      borderRadius: "15px",
                    }}
                  >
                    <h1 style={{ textAlign: "center" }}>{data1.userId}</h1>
                    <h6 style={{textAlign:'center',color:'green'}}>{data1.title}</h6>
                    <p>{data1.body}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GetApi;
