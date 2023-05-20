import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [gender, setGender] = useState("Male");
const navigate = useNavigate();

const saveUser = async (e) =>{
    e.preventDefault();
    try {
        await axios.post("http://localhost:5000/users",{
            name,
            email,
            gender
        });
        navigate("/");
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className="container mt-5">
        <h2>Add User</h2>
        <form onSubmit={saveUser}>
            <div className="mb-3">
                <label className="form-label" for="inputName">Name</label>
                <input className="form-control" id="inputName" value={name} onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div className="mb-3">
                <label className="form-label" for="inputEmail">Email</label>
                <input className="form-control" id="inputEmail" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div className="mb-3">
                <label className="form-label" for="inputEmail">Gender</label>
                <select className="form-select" id="inputEmail" value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select >
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-success">Save</button>
            </div>
        </form>
    </div>
  )
}

export default AddUser