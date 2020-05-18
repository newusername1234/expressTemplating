const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Hello',
        special: 'hamburgers'
    });
});

app.listen(PORT);