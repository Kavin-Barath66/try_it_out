import React from 'react'
import { Stack, Button, Box, Typography } from '@mui/material'

function ResponseCancelTransaction(props) {
  return (
    <>
    <Box height="100vh" display="flex" flexDirection="column" color="white">
        <Box flex={1} /* overflow="auto" */>
            <Stack p={3} m={0} justifyContent='flex-start' direction='row' sx={{backgroundColor:"#22387198"}}>
                <Stack justifyContent='left'  direction='row'>
                    <Typography variant='h6' fontFamily='Poppins' fontWeight='500' >Request</Typography>
                </Stack>
            </Stack>
            <Stack sx={{backgroundColor:"rgba(255, 255, 255, 1)", height:'100vh' }}>
                <Stack p={3} color="#20336d">
                    <Typography pb={1} variant='h6' color="#20336d" fontFamily='Poppins' fontWeight='500' sx={{fontSize:"26px"}} >API code snippet</Typography>
                    <Typography fontSize={14} overflow="hidden" textOverflow="ellipsis" style={{wordWrap: "break-word"}}>
                        {JSON.stringify({
                            method: 'post',
                            url: 'https://uat-connect.terrapay.com:21211/eig/gsma/remitCancel',
                            headers: { 
                                'X-USERNAME': 'OpenTurfDev', 
                                'X-PASSWORD': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56', 
                                'X-DATE': '2018-04-04 09:27:16', 
                                'X-ORIGINCOUNTRY': 'US', 
                                'Content-Type': 'application/json'
                                },
                            data:{}
                            })}
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    </Box>
    </>
  )
}

export default ResponseCancelTransaction