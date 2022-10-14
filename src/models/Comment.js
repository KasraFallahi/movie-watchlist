const Comment = (seqInstance, Sequelize, DataTypes) => {
    return seqInstance.define('comment', {

        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },

    });
};

export default Comment;