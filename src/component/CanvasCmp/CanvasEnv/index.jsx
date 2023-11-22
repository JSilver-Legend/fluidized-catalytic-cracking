import React, { useEffect, useRef } from 'react'
import { Environment, CameraControls } from '@react-three/drei'
import { useSelector } from 'react-redux'

import Ground from './Ground';

const CanvasEnv = () => {
  const cameraControlsRef = useRef();
  const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
  
  useEffect(() => {

  }, [modelIndex])
  
  return (
    <>
        <directionalLight position={[3000, 100, 3000]} intensity={0.5} />
        <directionalLight position={[3000, 100, -3000]} intensity={0.5} />
        <directionalLight position={[-3000, 100, 3000]} intensity={0.5} />
        <directionalLight position={[-3000, 100, -3000]} intensity={0.5} />
        <ambientLight intensity={0.1} />

        <Environment preset='city' background blur={0.7} far={100} />
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