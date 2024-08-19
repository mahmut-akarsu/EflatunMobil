module.exports = (sequelize, DataTypes) => {
    const Section = sequelize.define('Section', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Section.associate = function(models) {
        // Section ile Therapy arasında çok bir ilişkisi
        Section.belongsTo(models.Therapy, {
            foreignKey: 'therapyId',
            as: 'therapy',
        });
        // Section ile Step arasında bire çok ilişki
        Section.hasMany(models.Step, {
            foreignKey: 'sectionId',
            as: 'steps',
        });
    };

    return Section;
};
