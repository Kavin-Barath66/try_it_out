import React from 'react'
import { Stack, Button, Box, Typography, MenuItem, TextField } from '@mui/material'
import { currencyList } from '../../Utils/currency'

function LedgerBalance({allowUatAccess,ledgerBalanceData, setLedgerBalanceData}) {
  return (<>
          <Stack direction='row' alignItems='center' justifyContent='center'>
              <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">Ledger Balance</Typography>
          </Stack>
          <Stack height="100%" width={600} spacing={5} sx={{ p: 4 }} >
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Typography color="#575757" fontWeight='500'>
          Currency
          </Typography>
          <TextField
            sx={{ width: 205 }}
            label="Currency"
            onChange={({ target }) =>
            setLedgerBalanceData( (prev) =>
                ({...prev, currency:target.value}))} 
            value={ledgerBalanceData.currency}
            select
            disabled={!allowUatAccess}
            InputProps={{ style: { height: 40 } }}
            InputLabelProps={ledgerBalanceData.currency?{ style: { height: 40} }:{ style: { height: 40, marginTop:-7 } }}
          >
          <MenuItem value="">All</MenuItem>
            {currencyList && currencyList.length > 0 && currencyList.map((value, index) => {
              return (
                <MenuItem key={index} value={value.id}>{value.id}</MenuItem>
              )
            })}
          </TextField>
          </Stack>
          </Stack>
      </>
      
  )
}

export default LedgerBalance