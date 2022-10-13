const MovieCrew = (seqInstance, Sequelize, DataTypes) => {
    return seqInstance.define('movie_crew', {

        // movieId and crewId combination is composite key

        movieId: { // foregin key of movie id
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'movie',
                key: 'id'
            }
        },
        crewId: { // foregin key of crew id
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'crew',
                key: 'id'
            }
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    });
}

export default MovieCrew;