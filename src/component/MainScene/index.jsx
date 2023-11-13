import React, { Fragment, Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'

import CanvasEnv from '../CanvasEnv'
import Model from '../Model'
import ControlPanel from '../ControlPanel'

const MainScene = () => {    
  const [isToggle, setIsToggle] = useState(false)
  const [texture, setTexture] = useState('white')
    
  return (
    <Fragment>
        <ControlPanel isToggle={isToggle} setIsToggle={setIsToggle} setTexture={setTexture} />
        <Canvas
            style={{ backgroundColor : '#333333', height: '100vh' }}
            camera={{
                position: [0, 0, 200],
                aspect: window.innerWidth / window.innerHeight,
                fov: 45,
                near: 0.1,
                far: 1000
            }}
            shadows
            >
            <Suspense fallback={null}>
                <Model isToggle={isToggle} texture={texture} />
            </Suspense>
            <CanvasEnv />
        </Canvas>
    </Fragment>
  )
}

export default MainScene