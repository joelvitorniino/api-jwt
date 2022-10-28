import { db } from "../db/db";
import { DataTypes } from 'sequelize';

export const UserModel = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user: DataTypes.STRING,
    password: DataTypes.STRING
});