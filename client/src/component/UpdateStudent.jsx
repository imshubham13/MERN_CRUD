import React, { useState ,useEffect} from "react";
import axios from 'axios';
import { useParams ,useNavigate} from "react-router-dom";

const UpdateStudent = () => {
const[name,setName] = useState('');
const[email,setEmail] = useState('');
const[phone,setPhone] = useState('');
const[username,setuserName] = useState('');
const[password,setPassword] = useState('');

const params = useParams();
const navigate = useNavigate();

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

const dispData = async() => {
    let result = await axios.get(`http://localhost:5000/student/getOneStudent/${params.id}`);
    setName(result.data.name);
    setEmail(result.data.email);
    setPhone(result.data.phone)
    setuserName(result.data.username)
    setPassword(result.data.password)
}

useEffect(()=>{
    dispData()
},[])

const collectData = async() => {
    let result = await axios.patch(`http://localhost:5000/student/update/${params.id}`,{
        name,email,phone,username,password
    })
    if(result){
        navigate('/')
    }
}

// const UpdateStudent = () => {
//   return (
//     <>
//       <h1>Update Student Details</h1>
//     </>
//   );
// };

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
     <button type="button" onClick={collectData}>Update</button> 
      <br /><br />
    </>
  );
};

export default UpdateStudent;
