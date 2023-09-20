import React from 'react'
import './css/Headings.css'

const CompanyName = (props) => {
  return (
    <div className='company-title'>
        {props.text}
      </div>
  )
}

export default CompanyName