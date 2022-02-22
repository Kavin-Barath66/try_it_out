import React from 'react'
import { Stack, Button, Box, Typography } from '@mui/material'

function ResponseGetBankList(props) {
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
                        curl --location --request GET 'https://connect.terrapay.com:21211/eig/getbanklist/BD'\
                        <br/>--header 'X-USERNAME: username'\
                        <br/>--header 'X-PASSWORD: password'\
                        <br/>--header 'X-DATE:request datetime'\
                        <br/>--header 'X-ORIGINCOUNTRY:origincountry'\
                        <br/>--header 'Content-Type: application/json'
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    </Box>
    </>
  )
}

export default ResponseGetBankList