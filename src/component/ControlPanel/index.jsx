import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInteiorView, setIsConnectionState, setModelIndex } from '../../redux/reducer'
import { useEffect } from 'react'

const ControlPanel = () => { 
  const dispatch = useDispatch()
  const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
  const interiorView = useSelector((state) => state.modelConfig.interiorView)
  const isConnectionState = useSelector((state) => state.modelConfig.isConnectionState)
  
  const handleButton = (value) => {
    dispatch(setModelIndex(value));    
  }
  
  return (
    <Fragment>
      <div className='select-model-section'>
        <label className='label'>Select model</label>
        <button className='button' onClick={() => handleButton(0)}>All</button>
        <button className='button' onClick={() => handleButton(1)}>1</button>
        <button className='button' onClick={() => handleButton(2)}>2</button>
        <button className='button' onClick={() => handleButton(3)}>3</button>
        <button className='button' onClick={() => handleButton(4)}>4</button>
        <button className='button' onClick={() => handleButton(5)}>5</button>
        <button className='button' onClick={() => handleButton(6)}>6</button>
        <button className='button' onClick={() => handleButton(7)}>7</button>
      </div>
      <div className='interior-view-section'>
          <button
            className='button'
            onClick={() => dispatch(setInteiorView())}
          >
            {interiorView ? 'Exterior View' : 'Interior View'}
          </button>
          <button
            className='button'
            onClick={() => dispatch(setIsConnectionState())}
            disabled={modelIndex === 0 ? false : true}
          >
            {isConnectionState ? 'Connection Hidden' : 'Connection Show'}
          </button>
      </div>
    </Fragment>
  )
}

export default ControlPanel