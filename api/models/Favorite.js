module.exports = (sequelize, DataTypes) => {
    const Favorite = sequelize.define('Favorite', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        contentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        contentType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['podcast', 'therapy', 'post', 'exercise']],
            }
        }
    });

    return Favorite;
};