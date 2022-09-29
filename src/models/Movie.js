const Movie = (seqInstance, Sequelize, DataTypes) => {
    seqInstance.define('movie', {

        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },

    });
};

export default Movie;