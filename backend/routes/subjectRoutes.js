const express = require("express")
const multer = require("multer")


// multer
const uploadSubjects = multer()


// controllers
const {getAllSubjects, createSubject} = require("../controllers/subjectControllers")

const router = express.Router()

router.get("/getAllSubjects", getAllSubjects)

router.post("/createSubject", uploadSubjects.none(), createSubject)

module.exports = router