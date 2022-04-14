import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container, FormControl, FormHelperText} from '@mui/material'

function CancelTransaction({allowUatAccess, cancelTransactionData, setCancelTransactionData}) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">Cancel Transaction</Typography>
    </Stack>
    <Stack height="100%" width={'100%'} spacing={5} sx={{ paddingTop: 4, paddingBottom:4, paddingRight:15, paddingLeft:15 }}  >
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500' sx={{width:350}}>
          Reason For Cancelling
          </Typography>
          <FormControl sx={{height:45}}>
          <OutlinedInput sx={{ height: 40, width: 213 }} placeholder='Cancel Reason' 
          disabled={!allowUatAccess}
          onChange={({ target }) =>
          setCancelTransactionData( (prev) =>
            ({...prev, reason:target.value}))} 
          value={cancelTransactionData.reason}
          /> </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500' sx={{width:350}}>
          Transaction Reference ID<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}><OutlinedInput sx={{ height: 40, width: 213 }} placeholder='Transaction ID' 
          disabled={!allowUatAccess}
          onChange={({ target }) =>
          setCancelTransactionData( (prev) =>
            ({...prev, txId:target.value}))} 
          value={cancelTransactionData.txId}
          error={!cancelTransactionData.txId && true}
          />
          {!cancelTransactionData.txId && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!cancelTransactionData.txId && "Mandatory Field"}
            </FormHelperText>
          )}
          </FormControl>
      </Stack>
    </Stack>
    </>
  )
}

export default CancelTransaction