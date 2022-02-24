import './app.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import TryIt from './Pages/TryIt';
import Home from './Pages/Home';
import TryitBody from './Components/TryIt/TryitBody';
import TryitHeader from './Components/TryIt/TryitHeader';
import Ledger from './Pages/Ledger';
import { useState } from "react";
import MobileAccountStatus from './Pages/MobileAccountStatus';
import BankAccountStatus from './Pages/BankAccountStatus';
import Corridor from './Pages/Corridor';
import BankList from './Pages/BankList';
import BankCreateQuotation from './Pages/BankCreateQuotation';
import MobileCreateQuotation from './Pages/MobileCreateQuotation';
import TransactionCancel from './Pages/TransactionCancel';
import TransactionReverse from './Pages/TransactionReverse';
import BankViewTransaction from './Pages/BankViewTransaction';
import MobileViewTransaction from './Pages/MobileViewTransaction';
import BankCreateTransaction from './Pages/BankCreateTransaction';
import MobileCreateTransaction from './Pages/MobileCreateTransaction';
import MobileTransactionB2B from './Pages/MobileTransactionB2B';
import BankTransactionB2B from './Pages/BankTransactionB2B';
import BankTransactionB2P from './Pages/BankTransactionB2P';
import MobileTransactionB2P from './Pages/MobileTransactionB2P';
import BankTransactionP2B from './Pages/BankTransactionP2B';
import MobileTransactionP2B from './Pages/MobileTransactionP2B';

function App() {
    /* header */
    const [environment, setEnvironment] = useState("")
    const [endPoint, setEndPoint] = useState("")
    const [userName, setuserName] = useState("OpenTurfDev")
    const [password, setPassword] = useState("85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56")

  
  return (
    <BrowserRouter>
      <TryitHeader
        /* callBackFunction={callBackFunction} */
        endPoint={endPoint}
        setEndPoint={setEndPoint}
        environment={environment}
        setEnvironment={setEnvironment}
        userName={userName}
        setuserName={setuserName}
        password={password}
        setPassword={setPassword}
      />
      <div>
        <Routes>
            <Route  path="/" exact element= {<Home/>} />
            <Route path="/ledger" exact element={<Ledger />} />
            
            <Route path="/account-status-mobile" exact element={<MobileAccountStatus/>} />
            <Route path="/account-status-bank" exact element={<BankAccountStatus/>}/>

            <Route path="/create-quotation-bank" exact element={<BankCreateQuotation/>} />
            <Route path="/create-quotation-mobile" exact element={<MobileCreateQuotation/>} />

            <Route path="/corridor-quotation" exact element={<Corridor/>}/>
            <Route path="/get-bank-list" exact element={<BankList/>} />
            <Route path="/cancel-transaction" exact element={<TransactionCancel/>} />
            <Route path="/reverse-transaction" exact element={<TransactionReverse/>} />

            <Route path="/view-transaction-bank" exact element={<BankViewTransaction/>} />
            <Route path="/view-transaction-mobile" exact element={<MobileViewTransaction/>} />

            <Route path="/create-transaction-bank" exact element={<BankCreateTransaction/>} />
            <Route path="/create-transaction-mobile" exact element={<MobileCreateTransaction/>} />

            <Route path="/b2b-transaction-bank" exact element={<BankTransactionB2B/>} />
            <Route path="/b2b-transaction-mobile" exact element={<MobileTransactionB2B/>} />

            <Route path="/b2p-transaction-bank" exact element={<BankTransactionB2P/> } />
            <Route path="/b2p-transaction-mobile" exact element={<MobileTransactionB2P/>} />

            <Route path="/p2b-transaction-bank" exact element={<BankTransactionP2B/>}/>
            <Route path="/p2b-transaction-mobile" exact element={<MobileTransactionP2B/>} /> 
        </Routes>
      </div>
  </BrowserRouter>
  );
}

export default App;
