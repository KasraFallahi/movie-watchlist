import sequelize from "./sequelize-config.js";
import { Sequelize, DataTypes } from 'sequelize';

import Movie from '../models/Movie.js';
import Crew from '../models/Crew.js';
import User from '../models/User.js';
import Comment from '../models/Comment.js';

(async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log('Sequelize setup completed successfully.');
    }
    catch (e) {
        console.log(e);
    }
})();

Movie(sequelize, Sequelize, DataTypes);
Crew(sequelize, Sequelize, DataTypes);
User(sequelize, Sequelize, DataTypes);
Comment(sequelize, Sequelize, DataTypes);
