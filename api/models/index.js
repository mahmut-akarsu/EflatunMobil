const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Podcast = require('./podcast')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.Exercise = require('./exercise')(sequelize, Sequelize);
db.Therapy = require('./therapy')(sequelize, Sequelize);
db.Section = require('./section')(sequelize, Sequelize);
db.Step = require('./step')(sequelize, Sequelize);

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

module.exports = db;
