import React from 'react'
import { Stack, Button, Box, Typography } from '@mui/material'

function ResponseHeader(props) {
  const Data =JSON.stringify(props.accountMobileHeader);

  return (
    <>
    <Stack spacing={4} alignItems='left' color="white" justifyContent='flex-start' direction='row'>
      {/* <Stack  spacing={1} textAlign='left'>
        <Typography py={2} variant="h6" fontWeight='600' >Header</Typography>
        <Typography >username</Typography>
        <Typography >password</Typography>
        <Typography >actualdate</Typography>
        <Typography >origincountry</Typography>
      </Stack>
      <Stack spacing={1}>
        <Typography py={2} variant="h6" fontWeight='600' >Value</Typography>
        <Typography overflow="hidden" textOverflow="ellipsis" style={{wordWrap: "break-word"}}>OpenTurfDev</Typography>
        <Typography overflow="hidden" textOverflow="ellipsis" style={{wordWrap: "break-word"}}>85d6cdbcee2b56a84eba0f542a846de06</Typography>
        <Typography overflow="hidden" textOverflow="ellipsis" style={{wordWrap: "break-word"}}>2018-04-04 09:27:16</Typography>
        <Typography overflow="hidden" textOverflow="ellipsis" style={{wordWrap: "break-word"}}>US</Typography>
      </Stack> */}
      <Typography color="white" fontSize={16} overflow="hidden" textOverflow="ellipsis" style={{wordWrap: "break-word"}}>
          {Data}
      </Typography>
    </Stack>
  </>
  )
}

export default ResponseHeader