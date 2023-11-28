import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setIsLoaded } from '../../../redux/reducer'

import Model1 from './Model1'
import Model2 from './Model2'
import Model3 from './Model3'
import Model4 from './Model4'
import Model5 from './Model5'
import Model6 from './Model6'
import Model7 from './Model7'
import Connection from './Connection'

import './style.css'

const Model = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoaded(true));
  }, [])
  
  return (
    <group castShadow receiveShadow>
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