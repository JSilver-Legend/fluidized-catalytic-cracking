import * as THREE from 'three';
import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useSelector } from 'react-redux';

const Connection = () => {
    const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
    const isConnectionState = useSelector((state) => state.modelConfig.isConnectionState)

    const connection_1_2 = useLoader(GLTFLoader, '/assets/model/access/connection_1_2.glb')

  return (isConnectionState && modelIndex === 0) && (
    <group position={[14.5, 40, 100]} scale={[0.05, 0.05, 0.05]}>
        <mesh name='connection_1_2' geometry={connection_1_2.nodes.connection_1_2.geometry}>
          <meshStandardMaterial side={THREE.DoubleSide} color='white' roughness={0.5} metalness={0.9} />
        </mesh>
    </group>
  )
}

export default Connection