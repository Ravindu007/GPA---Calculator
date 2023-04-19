import React from 'react'

const SubjectCard = ({subject}) => {
  return (
    <div className="col-12 card bg-dark">
      <p><span>Subject: </span>{subject.subjectName}</p>
      <p><span>Grade: </span>{subject.grade}</p>
      <p><span>Credit: </span>{subject.credit}</p>
      <p><span>Semester: </span>{subject.semester}</p>
    </div>
  )
}

export default SubjectCard