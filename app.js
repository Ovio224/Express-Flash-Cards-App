const express = require('express');

const app = express();

const firstName = ["Will","Leo","James","Paula","Larry"];
const lastName = ["Smith","Di Caprio","Franco","Patton","David"];

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});



app.get('/cards', (req, res) => {
    res.render('card', { prompt: "Who is yo daddy?", 
    hint: "Think about who's this",
    });
});

app.get('/sandbox', (req, res) => {
    res.render('sandbox', {firstName, lastName})
});

app.listen(3000, () => {
    console.log('THe app is running on localhost:3000');
});