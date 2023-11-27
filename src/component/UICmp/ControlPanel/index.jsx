import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setConnectionState, setInteiorView, setModelIndex } from '../../../redux/reducer'

import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import MuiToggleButton from '@mui/material/ToggleButton'
import styled from '@emotion/styled'
import { Fragment } from 'react'

const ControlPanel = () => { 
  // const dispatch = useDispatch()
  // const modelIndex = useSelector((state) => state.modelConfig.modelIndex)
  // const interiorView = useSelector((state) => state.modelConfig.interiorView)
  // const connectionState = useSelector((state) => state.modelConfig.connectionState)
  
  // const handleButton = (value) => {
  //   dispatch(setModelIndex(value));    
  // }
  
  // return (
  //   <Fragment>
  //     <div className='select-model-section'>
  //       <label className='label'>Select model</label>
  //       <button className='button' onClick={() => handleButton(0)}>All</button>
  //       <button className='button' onClick={() => handleButton(1)}>1</button>
  //       <button className='button' onClick={() => handleButton(2)}>2</button>
  //       <button className='button' onClick={() => handleButton(3)}>3</button>
  //       <button className='button' onClick={() => handleButton(4)}>4</button>
  //       <button className='button' onClick={() => handleButton(5)}>5</button>
  //       <button className='button' onClick={() => handleButton(6)}>6</button>
  //       <button className='button' onClick={() => handleButton(7)}>7</button>
  //     </div>
  //     <div className='interior-view-section'>
  //         <button
  //           className='button'
  //           onClick={() => dispatch(setInteiorView())}
  //         >
  //           {interiorView ? 'Exterior View' : 'Interior View'}
  //         </button>
  //         {modelIndex === 0 &&
  //           <>
  //             <hr style={{ width: 100}} />
  //             <button className='button' onClick={() => dispatch(setConnectionState(0))} disabled={connectionState === 0 ? true : false}>Connection Hidden</button>
  //             <button className='button' onClick={() => dispatch(setConnectionState(1))} disabled={connectionState === 1 ? true : false}>Connection - 1</button>
  //             <button className='button' onClick={() => dispatch(setConnectionState(2))} disabled={connectionState === 2 ? true : false}>Connection - 2</button>
  //           </>
  //         }
  //     </div>
  //   </Fragment>
  // )  

  const dispatch = useDispatch()

  const [selectedModelIndex, setSelectedModelIndex] = useState('0')
  const [viewMethod, setViewMethod] = useState('ext')

  const handleModelView = (event, newModelIndex) => {
      setSelectedModelIndex(newModelIndex);
      dispatch(setModelIndex(Number(newModelIndex)));  
  }

  const handleViewMethod = (event, method) => {
      setViewMethod(method)
      if (method === 'int') {
        dispatch(setInteiorView(true))
      } else {
        dispatch(setInteiorView(false))
      }
  }

  const ToggleButton = styled(MuiToggleButton)({
    "&.MuiToggleButton-root": {
      color: '#043500',
    },

    "&.Mui-selected, &.Mui-selected:hover": {
      paddingLeft: 20,
      paddingRight: 20,
      color: '#ADADAD',
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
    </Fragment>
  )
}

export default ControlPanel