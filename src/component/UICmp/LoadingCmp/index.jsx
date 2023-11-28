import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Html } from '@react-three/drei';

const LoadingCmp = () => {
  return (
    <div className='loading-section'>
      <CircularProgress color='success' />
    </div>
  )
}

export default LoadingCmp