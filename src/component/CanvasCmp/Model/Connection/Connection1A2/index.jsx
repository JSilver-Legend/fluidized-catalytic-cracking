import React from 'react'
import { useSelector } from 'react-redux'

import Stream1 from './Stream1'
import Stream2 from './Stream2'
import ConnectionModel from './ConnectionModel'

const Connection1A2 = () => {
  const modelIndex = useSelector((state) => state.modelConfig.modelIndex);
  const connectionState = useSelector((state) => state.modelConfig.connectionState);

  return (
    <group castShadow receiveShadow>
      {(modelIndex === 0) && <ConnectionModel />}
      {(modelIndex === 0 && connectionState === 1) &&  (<Stream1 />)}
      {(modelIndex === 0 && connectionState === 2) &&  (<Stream2 />)}
    </group>
  )
}

export default Connection1A2