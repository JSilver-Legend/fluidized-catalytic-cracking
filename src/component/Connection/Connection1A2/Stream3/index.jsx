import * as THREE from 'three'
import React from 'react'
import { useSelector } from 'react-redux'
import { DoubleSide } from 'three'

const Stream3 = () => {
    const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
    const interiorView = useSelector((state) => state.modelConfig.interiorView)
    
  return (
    <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <StreamPath />
    </group>
  )
}

export default Stream3

const StreamPath = () => {
    const pathLine = () => {
        const line = new THREE.Path();
        line.moveTo(-40, 100);
        Array.from({length: 20}).map((_, index) => {
        line.lineTo(-40, 100 + index * 2);
        })
        // line.lineTo(-40, 140);
        line.quadraticCurveTo(-40, 157, -25, 157)
        Array.from({length: 32}).map((_, index) => {
        line.lineTo(-25 + 2 * index, 157);
        })
        // line.lineTo(40, 157);
        line.quadraticCurveTo(54.5, 157, 54.5, 140)
        Array.from({length: 138}).map((_, index) => {
        line.lineTo(54.5, 140 - index * 2);
        })
        // line.lineTo(54.5, -135);
        line.quadraticCurveTo(54.5, -148, 65, -148);
        Array.from({length: 18}).map((_, index) => {
        line.lineTo(65 + 2 * index, -148);
        })
        // line.lineTo(100, -148);

        return line;
    }

    const points = pathLine().getPoints();
    const routeGeo = new THREE.BufferGeometry().setFromPoints(points);

    return (
        <group position={[0, 0, 100]}>
        <line geometry={routeGeo}>
            <lineBasicMaterial color={'red'} />
        </line>
        {/* <Electron points={points} /> */}
        </group>
    )
}
  