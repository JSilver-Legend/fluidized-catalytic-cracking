import { Grid } from '@react-three/drei'
import React from 'react'

const Ground = () => {
  const gridConfig = {
    cellSize: 15,
    cellThickness: 0.7,
    cellColor: '#3F3F3F',
    sectionSize: 75,
    sectionThickness: 1,
    sectionColor: '#9d4b4b',
    fadeDistance: 2000,
    fadStrngth: 0.5,
    infinitedGrid: true
  }
    
  return <Grid position={[0, 0, 0]} args={[5000, 5000]} { ...gridConfig } />
}

export default Ground