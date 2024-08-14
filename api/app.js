const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth');
const podcastRoutes = require('./routes/podcasts');
const postRoutes = require('./routes/posts');
const exerciseRoutes = require('./routes/exercises');
const eventRoutes = require('./routes/events');

const app = express();
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/podcasts', podcastRoutes);
app.use('/posts', postRoutes);
app.use('/exercises', exerciseRoutes);
app.use('/events', eventRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});