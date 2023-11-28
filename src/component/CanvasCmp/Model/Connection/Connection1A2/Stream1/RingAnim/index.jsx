import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { DoubleSide } from 'three'
const RingAnim = () => {
    const ref = useRef()

    const ringOutRadius = 1;
    const ringInnerRadius = ringOutRadius + 0.5;
    // const ringColor = '#FFFFFF';
    const ringColor = 'green';

    useEffect(() => {
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
    }, [ref.current])
    
  return (
    <group  ref={ref}>
        <group name='section-1' position={[50.2, 243, 100]}>
            {Array.from({length: 10}).map((_, index) => (
                <mesh key={`connection_section_1_${index}`} position={[0, 1.2 * index, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[ringInnerRadius, ringOutRadius, 30, 8, 2, 2*Math.PI]} />
                    <meshStandardMaterial color={ringColor} side={DoubleSide} opacity={1} transparent />
                </mesh>
            ))}
        </group>
        <group name='section-2' position={[56, 260.3, 100]} rotation={[0, Math.PI / 2, 0]}>
            {Array.from({length: 25}).map((_, index) => (
                <mesh key={`connection_section_2_${index}`} position={[0, 0, 1.2 * index]}>
                    <ringGeometry args={[ringInnerRadius, ringOutRadius, 30, 8, 2, 2*Math.PI]} />
                    <meshStandardMaterial color={ringColor} side={DoubleSide} opacity={1} transparent />
                </mesh>
            ))}
        </group>
        <group name='section-3' position={[50.5, 267, 100]} rotation={[0, Math.PI / 2, 0]}>
            {Array.from({length: 20}).map((_, index) => (
                <mesh key={`connection_section_3_${index}`} position={[0, -15 - 1.2 * index, 39.5]} rotation={[Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[ringInnerRadius, ringOutRadius, 30, 8, 2, 2*Math.PI]} />
                    <meshStandardMaterial color={ringColor} side={DoubleSide} opacity={1} transparent />
                </mesh>
            ))}
        </group>
        <group name='section-4' position={[50.5, 210, 100]} rotation={[0, Math.PI / 2, 0]}>
            {Array.from({length: 20}).map((_, index) => (
                <mesh key={`connection_section_4_${index}`} position={[0, -15 - 1.2 * index, 39.5]} rotation={[Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[ringInnerRadius, ringOutRadius, 30, 8, 2, 2*Math.PI]} />
                    <meshStandardMaterial color={ringColor} side={DoubleSide} opacity={1} transparent />
                </mesh>
            ))}
        </group>
        <group name='section-5' position={[50.5, 150, 100]} rotation={[0, Math.PI / 2, 0]}>
            {Array.from({length: 20}).map((_, index) => (
                <mesh key={`connection_section_5_${index}`} position={[0, -15 - 1.2 * index, 39.5]} rotation={[Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[ringInnerRadius, ringOutRadius, 30, 8, 2, 2*Math.PI]} />
                    <meshStandardMaterial color={ringColor} side={DoubleSide} opacity={1} transparent />
                </mesh>
            ))}
        </group>
        <group name='section-6' position={[50.5, 100, 100]} rotation={[0, Math.PI / 2, 0]}>
            {Array.from({length: 20}).map((_, index) => (
                <mesh key={`connection_section_6_${index}`} position={[0, -15 - 1.2 * index, 39.5]} rotation={[Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[ringInnerRadius, ringOutRadius, 30, 8, 2, 2*Math.PI]} />
                    <meshStandardMaterial color={ringColor} side={DoubleSide} opacity={1} transparent />
                </mesh>
            ))}
        </group>
        <group name='section-7' position={[95, 34.2, 100]} rotation={[0, Math.PI / 2, 0]}>
            {Array.from({length: 10}).map((_, index) => (
                <mesh key={`connection_section_7_${index}`} position={[0, 0, 1.2 * index]}>
                    <ringGeometry args={[ringInnerRadius, ringOutRadius, 30, 8, 2, 2*Math.PI]} />
                    <meshStandardMaterial color={ringColor} side={DoubleSide} opacity={1} transparent />
                </mesh>
            ))}
        </group>
    </group>
  )
}

export default RingAnim