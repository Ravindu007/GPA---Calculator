import React from 'react'

const SubjectForm = () => {
  return (
    <div className='col-12 card bg-dark'>
      <h4>Add subject</h4>
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
          <button className='btn btn-outline-warning'>ADD</button>
        </div>
      </form>
    </div>
  )
}

export default SubjectForm