import {HiWallet} from 'react-icons/hi2'
import img2 from '../assets/barcode.jpg'
import img3 from '../assets/qr.jpeg'


const InvestForm = () => {
    return ( 
        <div className="grid grid-cols-1 gap-y-4 p-4">
            <h4 className='font-bold text-center text-white'>Invest</h4>
            <span className='text-white flex text-center gap-x-4'>
                <small className='flex items-center gap-x-2 text-slate-400'><HiWallet/> wallet </small>  
                <small className='text-[15px]'>35Hd5tza5Nh9S5hQbHa85HTV6a7EqnbzgS</small>
            </span>

            <img src={img3} className='' alt="" />
        </div>
     );
}
 
export default InvestForm;