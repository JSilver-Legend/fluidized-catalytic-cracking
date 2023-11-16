import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { DoubleSide } from 'three'
import { useSelector } from 'react-redux'

const Directions = () => {

    const ref = useRef()
    const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
    const isConnectionState = useSelector((state) => state.modelConfig.isConnectionState)

    const ringRadius = 3;

    useEffect(() => {
        if(isConnectionState && modelIndex === 0) {
            if (ref.current.children !== undefined ) {
                ref.current.children.forEach((item, index) => {
                    gsap.to(item.material, {
                        delay: 0.2 * index,
                        duration: 0.2 * ref.current.children.length,
                        opacity: 0,
                        repeat: -1,
                    })
                });
            }
        }
    }, [ref.current])
    
  return (isConnectionState && modelIndex === 0) && (
    <group ref={ref} position={[15, 157.5, 100]}  rotation={[0, Math.PI / 2, 0]}>
        {new Array(8).fill('').map((_, index) => (
            <mesh key={`connection_section_1_${index}`} position={[0, 0, 4 * index]}>
                <ringGeometry args={[ringRadius, ringRadius + 0.2, 30, 8, 2, 2*Math.PI]} />
                <meshStandardMaterial color={'#FFFFFF'} side={DoubleSide} opacity={1} transparent />
            </mesh>
        ))}
        <mesh position={[0, -0.8, 31]} rotation={[0.2, 0, 0]}>
            <ringGeometry args={[ringRadius, ringRadius + 0.2, 30, 8, 2, 2*Math.PI]} />
            <meshStandardMaterial color={'#FFFFFF'} side={DoubleSide} opacity={1} transparent />
        </mesh>
        <mesh position={[0, -2.5, 34.5]} rotation={[0.5, 0, 0]}>
            <ringGeometry args={[ringRadius, ringRadius + 0.2, 30, 8, 2, 2*Math.PI]} />
            <meshStandardMaterial color={'#FFFFFF'} side={DoubleSide} opacity={1} transparent />
        </mesh>
        <mesh position={[0, -4.5, 36.5]} rotation={[0.8, 0, 0]}>
            <ringGeometry args={[ringRadius, ringRadius + 0.2, 30, 8, 2, 2*Math.PI]} />
            <meshStandardMaterial color={'#FFFFFF'} side={DoubleSide} opacity={1} transparent />
        </mesh>
        <mesh position={[0, -7.5, 38.2]} rotation={[1.1, 0, 0]}>
            <ringGeometry args={[ringRadius, ringRadius + 0.2, 30, 8, 2, 2*Math.PI]} />
            <meshStandardMaterial color={'#FFFFFF'} side={DoubleSide} opacity={1} transparent />
        </mesh>
        <mesh position={[0, -10.7, 39.2]} rotation={[1.4, 0, 0]}>
            <ringGeometry args={[ringRadius, ringRadius + 0.2, 30, 8, 2, 2*Math.PI]} />
            <meshStandardMaterial color={'#FFFFFF'} side={DoubleSide} opacity={1} transparent />
        </mesh>
        {new Array(8).fill('').map((_, index) => (
            <mesh key={`connection_section_1_${index}`} position={[0, -15 - 4 * index, 39.5]} rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[ringRadius, ringRadius + 0.2, 30, 8, 2, 2*Math.PI]} />
                <meshStandardMaterial color={'#FFFFFF'} side={DoubleSide} opacity={1} transparent />
            </mesh>
        ))}
    </group>
  )
}

export default Directions