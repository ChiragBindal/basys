const path = require('path');
const express = require('express');
const morgan = require('morgan');
const priorRouter = require('./Router/priorRouter');
const basysError = require('./UtilsBasys/basysError');
const cors = require('cors');
// Connecting app with express..
const app = express();
app.use(cors());
app.use(express.json());
// Serving static files
app.use(express.static(path.join(__dirname , 'public')));
app.use(express.static(`${__dirname}/public`));

app.use(morgan('dev'));

// Making Routes
app.use('/api/v1/priors' , priorRouter);

// Defining the error middleware
app.all('*' , (req ,res, next)=>{
    next(new basysError(`Cannot find ${req.originalUrl} on this server!` , 404))
});

module.exports = app;