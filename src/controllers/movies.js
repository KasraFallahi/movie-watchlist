import { Op } from 'sequelize';
import sequelize from '../sequelize/sequelize-config.js';
import { ValidationError } from 'sequelize';

const getMovieById = async (req, res, next) => {
    try {

        const movie = await sequelize.model('movie')
            .findByPk(req.params.id, {
                attributes: {
                    exclude: ['id', 'createdAt', 'updatedAt', 'crew.movie_crew']
                },
                include: {
                    model: sequelize.model('crew'),
                    attributes: ['id', 'name', 'image']
                }
            });


        // movie not found
        if (!movie) {
            return next({
                message: 'invalid movie id',
                statusCode: 404
            });
        }

        // converting movie to regular object
        let movieObject = JSON.parse(JSON.stringify(movie));


        // add cast and directors to separate arrays
        movieObject.cast = [];
        movieObject.directors = [];

        // separating cast and directors from crews
        for (let i = 0; i < movieObject.crews.length; i++) {

            // add crew role
            movieObject.crews[i].role = movieObject.crews[i].movie_crew.role;
            delete movieObject.crews[i].movie_crew;

            if (movieObject.crews[i].role == 'actor') {
                movieObject.cast.push(movieObject.crews[i]);
                movieObject.crews.splice(i, 1);
                i--;
            } else if (movieObject.crews[i].role == 'Director') {
                movieObject.directors.push(movieObject.crews[i]);
                movieObject.crews.splice(i, 1);
                i--;
            }
        }

        res.status(200).json({
            success: true,
            data: { movieObject }
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

const addMovie = async (req, res, next) => {
    try {

        // check whether crews is empty
        if (!req.body.crews || !(req.body.crews instanceof Array)) {
            throw new ValidationError('crews should not be empty', ['crews']);
        }

        // ignore field id in request body
        delete req.body.id;

        const movie = await sequelize.model('movie')
            .create(req.body);

        // assign movie crew
        for (const crew of req.body.crews) {
            await sequelize.model('movie_crew')
                .create({
                    movieId: movie.id,
                    crewId: crew.id,
                    role: crew.role
                });
        }

        res.status(200).json({
            success: true,
            message: `movie [${movie.name}] added to database successfully`
        });

    } catch (error) {
        return next({ error });
    }
}

export { getMovieById, searchMovie, addMovie };