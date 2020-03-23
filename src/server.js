const app = require('express')();
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');
require('dotenv').config()

const port = process.env.PORT || 3000;

// imports middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(fileUpload());

// imports functions
app.post('/upload', require('./functions/upload'));

app.listen(port, () => {
    console.log(`app listening on port ${port}!`);
});