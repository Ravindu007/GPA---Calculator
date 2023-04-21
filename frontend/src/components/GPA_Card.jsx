import React, { useEffect, useState } from 'react'
import { useGPAcalculation } from '../hooks/useGPAcalculation'

import "./GPA_Card.scss"

const GPA_Card = () => {

  const {calculateGPA} = useGPAcalculation()

  const [gpa, setGpa] = useState(null)

  useEffect(()=>{
    calculateGPA()
      .then(gpa => {
        setGpa(gpa);
      })
    
  },[])

  return (
    <div className='col-12 card gpa-card bg-dark'>
      <div className="card-body">
        <h1>GPA = {gpa}</h1>
      </div>
    </div>
  )
}

export default GPA_Card