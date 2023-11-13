import React from 'react'
import { OrbitControls } from '@react-three/drei'

const CanvasEnv = () => {
  return (
    <group>
        <OrbitControls
            minDistance={10}
            maxDistance={400}
        />
        <directionalLight position={[100, 100, 100]} intensity={2} />
        <directionalLight position={[100, 100, -100]} intensity={1} />
        <directionalLight position={[-100, 100, -100]} intensity={1} />
        <directionalLight position={[-100, 100, 100]} intensity={1} />
        <ambientLight intensity={0.5} />
        <gridHelper args={[1000, 50, 0x999999, 0x555555]} position={[0, -80, 0]} />
    </group>
  )
}

export default CanvasEnv