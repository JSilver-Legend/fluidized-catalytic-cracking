import React from 'react'
import { useSelector } from 'react-redux'
import { DoubleSide } from 'three'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Model5 = () => {
    const modelIndex = useSelector((state) => state.modelConfig.modelIndex)

    const model = useLoader(GLTFLoader, '/assets/model/5/model.glb')
    
  return (modelIndex === 0 || modelIndex === 5) && (
    <group position={modelIndex === 0 ? [140, -200, 95] : [0, -70, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.05, 0.05, 0.05]}>
        <mesh geometry={model.nodes.model.geometry}>
            <meshStandardMaterial side={DoubleSide} color='white' roughness={0.5} metalness={0.9} />
        </mesh>
    </group>
  )
}

export default Model5