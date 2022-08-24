import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios, * as others from 'axios';
import Props from "./Props";

const ApiFilter = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  console.log(data)

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };

  
  const search1 = search.split('')

  useEffect(() => {
    fetchData()
      .then((res) => {
        setData(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);
  return (
    <div>
        <center>
      <h1>Search API Filter</h1>
      <input
        type="text"
        placeholder="search here...."
        onChange={(e) => {
          setSearch(e.target.value);
        }}


      />

      <Props Fdata={data} Fsearch={search}/>

     
        </center>
    </div>
  );
};

export default ApiFilter;
