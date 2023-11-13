import { useLoader } from '@react-three/fiber'
import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import ReactSwitch from 'react-switch'
import { setModelIndex } from '../../redux/reducer'

const ControlPanel = ({ isToggle, setIsToggle, setTexture }) => { 
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
        <button className='button' >3</button>
        <button className='button' >4</button>
        <button className='button' >5</button>
        <button className='button' >6</button>
        <button className='button' >7</button>
      </div>
    </Fragment>
  )
}

export default ControlPanel