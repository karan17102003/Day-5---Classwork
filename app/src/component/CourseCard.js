import React, { useState } from 'react';
import  Button from "./Button";

const CourseCard=({Name,hour,key})=>{
    const [hourValue , updateHourValue]=useState(hour);
    
    return(
        <div key={key} style={{display:'flex',textAlign:'center' , justifyContent:"center" , gap:"2rem", backgroundColor: 'gray',margin:"10px 25%"}}>
        <p>Course Name : {Name}</p>
        
        <p>Course Hour : {hourValue}</p>
        <div style={{display:'flex',textAlign:'center' , justifyContent:"center" , gap:"2rem" ,height:"50%",marginTop:"15px"}}>
            <button onClick={()=>{
                updateHourValue(hourValue+1)
            }}>+</button>
            <button onClick={()=>{
                updateHourValue(hourValue-1)
            }}>-</button>
        </div>
    </div>
    
    )

}
export default CourseCard