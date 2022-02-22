import React from 'react'
import { Stack, Button, Box, Typography } from '@mui/material'

function ResponseBody(props) {

  const Data =JSON.stringify(props.accountMobileResposeData.data);

  return (
    <>
      <Typography color="white" fontSize={16} overflow="hidden" textOverflow="ellipsis" style={{wordWrap: "break-word"}}>
      {Data}
      </Typography>
    </>
  )
}

export default ResponseBody