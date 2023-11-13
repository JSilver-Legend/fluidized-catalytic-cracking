import React, { Fragment, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import CanvasEnv from '../CanvasEnv'
import Model from '../Model'
import ControlPanel from '../ControlPanel'

const MainScene = () => {    
    

  return (
    <Fragment>
        <ControlPanel />
        <Canvas
            style={{ backgroundColor : '#333333', height: '100vh' }}
            camera={{
                position: [0, 50, 250],
                aspect: window.innerWidth / window.innerHeight,
                fov: 45,
                near: 0.1,
                far: 1000
            }}
            shadows
            >
            <Suspense fallback={null}>
                <Model />
            </Suspense>
            <CanvasEnv />
        </Canvas>
    </Fragment>
  )
}

export default MainScene