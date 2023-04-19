import React, { useEffect, useState } from 'react'

import "./Home.scss"
import GPA_Card from '../components/GPA_Card'
import SubjectForm from '../components/SubjectForm'
import SubjectCard from '../components/SubjectCard'
const Home = () => {

  const [subjects, setSubjects] = useState(null)

  useEffect(()=>{
    const fetchAllSubjects = async() => {
      const response = await fetch("http://localhost:4000/api/subjects/getAllSubjects")
      const json = await response.json()

      if(response.ok){
        setSubjects(json)
      }
    }

    fetchAllSubjects()
  },[])

  return (
    <div className='home'>
      <div className="container">
        <div className="row title">
          <h1>GPA Calculator</h1>
        </div>
        <div className="row">
          <div className="col-8 subjects">
            {subjects && subjects.map((subject)=>(
              <SubjectCard key={subject._id} subject={subject}/>
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