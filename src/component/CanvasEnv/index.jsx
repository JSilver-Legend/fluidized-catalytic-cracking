import * as THREE from 'three';
import React, { useEffect, useRef } from 'react'
import { OrbitControls } from '@react-three/drei'
import { useSelector } from 'react-redux';
import gsap from 'gsap';

const CanvasEnv = () => {
  const orbitCam = useRef();
  const modelIndex = useSelector((state) => state.modelConfig.modelIndex)

  const cameraPosZ = [
    800,
    450,
    300,
    150,
    100,
    110,
    250,
    200,
  ]
  
  useEffect(() => {
    if (orbitCam.current) {
      const camera = orbitCam.current.object;
      camera.position.set(0, 0, 500);
      orbitCam.current.target = new THREE.Vector3(0, 0, 0);

      gsap.to(camera.position, {
        duration: 1,
        z: cameraPosZ[modelIndex],
      })
    }
  }, [modelIndex, orbitCam.current])
  
  return (
    <group>
        <OrbitControls ref={orbitCam} />
        <directionalLight position={[1000, 1000, 1000]} intensity={2} />
        <directionalLight position={[1000, 1000, -1000]} intensity={1} />
        <directionalLight position={[-1000, 1000, -1000]} intensity={1} />
        <directionalLight position={[-1000, 1000, 1000]} intensity={1} />
        <ambientLight intensity={2} />
        <gridHelper args={[5000, 100, 0x888888, 0x555555]} position={[0, -210, 0]} />
        {/* <axesHelper args={[5000, 5000]} /> */}
    </group>
  )
}

export default CanvasEnv