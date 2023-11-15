import React from 'react'
import { useSelector } from 'react-redux'
import { DoubleSide } from 'three'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Model5 = () => {
    const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
    const interiorView = useSelector((state) => state.modelConfig.interiorView)

    const body = useLoader(GLTFLoader, '/assets/model/5/body.glb')
    const filter_case = useLoader(GLTFLoader, '/assets/model/5/filter_case.glb')
    const filter_route = useLoader(GLTFLoader, '/assets/model/5/filter_route.glb')
    
  return (modelIndex === 0 || modelIndex === 5) && (
    <group position={modelIndex === 0 ? [140, -190, 95] : [0, -35, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.05, 0.05, 0.05]}>
      <mesh geometry={body.nodes.body.geometry}>
          <meshStandardMaterial side={DoubleSide} color='white' roughness={0.5} metalness={0.9} opacity={interiorView ? 0.1 : 1} transparent />
      </mesh>
        {interiorView &&
          <group>
            <group name='upper-section' position={[0, 0, 400]}>
              {new Array(6).fill('').map((_, index) => (
                <group key={`model-7-${index}`} name='filter' position={[0, 0, index * 60]}  rotation={[0, 0, index % 2 === 0 ? 0 : Math.PI]}>
                  <mesh name='filter-case' geometry={filter_case.nodes.filter_case.geometry}>
                          <meshStandardMaterial side={DoubleSide} color='#274A77' roughness={0.5} metalness={0.5} />
                  </mesh>
                  <mesh name='filter-route' geometry={filter_route.nodes.filter_route.geometry} position={[0, 0, 1]}>
                          <meshStandardMaterial side={DoubleSide} color='#854A34' roughness={0.5} metalness={0.9} />
                  </mesh>
                </group>
              ))}
            </group>
            <group name='lower-section' position={[0, 0, 1050]}>
              {new Array(6).fill('').map((_, index) => (
                <group key={`model-7-${index}`} name='filter' position={[0, 0, index * 50]}  rotation={[0, 0, index % 2 === 0 ? 0 : Math.PI]} scale={[0.75, 0.75, 1]}>
                  <mesh name='filter-case' geometry={filter_case.nodes.filter_case.geometry}>
                          <meshStandardMaterial side={DoubleSide} color='#274A77' roughness={0.5} metalness={0.5} />
                  </mesh>
                  <mesh name='filter-route' geometry={filter_route.nodes.filter_route.geometry} position={[0, 0, 1]}>
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

export default Model5