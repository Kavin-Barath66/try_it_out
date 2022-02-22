import { Stack, Button, Box, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import ResponseBody from './ResponseBody';
import ResponseHeader from './ResponseHeader';

function ResponseJson(props) {
    const [header, setHeaders] = useState(false);
    const [body, setBody] = useState(true);


    const CustomButtom = styled(Button)`
    &.Mui-disabled{
    opacity:0.5;
    color:white
    }`

    const onBodyClick = () =>{
        setHeaders(false)
        setBody(true)
    }
    const onHeadersClick = () =>{
        setBody(false)
        setHeaders(true)
    }


  return (
    <Box height="100vh" display="flex" flexDirection="column" sx={{backgroundColor:"rgba(0,0,0,0.9)", opacity:'0px', border:"2px solid #1976d2"}}>
        <Box flex={1} overflow="auto">
        <Stack p={3} m={0} justifyContent='space-between' direction='row' sx={{borderBottom:"2px solid #1976d2"}}>
            <Stack spacing={3} justifyContent='left'  direction='row' >
                <CustomButtom  sx={!body?{ alignSelf: 'center', letterSpacing: 1, backgroundColor:'rgba(0, 0, 0, 0.12)'}:{ alignSelf: 'center', letterSpacing: 1, backgroundColor: '#1976d2'}} variant='contained' onClick={onBodyClick}>Body</CustomButtom>
                <CustomButtom sx={!header?{ alignSelf: 'center', letterSpacing: 1, backgroundColor:'rgba(0, 0, 0, 0.12)'}:{ alignSelf: 'center', letterSpacing: 1, backgroundColor: '#1976d2'}} variant='contained' onClick={onHeadersClick}>Headers</CustomButtom>
            </Stack>
            <Stack justifyContent='left'  direction='row'>
                <Typography color="white" variant='h6' fontFamily='Poppins' fontWeight='500' > </Typography>
            </Stack>
        </Stack>
        
        <Stack>
            <Stack p={3} >
                <Typography pb={1} color="white" variant='h6' fontFamily='Poppins' fontWeight='500' sx={{fontSize:"26px"}} >{body? "Response JSON":"Response Headers"}</Typography>
                {body? <ResponseBody accountMobileResposeData={props.accountMobileResposeData} /> : <ResponseHeader accountMobileHeader={props.accountMobileHeader} />}
            </Stack>
        </Stack>
    </Box>
    </Box>
  )
}

export default ResponseJson