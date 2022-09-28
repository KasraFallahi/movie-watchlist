import sequelize from "./sequelize-config.js";

(async () => { sequelize.sync({ alter: true }) })();
