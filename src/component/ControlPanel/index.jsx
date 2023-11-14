import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { setModelIndex } from '../../redux/reducer'

const ControlPanel = () => { 
  const dispatch = useDispatch()
  
  const handleButton = (value) => {
    dispatch(setModelIndex(value));    
  }
  
  return (
    <Fragment>
      <div className='control-panel'>
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
    </Fragment>
  )
}

export default ControlPanel