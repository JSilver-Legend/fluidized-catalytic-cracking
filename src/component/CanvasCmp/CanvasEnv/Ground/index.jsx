import * as THREE from 'three'
import { Grid } from '@react-three/drei'
import React from 'react'

const Ground = () => {
  const gridConfig = {
    cellSize: 15,
    cellThickness: 0.7,
    cellColor: '#837474',
    sectionSize: 75,
    sectionThickness: 1,
    sectionColor: '#FF2600',
    fadeDistance: 1500,
    fadeStrngth: 5,
    followCamera: true,
    infinitedGrid: false
  }
  const deg2Rad = THREE.MathUtils
  console.log('deg2Rad: ', deg2Rad);
    
  return <Grid position={[0, 0, 0]} args={[5000, 5000]} { ...gridConfig } />
}

export default Ground