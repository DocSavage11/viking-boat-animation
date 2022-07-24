import React from 'react'

import './World.css'

import Sky from './Sky'
import Sea from './Sea'

const Container = () => {
  return (
    <div className="World-Container">
        <Sky />
        <Sea />
    </div>
  )
}

export default Container