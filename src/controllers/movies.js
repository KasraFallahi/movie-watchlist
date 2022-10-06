import { Op } from 'sequelize';
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

const searchMovie = async (req, res, next) => {
    if (!req.query.keyword) {
        return next({
            message: 'please enter search keyword',
            statusCode: 400
        });
    }

    try {
        const movies = await sequelize.model('movie').findAll({
            attributes: ['id', 'name', 'year', 'poster'],
            where: {
                [Op.or]: {
                    name: { [Op.substring]: req.query.keyword },
                    description: { [Op.substring]: req.query.keyword }
                }
            }
        });

        res.status(200).json({
            success: true,
            data: { movies }
        });

    } catch (error) {
        return next({ error });
    }
}

export { getMovieById, searchMovie };