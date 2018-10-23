const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json'); // const data = require('../data/flashcardData.json').data;
const { cards } = data; //const cards = data.cards;

router.get('/', (req, res) => {
    const random = Math.floor(Math.random() * cards.length);
    res.redirect(`/cards/${random}?side=question`);
});


router.get('/:id', (req, res) => {
    const { side } = req.query; // req.query.side
    const { id } = req.params; // req.params.id

    const text = cards[id][side];
    const { hint } = cards[id]; //cards.id.hint
    const name = req.cookies.username;
    const templateData = {id, text, name};

    if(!side) {
        return res.redirect(`/cards/${id}?side=question`);
    }

    if (side === 'question') {
        templateData.hint = hint;
        templateData.side = 'answer';
        // templateData.sideShow = 'Answer';
    } else if (side === 'answer') {
        templateData.side = 'question';
        // templateData.sideShow = 'Question';
    }
    res.render('card', templateData);

});

module.exports = router;
