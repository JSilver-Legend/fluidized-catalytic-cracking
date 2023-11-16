import React from 'react'

import './style.css'

import Model1 from './Model1'
import Model2 from './Model2'
import Model3 from './Model3'
import Model4 from './Model4'
import Model5 from './Model5'
import Model6 from './Model6'
import Model7 from './Model7'
import Connection from '../Connection'

const Model = () => {    
  return (
    <group>
      <Model1 />
      <Model2 />
      <Model3 />
      <Model4 />
      <Model5 />
      <Model6 />
      <Model7 />
      <Connection />
    </group>
  )
}

export default Model