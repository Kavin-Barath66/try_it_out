import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'

function CancelTransaction({allowUatAccess, cancelTransactionData, setCancelTransactionData}) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">Cancel Transaction</Typography>
    </Stack>
    <Stack height="100%" width={600} spacing={5} sx={{ p: 4 }} >
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Reason For Cancelling
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Cancel Reason' 
          disabled={!allowUatAccess}
          onChange={({ target }) =>
          setCancelTransactionData( (prev) =>
            ({...prev, reason:target.value}))} 
          value={cancelTransactionData.reason}
          />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Transaction ID
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Transaction ID' 
          disabled={!allowUatAccess}
          onChange={({ target }) =>
          setCancelTransactionData( (prev) =>
            ({...prev, txId:target.value}))} 
          value={cancelTransactionData.txId}
          />
      </Stack>
    </Stack>
    </>
  )
}

export default CancelTransaction