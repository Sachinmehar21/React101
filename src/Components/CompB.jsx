import React from 'react'
import CompC from './CompC'

const CompB = () => {
  return (
    <div>
         <h1 className='text-blue-600'>I am from component B</h1>
        <CompC/>
    </div>
  )
}

export default CompB