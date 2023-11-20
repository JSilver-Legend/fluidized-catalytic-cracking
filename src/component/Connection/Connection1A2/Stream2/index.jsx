import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Trail } from '@react-three/drei'

const Stream2 = () => {
  return (
    <group>
      <StreamPath />
    </group>
  )
}
export default Stream2;

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
      {/* <line geometry={routeGeo}>
          <lineBasicMaterial color={'red'} />
      </line> */}
      <MoveAnim points={points} />
    </group>
  )
}


const MoveAnim = ({ points }) => {
  const ref_1 = useRef()

  const [aIndex, setAIndex] = useState(0);
  
  useEffect(() => {
    const timerA = setInterval(() => {
        setAIndex(prev => prev + 1);      
    }, 10)
    return () => clearInterval(timerA);
  }, [])

  useEffect(() => {
    if (ref_1.current) {
      ref_1.current.position.x = points[aIndex].x
      ref_1.current.position.y = points[aIndex].y
    }
    if (aIndex >= points.length - 1) {
      setAIndex(0)
    }
  }, [ref_1.current, aIndex])  
  
  return (
    <group>
      {aIndex !== points.length - 1 &&
        <Trail width={30} length={60} color={'lightblue'} attenuation={(t) => t * t} decay={aIndex < 3 ? 10000 : 10} local={false} stride={0} interval={1}>
          <mesh ref={ref_1}>
            <sphereGeometry args={[1]} />
            <meshBasicMaterial color={'lightblue'} />
          </mesh>
        </Trail>
      }
    </group>
  )
}
