import express from "express";
import { 
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js";

const router = express.Router();

// Define routes and their corresponding controller functions
router.get('/users', getUsers); // Route to get all users
router.get('/users/:id', getUserById); // Route to get a user by ID
router.post('/users', createUser); // Route to create a new user
router.patch('/users/:id', updateUser); // Route to update a user by ID
router.delete('/users/:id', deleteUser); // Route to delete a user by ID

export default router;
