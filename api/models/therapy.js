module.exports = (sequelize, DataTypes) => {
    const Therapy = sequelize.define('Therapy', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        imageUrl: {
            type: DataTypes.STRING,
        },
        cardImageUrl: {
            type: DataTypes.STRING,
        }
        
    });

    Therapy.associate = function(models) {
        // Therapy ile Section arasında bire çok ilişki
        Therapy.hasMany(models.Section, {
            foreignKey: 'therapyId',
            as: 'sections',
        });
    };

    return Therapy;
};
