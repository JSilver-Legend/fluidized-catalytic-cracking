import { useLoader } from '@react-three/fiber'
import React from 'react'
import { useSelector } from 'react-redux'
import { DoubleSide } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Stream3 = () => {
    const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
    const interiorView = useSelector((state) => state.modelConfig.interiorView)

    const stream = useLoader(GLTFLoader, '/assets/model/access/connection_1_2/stream_3.glb')
    console.log('stream: ', stream);
    
  return (modelIndex === 0 || modelIndex === 1) && (
    <group position={modelIndex === 0 ? [-100, 0, 100] : [-30, 40, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.05, 0.05, 0.05]}>
        <mesh geometry={stream.nodes.stream_model.geometry}>
            <meshStandardMaterial side={DoubleSide} color='white' roughness={0.5} metalness={0.9} opacity={interiorView ? 0.1 : 1} transparent />
        </mesh>
    </group>
  )
}

export default Stream3