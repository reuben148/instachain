import {HiCheckCircle} from 'react-icons/hi2'
import { formatCurrency } from '../utils/helpers';

const VerifyPop = ({amount}) => {
    return (
        <div className="grid grid-cols-1 gap-y-4 p-4 justify-center">
            <div className='flex justify-center w-full'>
                <HiCheckCircle className='text-center' size={50} color='green'/>
            </div>
            
            <h4 className='text-slate-100 font-bold text-center'>Congratulations, your transaction has been verified. Your funds will be credited in less than 12hours. if time exceeds do well to email our support team.</h4>

            <span className='text-white flex flex-col text-center gap-x-4'>
                <small className='items-center gap-x-2 text-slate-400'>Withdrawal Amount</small>  
                <small className='text-[15px] text-slate-100'>{formatCurrency(amount)}</small>
            </span>

            <span className='text-white flex flex-col text-center gap-x-4'>
                <small className='items-center gap-x-2 text-amber-400'>Transaction Fee paid</small>  
                <small className='text-[10px] text-slate-300'>{formatCurrency((amount * 6) / 100)}</small>
            </span>
           
        </div>
      );
}
 
export default VerifyPop;