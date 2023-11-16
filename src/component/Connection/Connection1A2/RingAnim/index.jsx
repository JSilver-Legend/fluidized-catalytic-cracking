import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { DoubleSide } from 'three'
import { useSelector } from 'react-redux'

const RingAnim = () => {
    const ref = useRef()
    const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
    const isConnectionState = useSelector((state) => state.modelConfig.isConnectionState)

    const ringOutRadius = 3;
    const ringInnerRadius = ringOutRadius + 0.5;
    const ringColor = '#FFFFFF';

    useEffect(() => {
        if(isConnectionState && modelIndex === 0) {
            if (ref.current.children !== undefined ) {
                ref.current.children.forEach((item) => {
                    item.children.forEach((itemC, index) => {
                        gsap.to(itemC.material, {
                            delay: 0.2 * index,
                            duration: 0.2 * ref.current.children.length,
                            opacity: 0,
                            repeat: -1,
                        })
                    })
                });
            }
        }
    }, [ref.current, isConnectionState, modelIndex])
    
  return (modelIndex === 0 && isConnectionState) && (
    <group  ref={ref}>
        <group name='section-1' position={[-40.1, 105.5, 100]}>
            {Array.from({length: 10}).map((_, index) => (
                <mesh key={`connection_section_1_${index}`} position={[0, 4 * index, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[ringInnerRadius, ringOutRadius, 30, 8, 2, 2*Math.PI]} />
                    <meshStandardMaterial color={ringColor} side={DoubleSide} opacity={1} transparent />
                </mesh>
            ))}
        </group>
        <group name='section-2' position={[-10, 157.6, 100]} rotation={[0, Math.PI / 2, 0]}>
            {Array.from({length: 10}).map((_, index) => (
                <mesh key={`connection_section_2_${index}`} position={[0, 0, 4 * index]}>
                    <ringGeometry args={[ringInnerRadius, ringOutRadius, 30, 8, 2, 2*Math.PI]} />
                    <meshStandardMaterial color={ringColor} side={DoubleSide} opacity={1} transparent />
                </mesh>
            ))}
        </group>
        <group name='section-3' position={[15, 157.5, 100]} rotation={[0, Math.PI / 2, 0]}>
            {Array.from({length: 10}).map((_, index) => (
                <mesh key={`connection_section_3_${index}`} position={[0, -15 - 4 * index, 39.5]} rotation={[Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[ringInnerRadius, ringOutRadius, 30, 8, 2, 2*Math.PI]} />
                    <meshStandardMaterial color={ringColor} side={DoubleSide} opacity={1} transparent />
                </mesh>
            ))}
        </group>
        <group name='section-4' position={[15, 90, 100]} rotation={[0, Math.PI / 2, 0]}>
            {Array.from({length: 10}).map((_, index) => (
                <mesh key={`connection_section_4_${index}`} position={[0, -15 - 4 * index, 39.5]} rotation={[Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[ringInnerRadius, ringOutRadius, 30, 8, 2, 2*Math.PI]} />
                    <meshStandardMaterial color={ringColor} side={DoubleSide} opacity={1} transparent />
                </mesh>
            ))}
        </group>
        <group name='section-5' position={[15, 10, 100]} rotation={[0, Math.PI / 2, 0]}>
            {Array.from({length: 10}).map((_, index) => (
                <mesh key={`connection_section_5_${index}`} position={[0, -15 - 4 * index, 39.5]} rotation={[Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[ringInnerRadius, ringOutRadius, 30, 8, 2, 2*Math.PI]} />
                    <meshStandardMaterial color={ringColor} side={DoubleSide} opacity={1} transparent />
                </mesh>
            ))}
        </group>
        <group name='section-6' position={[15, -70, 100]} rotation={[0, Math.PI / 2, 0]}>
            {Array.from({length: 10}).map((_, index) => (
                <mesh key={`connection_section_6_${index}`} position={[0, -15 - 4 * index, 39.5]} rotation={[Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[ringInnerRadius, ringOutRadius, 30, 8, 2, 2*Math.PI]} />
                    <meshStandardMaterial color={ringColor} side={DoubleSide} opacity={1} transparent />
                </mesh>
            ))}
        </group>
        <group name='section-7' position={[65, -147.7, 100]} rotation={[0, Math.PI / 2, 0]}>
            {Array.from({length: 10}).map((_, index) => (
                <mesh key={`connection_section_7_${index}`} position={[0, 0, 4 * index]}>
                    <ringGeometry args={[ringInnerRadius, ringOutRadius, 30, 8, 2, 2*Math.PI]} />
                    <meshStandardMaterial color={ringColor} side={DoubleSide} opacity={1} transparent />
                </mesh>
            ))}
        </group>
    </group>
  )
}

export default RingAnim