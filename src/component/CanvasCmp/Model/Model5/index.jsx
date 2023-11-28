import React from 'react'
import { useSelector } from 'react-redux'
import { useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three'

import { TextureAnisotropy } from '../../../../utils/TextureEnhance'
import FilterModel from '../Access/Filter'

const Model5 = () => {
    const { gl } = useThree()
  
    const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
    const interiorView = useSelector((state) => state.modelConfig.interiorView)

    const body = useLoader(GLTFLoader, '/assets/model/5/body.glb')
    const texture = useLoader(TextureLoader, '/assets/texture/5/body.jpg');
    TextureAnisotropy(gl, texture);
    
  return (modelIndex === 0 || modelIndex === 5) && (
    <group castShadow position={modelIndex === 0 ? [150, 0, 95] : [0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.05, 0.05, 0.05]}>
      <mesh castShadow geometry={body.nodes.body.geometry}>
        <meshStandardMaterial map={texture} bumpMap={texture} bumpScale={2} roughness={0.35} metalness={0.1} opacity={interiorView ? 0.3 : 1} transparent />
      </mesh>
      
      {interiorView &&
        <group position={[0, 0, 450]} scale={[0.12, 0.12, 0.15]}>
          {new Array(6).fill('').map((_, index) => (
            <group key={`model-2-${index}`} name='filter' position={[0, 0, index * 350]} rotation={[0, 0, index % 2 === 0 ? 0 : Math.PI]}>
              <FilterModel />
            </group>
          ))}
        </group>
      }

      {interiorView &&
        <group position={[0, 0, 1050]} scale={[0.1, 0.1, 0.15]}>
          {new Array(6).fill('').map((_, index) => (
            <group key={`model-2-${index}`} name='filter' position={[0, 0, index * 350]} rotation={[0, 0, index % 2 === 0 ? 0 : Math.PI]}>
              <FilterModel />
            </group>
          ))}
        </group>
      }
    </group>
  )
}

export default Model5