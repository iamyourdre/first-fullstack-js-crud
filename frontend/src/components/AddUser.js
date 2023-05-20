import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {

    const [name, setName] = useState(""); // State variable to store the name input value
    const [email, setEmail] = useState(""); // State variable to store the email input value
    const [gender, setGender] = useState("Male"); // State variable to store the selected gender value (default: "Male")
    const navigate = useNavigate(); // Hook for navigating to a different route

    const saveUser = async (e) => { // Function to handle the form submission
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            await axios.post("http://localhost:5000/users", { // Send a POST request to the specified endpoint
                name, // Include the name value from the state
                email, // Include the email value from the state
                gender // Include the gender value from the state
            });

            navigate("/"); // Navigate to the root ("/") route after successfully saving the user
        } catch (error) {
            console.log(error); // Log any errors that occur during the API request
        }
    }

    return (
        <div className="container mt-5">
            <h2>Add User</h2>
            <form onSubmit={saveUser}> {/* Form submission triggers the saveUser function */}
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
                    <button type="submit" className="btn btn-success">Save</button> {/* Submit button triggers the form submission */}
                </div>
            </form>
        </div>
    )
}

export default AddUser;
