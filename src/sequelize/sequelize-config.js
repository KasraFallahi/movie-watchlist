// TODO remove
import * as dotenv from 'dotenv';
dotenv.config();

import { Sequelize, DataTypes } from 'sequelize';

import MovieModel from '../models/Movie.js';
import CrewModel from '../models/Crew.js';
import MovieCrewModel from '../models/MovieCrew.js';
import UserModel from '../models/User.js';
import CommentModel from '../models/Comment.js';

// database connection configs
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    logging: false
    // logQueryParameters: true,
    // benchmark: true,
});

const Movie = MovieModel(sequelize, Sequelize, DataTypes);
const Crew = CrewModel(sequelize, Sequelize, DataTypes);
const MovieCrew = MovieCrewModel(sequelize, Sequelize, DataTypes);
const User = UserModel(sequelize, Sequelize, DataTypes);
const Comment = CommentModel(sequelize, Sequelize, DataTypes);

// setting associations
Movie.belongsToMany(Crew, { through: MovieCrew });
Crew.belongsToMany(Movie, { through: MovieCrew });

export default sequelize;