module.exports = (sequelize, DataTypes) => {
    const Exercise = sequelize.define('Exercise', {
        name: {
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
        }
    });

    Exercise.associate = function(models) {
        // Exercise ile ExerciseStep arasında bire çok ilişki
        Exercise.hasMany(models.ExerciseStep, {
            foreignKey: 'exerciseId',
            as: 'exerciseSteps',
        });
    };

    return Exercise;
};