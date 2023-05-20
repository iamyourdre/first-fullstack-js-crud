import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();

app.use(cors()); // Enable CORS (Cross-Origin Resource Sharing)
app.use(express.json()); // Parse JSON request bodies
app.use(UserRoute); // Mount the UserRoute router for handling user-related routes

app.listen(5000, () => console.log('Server up and running...'));
