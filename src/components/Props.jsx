import React from 'react'

const Props = (props) => {
  return (
    <div>
        <center>
        {props.Fdata.filter((value) => {
          if (props.Fsearch === "") {
            return value;
          } else if (value.body.toLowerCase().includes(props.Fsearch.toLowerCase())) {
            return value;
          }
        })
        .map((data, index) => {
          return (
            <>
            <div className="card">
                <h1>{data.id} <span>{data.userId}</span></h1>
                <h6>{data.title}</h6>
                <p key={data.id}>{data.body}</p>
            </div>
              
            </>
          );
        })}
        </center>
    </div>
  )
}

export default Props