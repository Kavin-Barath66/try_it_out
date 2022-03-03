import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'

function AccountStatusMobile({allowUatAccess, mobileAccountStatusData, setMobileAccountStatusData}) {
    
    
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
          <OutlinedInput sx={{ height: 40 }} placeholder='MSISDN number' 
          disabled={!allowUatAccess}
          onChange={({ target }) =>
            setMobileAccountStatusData( (prev) =>
            ({...prev, msisdn:target.value}))} 
          value={mobileAccountStatusData.msisdn} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Full KYC name of the beneficiary
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='Full KYC name' 
          disabled={!allowUatAccess}
          onChange={({ target }) =>
            setMobileAccountStatusData( (prev) =>
            ({...prev, bnv:target.value}))}
          
          value={mobileAccountStatusData.bnv} />
      </Stack>
      {/* <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Account Instrument
          </Typography>

          <TextField
          sx={{ width: 205 }}
          label="Instrument"
          value={mobileAccountStatusData.instrument}
          onChange={({ target }) =>
          setMobileAccountStatusData( (prev) =>
            ({...prev, instrument:target.value}))}
          select
          InputProps={{ style: { height: 40 } }}
          InputLabelProps={{ style: { height: 40 } }}
          >
          <MenuItem value='mobile-wallet'>Mobile-Wallet</MenuItem>
          <MenuItem value='bank-account'>Bank-Account</MenuItem>
          </TextField>
      </Stack> */}
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Full name of the sender as per KYC Id
          </Typography>
          <OutlinedInput sx={{ height: 40 }} 
            placeholder="Disabled"
            disabled />
      </Stack>
    </Stack>
    </>
  )
}

export default AccountStatusMobile