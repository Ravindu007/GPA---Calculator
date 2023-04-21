import React, { useState } from 'react'
import { useSubjectContext } from '../hooks/useSubjectContext'

const SubjectForm = () => {

  const {subjects, dispatch} = useSubjectContext()

  // input fields
  const [subjectName, setSubjectName] = useState("")
  const [grade, setGrade] = useState("")
  const [credit, setCredit] = useState("")
  const [semester, setSemester] = useState("") 

  const handleUpload = async(e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('subjectName',subjectName)
    formData.append('grade',grade)
    formData.append('credit',credit)
    formData.append('semester',semester)

    const response = await fetch("http://localhost:4000/api/subjects/createSubject",{
      method:"POST",
      body:formData
    })

    const json = await response.json()

    if(response.ok){
      dispatch({type:"CREATE_SUBJECT", payload:json})
      setSubjectName('')
      setGrade('')
      setCredit('')
      setSemester('')
    }
  }


  return (
    <div className='col-12 card bg-dark'>
      <h4>Add subject</h4>
      <form onSubmit={handleUpload}>
        <div className="form-group">
          <label>Subject Name</label>
          <input 
            type="text" 
            className='form-control'
            onChange={(e)=>{setSubjectName(e.target.value)}}
            value={subjectName}
          />
        </div>
        <div className="form-group">
          <label>Grade</label>
          <select
            className='form-select'
            onChange={(e)=>{setGrade(e.target.value)}}
            value={grade}
          >
            <option value="">Select</option>
            <option value="4.00">A+</option>
            <option value="4.00">A</option>
            <option value="3.70">A-</option>
            <option value="3.30">B+</option>
            <option value="3.00">B</option>
            <option value="2.70">B-</option>
            <option value="2.30">C+</option>
            <option value="2.00">C</option>
            <option value="1.70">C-</option>
            <option value="1.30">D+</option>
            <option value="1.00">D</option>
            <option value="0.00">E</option>
          </select>
        </div>
        <div className="form-group">
          <label>Credit</label>
          <input 
            type="text" 
            className='form-control'
            onChange={e=>setCredit(e.target.value)}
            value={credit}
          />
        </div>
        <div className="form-group">
          <label>Semester</label>
          <input 
            type="text" 
            className='form-control'
            onChange={e=>setSemester(e.target.value)}
            value={semester}
          />
        </div>
        <div className="btn-div">
          <button className='btn btn-outline-warning'>ADD</button>
        </div>
      </form>
    </div>
  )
}

export default SubjectForm