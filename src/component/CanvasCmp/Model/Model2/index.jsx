import React from 'react'
import { useSelector } from 'react-redux'
import { TextureLoader } from 'three'
import { useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { TextureAnisotropy } from '../../../../utils/TextureEnhance'
import FilterModel from '../Access/Filter'

const Model2 = () => {
    const { gl } = useThree();
    const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
    const interiorView = useSelector((state) => state.modelConfig.interiorView)

    const body = useLoader(GLTFLoader, '/assets/model/2/body.glb')
    const texture = useLoader(TextureLoader, '/assets/texture/2/body.jpg');
    TextureAnisotropy(gl, texture);

  return (modelIndex === 0 || modelIndex === 2) && (
    <group castShadow position={modelIndex === 0 ? [120, 20, 100] : [0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.05, 0.05, 0.05]}>
        <mesh castShadow name='body' geometry={body.nodes.body.geometry}>
            <meshStandardMaterial map={texture} bumpMap={texture} bumpScale={2} roughness={0.35} metalness={0.1} opacity={interiorView ? 0.3 : 1} transparent />
        </mesh>

        {interiorView &&
          <group position={[0, 0, 350]} scale={[0.9, 0.9, 1]}>
            {new Array(40).fill('').map((_, index) => (
              <group key={`model-2-${index}`} name='filter' position={[0, 0, index * 73]} rotation={[0, 0, index % 2 === 0 ? 0 : Math.PI]}>
                <FilterModel />
              </group>
            ))}
          </group>
        }
    </group>
  )
}

export default Model2