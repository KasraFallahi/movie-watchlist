const User = (seqInstance, Sequelize, DataTypes) => {
    seqInstance.define('user', {

        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },

    });
};

export default User;