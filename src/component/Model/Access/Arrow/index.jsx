import React from 'react'
import { useSelector } from 'react-redux'

const ArrowModel = () => {
    const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
    const isConnectionState = useSelector((state) => state.modelConfig.isConnectionState)

  return (isConnectionState && modelIndex === 0) &&(
    <group position={[65, 140, 100]} rotation={[Math.PI, 0, 0]} scale={[0.6, 0.6, 0.6]}>
        <mesh position={[0, 35, 0]}>
            <coneGeometry args={[5, 10, 20, 1]} />
            <meshStandardMaterial color='pink' metalness={0.3} roughness={0.3} />
        </mesh>
        <mesh position={[0, 15, 0]}>
            <cylinderGeometry args={[2, 2, 30, 20, 1]} />
            <meshStandardMaterial color='pink' metalness={0.3} roughness={0.3} />
        </mesh>
    </group>
  )
}

export default ArrowModel