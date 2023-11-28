import * as THREE from 'three';
import React from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useSelector } from 'react-redux';

import { TextureAnisotropy } from '../../../../../../utils/TextureEnhance';

const ConnectionModel = () => {
  const { gl } = useThree()
  const interiorView = useSelector((state) => state.modelConfig.interiorView)

    const connection = useLoader(GLTFLoader, '/assets/model/access/connection_1_2/connection_model.glb')
    const texture = useLoader(THREE.TextureLoader, '/assets/texture/1/_white.jpg');
    TextureAnisotropy(gl, texture);

  return (
    <group castShadow receiveShadow position={[78.5, 190, 100]} scale={[0.04, 0.04, 0.04]}>
        <mesh castShadow receiveShadow name='connection_model' geometry={connection.nodes.connection.geometry}>
            <meshStandardMaterial map={texture} bumpMap={texture} bumpScale={2} roughness={0.35} metalness={0.1} opacity={interiorView ? 0.3 : 1} transparent />
        </mesh>
    </group>
  )
}

export default ConnectionModel;