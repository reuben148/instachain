import { LineChart, TransactionPanel } from '../components';
import {HiArrowTrendingUp} from 'react-icons/hi2'
import { useAuthContext } from '../hooks/useAuthContext';
import bg1 from '../assets/bg2.svg'

const Dashboard = () => {
    const {user} = useAuthContext()
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 flex-1 gap-x-8 gap-y-4 md:gap-y-0 h-full">
            <h4 className='text-slate-100 md:hidden'>Welcome, {user && <span>{user.data.email}</span>}</h4>
            {/* main component */}
            <div className="order-last md:order-none md:col-span-3 flex flex-col gap-y-5">
                {/* 2fa components */}
                {/* <div className='hidden md:flex p-2 gap-x-4 items-center bg-gradient-to-tr from-lime-100 to-green-100 justify-between rounded-md border-solid border-[0.2px] border-green-500'>
                    <div className='text-white'>
                        <small className='text-green-500'>Your account does not have 2FA protection enabled yet. Enable it now to prevent unauthorized access and secure your funds.</small>
                    </div>
                    
                </div> */}
                {/* second component */}
                <h4 className='text-slate-100 md:flex hidden'>Welcome, {user && <span>{user.data.email}</span>}</h4>
                 {/* Third component */}
                 <div className='p-5 rounded bg-[#18203A] grid grid-cols-1 md:grid-cols-3 h-72'>
                    <h4 className='text-slate-400 text-[12px] md:text-[20px] text-A md:leading-[50px] leading-[20px]  text-center'>Leaveraging on the power of <span className=''> lightening network</span>, get credited <span className=''>anywhere </span>!</h4>
                    <img src={bg1} className='md:col-span-2' alt="" />
                </div>
                <div className='flex flex-col rounded bg-[#18203A] h-72 gap-y-2'>
                    <div className='flex'>
                        <span className='p-1 text-xs text-slate-100'>
                            <h4>Painting the picture</h4>
                        </span>
                        <span className='p-2 rounded-full bg-white'>
                            <HiArrowTrendingUp/>
                        </span>
                    </div>
                    
                    <LineChart/>
                    
                    
                </div>

               

            </div>

            {/* left sidebar */}
            <div className="flex flex-col gap-y-4">
                <TransactionPanel/>
            </div>
        </div>
      );
}

export default Dashboard;