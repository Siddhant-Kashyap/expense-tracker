import Chart from "./Chart"
import Expense from "./Expense"
import "./LandingPage.css"
import RecentTransaction from "./RecentTransaction"
import TopExpenses from "./TopExpenses"
import Wallet from "./Wallet"
const LandingPage = () => {
  return (
    <>
    <div className="main-container">
        <h1>Expense Tracker</h1>
        <div className="upper-container">
            <div className="wallet"><Wallet/></div>
            <div className="expenses"><Expense/></div>
            <div className="chart"><Chart/></div>

        </div>

        <div className="lower-container">
            
            <div className="recent-trans"><div>
                <h3>Recenet Transaction</h3>
            <RecentTransaction/></div></div>
            <div className="top-expenses"><TopExpenses/></div>
        </div>

    </div>
    
    </>
  )
}

export default LandingPage