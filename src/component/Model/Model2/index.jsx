import React from 'react'
import { useSelector } from 'react-redux'
import { DoubleSide } from 'three'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Model2 = () => {
    const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
    const interiorView = useSelector((state) => state.modelConfig.interiorView)

    const body = useLoader(GLTFLoader, '/assets/model/2/body.glb')
    const top_tap = useLoader(GLTFLoader, '/assets/model/2/top_tap.glb')
    const ring = useLoader(GLTFLoader, '/assets/model/2/ring.glb')
    const pillar_1 = useLoader(GLTFLoader, '/assets/model/2/pillar_1.glb')
    const pillar_2 = useLoader(GLTFLoader, '/assets/model/2/pillar_2.glb')
    const filter_case = useLoader(GLTFLoader, '/assets/model/2/filter_case.glb')
    const filter_route = useLoader(GLTFLoader, '/assets/model/2/filter_route.glb')

  return (modelIndex === 0 || modelIndex === 2) && (
    <group position={modelIndex === 0 ? [100, -140, 100] : [0, -90, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.05, 0.05, 0.05]}>
        <group>
          <mesh geometry={body.nodes.body.geometry}>
            <meshStandardMaterial side={DoubleSide} color='white' roughness={0.5} metalness={0.9} opacity={interiorView ? 0.1 : 1} transparent />
          </mesh>
          <mesh geometry={ring.nodes.ring.geometry} position={[0, 24, 200]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.99, 1, 0.99]}>
            <meshStandardMaterial side={DoubleSide} color='white' roughness={0.5} metalness={0.9} opacity={interiorView ? 0.1 : 1} transparent />
          </mesh>
          <mesh geometry={top_tap.nodes.top_tap.geometry} position={[0, 0, 3450]}>
            <meshStandardMaterial side={DoubleSide} color={interiorView ? '#3F4F6D' : 'white'} roughness={0.5} metalness={0.9} />
          </mesh>
        </group>

        {interiorView && 
          <group>
            <mesh geometry={pillar_1.nodes.pillar_1.geometry} position={[-175, 0, 200]}>
              <meshStandardMaterial side={DoubleSide} color='#743A25' roughness={0.5} metalness={0.9} />
            </mesh>
            <mesh geometry={pillar_2.nodes.pillar_2.geometry} position={[175, 0, 200]}>
              <meshStandardMaterial side={DoubleSide} color='#743A25' roughness={0.5} metalness={0.9} />
            </mesh>
            <mesh geometry={filter_case.nodes.filter_case.geometry} position={[0, 0, 3200]} rotation={[0, 0, Math.PI]}>
              <meshStandardMaterial side={DoubleSide} color='#274A77' roughness={0.5} metalness={0.9} />
            </mesh>
            <mesh geometry={filter_route.nodes.filter_route.geometry} position={[0, 0, 3200]} rotation={[0, 0, Math.PI]}>
              <meshStandardMaterial side={DoubleSide} color='#854A34' roughness={0.5} metalness={0.9} />
            </mesh>
          </group>
        }
    </group>
  )
}

export default Model2