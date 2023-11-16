import React from 'react'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import gsap from 'gsap'
import { useEffect } from 'react'

const ArrowModel = () => {
    const arrowRef_1 = useRef();
    const arrowRef_2 = useRef();
    const arrowRef_3 = useRef();
  
    const modelIndex = useSelector((state) => state.modelConfig.modelIndex);
    const isConnectionState = useSelector((state) => state.modelConfig.isConnectionState);

    const arrowDuration = 2;
    
    useEffect(() => {
      if(isConnectionState && modelIndex === 0) {
        if (arrowRef_1.current !== undefined ) {
          gsap.to(arrowRef_1.current.position, {
            duration: arrowDuration,
            x: arrowRef_1.current.position.x + 30,
            repeat: -1,
          })
          gsap.to(arrowRef_1.current.children[0].material, {
            duration: arrowDuration,
            opacity: 0.5,
            repeat: -1,
          })
          gsap.to(arrowRef_1.current.children[1].material, {
            duration: arrowDuration,
            opacity: 0.5,
            repeat: -1,
          })
        }
        if (arrowRef_2.current !== undefined ) {
          gsap.to(arrowRef_2.current.position, {
            duration: arrowDuration,
            y: arrowRef_2.current.position.y - 30,
            repeat: -1,
          })
          gsap.to(arrowRef_2.current.children[0].material, {
            duration: arrowDuration,
            opacity: 0.5,
            repeat: -1,
          })
          gsap.to(arrowRef_2.current.children[1].material, {
            duration: arrowDuration,
            opacity: 0.5,
            repeat: -1,
          })
        }
        if (arrowRef_3.current !== undefined ) {
          gsap.to(arrowRef_3.current.position, {
            duration: arrowDuration,
            y: arrowRef_3.current.position.y - 30,
            repeat: -1,
          });
          gsap.to(arrowRef_3.current.children[0].material, {
            duration: arrowDuration,
            opacity: 0.5,
            repeat: -1,
          })
          gsap.to(arrowRef_3.current.children[1].material, {
            duration: arrowDuration,
            opacity: 0.5,
            repeat: -1,
          })
        }
      }
    }, [arrowRef_1.current, arrowRef_2.current, arrowRef_3.current, isConnectionState, modelIndex])

  return (modelIndex === 0 && isConnectionState) && (
    <group>
      <group name='arrow-1' ref={arrowRef_1} position={[-20, 168, 100]} rotation={[0, 0, -Math.PI / 2]} scale={[0.6, 0.6, 0.6]}>
          <mesh position={[0, 35, 0]}>
              <coneGeometry args={[5, 10, 20, 1]} />
              <meshStandardMaterial color='white' metalness={0.3} roughness={0.3} opacity={0} transparent />
          </mesh>
          <mesh position={[0, 15, 0]}>
              <cylinderGeometry args={[2, 2, 30, 20, 1]} />
              <meshStandardMaterial color='white' metalness={0.3} roughness={0.3} opacity={0} transparent />
          </mesh>
      </group>
      <group name='arrow-2' ref={arrowRef_2} position={[65, 120, 100]} rotation={[Math.PI, 0, 0]} scale={[0.6, 0.6, 0.6]}>
          <mesh position={[0, 35, 0]}>
              <coneGeometry args={[5, 10, 20, 1]} />
              <meshStandardMaterial color='white' metalness={0.3} roughness={0.3} opacity={0} transparent />
          </mesh>
          <mesh position={[0, 15, 0]}>
              <cylinderGeometry args={[2, 2, 30, 20, 1]} />
              <meshStandardMaterial color='white' metalness={0.3} roughness={0.3} opacity={0} transparent />
          </mesh>
      </group>
      <group name='arrow-3' ref={arrowRef_3} position={[65, -60, 100]} rotation={[Math.PI, 0, 0]} scale={[0.6, 0.6, 0.6]}>
          <mesh position={[0, 35, 0]}>
              <coneGeometry args={[5, 10, 20, 1]} />
              <meshStandardMaterial color='white' metalness={0.3} roughness={0.3} opacity={0} transparent />
          </mesh>
          <mesh position={[0, 15, 0]}>
              <cylinderGeometry args={[2, 2, 30, 20, 1]} />
              <meshStandardMaterial color='white' metalness={0.3} roughness={0.3} opacity={0} transparent />
          </mesh>
      </group>
    </group>
  )
}

export default ArrowModel