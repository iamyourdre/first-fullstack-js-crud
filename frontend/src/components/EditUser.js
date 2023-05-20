import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Male");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        getUserById();
    }, []);

    const updateUser = async (e) =>{
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/users/${id}`,{
                name,
                email,
                gender
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setGender(response.data.gender);
    }

    return (
        <div className="container mt-5">
            <h2>Edit User</h2>
            <form onSubmit={updateUser}>
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
                    <button type="submit" className="btn btn-success">Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditUser