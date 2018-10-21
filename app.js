const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());


app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

app.use(mainRoutes);
app.use('/cards', cardRoutes);

app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.err = err;
    res.status(err.status)
    res.render('error');
});


// app.get('/sandbox', (req, res) => {
//     res.render('sandbox', {firstName, lastName})
// });

app.listen(3000, () => {
    console.log('The app is running on localhost:3000');
});