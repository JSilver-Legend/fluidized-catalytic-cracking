import { useLoader } from '@react-three/fiber'
import React, { Fragment } from 'react'
import ReactSwitch from 'react-switch'

const ControlPanel = ({ isToggle, setIsToggle, setTexture }) => { 
  
  const handleChange = () => {
    setIsToggle(!isToggle)
  }
  
  return (
    <Fragment>
      <div className='control-panel'>
        <div className='toggle'>
          <label className='label'>Show Comment</label>
          <ReactSwitch checked={isToggle} onChange={handleChange} />
        </div>
        <button className='button' onClick={() => setTexture('white')}>White</button>
        <button className='button' onClick={() => setTexture('lightgreen')}>Green</button>
        <button className='button' onClick={() => setTexture('lightblue')}>Blue</button>
      </div>
    </Fragment>
  )
}

export default ControlPanel