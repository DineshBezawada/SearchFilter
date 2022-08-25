import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios, * as others from "axios";

const Assignment = () => {
  const [data, setData] = useState([]);

  const GetData = async () => {
    const res = await axios.get(
      "https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099"
    );
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div>
        
      {data.map((menu,index) => {
       return(
        <div key={index}>
        {menu.table_menu_list.map((list,index)=>{
           return(
            <div key={index}>
             {list.menu_category === "From The Barnyard" && list.category_dishes.map((dish,index)=>{
                return(
                <div key={index}>
                 <h1 >{dish.dish_name}</h1>
                </div>
                )
             })}
            </div>
           )
        })}
        </div>
       )
      })}
    </div>
  );
};

export default Assignment;
