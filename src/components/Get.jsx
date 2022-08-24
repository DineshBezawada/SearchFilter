import { axios } from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Get = () => {
  const [data, setData] = useState([]);
  //   useEffect( () => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((json) => {
  //         console.log(json);
  //         setData(json);
  //       });
  //   });

  const fetchData = async () => {
    const response = await fetch("https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099");
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };
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
    <>
      {data.map((data, index) => {
        return (
          <>
            <div
              key={data.id}
              style={{
                margin: "15px auto",
                width: "30%",
                background: "#E7E7E7",
                textAlign: "justify",
                padding: "15px",
                boxShadow: "0 0 4px rgb(0 0 0 / 0.5)",

              }}
            >
              <h1 style={{textAlign:'center'}}>{data.userId}</h1>
              <p>{data.tilte}</p>
              <p>{data.body}</p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Get;
