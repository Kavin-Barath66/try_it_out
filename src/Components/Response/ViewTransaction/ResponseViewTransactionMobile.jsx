import React from 'react'
import { Stack, Button, Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { useState } from 'react'

function ResponseViewTransactionMobile(props) {
    const [headerTab, setHeaderTab] = useState(false)
    const [bodyTab, setBodyTab] = useState(true)

    const onHeaderButtonClick=()=>{
        setBodyTab(false)
        setHeaderTab(true)
    }
    const onBodyButtonClick=()=>{
        setHeaderTab(false)
        setBodyTab(true)
    }
    const CustomButtom = styled(Button)`
    &.Mui-disabled{
    opacity:0.5;
    color:white
    }&:hover {
        background-color: #E4302A;
    }`


  return (
    <>
    {!props.responseScreen?<Box height="100vh" display="flex" flexDirection="column" color="white">
        <Box flex={1} /* overflow="auto" */>
            <Stack p={3} m={0} justifyContent='flex-start' direction='row' sx={{backgroundColor:"#22387198"}}>
                <Stack justifyContent='left'  direction='row'>
                    <Typography variant='h6' fontFamily='Poppins' fontWeight='500' >Request</Typography>
                </Stack>
            </Stack>
            <Stack sx={{backgroundColor:"#f8fcff", height:'100vh' }}>
                <Stack p={3} color="#20336d">
                    <Typography pb={1} variant='h6' color="#20336d" fontFamily='Poppins' fontWeight='500' sx={{fontSize:"26px"}} >API code snippet</Typography>
                        <Typography fontSize={14} overflow="hidden" textOverflow="ellipsis" style={{wordWrap: "break-word"}}>
                        {JSON.stringify({
                            method: 'get',
                            url: 'https://uat-connect.terrapay.com:21211/eig/gsma/transactions/SrcTxnId001',
                            headers: { 
                                'X-USERNAME': 'OpenTurfDev', 
                                'X-PASSWORD': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56', 
                                'X-DATE': '2018-04-04 09:27:16', 
                                'X-ORIGINCOUNTRY': 'US'
                            },
                            data: {}
                            })}
                        </Typography>
                </Stack>
            </Stack>
        </Box>
    </Box>:<Box height="100vh" display="flex" flexDirection="column" color="white">
    <Box flex={1}>
        <Stack p={3} m={0} justifyContent='space-between' direction='row' sx={{backgroundColor:"#22387198"}}>
            <Stack justifyContent='left'  direction='row' spacing={4}>
                <CustomButtom  sx={bodyTab?{textAlign:'center', minWidth:'100px', alignSelf: 'center', letterSpacing: 1, backgroundColor:'#ea5c57'}:{textAlign:'center', minWidth:'100px', alignSelf: 'center', letterSpacing: 1, backgroundColor:'#eb5e5780'}} variant='contained' onClick={onBodyButtonClick} >BODY</CustomButtom>
                <CustomButtom  sx={headerTab?{textAlign:'center', minWidth:'100px', alignSelf: 'center', letterSpacing: 1, backgroundColor:'#ea5c57'}:{textAlign:'center', minWidth:'100px', alignSelf: 'center', letterSpacing: 1, backgroundColor:'#eb5e5780'}} variant='contained' onClick={onHeaderButtonClick} >HEADERS</CustomButtom>
            </Stack>
            <Stack justifyContent='left'  direction='row'>
                <Typography variant='h6' fontFamily='Poppins' fontWeight='500' ></Typography>
            </Stack>
        </Stack>
        <Stack sx={{backgroundColor:"#f8fcff", height:'100vh' }}>
        {bodyTab?<Stack p={3} color="#20336d">
                <Typography pb={1} variant='h6' color="#20336d" fontFamily='Poppins' fontWeight='500' sx={{fontSize:"26px"}} >Response JSON</Typography>
                    <Typography fontSize={14} overflow="hidden" textOverflow="ellipsis" style={{wordWrap: "break-word"}}>
                    {JSON.stringify(props.apiResponseData)}
                    </Typography>
            </Stack>:
            <Stack p={3} color="#20336d">
                <Typography pb={1} variant='h6' color="#20336d" fontFamily='Poppins' fontWeight='500' sx={{fontSize:"26px"}} >Headers</Typography>
                    <Typography fontSize={14} overflow="hidden" textOverflow="ellipsis" style={{wordWrap: "break-word"}}>
                    {JSON.stringify({ 
                        'X-USERNAME': 'OpenTurfDev', 
                        'X-PASSWORD': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56', 
                        'X-DATE': '2018-04-04 09:27:16', 
                        'X-ORIGINCOUNTRY': 'US'
                    })}
                    </Typography>
            </Stack>}
        </Stack>
    </Box>
</Box>}
    </>
  )
}

export default ResponseViewTransactionMobile