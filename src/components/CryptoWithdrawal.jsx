import { useState } from 'react';
import {HiArrowLongRight} from 'react-icons/hi2';
import { useAuthContext } from '../hooks/useAuthContext';
import { toast } from 'react-toastify';
import Loader from './Loader/Loader';
import InvestForm from './InvestForm';
import FullScreenModal from './fullScreenModal';
import WithdrawalPop from './WithdrawalPop';

const CryptoWithdrawal = () => {
    
    const {user} = useAuthContext()

    const [isPending, setIsPending] = useState(false)
    const [investModal, setInvestModal] = useState(false)

    const [formData, setFormData] = useState({
        amount: '',
        wallet: '',
        code: ''
    }) 
    
    const inputChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        
        if(user.data.accountBalance < 1) {
            toast.error('Make a deposit before trying to withdraw')
        }

        setIsPending(true)

        const response = await fetch(`https://trading-api-orcin.vercel.app/api/v1/transactions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({wallet: formData.wallet, transactionType: 'crypto', amount: formData.amount, createdBy: user.data._id })
        })

        const json = await response.json()

        if(!response.ok){
            setIsPending(false)
            toast.error(json.error)
        }

        if(response.ok){
            setIsPending(false)
            setInvestModal(true)
        }

    }

    return ( 
        <div className="flex flex-col gap-y-4">
            <small className="text-slate-200">Bitcoin is the recommended withdrawal method, it provides fastest withdrawal. To request for withdrawal to bitcoin, please you have a bitcoin wallet else create one.</small>
            <form onSubmit={handleSubmit} className="text-slate-400 grid grid-cols-1 gap-y-4">
                <div className="flex flex-col">
                    <label>Withdrawal amount:</label>
                    <input 
                        type="number" 
                        name="amount" 
                        id=""
                        required
                        value={formData.amount}
                        onChange={inputChange}
                        className="rounded-[5px] bg-[#18203A]"
                        placeholder="$ 0.00" 
                    />
                </div>

                <div className="flex flex-col">
                    <label>Bitcoin wallet:</label>
                    <input 
                        type="text" 
                        name="wallet" 
                        id=""
                        required
                        value={formData.wallet}
                        onChange={inputChange}
                        className="rounded-[5px] bg-[#18203A]"
                    />
                </div>

                <div className="flex flex-col">
                    <label>Transfer code:</label>
                    <input 
                        type="text" 
                        name="code" 
                        id=""
                        value={formData.code}
                        onChange={inputChange}
                        className="rounded-[5px] bg-[#18203A]"
                    />
                </div>

                
                <button
                    type='submit'
                    className="flex rounded-[5px] p-2 mt-4 bg-blue-700 justify-center items-center"
                >
                    <small>Proceed</small>
                    <HiArrowLongRight/>
                </button>
            </form>
            {isPending && <Loader/>}
            {investModal && <FullScreenModal children={<WithdrawalPop amount={formData.amount}/>} close={()=>{setInvestModal(false)}}/>}
        </div>
     );
}
 
export default CryptoWithdrawal;