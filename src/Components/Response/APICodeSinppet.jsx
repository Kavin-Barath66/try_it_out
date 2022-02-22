import { Stack, Button, Box, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import './response.css'

function APICodeSinppet(props) {
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
                    {props.accountStatuMobile?<Typography fontSize={14} overflow="hidden" textOverflow="ellipsis" style={{wordWrap: "break-word"}}>
                    GET /eig/gsma/accounts/msisdn/+234xxxxxxxxx/status?bnv=John%20Smith&provider=23401&snv=David%20Robinson HTTP/1.1
                    <br/>Host: xxx.xxx.xxx.xxx
                    <br/>Content-Type: text/json; charset=utf-8
                    <br/>X-USERNAME: "terrapayuser"
                    <br/>X-PASSWORD: "101dfd2422f23f06120b77ab17d39229ff9bb40563eae042bc6cc6e8f9f1825b"
                    <br/>X-DATE: "2017-05-03 11:00:00"
                    <br/>X-ORIGINCOUNTRY: "US"
                    </Typography>
                    :props.accountStatuBank?<Typography fontSize={14} overflow="hidden" textOverflow="ellipsis" style={{wordWrap: "break-word"}}>
                    GET /eig/gsma/accounts/232698745623/status?bnv=John%20Smith&bankcode=CBKEKENX&bankname=CENTRAL%20BANK%20OF%20KENYA&country=US&provider=2549008&snv=David%20Robinson HTTP/1.1
                    <br/>Host: xxx.xxx.xxx.xxx
                    <br/>Content-Type: text/json; charset=utf-8
                    <br/>X-USERNAME: "terrapayuser"
                    <br/>X-PASSWORD: "101dfd2422f23f06120b77ab17d39229ff9bb40563eae042bc6cc6e8f9f1825b"
                    <br/>X-DATE: "2017-05-03 11:00:00"
                    <br/>X-ORIGINCOUNTRY: "US"
                    </Typography>
                    :props.ledgerBalance?<Typography fontSize={14} overflow="hidden" textOverflow="ellipsis" style={{wordWrap: "break-word"}}>
                    curl --location --request GET 'https://uat-connect.terrapay.com:21211/eig/gsma/accounts/USD/balance'\
                    <br/>--header 'X-USERNAME: partneruat'\
                    <br/>--header 'X-PASSWORD: 101dfd2422f23f06120b77ab17d39229ff9bb40563eae042bc6cc6e8f9f1825b'\
                    <br/>--header 'X-DATE: 2017-05-03 11:00:00'\
                    <br/>--header 'X-ORIGINCOUNTRY:US'\
                    <br/>--header 'Content-Type: application/json'
                    </Typography>
                    :props.corridorQuotation?<Typography fontSize={14} overflow="hidden" textOverflow="ellipsis" style={{wordWrap: "break-word"}}>
                    curl --location --request GET'https://uat-connect.terrapay.com:21211/eig/gsma/quotations/all '\
                    <br/>--header 'X-USERNAME: partneruat'\
                    <br/>--header 'X-PASSWORD: 101dfd2422f23f06120b77ab17d39229ff9bb40563eae042bc6cc6e8f9f1825b'\
                    <br/>--header 'X-DATE: 2017-05-03 11:00:00'\
                    <br/>--header 'X-ORIGINCOUNTRY:US'\
                    <br/>--header 'Content-Type: application/json'
                    </Typography>
                    :props.getBankList?<Typography fontSize={14} overflow="hidden" textOverflow="ellipsis" style={{wordWrap: "break-word"}}>
                    curl --location --request GET 'https://connect.terrapay.com:21211/eig/getbanklist/BD'\
                    <br/>--header 'X-USERNAME: username'\
                    <br/>--header 'X-PASSWORD: password'\
                    <br/>--header 'X-DATE:request datetime'\
                    <br/>--header 'X-ORIGINCOUNTRY:origincountry'\
                    <br/>--header 'Content-Type: application/json'
                    </Typography>
                    :<Typography fontSize={14} overflow="hidden" textOverflow="ellipsis" style={{wordWrap: "break-word"}}>
                    Select an API endpoint to try
                    </Typography>}
            </Stack>
        </Stack>
        </Box>
    </Box>
    </>
  )
}

export default APICodeSinppet