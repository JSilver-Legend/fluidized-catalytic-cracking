import * as THREE from 'three';
import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useSelector } from 'react-redux';

const ConnectionModel = () => {
  const interiorView = useSelector((state) => state.modelConfig.interiorView)

    const connection = useLoader(GLTFLoader, '/assets/model/access/connection_1_2/connection.glb')

  return (
    <group castShadow receiveShadow position={[26.2, 24.5, 100]} scale={[0.05, 0.05, 0.05]}>
        <mesh castShadow receiveShadow name='connection_model' geometry={connection.nodes.connection_model.geometry}>
            <meshStandardMaterial side={THREE.DoubleSide} color='white' roughness={0.5} metalness={0.9} opacity={interiorView ? 0.1 : 1} transparent />
        </mesh>
    </group>
  )
}

export default ConnectionModel;