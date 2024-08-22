module.exports = (sequelize, DataTypes) => {
    const ExerciseStep = sequelize.define('ExerciseStep', {
        source: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stepDescription: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });

    ExerciseStep.associate = function(models) {
        // ExerciseStep ile Exercise arasında ilişki
        ExerciseStep.belongsTo(models.Exercise, {
            foreignKey: 'exerciseId',
            as: 'exercise',
        });
    };

    return ExerciseStep;
};