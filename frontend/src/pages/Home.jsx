import React, { useState } from 'react'

import "./Home.scss"
import GPA_Card from '../components/GPA_Card'
import SubjectForm from '../components/SubjectForm'
import SubjectCard from '../components/SubjectCard'
const Home = () => {

  const [subjects, setSubjects] = useState([
    {subjectName:"ISTP", credit:"2", grade:"A", semester:"I", id:1},
    {subjectName:"FIS", credit:"2", grade:"A", semester:"I", id:2},
    {subjectName:"OOP", credit:"2", grade:"A+", semester:"I", id:3},
  ])
  return (
    <div className='home'>
      <div className="container">
        <div className="row title">
          <h1>GPA Calculator</h1>
        </div>
        <div className="row">
          <div className="col-8 subjects">
            {subjects && subjects.map((subject)=>(
              <SubjectCard key={subject.id} subject={subject}/>
            ))}
          </div>
          <div className="col-4 form-part">
            <div className="row gpa">
              <GPA_Card/>
            </div>
            <div className="row add-subject">
              <SubjectForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home