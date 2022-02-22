import React from 'react'
import { Stack, Button, Box, Typography } from '@mui/material'

function ResponseViewTransactionMobile(props) {
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
                        curl --location --request GET 'https://uat-connect.terrapay.com:21211/eig/gsma/transactions/TPPU000000334449' \
                        <br/>--header 'X-DATE: 2020-01-02 10:51:16' \
                        <br/>--header 'X-ORIGINCOUNTRY: US' \
                        <br/>--header 'X-USERNAME: partneruat' \
                        <br/>--header 'X-PASSWORD: cb0ae8d698378ed31c04a1b41bee389a8e392313c09c0c2df2e52b09d74af86b' \
                        <br/>--header 'Content-Type: application/json' \
                        <br/>--data-raw ''
                        </Typography>
                </Stack>
            </Stack>
        </Box>
    </Box>
    </>
  )
}

export default ResponseViewTransactionMobile