const Movie = (seqInstance, Sequelize, DataTypes) => {
    seqInstance.define('movie', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            }
        },
        year: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: 4
            }
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        poster: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isUrl: true
            }
        },
        backgroundImage: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isUrl: true
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        language: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        imdbLink: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                isUrl: true
            }
        },
        length: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        shortLink: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                notEmpty: true
            }
        },
        myReview: { // only for signed in users
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        isLiked: { // only for signed in users
            type: DataTypes.BOOLEAN,
        }
    });
};

export default Movie;