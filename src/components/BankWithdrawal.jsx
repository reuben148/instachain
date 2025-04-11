import { useState } from 'react';
import {HiArrowLongRight} from 'react-icons/hi2';
import { useAuthContext } from '../hooks/useAuthContext';
import { toast } from 'react-toastify';
import Loader from './Loader/Loader';
import InvestForm from './InvestForm';
import FullScreenModal from './fullScreenModal';
import WithdrawalPop from './WithdrawalPop';

const BankWithdrawal = () => {
    
    const {user} = useAuthContext()

    const [isPending, setIsPending] = useState(false)
    const [investModal, setInvestModal] = useState(false)

    const [formData, setFormData] = useState({
        amount: '',
        bankName: '',
        acctName: '',
        acctNo: '',
        routingNo: '',
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
            body: JSON.stringify(formData)
        })

        const json = await response.json({wallet: formData.acctNo, transactionType: 'bank', amount: formData.amount, createdBy: user.data._id })

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
            <small className="text-slate-200">To Request for withdrawal via Bank Transfer, please make atleast one trading deposit by using the selected method, if you have you can proceed</small>

            <form onSubmit={handleSubmit} className="text-slate-400 grid grid-cols-1 gap-y-2">
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
                    <label>Bank Name:</label>
                    <input 
                        type="text" 
                        name="bankName" 
                        id=""
                        required
                        value={formData.bankName}
                        onChange={inputChange}
                        className="rounded-[5px] bg-[#18203A]"
                    />
                </div>

                <div className="flex flex-col">
                    <label>Account Name:</label>
                    <input 
                        type="text" 
                        name="acctName" 
                        id=""
                        required
                        value={formData.acctName}
                        onChange={inputChange}
                        className="rounded-[5px] bg-[#18203A]"
                    />
                </div>

                <div className="flex flex-col">
                    <label>Account Number:</label>
                    <input 
                        type="number" 
                        name="acctNo" 
                        id=""
                        required
                        value={formData.acctNo}
                        onChange={inputChange}
                        className="rounded-[5px] bg-[#18203A]"
                    />
                </div>

                <div className="flex flex-col">
                    <label>Routing Number:</label>
                    <input 
                        type="text" 
                        name="routingNo" 
                        id=""
                        value={formData.routingNo}
                        onChange={inputChange}
                        className="rounded-[5px] bg-[#18203A]"
                    />
                </div>

                <div className="flex flex-col">
                    <label>Transfer Code:</label>
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
                    className="flex rounded-[5px] p-2 bg-blue-700 mt-4 justify-center items-center"
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
 
export default BankWithdrawal;