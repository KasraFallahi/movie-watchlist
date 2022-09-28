import express from 'express';
import logger from 'morgan';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

(async () => {
    console.log('Checking database connection...');
    try {
        await sequelize.authenticate();
        console.log('Database connection OK!');
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (error) {
        console.log('Unable to connect to the database:');
        console.log(error.message);
        process.exit(1);
    }
})();