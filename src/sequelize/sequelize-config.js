// TODO remove
import * as dotenv from 'dotenv';
dotenv.config();

import { Sequelize, DataTypes } from 'sequelize';

import Movie from '../models/Movie.js';
import Crew from '../models/Crew.js';
import User from '../models/User.js';
import Comment from '../models/Comment.js';

// database connection configs
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    logging: false
    // logQueryParameters: true,
    // benchmark: true,
});

Movie(sequelize, Sequelize, DataTypes);
Crew(sequelize, Sequelize, DataTypes);
User(sequelize, Sequelize, DataTypes);
Comment(sequelize, Sequelize, DataTypes);

export default sequelize;