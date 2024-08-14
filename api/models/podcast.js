module.exports = (sequelize, DataTypes) => {
    const Podcast = sequelize.define('Podcast', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        }
    });

    return Podcast;
};
