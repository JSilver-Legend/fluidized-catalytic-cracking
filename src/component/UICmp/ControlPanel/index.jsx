import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setConnectionState, setInteiorView, setModelIndex } from '../../../redux/reducer'

const ControlPanel = () => { 
  const dispatch = useDispatch()
  const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
  const interiorView = useSelector((state) => state.modelConfig.interiorView)
  const connectionState = useSelector((state) => state.modelConfig.connectionState)
  
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
          {modelIndex === 0 &&
            <>
              <hr style={{ width: 100}} />
              <button className='button' onClick={() => dispatch(setConnectionState(0))} disabled={connectionState === 0 ? true : false}>Connection Hidden</button>
              <button className='button' onClick={() => dispatch(setConnectionState(1))} disabled={connectionState === 1 ? true : false}>Connection - 1</button>
              <button className='button' onClick={() => dispatch(setConnectionState(2))} disabled={connectionState === 2 ? true : false}>Connection - 2</button>
            </>
          }
      </div>
    </Fragment>
  )
}

export default ControlPanel