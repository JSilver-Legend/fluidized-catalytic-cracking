import * as THREE from 'three'
import React from 'react'
import { useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { TextureAnisotropy } from '../../../../../utils/TextureEnhance'

const FilterModel = () => {
    const { gl } = useThree()
  
      const filter_case = useLoader(GLTFLoader, '/assets/model/access/filter/case.glb')
      const filter_route = useLoader(GLTFLoader, '/assets/model/access/filter/route.glb')
      const texture_case = useLoader(THREE.TextureLoader, '/assets/texture/filter_case.jpg');
      texture_case.wrapS = texture_case.wrapT = THREE.RepeatWrapping
      texture_case.repeat.set(1, 20)
      TextureAnisotropy(gl, texture_case);
  
    return (
      <group>
          <mesh castShadow receiveShadow name='filter_case' geometry={filter_case.nodes.filter_case.geometry}>
              <meshStandardMaterial map={texture_case} bumpMap={texture_case} bumpScale={2} />
          </mesh>
          <mesh castShadow receiveShadow name='filter_route' geometry={filter_route.nodes.filter_route.geometry}>
              <meshStandardMaterial color={'#854A34'} bumpScale={2} roughness={0.35} metalness={0.1} />
          </mesh>
      </group>
    )
}

export default FilterModel