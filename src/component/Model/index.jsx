import React, { useEffect } from 'react'
import { useLoader } from '@react-three/fiber'
import { useSelector } from 'react-redux'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import './style.css'

const Model = () => {  
  const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
  
  const model_0 = useLoader(GLTFLoader, '/assets/model/0.glb')
  const model_1 = useLoader(GLTFLoader, '/assets/model/1.glb')
  const model_2 = useLoader(GLTFLoader, '/assets/model/2.glb')
  // const model_3_4 = useLoader(GLTFLoader, '/assets/model/3-4.glb')
  // const model_5 = useLoader(GLTFLoader, '/assets/model/5.glb')
  // const model_6 = useLoader(GLTFLoader, '/assets/model/6.glb')
  // const model_7 = useLoader(GLTFLoader, '/assets/model/7.glb')
  
  const model = [
    model_0,
    model_1,
    model_2,
    // model_3_4,
    // model_3_4,
    // model_5,
    // model_6,
    // model_7,
  ]

  const positionInfo = [
    [30, -50, 0],
    [-20, 30, 0],
    [0, -70, 0],
    [0, -60, 0],
    [0, -60, 0],
    [0, -75, 0],
    [0, -70, 0],
    [0, -70, 0],
  ]

  const scaleInfo = [
    [0.018, 0.018, 0.018],
    [0.025, 0.025, 0.025],
    [0.025, 0.025, 0.025],
    [0.1, 0.1, 0.1],
    [0.1, 0.1, 0.1],
    [0.055, 0.055, 0.055],
    [0.05, 0.05, 0.05],
    [0.045, 0.045, 0.045],
  ]
  
  return (
    <group>
      <mesh
        geometry={model[modelIndex].nodes.model.geometry}
        position={positionInfo[modelIndex]}
        scale={scaleInfo[modelIndex]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color='white' roughness={0.5} metalness={0.9} />
      </mesh>
    </group>
  )
}

export default Model