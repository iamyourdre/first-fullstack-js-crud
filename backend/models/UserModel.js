import { Sequelize } from "sequelize";

import db from "../config/Database.js";

const { DataTypes } = Sequelize;

// Define the User model
const User = db.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
}, {
    freezeTableName: true
});

export default User;

// Synchronize the model with the database (create the 'users' table if it doesn't exist)
(async () => {
    await db.sync();
})();
