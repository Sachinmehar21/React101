import React from 'react'
import CompB from './CompB'

const CompA = () => {
  return (
    <div>
        <h1 className='text-red-600'>I am from component A</h1>
        <CompB/>
    </div>
  )
}

export default CompA