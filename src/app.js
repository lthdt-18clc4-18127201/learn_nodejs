const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path') ;
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json());

// app.use(morgan('combined'))
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// route init
route(app);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});