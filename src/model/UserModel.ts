import { db } from "../db/db";
import { DataTypes } from 'sequelize';

export const UserModel = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user: {
        type: DataTypes.STRING,
        unique: true
    },
    password: DataTypes.STRING
});