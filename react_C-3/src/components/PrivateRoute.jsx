import { Navigate, useParams } from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react";
// import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContexts";

export const ProtectedRoute =() =>{
    // const {id} = useParams();
    const [user,setUser] =useState({})
    useEffect(()=>{
        async function getdata(){
          var data = await fetch("http://localhost:8080/employee")
          var res = await data.json();
          console.log("res",res)
          setUser(res)
        
        }
    },[]);
   
    console.log(db)
   
    return (
        <div> 
        <img src ={user.image}/>
        <div>Employee Name :{user.employee_name}</div>
        <div>Title :{user.title}</div>
        </div>
    )}