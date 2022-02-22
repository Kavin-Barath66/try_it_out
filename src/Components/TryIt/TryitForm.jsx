import React, { useEffect } from 'react'
import { styled } from '@mui/system'
import axios from 'axios'
import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import { Stack, OutlinedInput, Button, Box, Typography, TextField, Container} from '@mui/material'
import AccountStatusMobile from '../EndPoints/AccountStatusMobile';
import AccountStatusBank from '../EndPoints/AccountStatusBank';
import selectionIcon from '../../assets/img/selection.svg'
import { config } from '../../assets/config/config';
import LedgerBalance from '../EndPoints/LedgerBalance';
import CorridorQuotation from '../EndPoints/CorridorQuotation';
import GetBankList from '../EndPoints/GetBankList';
import TryitHeader from './TryitHeader';

const apiUrl = config.api.url;

export default function TryItForm(props) {
/* Account Status Mobile 
  const [accountNumber, setAccountNumber] = useState('+9779840002320')
  const [kycNumber, setKycNumber] = useState('David Robinson')
  const [network, setNetwork] = useState('mobile-wallet')*/
  /* Account Status Bank */
  const [accountStatusBankAccountNumber, setAccountStatusBankAccountNumber] = useState('50100002965304')
  const [accountStatusBankKycNumber, setAccountStatusBankKycNumber] = useState('Deepa Jain')
  const [accountStatusBankBankCode, setAccountStatusBankBankCode] = useState('HDFC0001626')
  const [accountStatusBankBankName, setAccountStatusBankBankName] = useState('HDFC Bank')
  const [accountStatusBankCountry, setAccountStatusBankCountry] = useState('IN')
  const [accountStatusBankNetwork, setAccountStatusBankNetwork] = useState('bank-account')
  /* Ledger Balance 
  const [ledgerBalance,setLedgerBalance] = useState('100, 0000.00')
  const [ledgerCurrency,setLedgerCurrency] = useState('') */
  /* Corridor Quotation */


  const CustomButtom = styled(Button)`
  &.Mui-disabled{
  opacity:0.5;
  color:white
  }`

  /* useEffect(()=>{
        if(props.endpoint === "Account Status Mobile"){
          props.setGetBankList(false)
          props.setLedgerBalance(false)
          props.setAccountStatuBank(false)
          props.setCorridorQuotation(false)
          props.setAccountStatuMobile(true)
        } else if(props.endpoint === "Account Status Bank"){
          props.setGetBankList(false)
          props.setLedgerBalance(false)
          props.setAccountStatuMobile(false)
          props.setCorridorQuotation(false)
          props.setAccountStatuBank(true)
        } else if(props.endpoint === "Ledger Balance"){
          props.setGetBankList(false)
          props.setAccountStatuMobile(false)
          props.setAccountStatuBank(false)
          props.setCorridorQuotation(false)
          props.setLedgerBalance(true)
        } else if(props.endpoint === "Corridor Quotation"){
          props.setGetBankList(false)
          props.setAccountStatuMobile(false)
          props.setAccountStatuBank(false)
          props.setLedgerBalance(false)
          props.setCorridorQuotation(true)
        }else if(props.endpoint === "Get Bank List"){
          props.setAccountStatuMobile(false)
          props.setAccountStatuBank(false)
          props.setLedgerBalance(false)
          props.setCorridorQuotation(false)
          props.setGetBankList(true)
        } else {
          props.setGetBankList(false)
          props.setAccountStatuMobile(false)
          props.setAccountStatuBank(false)
          props.setLedgerBalance(false)
          props.setCorridorQuotation(false)
        }
  },[props.endpoint]) */

  const accontStatusMobileAPICall = () => {
    const options = {
      headers: {
        'username': `${props.userName}`,
        'password': `${props.password}`,
        'actualdate': '2018-04-04 09:27:16',
        'origincountry': 'US'
      }
    }
    axios.post(`${apiUrl}/js/accounts-status`
      , {
        "instrument": `${props.network}`,
        "msisdn": `${props.accountNumber}`,
        "beneficiaryName": `${props.kycNumber}`
    },
      { headers: options.headers } 
    ).then((res) => {
      console.log("res",res)
      if(res.data.status === 'available') {
        props.setAccountMobileResposeData(res)
        props.setResponseScreen(true)
        props.setAccountMobileHeader(options)
      }
    })
    .catch((err) => {
      console.log("res",err)
      props.setAccountMobileResposeData(err)
        props.setResponseScreen(true)
        props.setAccountMobileHeader(options)
    })
  }

  const accontStatusBAnkeAPICall = () => {
    const options = {
      headers: {
        'username': `${props.userName}`,
        'password': `${props.password}`,
        'actualdate': '2018-04-04 09:27:16',
        'origincountry': 'US'
      }
    }
    axios.post(`${apiUrl}/js/accounts-status`
      , {
        "instrument": `${accountStatusBankNetwork}`,
        "accountId": `${accountStatusBankAccountNumber}`,
        "bankName": `${accountStatusBankBankName}`,
        "countryCode": `${accountStatusBankCountry}`,
        "beneficiaryName": `${accountStatusBankKycNumber}`,
        "bankCode": `${accountStatusBankBankCode}`
    },
      { headers: options.headers } 
    ).then((res) => {
      if(res.data) {
        props.setAccountMobileResposeData(res)
        props.setResponseScreen(true)
        props.setAccountMobileHeader(options)
      } 
    }).catch((err) => {
      console.log("res",err)
        props.setAccountMobileResposeData(err)
        props.setResponseScreen(true)
        props.setAccountMobileHeader(options)

    })
  }
  const getLedgerBalance = () => {
    var options = {
      headers: { 
        'X-USERNAME': 'OpenTurfDev', 
        'X-PASSWORD': '85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56', 
        'X-DATE': '2018-04-04 09:27:16', 
        'X-ORIGINCOUNTRY': 'US'
      }
    }
    axios.get(`${apiUrl}/accounts/all/balance`,{ headers: options.headers },
      ).then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      }); 
  }

  const getCorridorList = () => {
    const options = {
      headers: {
        'username': `${props.userName}`,
        'password': `${props.password}`,
        'actualdate': '2018-04-04 09:27:16',
        'origincountry': 'US'
      }
    }
    axios.get(`${apiUrl}/js/quotation`, { headers: options.headers }
    ).then((res) => {
      console.log("res.data.length", res.data.quotes)
      props.setAccountMobileResposeData(res)
      props.setResponseScreen(true)
      props.setAccountMobileHeader(options)

    }).catch((err) => {
      props.setAccountMobileResposeData(err)
      props.setResponseScreen(true)
      props.setAccountMobileHeader(options)
    })
  }

  const getBankListAPICall = () => {
    const options = {
      headers: {
        'username': `${props.userName}`,
        'password': `${props.password}`,
        'actualdate': '2018-04-04 09:27:16',
        'origincountry': 'US'
      }
    }
    axios.get(`${apiUrl}/js/bank-list?countryCode=BD`, { headers: options.headers }
    ).then((res) => {
      console.log("res.data.length", res.data.quotes)
      props.setAccountMobileResposeData(res)
      props.setResponseScreen(true)
      props.setAccountMobileHeader(options)
    }).catch((err) => {
      props.setAccountMobileResposeData(err)
      props.setResponseScreen(true)
      props.setAccountMobileHeader(options)
    })
  }


  return (
    <>
      <Box height="100vh" display="flex" flexDirection="column">
      <Box flex={1} overflow="auto">
        <Container>
          {props.accountStatuMobile? 
              <AccountStatusMobile
                  accountNumber={props.accountNumber}
                  setAccountNumber={props.setAccountNumber}
                  kycNumber={props.kycNumber}
                  setKycNumber={props.setKycNumber}
                  network={props.network}
                  setNetwork={props.setNetwork}
              />: props.accountStatuBank? <AccountStatusBank
                      accountStatusBankAccountNumber={accountStatusBankAccountNumber}
                      setAccountStatusBankAccountNumber={setAccountStatusBankAccountNumber}
                      accountStatusBankKycNumber={accountStatusBankKycNumber}
                      setAccountStatusBankKycNumber={setAccountStatusBankKycNumber}
                      accountStatusBankBankCode={accountStatusBankBankCode}
                      setAccountStatusBankBankCode={setAccountStatusBankBankCode}
                      accountStatusBankBankName={accountStatusBankBankName}
                      setAccountStatusBankBankName={setAccountStatusBankBankName}
                      accountStatusBankNetwork={accountStatusBankNetwork}
                      setAccountStatusBankNetwork={setAccountStatusBankNetwork}
                      accountStatusBankCountry={accountStatusBankCountry}
                      setAccountStatusBankCountry={setAccountStatusBankCountry}
              />
              :props.ledgerBalance? <LedgerBalance />
              :props.corridorQuotation? <CorridorQuotation/>
              :props.getBankList? <GetBankList/>

              :<Stack height="100%" py={4} justifyContent='center' direction='column' >
                  <Stack direction='row' alignItems='center' justifyContent='center'>
                      <img src={selectionIcon} alt="selectionIcon" height="380" width="380" />
                  </Stack>
                  <Typography textAlign={'center'} mt={-2} color={"#575757"} fontSize={20} fontWeight='500' >Select an API endpoint to try</Typography>
              </Stack>}
        </Container>
      </Box>
      </Box>
    </>
  )
}
