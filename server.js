const path = require('path');
const express = require('express');
const app = express();
const { logger } = require('./myCustomMiddleware/eventLog');
const errorHandler = require('./myCustomMiddleware/errorHandler');
const cors = require('cors');
const corsOptions = require('./controllers/corsController');

// Middleware
app.use(logger);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Static files
app.use('/', express.static(path.join(__dirname, './public/static')));

// Routes
app.use('/', require('./routes/root'));
app.use('/employees', require('./routes/api/jobs.js'));

// 404 Error Handling
app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', 'error_404.html'));
    } else if (req.accepts('json')) {
        res.json({ error: 'Page not found error 404' });
    } else {
        res.type('txt').send("Problem displaying page error 404");
    }
});

// Error Handler Middleware
app.use(errorHandler);

const myPORT = process.env.PORT || 3400;
app.listen(myPORT, () => {
    console.log(`Server is running on port ${myPORT}`);
});
