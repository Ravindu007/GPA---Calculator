const mongoose = require("mongoose")

const Schema = mongoose.Schema

const subjectSchema = new Schema({
  subjectName:{type:String, required:true},
  grade:{type:String, required:true},
  credit:{type:String, required:true},
  semester:{type:String, required:true}
},{timestamps:true})

module.exports = mongoose.model('subject', subjectSchema)