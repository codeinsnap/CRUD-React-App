import React from "react";
import axios from "axios";

// TO bring the data from dbjson file, this function is written, and it is stored in the variable call data

//  const url='http://localhost:3003/users';

//  export const getUsers = async() =>{
//      //below code is to check wheather  this function is giving output or not
//     //  console.log("fetch getUser")
//     const data = await axios.get('http://localhost:3003/users');
//     // console.log("Data",data)
//     return data
// }

const jump = 'http://localhost:3003/users'
export const getUsers = async(id) =>{
    id = id || '';
    console.log("This is my id" ,id)
   const data = await axios.get(`${jump}/${id}`);
   console.log("This is my " ,id)
   return data
}

export const addUser = async(user)=>{
    return await axios.post('http://localhost:3003/users', user);
}

export const editUser = async(id, user)=>{
    return await axios.put(`${jump}/${id}`, user);
}

export const deleteUser = async(id)=>{
    return await axios.delete(`${jump}/${id}`);
}



