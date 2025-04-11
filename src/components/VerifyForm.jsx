import { useState } from "react";
import {HiCheck} from 'react-icons/hi2';
import Loader from "./Loader/Loader";
import { toast } from "react-toastify";
import VerifyPop from "./VerifyPop";
import FullScreenModal from "./fullScreenModal";

const VerifyForm = () => {

    const [isPending, setIsPending] = useState(false)
    const [data, setData] = useState()
    const [verificationModal, setVerificationModal] = useState(false)
    const [formData, setFormData] = useState({
        transactionCode: ""
    })

    const inputChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsPending(true)

        const response = await fetch(`https://trading-api-orcin.vercel.app/api/v1/transactions/verify/${formData.transactionCode}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok){
            setIsPending(false)
            toast.error(json.error)
        }

        if(response.ok){
            setIsPending(false)
            setData(json.data.amount)
            setVerificationModal(true)
        }
    }


    return ( 
        <div className="flex flex-col gap-y-4">
        <small className="text-slate-200">Enter the transaction code sent to your email </small>
        <form onSubmit={handleSubmit} className="text-slate-400 grid grid-cols-1 gap-y-4">
            <div className="flex flex-col">
                <label>Transaction Code:</label>
                <input 
                    type="numbe" 
                    name="transactionCode" 
                    id=""
                    required
                    value={formData.transactionCode}
                    onChange={inputChange}
                    className="rounded-[5px] bg-[#18203A]"
                    placeholder="eg ********" 
                />
            </div>
            
            <button
                type='submit'
                className="flex rounded-[5px] p-2 mt-4 bg-green-700 justify-center items-center"
            >
                <small>Verify</small>
                <HiCheck/>
            </button>
        </form>
        {isPending && <Loader/>}
        {verificationModal && <FullScreenModal children={<VerifyPop amount={data}/>} close={()=>{setVerificationModal(false)}}/>}
    </div>
     );
}
 
export default VerifyForm;