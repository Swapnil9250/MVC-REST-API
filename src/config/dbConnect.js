
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_db')
.then(()=>{
    console.log("connected to the db")
}).catch((err)=>{
    console.log(err)
});