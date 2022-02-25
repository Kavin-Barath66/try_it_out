import React from 'react'
import { Stack, Button, Box, Typography } from '@mui/material'

function ResponseCreateTransactionBank(props) {
  return (
    <>
    <Box height="100%" display="flex" flexDirection="column" color="white">
        <Box flex={1} /* overflow="auto" */>
            <Stack p={3} m={0} justifyContent='flex-start' direction='row' sx={{backgroundColor:"#22387198"}}>
                <Stack justifyContent='left'  direction='row'>
                    <Typography variant='h6' fontFamily='Poppins' fontWeight='500' >Request</Typography>
                </Stack>
            </Stack>
            <Stack sx={{backgroundColor:"#f8fcff", minHeight:'100%' }}>
                <Stack p={3} color="#20336d">
                    <Typography pb={1} variant='h6' color="#20336d" fontFamily='Poppins' fontWeight='500' sx={{fontSize:"26px"}} >API code snippet</Typography>
                        <Typography fontSize={14} overflow="hidden" textOverflow="ellipsis" style={{wordWrap: "break-word"}}>
                        {JSON.stringify({
                            method: 'post',
                            url: 'https://uat-connect.terrapay.com:21211/eig/gsma/transactions',
                            headers: { 
                                'X-USERNAME': 'OpenTurfDev', 
                                'X-PASSWORD': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56', 
                                'X-DATE': '2018-04-04 09:27:16', 
                                'X-ORIGINCOUNTRY': 'US', 
                                'Content-Type': 'text/plain'
                            },
                            data : {  "amount": "500",  "currency": "INR",  "type": "inttransfer",  "descriptionText": "Gift for my brother",  "requestDate": "2021-05-23 08:19:36",  "requestingOrganisationTransactionReference": "SrcTxnId002",  "debitParty": [    {      "key": "msisdn",      "value": "+971810456234"    }  ],  "creditParty": [    {      "key": "bankaccountno",      "value": "50100002965304"    },    {      "key": "organisationid",      "value": "HDFC Bank"    },    {      "key": "sortcode",      "value": "HDFC0001626"    }  ],  "senderKyc": {    "nationality": "AE",    "dateOfBirth": "1967-05-28",    "gender": "M",    "idDocument": [      {        "idType": "VOTER_CARD",        "idNumber": "13321115521",        "issueDate": "1967-05-28",        "expiryDate": "2067-05-28",        "issuerCountry": "AE"      }    ],    "postalAddress": {      "addressLine1": "49 , park street",      "addressLine2": "12",      "addressLine3": "12",      "city": "12",      "stateProvince": "12",      "postalCode": "50000",      "country": "US"    },    "subjectName": {      "firstName": "Test",      "middleName": "",      "lastName": "Sender2",      "fullName": "Test Sender2"    }  },    "recipientKyc": {    "subjectName": {      "firstName": "Deepa",      "lastName": "Jain",      "fullName": "Deepa Jain"    }  },  "internationalTransferInformation": {    "quoteId": "QR037C1NA6ZXBSQ88B",    "receivingCountry": "IN",    "remittancePurpose": "Family Maintainance",    "sourceOfFunds": "Salary",    "relationshipSender": "Brother"  }}
                            })}
                        </Typography>
                </Stack>
            </Stack>
        </Box>
    </Box>
    </>
  )
}

export default ResponseCreateTransactionBank