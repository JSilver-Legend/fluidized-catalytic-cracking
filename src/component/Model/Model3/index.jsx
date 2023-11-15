import React from 'react'
import { useSelector } from 'react-redux'
import { DoubleSide } from 'three'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Model3 = () => {
    const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
    const interiorView = useSelector((state) => state.modelConfig.interiorView)

    const body = useLoader(GLTFLoader, '/assets/model/3/body.glb')
    
  return (modelIndex === 0 || modelIndex === 3) && (
    <group position={modelIndex === 0 ? [-180, -190, -160] : [0, -55, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.05, 0.05, 0.05]}>
        <mesh geometry={body.nodes.body.geometry}>
            <meshStandardMaterial side={DoubleSide} color='white' roughness={0.5} metalness={0.9} opacity={interiorView ? 0.1 : 1} transparent />
        </mesh>
    </group>
  )
}

export default Model3