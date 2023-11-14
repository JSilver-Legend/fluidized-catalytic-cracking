import * as THREE from 'three';
import React, { useEffect, useRef } from 'react'
import { OrbitControls } from '@react-three/drei'
import { useSelector } from 'react-redux';
import gsap from 'gsap';

const CanvasEnv = () => {
  const orbitCam = useRef();
  const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
  
  useEffect(() => {
    if (orbitCam.current) {
      const camera = orbitCam.current.object;
      camera.position.set(0, 0, 300);
      orbitCam.current.target = new THREE.Vector3(0, 0, 0);

      gsap.to(camera.position, {
        duration: 1,
        z: 250,
      })
    }
  }, [modelIndex, orbitCam.current])
  
  return (
    <group>
        <OrbitControls ref={orbitCam} />
        <directionalLight position={[100, 100, 100]} intensity={2} />
        <directionalLight position={[100, 100, -100]} intensity={1} />
        <directionalLight position={[-100, 100, -100]} intensity={1} />
        <directionalLight position={[-100, 100, 100]} intensity={1} />
        <ambientLight intensity={0.5} />
        <gridHelper args={[1000, 50, 0x999999, 0x555555]} position={[0, -80, 0]} />
    </group>
  )
}

export default CanvasEnv