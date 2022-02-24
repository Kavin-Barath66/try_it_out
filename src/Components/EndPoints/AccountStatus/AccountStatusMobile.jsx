import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'

function AccountStatusMobile(props) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">Mobile Account Status</Typography>
    </Stack>
    <Stack height="100%" width={600} spacing={5} sx={{ p: 4 }} >
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Beneficiary MSISDN with country code
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='MSISDN number' onChange={({ target }) => props.setAccountNumber(target.value)} value={props.accountNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Full KYC name of the beneficiary
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Full KYC name' onChange={({ target }) => props.setKycNumber(target.value)} value={props.kycNumber} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Account Instrument
          </Typography>

          <TextField
          sx={{ width: 205 }}
          label="Instrument"
          value={props.network}
          onChange={({ target }) => props.setNetwork(target.value)}
          select
          InputProps={{ style: { height: 40 } }}
          InputLabelProps={{ style: { height: 40 } }}
          >
          <MenuItem value='mobile-wallet'>Mobile-Wallet</MenuItem>
          <MenuItem value='bank-account'>Bank-Account</MenuItem>
          </TextField>
      </Stack>
    </Stack>
    </>
  )
}

export default AccountStatusMobile