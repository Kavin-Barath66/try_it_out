import React from 'react'
import { Stack, Button, Box, Typography, MenuItem, TextField } from '@mui/material'

function LedgerBalance() {
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
                /*  onChange={({ target }) =>
                    setCreateTransactionBankData( (prev) =>
                    ({...prev, senderGender:target.value}))} 
                    value={createTransactionBankData.senderGender} */
                  select
                  InputProps={{ style: { height: 40 } }}
                  InputLabelProps={{ style: { height: 40 } }}
                >
                  <MenuItem value='all'>All</MenuItem>
                  <MenuItem value='USD'>USD</MenuItem>
                  <MenuItem value='INR'>INR</MenuItem>
                </TextField>
            </Stack>
          </Stack>
      </>
      
  )
}

export default LedgerBalance