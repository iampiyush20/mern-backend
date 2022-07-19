const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://piyushdb:9667751125@cluster0.la410e4.mongodb.net/?retryWrites=true&w=majority",()=>{
    console.log('db connected')
})