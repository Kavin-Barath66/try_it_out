import React from 'react'
import { Stack, Button, Box, Typography } from '@mui/material'

function ResponseCreateTransactionBank(props) {
  return (
    <>
    <Box height="100vh" display="flex" flexDirection="column" color="white">
        <Box flex={1} /* overflow="auto" */>
            <Stack p={3} m={0} justifyContent='flex-start' direction='row' sx={{backgroundColor:"#22387198"}}>
                <Stack justifyContent='left'  direction='row'>
                    <Typography variant='h6' fontFamily='Poppins' fontWeight='500' >Request</Typography>
                </Stack>
            </Stack>
            <Stack sx={{backgroundColor:"rgba(255, 255, 255, 1)", height:'100vh' }}>
                <Stack p={3} color="#20336d">
                    <Typography pb={1} variant='h6' color="#20336d" fontFamily='Poppins' fontWeight='500' sx={{fontSize:"26px"}} >API code snippet</Typography>
                        <Typography fontSize={14} overflow="hidden" textOverflow="ellipsis" style={{wordWrap: "break-word"}}>
                            curl --location --request POST 'https://uat-connect.terrapay.com:21211/eig/gsma/transactions' \
                            <br/>--header 'X-DATE: 2020-01-02 10:51:16' \
                            <br/>--header 'X-ORIGINCOUNTRY: US' \
                            <br/>--header 'X-USERNAME: partneruat' \
                            <br/>--header 'X-PASSWORD: cb0ae8d698378ed31c04a1b41bee389a8e392313c09c0c2df2e52b09d74af86b' \
                            <br/>--header 'Content-Type: application/json' \
                            <br/>--data-raw {JSON.stringify({
                            "currency":"INR",
                            "type":"p2b",
                            "requestDate":"2020-01-02 10:51:16",
                            "amount":"7291.35",
                            "descriptionText":"Gift for my brother",
                            "requestingOrganisationTransactionReference":"requestingOrganisationTransactionReference12",
                            "sendingAmount":"7291.35",
                            "payinCcyCode":"USD",
                            "paymentMode":"cash",
                            "authenticationPartnerCode":"4534",
                            "paymentOption":"Mobile Wallet",
                            "sendingPartnerCode":"343432223",
                            "receivingPartnerCode":"343431223",
                            "debitParty":[
                                {
                                    "key":"msisdn",
                                    "value":"+4491509874561"
                                }
                            ],
                            "creditParty":[
                                {
                                    "key":"bankaccountno",
                                    "value":"232201001617"
                                },
                                {
                                    "key":"sortcode",
                                    "value":"CNRB0000232"
                                },
                                {
                                    "key":"organisationid",
                                    "value":"Canara Bank"
                                },
                                {
                                    "key":"bankBranchName",
                                    "value":"Canara Bank"
                                },
                                {
                                    "key":"accountName",
                                    "value":"Devki Luggage Centre"
                                },
                                {
                                    "key":"accountIBAN",
                                    "value":"GB29NWBK60161331926819"
                                },
                                {
                                    "key":"accountAdditionalNo1",
                                    "value":"2656915085434"
                                }
                            ],
                            "senderKyc":{
                                "nationality":"US",
                                "dateOfBirth":"1986-06-28",
                                "gender":"M",
                                "primaryContactCountryCode":"USA",
                                "primaryContactNo":"2349061114853",
                                "primaryContactNoType":"personal",
                                "idDocument":[
                                    {
                                        "idType":"nationalidcard",
                                        "idNumber":"123456789",
                                        "issueDate":"2003-09-26",
                                        "expiryDate":"2033-09-26",
                                        "issuerCountry":"US"
                                    }
                                ],
                                "postalAddress":{
                                    "addressLine1":"49 ",
                                    "addressLine2":"park street",
                                    "addressLine3":"walton'\''s road",
                                    "city":"Lyon",
                                    "stateProvince":"Lyon",
                                    "postalCode":"123456",
                                    "country":"US"
                                },
                                "subjectName":{
                                    "title":"Mr.",
                                    "firstName":"Einstein",
                                    "middleName":"James",
                                    "lastName":"Bela",
                                    "fullName":"Einstien James Bela"
                                }
                            },
                            "recipientKyc":{

                            },
                            "internationalTransferInformation":{
                                "quoteId":"QT037CRICZMKS4H6E",
                                "receivingCountry":"IN",
                                "remittancePurpose":"Business profits to Parents",
                                "sourceOfFunds":"Savings",
                                "relationshipSender": "Brother"
                            },
                            "business":{
                                "senderKyc":{
                                },
                                "recepientKyc":{
                                    "businessName":"Devki Luggage Centre",
                                    "businessPINCode":"123456",
                                    "businessAddress1":"24",
                                    "businessAddress2":"walton'\''s road",
                                    "businessAddressCity":"newyork",
                                    "businessAddressState":"NYC",
                                    "businessAddressCountryCode":"IND",
                                    "businessAddressZip":"123456",
                                    "businessPrimaryContactCountryCode":"IND",
                                    "businessPrimaryContactNo":"232323212",
                                    "businessPrimaryContactNoType":"Mobile",
                                    "businessDescription":"Electronics wholesale",
                                    "businessEmail":"vrs.electronics@gmail.com",
                                    "businessCountryCode":"IND",
                                    "businessRegistrationType":"p2b",
                                    "businessRegistrationNumber":"2312345678912",
                                    "businessRegistrationIssuedBy":"NYC_TRADE",
                                    "businessRegistrationIssuedAt":"NYC",
                                    "businessRegistrationIssueDate":"2002-09-26",
                                    "businessIDValidThru":"2036-09-26",
                                    "typeofbusiness":"Electronics",
                                    "businessPObox":"12345",
                                    "businessMobile":"343234433"
                                }
                            }
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