const Crew = (seqInstance, Sequelize, DataTypes) => {
    return seqInstance.define('crew', {

        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },

    });
};

export default Crew;