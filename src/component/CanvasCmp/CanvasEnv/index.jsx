import React, { useEffect, useRef } from 'react'
import { Environment, CameraControls } from '@react-three/drei'
import { useSelector } from 'react-redux'

import Ground from './Ground';

const CanvasEnv = () => {
  const cameraControlsRef = useRef();
  const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
  
  const cameraPosInfo = [
    {'model-number' : 0, 'target': [0, 100, 0], 'body': [0, 140, 550]},
    {'model-number' : 1, 'target': [0, 100, 0], 'body': [0, 140, 400]},
    {'model-number' : 2, 'target': [0, 100, 0], 'body': [0, 140, 300]},
    {'model-number' : 3, 'target': [0, 60, 0], 'body': [0, 100, 200]},
    {'model-number' : 4, 'target': [0, 30, 0], 'body': [0, 70, 100]},
    {'model-number' : 5, 'target': [0, 35, 0], 'body': [0, 75, 100]},
    {'model-number' : 6, 'target': [0, 60, 0], 'body': [0, 100, 200]},
    {'model-number' : 7, 'target': [0, 60, 0], 'body': [0, 100, 200]},
  ]
  
  useEffect(() => {
    if (cameraControlsRef.current) {
        cameraControlsRef.current.setTarget(...cameraPosInfo[modelIndex].target, 0, true);
        cameraControlsRef.current.setPosition(...cameraPosInfo[modelIndex].body, true);
    }
  }, [modelIndex])
  
  return (
    <>
        <directionalLight position={[3000, 100, 3000]} intensity={0.5} />
        <directionalLight position={[3000, 100, -3000]} intensity={0.5} />
        <directionalLight position={[-3000, 100, 3000]} intensity={0.5} />
        <directionalLight position={[-3000, 100, -3000]} intensity={0.5} />
        <ambientLight intensity={0.1} />

        <Environment preset='sunset' background blur={1} far={100} />
        <CameraControls
          ref={cameraControlsRef}
          dollyToCursor={true}
          maxDistance={2000}
        />

        <axesHelper args={[5000, 5000]} />

        <Ground />
    </>
  )
}

export default CanvasEnv