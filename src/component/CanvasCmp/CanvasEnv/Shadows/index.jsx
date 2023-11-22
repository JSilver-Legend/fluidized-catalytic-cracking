import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import React from 'react'

const Shadows = () => {
  return (
    <AccumulativeShadows temporal frames={1} position={[0, -1, 0]} color='#292929' colorBlend={0.5} alphaTest={0.9} scale={20} resolution={100}>
        <RandomizedLight amount={8} radius={4} position={[0, 0, 10]} />
    </AccumulativeShadows>
  )
}

export default Shadows