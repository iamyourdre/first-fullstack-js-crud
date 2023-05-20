import User from "../models/UserModel.js";

// Get all users
export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll(); // Execute SELECT * FROM users query using the User model
        res.status(200).json(response); // Send response with status code 200 and the found users data
    } catch (error) {
        console.log(error.message);
    }
}

// Get user by ID
export const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id // Execute SELECT * FROM users WHERE id = :id query using the User model
            }
        });
        res.status(200).json(response); // Send response with status code 200 and the found user data
    } catch (error) {
        console.log(error.message);
    }
}

// Create a new user
export const createUser = async(req, res) =>{
    try {
        await User.create(req.body); // Create a new user entity using the User model
        res.status(201).json({
            msg: "User Created!" // Send response with status code 201 and success message
        });
    } catch (error) {
        console.log(error.message);
    }
}

// Update a user by ID
export const updateUser = async(req, res) =>{
    try {
        await User.update(req.body,{
            where:{
                id: req.params.id // Execute UPDATE users SET ... WHERE id = :id query using the User model
            }
        });
        res.status(200).json({
            msg: "User Updated!" // Send response with status code 200 and success message
        });
    } catch (error) {
        console.log(error.message);
    }
}

// Delete a user by ID
export const deleteUser = async(req, res) =>{
    try {
        await User.destroy({
            where:{
                id: req.params.id // Execute DELETE FROM users WHERE id = :id query using the User model
            }
        });
        res.status(200).json({
            msg: "User Deleted!" // Send response with status code 200 and success message
        });
    } catch (error) {
        console.log(error.message);
    }
}
