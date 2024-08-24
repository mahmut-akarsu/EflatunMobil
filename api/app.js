require('dotenv').config({ path: 'C:/Users/Mahmut/Desktop/Eflatun Uygulaması/api/.env' });
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth');
const podcastRoutes = require('./routes/podcasts');
const postRoutes = require('./routes/posts');
const exerciseRoutes = require('./routes/exercises');
const therapyRoutes = require('./routes/therapies');
const sectionRoutes = require('./routes/sections');
const stepRoutes = require('./routes/steps');
const exerciseStepRoutes = require('./routes/exerciseSteps');
const favoriteRoutes = require('./routes/favorites');


const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use('/favorites', favoriteRoutes);
app.use('/auth', authRoutes);
app.use('/podcasts', podcastRoutes);
app.use('/posts', postRoutes);
app.use('/exercises', exerciseRoutes);
app.use('/therapies', therapyRoutes);
app.use('/sections', sectionRoutes);
app.use('/steps', stepRoutes);
app.use('/exerciseSteps',exerciseStepRoutes)


const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false })
  .then(() => {
    console.log("All models were synchronized successfully.");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error syncing models:", error);
  });
