import React from 'react'
import Card from './Card'
import { useState } from 'react';
export default function Course(props) {
    // console.log(props.info);
    console.log(props.category);
    const[likedCourses,setlikedcourses]=useState([]);
    let allCourses = [];
    const getCourses=()=>{
        if(props.category==="All"){
            Object.values(props.info).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }else{
            return props.info[props.category];
        }
    }
        return (
            <div className="course">
                {
                    getCourses().map((element) => {
                        return <div className="greatgrandparent" key={element.id}>
                            <Card image={element.image.url} title={element.title} description={element.description} likedcourses={likedCourses} setlikedcourses={setlikedcourses} mycourses={element}></Card>
                        </div>
                    })
                }
            </div>
        )
    }

