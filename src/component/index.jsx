import React, { Fragment, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import CanvasEnv from './CanvasCmp/CanvasEnv'
import Model from './CanvasCmp/Model'
import ControlPanel from './UICmp/ControlPanel'

const Component = () => {    

  return (
    <Fragment>
        <ControlPanel />
        <Canvas
            style={{ height: '100vh' }}
            camera={{
                position: [0, 140, 550],
                aspect: window.innerWidth / window.innerHeight,
                fov: 45,
                near: 0.1,
                far: 100000
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

export default Component