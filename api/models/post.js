module.exports = (sequelize, DataTypes) => {
    const Podcast = sequelize.define('Podcast', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        cardImageUrl: {
            type: DataTypes.STRING,
        },
        imageUrl: {
            type: DataTypes.STRING,
        },
        source: {
            type: DataTypes.STRING,
        },
    });

    return Podcast;
};