import React from 'react'
import { useLoader } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import './style.css'

const Model = ({ isToggle, texture }) => {
  const { nodes } = useLoader(GLTFLoader, '/assets/model/model.glb')
  console.log('nodes: ', nodes);
    
  return (
    <group>
      {isToggle ?
        <group name='html-element'>
          <group name='step-1' position={[-4, 1.5, -1]}>
            <mesh position={[-13.5, 9, 15]}>
              <sphereGeometry args={[5, 32]} />
              <meshStandardMaterial color={'lightgreen'} opacity={0.3} transparent />
            </mesh>
            <Html position={[-10, 10, 20]}>
              <div className='text'>step 1</div>
            </Html>
          </group>
          <group name='step-2' position={[-5.5, 0, -1]}>
            <mesh position={[7, 3, 1]}>
              <sphereGeometry args={[6, 32]} />
              <meshStandardMaterial color={'red'} opacity={0.3} transparent />
            </mesh>
            <Html position={[10, 0, 5]}>
              <div className='text'>step 2</div>
            </Html>
          </group>
          <group name='step-3' position={[-5, 0, -1]}>
            <mesh position={[-15, -40, 16]}>
              <sphereGeometry args={[9, 32]} />
              <meshStandardMaterial color={'yellow'} opacity={0.3} transparent />
            </mesh>
            <Html position={[-16, -40, 27]}>
              <div className='text'>step 3</div>
            </Html>
          </group>
        </group>
        :
        null
      }

      <mesh
        geometry={nodes._1.geometry}
        position={[-18, 25, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.025, 0.025, 0.025]}>
        <meshStandardMaterial color={texture} roughness={0.5} metalness={0.9} />
      </mesh>
    </group>
  )
}

export default Model