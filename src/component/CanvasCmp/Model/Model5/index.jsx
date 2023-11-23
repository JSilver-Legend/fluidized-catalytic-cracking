import React from 'react'
import { useSelector } from 'react-redux'
import { DoubleSide } from 'three'
import { useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three'
import { TextureAnisotropy } from '../../../../utils/TextureEnhance'

const Model5 = () => {
    const { gl } = useThree()
  
    const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
    const interiorView = useSelector((state) => state.modelConfig.interiorView)

    const body = useLoader(GLTFLoader, '/assets/model/5/body.glb')
    const texture = useLoader(TextureLoader, '/assets/texture/5/body.jpg');
    TextureAnisotropy(gl, texture);
    
  return (modelIndex === 0 || modelIndex === 5) && (
    <group castShadow position={modelIndex === 0 ? [140, 0, 95] : [0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.05, 0.05, 0.05]}>
      <mesh castShadow geometry={body.nodes.body.geometry}>
          <meshStandardMaterial map={texture} bumpMap={texture} bumpScale={2} roughness={0.35} metalness={0.1} opacity={interiorView ? 0.4 : 1} transparent />
      </mesh>
      
      <InteriorObj interiorView={interiorView} />
    </group>
  )
}

export default Model5

const InteriorObj = ({ interiorView }) => {
  const filter_case = useLoader(GLTFLoader, '/assets/model/5/filter_case.glb')
  const filter_route = useLoader(GLTFLoader, '/assets/model/5/filter_route.glb')

  return interiorView && (
      <group name='filter-models'>
        <group name='upper-section' position={[0, 0, 400]}>
          {new Array(6).fill('').map((_, index) => (
            <group key={`model-5-${index}`} name='filter' position={[0, 0, index * 60]}  rotation={[0, 0, index % 2 === 0 ? 0 : Math.PI]}>
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
            <group key={`model-5-${index}`} name='filter' position={[0, 0, index * 50]}  rotation={[0, 0, index % 2 === 0 ? 0 : Math.PI]} scale={[0.75, 0.75, 1]}>
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
  )
}