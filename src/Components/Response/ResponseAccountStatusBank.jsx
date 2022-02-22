import React from 'react'
import { Stack, Button, Box, Typography } from '@mui/material'

function ResponseAccountStatusBank(props) {
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
                        GET /eig/gsma/accounts/232698745623/status?bnv=John%20Smith&bankcode=CBKEKENX&bankname=CENTRAL%20BANK%20OF%20KENYA&country=US&provider=2549008&snv=David%20Robinson HTTP/1.1
                        <br/>Host: xxx.xxx.xxx.xxx
                        <br/>Content-Type: text/json; charset=utf-8
                        <br/>X-USERNAME: "terrapayuser"
                        <br/>X-PASSWORD: "101dfd2422f23f06120b77ab17d39229ff9bb40563eae042bc6cc6e8f9f1825b"
                        <br/>X-DATE: "2017-05-03 11:00:00"
                        <br/>X-ORIGINCOUNTRY: "US"
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    </Box>
    </>
  )
}

export default ResponseAccountStatusBank