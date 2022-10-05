import sequelize from '../sequelize/sequelize-config.js';

const getMovieById = async (req, res, next) => {
    try {
        const movie = await sequelize.model('movie')
            .findByPk(req.params.id, {
                attributes: {
                    exclude: ['id', 'createdAt', 'updatedAt']
                }
            });

        // movie not found
        if (!movie) {
            return next({
                message: 'invalid movie id',
                statusCode: 404
            });
        }

        res.status(200).json({
            success: true,
            data: { movie }
        });

    } catch (error) {
        return next({ error });
    }
}

export { getMovieById };