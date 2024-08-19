module.exports = (sequelize, DataTypes) => {
    const Step = sequelize.define('Step', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    });

    Step.associate = function(models) {
        // Step ile Section arasında bir çok bir ilişkisi
        Step.belongsTo(models.Section, {
            foreignKey: 'sectionId',
            as: 'section',
        });
    };

    return Step;
};
