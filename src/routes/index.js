
const newsRouter = require('./news');
const meRouter = require('./me');
const sitesRouter = require('./sites');
const coursesRouter = require('./courses');

function route(app) {
    app.use('/courses', coursesRouter);
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/', sitesRouter)
};

module.exports = route;
