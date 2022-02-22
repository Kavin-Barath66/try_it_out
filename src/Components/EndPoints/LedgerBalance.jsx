import React from 'react'
import { Stack, Button, Box, Typography } from '@mui/material'

function LedgerBalance() {
  return (
    <Stack direction='row' alignItems='center' justifyContent='center'>
        <Typography py={2} textAlign='center' fontWeight={600} fontSize={20} variant='h6' color="#404040">Ledger Balance</Typography>
    </Stack>
  )
}

export default LedgerBalance