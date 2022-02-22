import React from 'react'
import TryitHeader from './TryitHeader'
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import TryItForm from './TryitForm';
import ResponseJson from '../Response/ResponseJson';
import APICodeSinppet from '../Response/APICodeSinppet';

function TryitBody() {
    /* Response Screen Toogler */
    const [responseScreen,setResponseScreen ] = useState(false);

    /* header */
    const [environment, setEnvironment] = useState("")
    const [endPoint, setEndPoint] = useState("")
    const [userName, setuserName] = useState("OpenTurfDev")
    const [password, setPassword] = useState("85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56")
    
    /* For Screen Toggling */
    const [accountStatuMobile, setAccountStatuMobile] = useState(false)
    const [accountStatuBank, setAccountStatuBank] = useState(false)
    const [ledgerBalance, setLedgerBalance] = useState(false)
    const [corridorQuotation, setCorridorQuotation] = useState(false)
    const [getBankList, setGetBankList] = useState(false)

     /* For Response Data */
    const [resposeData, setResposeData] = useState()
    const [responseHeader, setResponseHeader] = useState()

    /* Account Status Mobile */
    const [accountNumber, setAccountNumber] = useState('+9779840002320')
    const [kycNumber, setKycNumber] = useState('David Robinson')
    const [network, setNetwork] = useState('mobile-wallet')

    useEffect(()=>{
        if(endPoint === "Account Status Mobile"){
          setGetBankList(false)
          setLedgerBalance(false)
          setAccountStatuBank(false)
          setCorridorQuotation(false)
          setAccountStatuMobile(true)
        } else if(endPoint === "Account Status Bank"){
          setGetBankList(false)
          setLedgerBalance(false)
          setAccountStatuMobile(false)
          setCorridorQuotation(false)
          setAccountStatuBank(true)
        } else if(endPoint === "Ledger Balance"){
          setGetBankList(false)
          setAccountStatuMobile(false)
          setAccountStatuBank(false)
          setCorridorQuotation(false)
          setLedgerBalance(true)
        } else if(endPoint === "Corridor Quotation"){
          setGetBankList(false)
          setAccountStatuMobile(false)
          setAccountStatuBank(false)
          setLedgerBalance(false)
          setCorridorQuotation(true)
        }else if(endPoint === "Get Bank List"){
          setAccountStatuMobile(false)
          setAccountStatuBank(false)
          setLedgerBalance(false)
          setCorridorQuotation(false)
          setGetBankList(true)
        } else {
          setGetBankList(false)
          setAccountStatuMobile(false)
          setAccountStatuBank(false)
          setLedgerBalance(false)
          setCorridorQuotation(false)
        }
  },[endPoint])


    return (
    <div>
       {/*  <TryitHeader
            endPoint={endPoint}
            setEndPoint={setEndPoint}
            environment={environment}
            setEnvironment={setEnvironment}
            userName={userName}
            setuserName={setuserName}
            password={password}
            setPassword={setPassword}

            ledgerBalance={ledgerBalance}
            
            accountNumber={accountNumber}
            kycNumber={kycNumber}
            network={network}
        /> */}
        <Grid container>
            <Grid item xs={7}> 
                <TryItForm 
                    userName={userName}
                    endPoint={endPoint}
                    password={password}
                    setAccountMobileHeader={setResponseHeader}
                    setAccountMobileResposeData={setResposeData}
                    setResponseScreen={setResponseScreen}
                    /* Screen Togglers */
                    accountStatuMobile={accountStatuMobile}
                    setAccountStatuMobile={setAccountStatuMobile}
                    accountStatuBank={accountStatuBank}
                    setAccountStatuBank={setAccountStatuBank}
                    ledgerBalance={ledgerBalance}
                    setLedgerBalance={setLedgerBalance}
                    corridorQuotation={corridorQuotation}
                    setCorridorQuotation={setCorridorQuotation}
                    getBankList={getBankList}
                    setGetBankList={setGetBankList}
                    /* Fields */
                    accountNumber={accountNumber}
                    setAccountNumber={setAccountNumber}
                    kycNumber={kycNumber}
                    setKycNumber={setKycNumber}
                    network={network}
                    setNetwork={setNetwork}
                />
            </Grid>
            <Grid item xs={5}>
            {responseScreen? <ResponseJson
                accountMobileHeader={responseHeader}
                accountMobileResposeData={resposeData}
                />:
                <APICodeSinppet
                accountStatuMobile={accountStatuMobile}
                accountStatuBank={accountStatuBank}
                ledgerBalance={ledgerBalance}
                corridorQuotation={corridorQuotation}
                getBankList={getBankList}
                />}
            </Grid> 
        </Grid>
    </div>
  )
}

export default TryitBody