import React from 'react'
import { useSelector } from 'react-redux'
import { DoubleSide } from 'three'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Model7 = () => {
    const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
    const interiorView = useSelector((state) => state.modelConfig.interiorView)

    const body = useLoader(GLTFLoader, '/assets/model/7/body.glb')
    const filter_case = useLoader(GLTFLoader, '/assets/model/7/filter_case.glb')
    const filter_route = useLoader(GLTFLoader, '/assets/model/7/filter_route.glb')
    
  return (modelIndex === 0 || modelIndex === 7) && (
    <group castShadow position={modelIndex === 0 ? [-700, -190, -170] : [0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.05, 0.05, 0.05]}>
        <mesh castShadow geometry={body.nodes.body.geometry}>
            <meshStandardMaterial side={DoubleSide} color='white' roughness={0.5} metalness={0.9} opacity={interiorView ? 0.1 : 1} transparent />
        </mesh>
        {interiorView &&
          <group name='filter-model'>
            <group name='upper-section' position={[0, 0, 380]}>
              {new Array(23).fill('').map((_, index) => (
                <group key={`model-7-upper-${index}`} name='filter' position={[0, 0, index * 45]}  rotation={[0, 0, index % 2 === 0 ? 0 : Math.PI]} scale={[1, 1, 0.6]}>
                  <mesh name='filter-case' geometry={filter_case.nodes.filter_case.geometry}>
                          <meshStandardMaterial side={DoubleSide} color='#274A77' roughness={0.5} metalness={0.5} />
                  </mesh>
                  <mesh name='filter-route' geometry={filter_route.nodes.filter_route.geometry} position={[0, 0, 1]} rotation={[Math.PI / 2, 0, 0]}>
                          <meshStandardMaterial side={DoubleSide} color='#854A34' roughness={0.5} metalness={0.9} />
                  </mesh>
                </group>
              ))}
            </group>

            <group name='under-section' position={[0, 0, 1500]}>
              {new Array(19).fill('').map((_, index) => (
                <group key={`model-7-under-${index}`} name='filter' position={[0, 0, index * 35]}  rotation={[0, 0, index % 2 === 0 ? 0 : Math.PI]} scale={[0.8, 0.8, 0.5]}>
                  <mesh name='filter-case' geometry={filter_case.nodes.filter_case.geometry}>
                          <meshStandardMaterial side={DoubleSide} color='#274A77' roughness={0.5} metalness={0.5} />
                  </mesh>
                  <mesh name='filter-route' geometry={filter_route.nodes.filter_route.geometry} position={[0, 0, 1]} rotation={[Math.PI / 2, 0, 0]}>
                          <meshStandardMaterial side={DoubleSide} color='#854A34' roughness={0.5} metalness={0.9} />
                  </mesh>
                </group>
              ))}
            </group>
          </group>
        }
    </group>
  )
}

export default Model7