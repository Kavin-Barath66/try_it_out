import React from 'react'
import { styled } from '@mui/system'
import { useState } from "react";
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container, FormControl, FormHelperText} from '@mui/material'

function AccountStatusMobile({allowUatAccess, mobileAccountStatusData, setMobileAccountStatusData}) {
    
    
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">Mobile Account Status</Typography>
    </Stack>
    <Stack height="100%" width={'100%'} spacing={5} sx={{ paddingTop: 4, paddingBottom:4, paddingRight:15, paddingLeft:15 }}  >
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
            Beneficiary msisdn<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
        <FormControl sx={{height:45}}>
          <OutlinedInput sx={{ height: 40 }} placeholder='msisdn' 
          disabled={!allowUatAccess}
          onChange={({ target }) =>
            setMobileAccountStatusData( (prev) =>
            ({...prev, msisdn:target.value}))} 
          value={mobileAccountStatusData.msisdn} 
          error={!mobileAccountStatusData.msisdn && true}
          />
          {!mobileAccountStatusData.msisdn && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileAccountStatusData.msisdn && "Mandatory Field"}
            </FormHelperText>
          )}
        </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Full KYC name of Beneficiary<span style={{color:'#ea5c57'}}> *</span>
          </Typography>
          <FormControl sx={{height:45}}>
            <OutlinedInput sx={{ height: 40 }} placeholder='bnv' 
            disabled={!allowUatAccess}
            onChange={({ target }) =>
              setMobileAccountStatusData( (prev) =>
              ({...prev, bnv:target.value}))}
            value={mobileAccountStatusData.bnv} 
            error={!mobileAccountStatusData.bnv && true}
          />
          {!mobileAccountStatusData.bnv && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!mobileAccountStatusData.bnv && "Mandatory Field"}
            </FormHelperText>
          )}
        </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Full name of Sender
          </Typography>
          <FormControl sx={{height:45}}>
          <OutlinedInput sx={{ height: 40 }} 
            placeholder="snv"
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setMobileAccountStatusData( (prev) =>
            ({...prev, snv:target.value}))}
          value={mobileAccountStatusData.snv} />
          </FormControl>
      </Stack>
      <Stack direction='row' alignItems='center' justifyContent='space-between' pb={30}>
          <Typography color="#575757" fontWeight='500'>
          Provider Code
          </Typography>
          <FormControl sx={{height:45}}>
          <OutlinedInput sx={{ height: 40 }} 
            placeholder="provider"
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setMobileAccountStatusData( (prev) =>
            ({...prev, provider:target.value}))}
          value={mobileAccountStatusData.provider} />
          </FormControl>
      </Stack>
    </Stack>
    </>
  )
}

export default AccountStatusMobile