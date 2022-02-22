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

function App() {
    /* header */
    const [environment, setEnvironment] = useState("")
    const [endPoint, setEndPoint] = useState("")
    const [userName, setuserName] = useState("OpenTurfDev")
    const [password, setPassword] = useState("85d6dcc27d9fb21c7c346cdbcee2b56a84eba0f542a846de06658d2d094afd56")
    
  return (
    <BrowserRouter>
      <TryitHeader
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
            <Route  path="/" element= {<Home/>} />
            <Route path="/ledger" element={<Ledger/>} />
            <Route path="/account-status-mobile" element={<MobileAccountStatus/>} />
            <Route path="/account-status-bank" element={<BankAccountStatus/>}/>
            <Route path="/create-quotation-bank" element={<BankCreateQuotation/>} />
            <Route path="/create-quotation-mobile" element={<MobileCreateQuotation/>} />
            <Route path="/corridor-quotation" element={<Corridor/>}/>
            <Route path="/get-bank-list" element={<BankList/>} />
            <Route path="/cancel-transaction" element={<TransactionCancel/>} />
            <Route path="/reverse-transaction" element={<TransactionReverse/>} />
            <Route path="/view-transaction-bank" element={<BankViewTransaction/>} />
            <Route path="/view-transaction-mobile" element={<MobileViewTransaction/>} />
            <Route path="/create-transaction-bank" element={<BankCreateTransaction/>} />
            <Route path="/create-transaction-mobile" element={<MobileCreateTransaction/>} />
        </Routes>
      </div>
  </BrowserRouter>
  );
}

export default App;
