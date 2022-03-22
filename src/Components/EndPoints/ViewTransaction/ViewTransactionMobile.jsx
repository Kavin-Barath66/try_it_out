import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'

function ViewTransactionMobile({viewTransactionMobileData, setViewTransactionMobileData}) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">View Transaction Mobile</Typography>
    </Stack>
    <Stack height="100%" width={'100%'} spacing={5} sx={{ paddingTop: 4, paddingBottom:4, paddingRight:15, paddingLeft:15 }}  >
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Transaction Reference
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Transaction Reference' 
          onChange={({ target }) =>
          setViewTransactionMobileData( (prev) =>
          ({...prev, transRef:target.value}))} 
          value={viewTransactionMobileData.transRef} />
      </Stack>
    </Stack>
    </>
  )
}

export default ViewTransactionMobile