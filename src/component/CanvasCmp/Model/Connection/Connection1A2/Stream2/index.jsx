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
      line.moveTo(50.2, 243);
      Array.from({length: 10}).map((_, index) => {
        line.lineTo(50.2, 243 + (253 - 243) / 10 * (index + 1));
      })
      line.quadraticCurveTo(50.2, 260.3, 56, 260.3)
      Array.from({length: 30}).map((_, index) => {
        line.lineTo(56 + (84 - 56) / 30 * (index + 1), 260.3);
      })
      line.quadraticCurveTo(90, 260.3, 90, 253)
      Array.from({length: 210}).map((_, index) => {
        line.lineTo(90, 253 - (253 - 42) / 210 * (index + 1));
      })
      line.quadraticCurveTo(90, 34, 95.5, 34)
      Array.from({length: 15}).map((_, index) => {
        line.lineTo(95.5 + (110 - 95.5) / 15 * (index + 1), 34);
      })

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
    }, 15)
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
        <Trail width={20} length={60} color={'green'} attenuation={(t) => t * t} decay={aIndex < 3 ? 10000 : 10} local={false} stride={0} interval={1}>
          <mesh ref={ref_1}>
            <sphereGeometry args={[0.5]} />
            <meshBasicMaterial color={'green'} />
          </mesh>
        </Trail>
      }
    </group>
  )
}
