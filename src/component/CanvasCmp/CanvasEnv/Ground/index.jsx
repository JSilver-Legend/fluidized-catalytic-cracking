import { Grid } from '@react-three/drei'
import React from 'react'
import { useSelector } from 'react-redux'

const Ground = () => {
  const interiorView = useSelector((state) => state.modelConfig.interiorView)

  const gridConfig = {
    cellSize: 15,
    cellThickness: 0.7,
    cellColor: '#727C71',
    sectionSize: 75,
    sectionThickness: 1,
    sectionColor: '#FFFFFF',
    fadeDistance: 1500,
    fadeStrngth: 5,
    followCamera: true,
    infinitedGrid: false
  }
    
  return <Grid position={[0, 0, 0]} args={[5000, 5000]} { ...gridConfig } />
}

export default Ground