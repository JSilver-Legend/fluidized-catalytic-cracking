import React, { useEffect } from 'react'
import { useLoader, useThree } from '@react-three/fiber'
import { useSelector } from 'react-redux'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import './style.css'
import gsap from 'gsap'

const Model = ({ isToggle, texture }) => {
  const { camera } = useThree();
  console.log('camera: ', camera);
  
  const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
  
  const model_0 = useLoader(GLTFLoader, '/assets/model/0.glb')
  const model_1 = useLoader(GLTFLoader, '/assets/model/1.glb')
  const model_2 = useLoader(GLTFLoader, '/assets/model/2.glb')
  
  const model = [
    model_0,
    model_1,
    model_2,
  ]

  const positionInfo = [
    [40, -60, 0],
    [-20, 30, 0],
    [0, -50, 0],
  ]
  
  useEffect(() => {
    gsap.to(camera, {
      onStart: () => {
      },
      
    })
    if (modelIndex === 0) {

    }
  }, [modelIndex])
  
  return (
    <group>
      <mesh
        geometry={model[modelIndex].nodes.model.geometry}
        position={positionInfo[modelIndex]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.025, 0.025, 0.025]}>
        <meshStandardMaterial color={texture} roughness={0.5} metalness={0.9} />
      </mesh>
    </group>
  )
}

export default Model