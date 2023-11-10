// routes/index.js
const mainRoutes = require('./main')
const aboutRoutes = require('./about');
module.exports = function (app){
    mainRoutes(app);
    aboutRoutes(app);
}