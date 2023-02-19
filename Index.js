const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://chanelhm50:iPqIxFQtJrkHRqkW@cluster0.q8id5cn.mongodb.net/?retryWrites=true&w=majority").then(res => {
    console.log('connected')
}).catch(err => console.log(err))