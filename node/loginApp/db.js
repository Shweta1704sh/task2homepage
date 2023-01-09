let mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://test:test123@cluster0.kz33h69.mongodb.net/flowerdatabase?retryWrites=true&w=majority');