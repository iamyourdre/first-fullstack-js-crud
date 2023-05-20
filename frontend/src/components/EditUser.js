import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const [name, setName] = useState(""); // State variable to store the name input value
    const [email, setEmail] = useState(""); // State variable to store the email input value
    const [gender, setGender] = useState("Male"); // State variable to store the selected gender value (default: "Male")
    const navigate = useNavigate(); // Hook for navigating to a different route
    const { id } = useParams(); // Retrieve the "id" parameter from the URL

    useEffect(() => {
        getUserById(); // Call the getUserById function when the component mounts
    }, []);

    const updateUser = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            await axios.patch(`http://localhost:5000/users/${id}`, { // Send a PATCH request to update the user
                name, // Include the updated name value from the state
                email, // Include the updated email value from the state
                gender // Include the updated gender value from the state
            });

            navigate("/"); // Navigate to the root ("/") route after successfully updating the user
        } catch (error) {
            console.log(error); // Log any errors that occur during the API request
        }
    }

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`); // Fetch the user data by making a GET request
        setName(response.data.name); // Set the name state with the fetched name
        setEmail(response.data.email); // Set the email state with the fetched email
        setGender(response.data.gender); // Set the gender state with the fetched gender
    }

    return (
        <div className="container mt-5">
            <h2>Edit User</h2>
            <form onSubmit={updateUser}>
                <div className="mb-3">
                    <label className="form-label" for="inputName">Name</label>
                    <input className="form-control" id="inputName" value={name} onChange={(e) => setName(e.target.value)}></input> {/* Input field for name, value is taken from the name state and onChange event updates the name state */}
                </div>
                <div className="mb-3">
                    <label className="form-label" for="inputEmail">Email</label>
                    <input className="form-control" id="inputEmail" value={email} onChange={(e) => setEmail(e.target.value)}></input> {/* Input field for email, value is taken from the email state and onChange event updates the email state */}
                </div>
                <div className="mb-3">
                    <label className="form-label" for="inputEmail">Gender</label>
                    <select className="form-select" id="inputEmail" value={gender} onChange={(e) => setGender(e.target.value)}> {/* Select field for gender, value is taken from the gender state and onChange event updates the gender state */}
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-success">Update</button> {/* Submit button triggers the form submission */}
                </div>
            </form>
        </div>
    )
}

export default EditUser;
