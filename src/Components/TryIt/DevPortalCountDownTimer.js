import React from 'react'
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container , IconButton, FormHelperText} from '@mui/material'
import {useState, useEffect } from 'react'

const DevPortalCountDownTimer = (props) => {
   
    const { hours = 0, minutes = 10, seconds = 0 } = props.hoursMinSecs;
    const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
    

    const tick = () => {
        if (hrs === 0 && mins === 0 && secs === 0) 
        props.clearTimeOut()
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(0), parseInt(0), parseInt(0)]);
    
    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <Box sx={{fontFamily:'Poppins', color:'#23366b', fontWeight:'medium', fontSize:'12px'}}>
            <p>{`${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
        </Box>
    );
}

export default DevPortalCountDownTimer;