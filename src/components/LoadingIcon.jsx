import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingIcon = () => {
  return (
    <>
    <Box sx={{display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',}}>
      <CircularProgress size={80} />
    </Box>
    </>
  )
}

export default LoadingIcon
