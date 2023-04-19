const subjectModel = require("../models/subjectModel")



const getAllSubjects = async(req,res) => {
  try {
    const allSubjects = await subjectModel.find({}).sort({createdAt:-1})
    res.status(200).json(allSubjects)
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}


// create subject
const createSubject = async(req,res)=>{
  const {subjectName, grade, credit, semester} = req.body

  try{
    const createdSubject = await subjectModel.create({subjectName, grade, credit, semester})
    res.status(200).json(createdSubject)
  }catch(error){
    res.status(400).json({error:error.message})
  }
}

module.exports = {getAllSubjects, createSubject}