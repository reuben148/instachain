import { useState } from "react";
import BankWithdrawal from "./BankWithdrawal";
import CryptoWithdrawal from "./CryptoWithdrawal";

const WithdrawalForm = () => {

    const [activeTab, setActiveTab] = useState(2)
    return ( 
        <div className="grid grid-cols-1 gap-y-4 w-full">
            <div className="grid grid-cols-2 gap-x-2 bg-slate-400 p-2 rounded-full">
                <button onClick={()=> {setActiveTab(1)}} className={`${activeTab == 1 ? `bg-opacity-50` : ``} p-2 bg-[#18203A] rounded-full text-slate-100`}>Bank Transfer</button>
                <button onClick={()=> {setActiveTab(2)}} className={`${activeTab == 2 ? `bg-opacity-50` : ``} p-2 bg-[#18203A] rounded-full text-slate-100`}>Bitcoin Wallet</button>
            </div>

            {activeTab == 1 && (
                <BankWithdrawal/>
            )}

            {activeTab == 2 && (
                <CryptoWithdrawal/>
            )}
        </div>
     );
}
 
export default WithdrawalForm;