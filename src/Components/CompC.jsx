import React from 'react'
import { context } from '../App'

const CompC = () => {
  return (
    <div >
        <h1 className='text-green-600'>I am from component C</h1>
        <context.Consumer>{(a) => {
            return<h1 className='text-purple-600 bg-purple-200 inline-block'>{a}</h1>
        }
        }</context.Consumer>
    </div>
  )
}

export default CompC