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
                        curl --location --request POST 'https://uat-connect.terrapay.com:21211/eig/gsma/remitCancel/'\
                        <br/>--header 'X-USERNAME: partneruat'\
                        <br/>--header 'X-PASSWORD: 101dfd2422f23f06120b77ab17d39229ff9bb40563eae042bc6cc6e8f9f1825b'\
                        <br/>--header 'X-DATE: "2021-01-03 11:00:00'\
                        <br/>--header 'X-ORIGINCOUNTRY:US'\
                        <br/>--header 'Content-Type: application/json'\
                        <br/>--data-raw
                        {JSON.stringify({
                            "cancelreason": "cancelling",
                            "txnId": "TPSE000000298941"
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