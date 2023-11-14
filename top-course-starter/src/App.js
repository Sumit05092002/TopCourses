import React from "react";
import Navbar from "./Component/Navbar";
import data, { filterData, apiUrl } from "./data";
import Filter from "./Component/Filter";
import Course from "./Component/Course";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "./Component/Spinner";
const App = () => {
  const[courses,mycourses]=useState({
    development:[],
    lifestyle:[]
  });
  const[category,setmycategory]=useState(filterData[0].title);
  const[loading,setmyspinner]=useState(false)
  const fetchData=async()=>{
    setmyspinner(true);
    try {
      const res= await fetch(apiUrl);
      const myData= await res.json();
      mycourses(myData.data);
      
    } catch (error) {
      toast.error("something went wrong");
    }
    setmyspinner(false);
  }
  useEffect( ()=>{
    fetchData();
  },[])
  // console.log(category);
  return (
    <div className="parent">
      <Navbar></Navbar>
      <br />
      <Filter data={filterData} category={category} setmycategory={setmycategory}></Filter>
      <br />
      <div className="loading">
        {
          loading?<Spinner></Spinner>:<Course info={courses} category={category} loading={loading} setmyspinner={setmyspinner}></Course>
        }
      </div>
    </div>
  )
};

export default App;
