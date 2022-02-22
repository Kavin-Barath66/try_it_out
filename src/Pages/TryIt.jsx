import React from 'react'
import './tryit.css';
import { Grid } from "@mui/material";
import TryItForm from '../Components/TryIt/TryitForm';
import ResponseJson from '../Components/Response/ResponseJson';
import APICodeSinppet from '../Components/Response/APICodeSinppet';
import { useState } from "react";
import TryitHeader from '../Components/TryIt/TryitHeader';

function TryIt() {
  const [responseScreen,setResponseScreen ] = useState(false);

  /* For Screen Toggling */
  const [accountStatuMobile, setAccountStatuMobile] = useState(false)
  const [accountStatuBank, setAccountStatuBank] = useState(false)
  const [ledgerBalance, setLedgerBalance] = useState(false)
  const [corridorQuotation, setCorridorQuotation] = useState(false)
  const [getBankList, setGetBankList] = useState(false)

  /* For Response Data */
  const [accountMobileResposeData, setAccountMobileResposeData] = useState()
  const [accountMobileHeader, setAccountMobileHeader] = useState()
  
  return (
    <div className='try-it-containe'>
  
      <Grid container>
       <Grid item xs={7}> 
            <TryItForm 
              setAccountMobileHeader={setAccountMobileHeader}
              setAccountMobileResposeData={setAccountMobileResposeData}
              setResponseScreen={setResponseScreen}
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
              />
        </Grid>
        <Grid item xs={5}>
            {responseScreen? <ResponseJson
              accountMobileHeader={accountMobileHeader}
              accountMobileResposeData={accountMobileResposeData}/>:
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

export default TryIt