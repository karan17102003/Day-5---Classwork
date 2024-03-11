import React,{useState} from 'react'
import './Button'
import CourseCard from './CourseCard'

export const CoursePlanner=()=>{
    const [courseData,setterCourseData]=useState([])
    const onClickHandler=()=>{
        const courseName=document.getElementById("course-name").value;
        const courseHours=document.getElementById("course-hours").value;
        const newCourseData ={
            nmae:courseName,
            hour:parseInt(courseHours)

        }
        setterCourseData([...courseData,newCourseData])

    }
    return(
        <>
        <div style={{textAlign:'center'}}>
        <h1>Plan Your Course</h1>
        <div>
            <input id='course-name' type='text'/>
            <input id='course-hours' type='number'/>
            <button onClick={onClickHandler}>Add</button>
        </div>
        {courseData.map((course,index)=>(
            
            <CourseCard Name={course.name}  hour={course.hour} key={index}/>
        ))}
        </div>
        </>
    )
}
export default CoursePlanner;