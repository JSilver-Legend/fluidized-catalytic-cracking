import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Trail } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

const Stream2 = () => {
  return (
    <group>
      <color attach="background" args={['black']} />
      <Atom />
      {/* <EffectComposer>
        <Bloom radius={1} />
      </EffectComposer> */}
    </group>
  )
}
export default Stream2;

const Atom = () => {
  const route = new THREE.Path();
  route.moveTo(-40, 100);
  Array.from({length: 20}).map((_, index) => {
    route.lineTo(-40, 100 + index * 2);
  })
  // route.lineTo(-40, 140);
  route.quadraticCurveTo(-40, 157, -25, 157)
  Array.from({length: 32}).map((_, index) => {
    route.lineTo(-25 + 2 * index, 157);
  })
  // route.lineTo(40, 157);
  route.quadraticCurveTo(54.5, 157, 54.5, 140)
  Array.from({length: 138}).map((_, index) => {
    route.lineTo(54.5, 140 - index * 2);
  })
  // route.lineTo(54.5, -135);
  route.quadraticCurveTo(54.5, -148, 65, -148);
  Array.from({length: 18}).map((_, index) => {
    route.lineTo(65 + 2 * index, -148);
  })
  // route.lineTo(100, -148);

  const points = route.getPoints();
  const routeGeo = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <group position={[0, 0, 100]}>
      {/* <line geometry={routeGeo}>
        <lineBasicMaterial color={'red'} />
      </line> */}
      <Electron points={points} />
    </group>
  )
}

const Electron = ({ points }) => {
  const ref_1 = useRef()
  const ref_2 = useRef()

  const [aIndex, setAIndex] = useState(0);
  const [bIndex, setBIndex] = useState(0);
  
  useEffect(() => {
    const timerA = setInterval(() => {
        setAIndex(prev => prev + 1);      
    }, 10)
    return () => clearInterval(timerA);
  }, [])

  useEffect(() => {
    const timerB = setTimeout(() => {
      setInterval(() => {
        setBIndex(prev => prev + 1);
      }, 10)
    }, 1500)
    
    return () => clearInterval(timerB);
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

  useEffect(() => {
    if (ref_2.current) {
      ref_2.current.position.x = points[bIndex].x
      ref_2.current.position.y = points[bIndex].y
    }
    if (bIndex >= points.length - 1) {
      setBIndex(0)
    }
  }, [ref_2.current, bIndex])
  
  
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
      {bIndex !== points.length - 1 &&
        <Trail width={30} length={60} color={'lightblue'} attenuation={(t) => t * t} decay={bIndex < 3 ? 10000 : 10} local={false} stride={0} interval={1}>
          <mesh ref={ref_2}>
            <sphereGeometry args={[1]} />
            <meshBasicMaterial color={'lightblue'} />
          </mesh>
        </Trail>
      }
    </group>
  )
}
