import React from 'react'
import './css/Headings.css'

const TableHeading = (props) => {
  return (
    <div className='table-heading'>
      {props.text}
    </div>
  )
}

export default TableHeading