import React from 'react'
import { useSelector } from 'react-redux'
import { DoubleSide, TextureLoader } from 'three'
import { useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureAnisotropy } from '../../../../utils/TextureEnhance'

const Model1 = () => {
    const { gl } = useThree()
  
    const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
    const interiorView = useSelector((state) => state.modelConfig.interiorView)

    const model = useLoader(GLTFLoader, '/assets/model/1/body.glb')

    const mat_white = useLoader(TextureLoader, '/assets/texture/1/_white.jpg');
    TextureAnisotropy(gl, mat_white);
    const mat_black = useLoader(TextureLoader, '/assets/texture/1/_black.jpg');
    TextureAnisotropy(gl, mat_black);
    const mat_orange = useLoader(TextureLoader, '/assets/texture/1/_orange.jpg');
    TextureAnisotropy(gl, mat_orange);
    const mat_1_body = useLoader(TextureLoader, '/assets/texture/1/1_body.jpg');
    TextureAnisotropy(gl, mat_1_body);
    const mat_1_leg_front = useLoader(TextureLoader, '/assets/texture/1/1_leg_front.jpg');
    TextureAnisotropy(gl, mat_1_leg_front);
    const mat_1_leg_main = useLoader(TextureLoader, '/assets/texture/1/1_leg_main.jpg');
    TextureAnisotropy(gl, mat_1_leg_main);
    const mat_2_body = useLoader(TextureLoader, '/assets/texture/1/2_body.jpg');
    TextureAnisotropy(gl, mat_2_body);
    const mat_connection_upper = useLoader(TextureLoader, '/assets/texture/1/connection_upper.jpg');
    TextureAnisotropy(gl, mat_connection_upper);
    
  return (modelIndex === 0 || modelIndex === 1) && (
    <group castShadow position={modelIndex === 0 ? [0, 0, 100] : [0, 0, 0]} scale={[0.05, 0.05, 0.05]}>
      <group name='left-model' position={[0, 200, 0]}>
        <mesh geometry={model.nodes['1_body'].geometry} rotation={[-Math.PI / 2, 0, 0]}>
            <meshStandardMaterial map={mat_1_body} bumpMap={mat_1_body} bumpScale={2} roughness={0.35} metalness={0.1} opacity={interiorView ? 0.3 : 1} transparent />
        </mesh>
        <mesh geometry={model.nodes['1_bottom_load'].geometry} position={[150, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
            <meshStandardMaterial map={mat_white} bumpMap={mat_white} bumpScale={2} roughness={0.35} metalness={0.1} />
        </mesh>
        <mesh geometry={model.nodes['1_key_ring_under_001'].geometry} position={[270, 305, 15]} rotation={[0, 0, 0]}>
            <meshStandardMaterial map={mat_white} bumpMap={mat_white} bumpScale={2} roughness={0.35} metalness={0.1} />
        </mesh>
        <mesh geometry={model.nodes['1_key_ring_under_001_1'].geometry} position={[270, 305, -15]} rotation={[0, 0, 0]}>
            <meshStandardMaterial map={mat_white} bumpMap={mat_white} bumpScale={2} roughness={0.35} metalness={0.1} />
        </mesh>
        <mesh geometry={model.nodes['1_leg_front'].geometry} position={[-350, 940, 0]} rotation={[0, 0, 0]}>
            <meshStandardMaterial map={mat_black} bumpMap={mat_black} bumpScale={2} roughness={0.35} metalness={0.1} />
        </mesh>
        <mesh geometry={model.nodes['1_route_s_001'].geometry} position={[-200, 2900, 405]} rotation={[-0.8, -0.4, 0]}>
            <meshStandardMaterial map={mat_orange} bumpMap={mat_orange} bumpScale={2} roughness={0.35} metalness={0.1} />
        </mesh>
        <mesh geometry={model.nodes['1_route_s_001'].geometry} position={[-300, 80, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <meshStandardMaterial map={mat_orange} bumpMap={mat_orange} bumpScale={2} roughness={0.35} metalness={0.1} />
        </mesh>
        <mesh geometry={model.nodes['1_route_b_001'].geometry} position={[0, 2500, 460]} rotation={[Math.PI, 0, 0]}>
            <meshStandardMaterial map={mat_black} bumpMap={mat_black} bumpScale={2} roughness={0.35} metalness={0.1} />
        </mesh>
        <mesh geometry={model.nodes['1_mid_small_cylinder_001'].geometry} position={[260, 1360, 260]} rotation={[-Math.PI / 2, 0, 0]}>
            <meshStandardMaterial map={mat_black} bumpMap={mat_black} bumpScale={2} roughness={0.35} metalness={0.1} />
        </mesh>
        <mesh geometry={model.nodes['1_mid_small_cylinder_001'].geometry} position={[260, 1360, -260]} rotation={[-Math.PI / 2, 0, 0]}>
            <meshStandardMaterial map={mat_black} bumpMap={mat_black} bumpScale={2} roughness={0.35} metalness={0.1} />
        </mesh>
        <mesh geometry={model.nodes['1_mid_small_cylinder_001'].geometry} position={[-260, 1360, -260]} rotation={[-Math.PI / 2, 0, 0]}>
            <meshStandardMaterial map={mat_black} bumpMap={mat_black} bumpScale={2} roughness={0.35} metalness={0.1} />
        </mesh>
        <mesh geometry={model.nodes['1_mid_small_cylinder_001'].geometry} position={[-260, 1360, 260]} rotation={[-Math.PI / 2, 0, 0]}>
            <meshStandardMaterial map={mat_black} bumpMap={mat_black} bumpScale={2} roughness={0.35} metalness={0.1} />
        </mesh>
        
        <group name='right-leg-model'>
          <mesh geometry={model.nodes['1_leg_main_001'].geometry} position={[0, 1000, 450]} rotation={[0, -Math.PI / 2, 0]}>
              <meshStandardMaterial map={mat_1_leg_main} bumpMap={mat_1_leg_main} bumpScale={2} roughness={0.35} metalness={0.1} />
          </mesh>
          <mesh geometry={model.nodes['1_leg_main_connection_001'].geometry} position={[-15, 625, 315]} rotation={[0, -Math.PI / 2, 0]}>
              <meshStandardMaterial map={mat_black} bumpMap={mat_black} bumpScale={2} roughness={0.35} metalness={0.1} />
          </mesh>
          <mesh geometry={model.nodes['1_leg_main_box_connection_upper_001'].geometry} position={[-22, 670, 554.5]} rotation={[-Math.PI / 2, 0, 0]}>
              <meshStandardMaterial map={mat_black} bumpMap={mat_black} bumpScale={2} roughness={0.35} metalness={0.1} />
          </mesh>
          <mesh geometry={model.nodes['1_leg_main_box_connection_under_001'].geometry} position={[-34, 650, 538]} rotation={[-Math.PI / 2, 0, 0]}>
              <meshStandardMaterial map={mat_black} bumpMap={mat_black} bumpScale={2} roughness={0.35} metalness={0.1} />
          </mesh>
          <mesh geometry={model.nodes['1_leg_main_box_001'].geometry} position={[-55, 655, 310]} rotation={[0, -Math.PI / 2, 0]}>
              <meshStandardMaterial map={mat_white} bumpMap={mat_white} bumpScale={2} roughness={0.35} metalness={0.1} />
          </mesh>
          <mesh geometry={model.nodes['1_leg_main_box_001'].geometry} position={[-55, 655, 560]} rotation={[0, -Math.PI / 2, 0]}>
              <meshStandardMaterial map={mat_white} bumpMap={mat_white} bumpScale={2} roughness={0.35} metalness={0.1} />
          </mesh>
          <mesh geometry={model.nodes['1_route_s_001'].geometry} position={[-77, 1150, 425]} rotation={[0, -Math.PI / 2, 0]}>
              <meshStandardMaterial map={mat_orange} bumpMap={mat_orange} bumpScale={2} roughness={0.35} metalness={0.1} />
          </mesh>
          <mesh geometry={model.nodes['1_route_s_001'].geometry} position={[77, 1150, 425]} rotation={[0, Math.PI / 2, 0]}>
              <meshStandardMaterial map={mat_orange} bumpMap={mat_orange} bumpScale={2} roughness={0.35} metalness={0.1} />
          </mesh>
        </group>
        <group name='left-leg-model'>
          <mesh geometry={model.nodes['1_leg_main_001'].geometry} position={[0, 1000, -450]} rotation={[0, Math.PI / 2, 0]}>
              <meshStandardMaterial map={mat_1_leg_main} bumpMap={mat_1_leg_main} bumpScale={2} roughness={0.35} metalness={0.1} />
          </mesh>
          <mesh geometry={model.nodes['1_leg_main_connection_003'].geometry} position={[-15, 625, -315]} rotation={[0, -Math.PI / 2, 0]}>
              <meshStandardMaterial map={mat_black} bumpMap={mat_black} bumpScale={2} roughness={0.35} metalness={0.1} />
          </mesh>
          <mesh geometry={model.nodes['1_leg_main_box_connection_upper_001'].geometry} position={[-22, 670, -554.5]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial map={mat_black} bumpMap={mat_black} bumpScale={2} roughness={0.35} metalness={0.1} />
          </mesh>
          <mesh geometry={model.nodes['1_leg_main_box_connection_under_001'].geometry} position={[-34, 650, -538]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial map={mat_black} bumpMap={mat_black} bumpScale={2} roughness={0.35} metalness={0.1} />
          </mesh>
          <mesh geometry={model.nodes['1_leg_main_box_001'].geometry} position={[-55, 655, -310]} rotation={[0, -Math.PI / 2, 0]}>
              <meshStandardMaterial map={mat_white} bumpMap={mat_white} bumpScale={2} roughness={0.35} metalness={0.1} />
          </mesh>
          <mesh geometry={model.nodes['1_leg_main_box_001'].geometry} position={[-55, 655, -560]} rotation={[0, -Math.PI / 2, 0]}>
              <meshStandardMaterial map={mat_white} bumpMap={mat_white} bumpScale={2} roughness={0.35} metalness={0.1} />
          </mesh>
          <mesh geometry={model.nodes['1_route_s_001'].geometry} position={[-77, 1150, -425]} rotation={[0, -Math.PI / 2, 0]}>
              <meshStandardMaterial map={mat_orange} bumpMap={mat_orange} bumpScale={2} roughness={0.35} metalness={0.1} />
          </mesh>
          <mesh geometry={model.nodes['1_route_s_001'].geometry} position={[77, 1150, -425]} rotation={[0, Math.PI / 2, 0]}>
              <meshStandardMaterial map={mat_orange} bumpMap={mat_orange} bumpScale={2} roughness={0.35} metalness={0.1} />
          </mesh>
        </group>
      </group>
      <group name='right-model'>  
          <mesh geometry={model.nodes['2_body'].geometry} position={[1000, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <meshStandardMaterial map={mat_2_body} bumpMap={mat_2_body} bumpScale={2} roughness={0.35} metalness={0.1} opacity={interiorView ? 0.3 : 1} transparent />
          </mesh>
          <mesh geometry={model.nodes['2_ring_upper'].geometry} position={[1000, 2300, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <meshStandardMaterial map={mat_black} bumpMap={mat_black} bumpScale={2} roughness={0.35} metalness={0.1} />
          </mesh>
          <mesh geometry={model.nodes['2_ring_mid'].geometry} position={[1000, 1800, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <meshStandardMaterial map={mat_black} bumpMap={mat_black} bumpScale={2} roughness={0.35} metalness={0.1} />
          </mesh>
          <mesh geometry={model.nodes['2_ring_under'].geometry} position={[1000, 1000, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <meshStandardMaterial map={mat_black} bumpMap={mat_black} bumpScale={2} roughness={0.35} metalness={0.1} />
          </mesh>
          <mesh geometry={model.nodes['connection_upper'].geometry} position={[620, 2720, 0]} rotation={[0, 0, 0.4]}>
              <meshStandardMaterial map={mat_connection_upper} bumpMap={mat_connection_upper} bumpScale={2} roughness={0.35} metalness={0.1} />
          </mesh>
          <mesh geometry={model.nodes['connection_under'].geometry} position={[620, 500, 0]} rotation={[0, 0, 0]}>
              <meshStandardMaterial map={mat_white} bumpMap={mat_white} bumpScale={2} roughness={0.35} metalness={0.1} />
          </mesh>
          <mesh geometry={model.nodes['connection_under_ring'].geometry} position={[620, 500, 0]} rotation={[0, 0, 0]}>
              <meshStandardMaterial map={mat_black} bumpMap={mat_black} bumpScale={2} roughness={0.35} metalness={0.1} />
          </mesh>
      </group>
    </group>
  )
}

export default Model1