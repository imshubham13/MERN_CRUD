import React, { useState } from "react";
import axios from 'axios';

const CreateStudent = () => {
const[name,setName] = useState('');
const[email,setEmail] = useState('');
const[phone,setPhone] = useState('');
const[username,setuserName] = useState('');
const[password,setPassword] = useState('');

const handleName = (e) => {
    setName(e.target.value);
}

const handleEmail = (e) => {
    setEmail(e.target.value);
}

const handlePhone = (e) => {
    setPhone(e.target.value);
}

const handleUserName = (e) => {
    setuserName(e.target.value);
}

const handlePassword = (e) => {
    setPassword(e.target.value);
}

const collectData = async() => {
   try{
    let insertData = await axios.post('http://localhost:5000/student/signup',{
        name,email,phone,username,password
    });
   }catch(error)
   {
    console.log(error);
   }
}

  return (
    <>
      <h2>Student Registration</h2>
      Name : 
      <input type="text" name="name" value={name} onChange={(e)=>{handleName(e)}} required/>
      <br /><br />
      Email : 
      <input type="email" name="email" value={email} onChange={(e)=>{handleEmail(e)}} required/>
      <br /><br />
      Phone No : 
      <input type="text" name="phone" value={phone} onChange={(e)=>{handlePhone(e)}} required/>
      <br /><br />
      User Name : 
      <input type="text" name="username" value={username} onChange={(e)=>{handleUserName(e)}} required/>
      <br /><br />
      Password : 
      <input type="password" name="password" value={password} onChange={(e)=>{handlePassword(e)}} required/>
      <br /><br />
     <button type="button" onClick={collectData}>Insert</button> 
      <br /><br />
    </>
  );
};

export default CreateStudent;
