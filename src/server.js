const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const routes  = require('./routes.js')
const app = express();
const path  = require('path')

mongoose.connect('mongodb+srv://backendone:backendone@clusterfood-kovx0.mongodb.net/back?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes);

app.listen(3333);