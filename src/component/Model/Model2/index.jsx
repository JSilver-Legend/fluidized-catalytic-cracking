import React from 'react'
import { useSelector } from 'react-redux'
import { DoubleSide } from 'three'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Model2 = () => {
    const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
    const interiorView = useSelector((state) => state.modelConfig.interiorView)

    const body = useLoader(GLTFLoader, '/assets/model/2/body.glb')
    const filter_case = useLoader(GLTFLoader, '/assets/model/2/filter_case.glb')
    const filter_route = useLoader(GLTFLoader, '/assets/model/2/filter_route.glb')

  return (modelIndex === 0 || modelIndex === 2) && (
    <group position={modelIndex === 0 ? [110, -160, 100] : [0, -90, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.05, 0.05, 0.05]}>
        <group>
          <mesh name='body' geometry={body.nodes.body.geometry}>
            <meshStandardMaterial side={DoubleSide} color='white' roughness={0.5} metalness={0.9} opacity={interiorView ? 0.1 : 1} transparent />
          </mesh>
        </group>

        {interiorView && 
            <group position={[0, 0, 450]}>
              {new Array(40).fill('').map((_, index) => (
                <group key={`model-2-${index}`} name='filter' position={[0, 0, index * 71]} rotation={[0, 0, index % 2 === 0 ? 0 : Math.PI]}>
                  <mesh name='filter-case' geometry={filter_case.nodes.filter_case.geometry}>
                    <meshStandardMaterial side={DoubleSide} color='#274A77' roughness={0.5} metalness={0.5} />
                  </mesh>
                  <mesh name='filter-route' geometry={filter_route.nodes.filter_route.geometry} position={[0, 0, 5]}>
                    <meshStandardMaterial side={DoubleSide} color='#854A34' roughness={0.5} metalness={0.9} />
                  </mesh>
                </group>
              ))}
          </group>
        }
    </group>
  )
}

export default Model2