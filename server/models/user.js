const mongoose =require('mongoose');

const Schema=mongoose.Schema;

const userSchema= new Schema({
    _Id:String, 
    username:String,
    password:String,
    role:String
});
//Creating a model user
//// Compile model from schema
module.exports = mongoose.model('user',userSchema,'users');