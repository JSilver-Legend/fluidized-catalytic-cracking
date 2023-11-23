import React from 'react'
import { useSelector } from 'react-redux'
import { useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three'
import { TextureAnisotropy } from '../../../../utils/TextureEnhance'

const Model4 = () => {
    const { gl } = useThree()
    const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
    const interiorView = useSelector((state) => state.modelConfig.interiorView)

    const body = useLoader(GLTFLoader, '/assets/model/4/body.glb')
    const texture = useLoader(TextureLoader, '/assets/texture/4/body.jpg');
    TextureAnisotropy(gl, texture);
    
  return (modelIndex === 0 || modelIndex === 4) && (
    <group castShadow position={modelIndex === 0 ? [-100, 0, -140] : [0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.05, 0.05, 0.05]}>
        <mesh castShadow geometry={body.nodes.body.geometry}>
          <meshStandardMaterial map={texture} bumpMap={texture} bumpScale={2} roughness={0.35} metalness={0.1} opacity={interiorView ? 0.4 : 1} transparent />
        </mesh>
    </group>
  )
}

export default Model4