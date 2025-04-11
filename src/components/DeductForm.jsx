import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader/Loader";
import { toast } from "react-toastify";

const DeductForm = () => {

    const {data} = useFetch(`https://trading-api-orcin.vercel.app/api/v1/users`)
    const [isPending, setIsPending] = useState(false)


    const [formData, setFormData] = useState({
        user: '',
        amount: '',
    })

    const inputChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsPending(true)

        const response = await fetch(`https://trading-api-orcin.vercel.app/api/v1/users/sub-balance`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: formData.user, amount: formData.amount})
        })

        const json = await response.json()

        if(!response.ok){
            setIsPending(false)
            toast.error(json.error)
        }

        if(response.ok){
            setIsPending(false)
            toast.success(json.message)
        }

    }

    return ( 
        <div className="grid grid-cols-1">
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 items-center">
                <select 
                    name="user" 
                    id=""
                    className="w-full bg-[#18203A] text-slate-300"
                    value={formData.user}
                    onChange={inputChange}
                >
                    <option>select user</option>
                    {data && data.data.map((user)=>(
                        <option key={user._id} value={user.email}>{user.email} (${user.accountBalance})</option>
                    ))}
                    
                </select>

                <input
                    type="number"
                    className="w-full bg-[#18203A] text-slate-300"
                    placeholder="eg. $500"
                    name="amount"
                    value={formData.amount}
                    onChange={inputChange}
                />

                <button type="submit" className="p-2 bg-blue-500 w-full text-white shadow shadow-white">
                    credit
                </button>
            </form>
            {isPending && <Loader/>}
        </div>
     );
}
 
export default DeductForm;