import React from 'react'
import { useSelector } from 'react-redux'
import { DoubleSide } from 'three'
import { useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three'

import { TextureAnisotropy } from '../../../../utils/TextureEnhance'
import FilterModel from '../Access/Filter'

const Model7 = () => {
    const { gl } = useThree()
    
    const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
    const interiorView = useSelector((state) => state.modelConfig.interiorView)

    const body = useLoader(GLTFLoader, '/assets/model/7/body.glb')
    const texture = useLoader(TextureLoader, '/assets/texture/7/body.jpg');
    TextureAnisotropy(gl, texture);
    
  return (modelIndex === 0 || modelIndex === 7) && (
    <group castShadow position={modelIndex === 0 ? [-550, 0, -100] : [0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.05, 0.05, 0.05]}>
        <mesh castShadow geometry={body.nodes.body.geometry}>
            <meshStandardMaterial map={texture} bumpMap={texture} bumpScale={2} roughness={0.35} metalness={0.1} opacity={interiorView ? 0.3 : 1} transparent />
        </mesh>
        
        {interiorView &&
          <group position={[0, 0, 400]} scale={[0.55, 0.55, 0.6]}>
            {new Array(23).fill('').map((_, index) => (
              <group key={`model-2-${index}`} name='filter' position={[0, 0, index * 72]} rotation={[0, 0, index % 2 === 0 ? 0 : Math.PI]}>
                <FilterModel />
              </group>
            ))}
          </group>
        }
        
        {interiorView &&
          <group position={[0, 0, 1510]} scale={[0.45, 0.45, 0.5]}>
            {new Array(19).fill('').map((_, index) => (
              <group key={`model-2-${index}`} name='filter' position={[0, 0, index * 66]} rotation={[0, 0, index % 2 === 0 ? 0 : Math.PI]}>
                <FilterModel />
              </group>
            ))}
          </group>
        }
    </group>
  )
}

export default Model7