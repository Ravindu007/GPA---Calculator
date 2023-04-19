import React, { useState } from 'react'

const SubjectCard = ({subject}) => {
  const [isEditing ,setIsEditing] = useState(false)
  return (
    <>
      {!isEditing  && (
        <div className="col-12 card bg-dark noEdit">
          <p><span className='tag'>Subject: </span>{subject.subjectName}</p>
          <p><span className='tag'>Grade: </span>{subject.grade}</p>
          <p><span className='tag'>Credit: </span>{subject.credit}</p>
          <p><span className='tag'>Semester: </span>{subject.semester}</p>

          <div className="btn-div">
            <button 
              className='btn btn-outline-success'
              onClick={()=>{
                setIsEditing(true)
              }}
            >Update</button>
            <button className='btn btn-outline-danger'>Delete</button>
          </div>
        </div>
      )}
      {isEditing && (
        <form>
          <div className="form-group">
          <label>Subject Name</label>
          <input 
            type="text" 
            className='form-control'
          />
          </div>
          <div className="form-group">
            <label>Grade</label>
            <select
              className='form-select'
            >
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="B-">B-</option>
              <option value="C+">C+</option>
              <option value="C">C</option>
              <option value="C-">C-</option>
              <option value="D+">D+</option>
              <option value="D">D</option>
              <option value="E">E</option>
            </select>
          </div>
          <div className="form-group">
            <label>Credit</label>
            <input 
              type="text" 
              className='form-control'
            />
          </div>
          <div className="form-group">
            <label>Semester</label>
            <input 
              type="text" 
              className='form-control'
            />
          </div>
          <div className="btn-div">
            <button className='btn btn-outline-primary'>Save</button>
            <button 
              className='btn btn-outline-secondary'
              onClick={()=>{
                setIsEditing(false)
              }}
            >Cancel</button>
          </div>
        </form>
      )}
    </>
  )
}

export default SubjectCard