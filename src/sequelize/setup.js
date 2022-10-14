import sequelize from "./sequelize-config.js";

(async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log('Sequelize setup completed successfully.');
    }
    catch (e) {
        console.log(e);
    }
})();