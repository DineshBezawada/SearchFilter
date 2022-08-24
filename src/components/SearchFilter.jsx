import React from 'react'
import { useState } from 'react';
import Data from './locations.json'

const SearchFilter = () => {
    
    const [search,setSearch]=useState('')
    const handleChange =(e)=>{
   setSearch(e.target.value)
    }

  return (
    <div>
       <center>
        <h3>Enter Your City :</h3>
        <form>
        <input type="text"
        // value={search}
        onChange={(e)=>{handleChange(e)}}
        />
        </form>
       
        <br/>
        <br/>
<div className='locations'>
    {Data.filter((location)=>location.location.toLowerCase().includes(search.toLowerCase())).map((location,index)=>{
        return(
            <>
            <div 
            style={{margin:'5px',border:'1px solid #000',padding:'4px 10px',textAlign:'center',width:'50%'}}>
                {location.location}</div>
            </>
        )
    })}
</div>

       </center>

    </div>
  )
}

export default SearchFilter;