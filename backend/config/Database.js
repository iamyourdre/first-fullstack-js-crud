import { Sequelize } from "sequelize";

// Initialize Sequelize object to connect with the database
const db = new Sequelize('crud_db', 'root', '', {
    host: 'localhost', // Database server address
    dialect: 'mysql' // Database dialect used (in this case, MySQL)
});

export default db; // Export the Sequelize object for use elsewhere
