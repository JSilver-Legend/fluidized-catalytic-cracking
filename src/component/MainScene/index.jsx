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
            style={{ backgroundColor : '#444444', height: '100vh' }}
            camera={{
                position: [0, 50, 250],
                aspect: window.innerWidth / window.innerHeight,
                fov: 45,
                near: 1,
                far: 10000
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