import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const DisplayStudent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get(
        "http://localhost:5000/student/dispStudent"
      );
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete student Record

  const deleteStudent = async (id) => {
    try {
      alert(id);
      await axios.delete(`http://localhost:5000/student/delete/${id}`);
      alert("Student Data Deleted");
      getData();
    } catch (error) {
      console.log("Error is===> ",error);
    }
  };

  const studentRecord = data.map((e) => {
    return (
      <tr key={e._id}>
        <td>{e.name}</td>
        <td>{e.email}</td>
        <td>{e.phone}</td>
        <td>{e.username}</td>
        <td>{e.password}</td>
        <td><NavLink to={`/UpdateStudent/${e._id}`}>Edit</NavLink></td>
        <td>
          <button onClick={() => deleteStudent(e._id)}>Delete</button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <h2>Display Student Details</h2>
      <br />
      <br />
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>User Name</th>
          <th>Password</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {studentRecord}
      </table>
    </>
  );
};

export default DisplayStudent;
