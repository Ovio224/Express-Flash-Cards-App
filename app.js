const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

// const firstName = ["Will","Leo","James","Paula","Larry"];
// const lastName = ["Smith","Di Caprio","Franco","Patton","David"];

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('index', {name});
    } else {
        res.redirect('/hello');
    }
});

app.get('/cards', (req, res) => {
    res.render('card', {
        prompt: "Who is the man in 'I am Legend'?",
        hint: "Starts with Will and ends with Smith!",
    });
});

app.get('/hello', (req, res) => {
    const name = req.cookies.username;
    if(name) {
        res.redirect('/');
    } else {
        res.render('hello');
    }
});

app.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});

app.post('/goodbye', (req, res) => {
    res.clearCookie('username', req.cookies.username);
    res.redirect('/hello');
});


// app.get('/sandbox', (req, res) => {
//     res.render('sandbox', {firstName, lastName})
// });

app.listen(3000, () => {
    console.log('The app is running on localhost:3000');
});