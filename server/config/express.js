const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    contentRouter = require('../routes/content.routes');
    workshopRouter = require('../routes/workshop.routes');
    galleryRouter = require('../routes/gallery.routes');
    artRouter = require('../routes/art.routes');
    priceRouter = require('../routes/price.routes');
    purchaseRouter = require('../routes/purchase.routes');

module.exports.init = () => {
    /*
        connect to database
        - reference README for db uri
    */
    mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
        useNewUrlParser: true
    });
    let db = mongoose.connection;
    db.once('open', () => console.log('Connected to the database'));
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

    // initialize app
    const app = express();

    if (process.env.NODE_ENV !== 'production') {
        app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept'
            );
            next();
        });
    }

    // enable request logging for development debugging
    app.use(morgan('dev'));

    // body parsing middleware
    app.use(bodyParser.json());

    // add routers
    app.use('/api/content', contentRouter);
    app.use('/api/workshop/', workshopRouter);
    app.use('/api/price/', priceRouter);
    app.use('/api/gallery/', galleryRouter);
    app.use('/api/purchase/', purchaseRouter);
    app.use('/api/art/', artRouter);

    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function (req, res) {
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }

    return app
}
