// >> rafce
import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const UserList = () => {
const [users, setUser] = useState([]);

useEffect(()=>{
    getUsers();
},[])

const getUsers = async() =>{
    const response = await axios.get('http://localhost:5000/users');
    setUser(response.data);
}

const deleteUser = async(id) =>{
    try {
        await axios.delete(`http://localhost:5000/users/${id}`);
        getUsers();
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className="container mt-5">
        <h2>Users List</h2>
        <Link to={`add`} className='btn btn-primary'>Add User</Link>
        <table className="table mt-5">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={user.id}>
                        <th>{index += 1}</th>
                        <th>{user.name}</th>
                        <th>{user.email}</th>
                        <th>{user.gender}</th>
                        <th>
                            <Link to={`edit/${user.id}`} className="btn btn-warning me-2">Edit</Link>
                            <button onClick={()=> deleteUser(user.id)} className="btn btn-danger">Delete</button>
                        </th>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default UserList