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
            Beneficiary msisdn<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='msisdn' 
          disabled={!allowUatAccess}
          onChange={({ target }) =>
            setMobileAccountStatusData( (prev) =>
            ({...prev, msisdn:target.value}))} 
          value={mobileAccountStatusData.msisdn} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Full KYC name of Beneficiary<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <OutlinedInput sx={{ height: 40 }} placeholder='bnv' 
          disabled={!allowUatAccess}
          onChange={({ target }) =>
            setMobileAccountStatusData( (prev) =>
            ({...prev, bnv:target.value}))}
          value={mobileAccountStatusData.bnv} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Full name of Sender
          </Typography>
          <OutlinedInput sx={{ height: 40 }} 
            placeholder="snv"
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setMobileAccountStatusData( (prev) =>
            ({...prev, snv:target.value}))}
          value={mobileAccountStatusData.snv} />
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between' pb={30}>
          <Typography color="#575757" fontWeight='500'>
          Provider
          </Typography>
          <OutlinedInput sx={{ height: 40 }} 
            placeholder="provider"
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setMobileAccountStatusData( (prev) =>
            ({...prev, provider:target.value}))}
          value={mobileAccountStatusData.provider} />
      </Stack>
    </Stack>
    </>
  )
}

export default AccountStatusMobile