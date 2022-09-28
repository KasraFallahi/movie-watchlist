// TODO remove
import * as dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from "sequelize";

// database connection configs
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    logging: false
    // logQueryParameters: true,
    // benchmark: true,
});

(async () => { sequelize.sync({ alter: true }) })();

export default sequelize;