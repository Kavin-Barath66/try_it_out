import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'

function ReverseTransaction({reverseTransactionData, setReverseTransactionData}) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">Reverse Transaction</Typography>
    </Stack>
    <Stack height="100%" width={600} spacing={5} sx={{ p: 4 }} >
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Reason For Reversing
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Reversal Reason' 
          onChange={({ target }) =>
          setReverseTransactionData( (prev) =>
            ({...prev, reason:target.value}))} 
        value={reverseTransactionData.reason} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Transaction ID
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Transaction ID' 
          onChange={({ target }) =>
          setReverseTransactionData( (prev) =>
            ({...prev, txId:target.value}))} 
        value={reverseTransactionData.txId}  />
      </Stack>
    </Stack>
    </>
  )
}

export default ReverseTransaction