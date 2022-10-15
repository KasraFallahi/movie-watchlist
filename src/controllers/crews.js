import sequelize from '../sequelize/sequelize-config.js';

const addCrew = async (req, res, next) => {
    try {

        // ignore field id in request body
        delete req.body.id;

        const crew = await sequelize.model('crew').create(req.body);

        res.status(200).json({
            success: true,
            message: `crew [${crew.name}] added to database successfully`
        });

    } catch (error) {
        return next({ error });
    }
}

export { addCrew };