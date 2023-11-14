import React, { useState } from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';
export default function Card(props) {
    let likedcourses=props.likedcourses;
    let setlikedcourses=props.setlikedcourses;
    let mycourses=props.mycourses;
    const[ReadMore,setreadmore]=useState(false);
    const handlereadmore=()=>{
        setreadmore(!ReadMore);
    }
    const details=ReadMore?props.description:props.description.substring(0,100);
    function likehandler() {
        if(likedcourses.includes(mycourses.id)) {
            setlikedcourses( (prev) => prev.filter((cid)=> (cid !== mycourses.id) )  );
            toast.warning("like removed");
        }
        else {
            if(likedcourses.length === 0 ) {
                setlikedcourses([mycourses.id]);
            }
            else {
                
                setlikedcourses((prev) => [...prev, mycourses.id]);
            }
            toast.success("I love you Riya");
        }
    }
  return (
    <div className="cards">
        <div className="image">
            <img src={props.image} alt="" />
        </div>
        <div className="like">
            <button onClick={likehandler}>{likedcourses.includes(mycourses.id)?(<FcLike fontSize="1.75rem"></FcLike>):(<FcLikePlaceholder fontSize="1.75rem" />)}</button>
        </div>
        <div className="title">
            <h5>{props.title}</h5>
        </div>
        <br />
        <div className="description">
            <p>{details}...
            <span onClick={handlereadmore}>{ReadMore?"ShowLess":"ReadMore"}</span></p>
        </div>
    </div>
  )
}
