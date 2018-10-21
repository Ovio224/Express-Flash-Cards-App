const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json'); // const data = require('../data/flashcardData.json').data;
const { cards } = data; //const cards = data.cards;

router.get('/:id', (req, res) => {
    const { side } = req.query; // req.query.side
    const { id } = req.params; // req.params.id

    const text = cards[id][side];
    const { hint } = cards[id]; //cards.id.hint

    if(side === 'answer') {
        templateData = {text};
    } else templateData = {text, hint};

    res.render('card', {templateData})
});

module.exports = router;
