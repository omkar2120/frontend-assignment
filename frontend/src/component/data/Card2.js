import { Typography } from '@mui/material'
import React from 'react'
import graphData from './graphData'
function Card2() {
  return (
    <div
    style={{
      height: "100%",
      backgroundColor: "",
      padding: "0%",
      display: "flex",
      alignItems: "center",
      flexDirection:"column",
      justifyContent: "space-between",
    }}
  >
    {graphData.map((d) => (
      <div
        style={{
          width: "98%",
          height: "70px",
          display: "grid",
          gridTemplateRows: "40% 1fr",
          border:'0.1px solid black',
          borderRadius:"10px",
          boxShadow: "0px 0px 8px -0px rgba(0,0,0,0.50)",

        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            fontSize: "80px",

            // fontStyle:'Quicksand,sans-serif'
          }}
        >
          <Typography>{d.tittle}</Typography> 
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            fontSize: "80px",
            fontWeight: "800",
          }}
        >
         <Typography>{d.value}</Typography> 
        </div>
      </div>
    ))}
  </div>

  )
}

export default Card2