import React from 'react'
import { Stack, Button, Box, Typography, OutlinedInput, FormControl, FormHelperText} from '@mui/material'

function GetBankList({allowUatAccess, setGetBankListData, getBankListData}) {
  return (
    <>
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">Get Bank List</Typography>
    </Stack>
    <Stack height="100%" width={600} spacing={5} sx={{ p: 4 }} >
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Destination Country Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}> 
            <OutlinedInput sx={{ height: 40 }} 
            placeholder="countryCode"
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setGetBankListData( (prev) =>
                ({...prev, country:target.value}))} 
            value={getBankListData.country} 
            error={!getBankListData.country && true}
          />
          {!getBankListData.country && (
            <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
              {!getBankListData.country && "Mandatory Field"}
            </FormHelperText>
          )}
            </FormControl>
        </Stack>

       {/*  <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Last Updated Date/Time<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}> 
            <OutlinedInput sx={{ height: 40 }} 
            placeholder="lastUpdatedOn"
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setGetBankListData( (prev) =>
                ({...prev, lastUpdatedOn:target.value}))} 
            value={getBankListData.lastUpdatedOn} 
            error={!getBankListData.lastUpdatedOn && true}
            />
            {!getBankListData.lastUpdatedOn && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!getBankListData.lastUpdatedOn && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Full name of Beneficiary Bank<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>    
            <OutlinedInput sx={{ height: 40 }} 
            placeholder="bankName"
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setGetBankListData( (prev) =>
                ({...prev, bankName:target.value}))} 
            value={getBankListData.bankName} 
            error={!getBankListData.bankName && true}
            />
            {!getBankListData.bankName && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!getBankListData.bankName && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Bank Code<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>  
            <OutlinedInput sx={{ height: 40 }} 
            placeholder="bankCode"
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setGetBankListData( (prev) =>
                ({...prev, bankCode:target.value}))} 
            value={getBankListData.bankCode} 
            error={!getBankListData.bankCode && true}
            />
            {!getBankListData.bankCode && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!getBankListData.bankCode && "Mandatory Field"}
              </FormHelperText>
            )}

            </FormControl>
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography color="#575757" fontWeight='500'>
            Provider Code
            </Typography>
            <OutlinedInput sx={{ height: 40 }} 
            placeholder="providerCode"
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setGetBankListData( (prev) =>
                ({...prev, providerCode:target.value}))} 
            value={getBankListData.providerCode} />
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='space-between' pb={30}>
            <Typography color="#575757" fontWeight='500'>
            Account Status<span style={{color:'#ea5c57'}}> *</span>
            </Typography>
            <FormControl sx={{height:45}}>  
            <OutlinedInput sx={{ height: 40 }} 
            placeholder="status"
            disabled={!allowUatAccess}
            onChange={({ target }) =>
            setGetBankListData( (prev) =>
                ({...prev, status:target.value}))} 
            value={getBankListData.status} 
            error={!getBankListData.status && true}
            />
            {!getBankListData.status && (
              <FormHelperText error sx={{marginLeft:'0px', fontSize:'12px', color:'#ea5c57'}} >
                {!getBankListData.status && "Mandatory Field"}
              </FormHelperText>
            )}
            </FormControl>
        </Stack> */}
    </Stack>
    </>
  )
}

export default GetBankList