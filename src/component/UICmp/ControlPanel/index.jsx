import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setConnectionState, setInteiorView, setModelIndex } from '../../../redux/reducer'

import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import MuiToggleButton from '@mui/material/ToggleButton'
import styled from '@emotion/styled'
import { Fragment } from 'react'

const ControlPanel = () => {
  const dispatch = useDispatch()

  const [selectedModelIndex, setSelectedModelIndex] = useState('0')
  const [viewMethod, setViewMethod] = useState('ext')
  const [connectionIndex, setConnectionIndex] = useState('1')
  
  const modelIndex = useSelector((state) => state.modelConfig.modelIndex)

  const handleModelView = (event, newModelIndex) => {
    if (newModelIndex !== null) {
      setSelectedModelIndex(newModelIndex);
      dispatch(setModelIndex(Number(newModelIndex)));  
    }
  }

  const handleViewMethod = (event, method) => {
    if (method !== null) {
      setViewMethod(method)
      if (method === 'int') {
        dispatch(setInteiorView(true))
      } else {
        dispatch(setInteiorView(false))
      }
    }
  }

  const handleConnection = (event, connectionValue) => {
    if (connectionValue !== null) {
      setConnectionIndex(connectionValue);
      dispatch(setConnectionState(Number(connectionValue)));
    }
    
  }

  const ToggleButton = styled(MuiToggleButton)({
    "&.MuiToggleButton-root": {
      color: '#043500',
    },

    "&.Mui-selected, &.Mui-selected:hover": {
      paddingLeft: 20,
      paddingRight: 20,
      color: '#FFFFFF',
      backgroundColor: '#085F00AD'
    }
  });

  return (
    <Fragment>
      <div className='select-model'>
        <ToggleButtonGroup
          value={selectedModelIndex}
          exclusive
          onChange={handleModelView}
          aria-label='select-model'
        >
          <ToggleButton value='0' aria-label='model 0'>all</ToggleButton>
          <ToggleButton value='1' aria-label='model 1'>1</ToggleButton>
          <ToggleButton value='2' aria-label='model 2'>2</ToggleButton>
          <ToggleButton value='3' aria-label='model 3'>3</ToggleButton>
          <ToggleButton value='4' aria-label='model 4'>4</ToggleButton>
          <ToggleButton value='5' aria-label='model 5'>5</ToggleButton>
          <ToggleButton value='6' aria-label='model 6'>6</ToggleButton>
          <ToggleButton value='7' aria-label='model 7'>7</ToggleButton>
        </ToggleButtonGroup>
      </div>
      
      <div className='view-method'>
        <ToggleButtonGroup
          value={viewMethod}
          exclusive
          onChange={handleViewMethod}
          aria-label='view-method'
          orientation='vertical'
        >
          <ToggleButton value='ext' aria-label='exterior-view'>Exteroir</ToggleButton>
          <ToggleButton value='int' aria-label='interior-view'>Interior</ToggleButton>
        </ToggleButtonGroup>
      </div>
      {modelIndex === 0 &&
        <div className='view-connection'>
          <ToggleButtonGroup
            value={connectionIndex}
            exclusive
            onChange={handleConnection}
            aria-label='conection-state'
            orientation='vertical'
          >
              <ToggleButton value='1' aria-label='interior-view'>Connection 1</ToggleButton>
              <ToggleButton value='2' aria-label='interior-view'>Connection 2</ToggleButton>
          </ToggleButtonGroup>
        </div>
        }
    </Fragment>
  )
}

export default ControlPanel