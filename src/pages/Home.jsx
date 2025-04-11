import { Link } from 'react-router-dom';
import gif from '../assets/bitcoin1.png'
const HomePage = () => {
    return ( 
        <div className="grid md:grid-cols-1 grid-cols-1 items-center p-[25px]">
            <div className="flex flex-col gap-y-8 md:w-8/12 m-auto">
                <h4 className="md:leading-[70px] text-slate-100  text-center leading-[40px] text-1 md:text-[60px] text-[30px] font-bold">
                 Cyber-Safety, committed to making the <span className='gradient-text'>Internet safe for everyone</span>, Fiat Recovery, Accounts & Credentials Encryption.
                </h4>

                {/* <button className="p-2 bg-orange-500 m-auto text-white md:w-4/12 shadow-md shadow-orange-200">
                    Get Started
                </button> */}
                <Link to={'/'} class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-2 border-transparent w-6/12 m-auto rounded-md text-center text-white p-2">
                    Get started
                </Link>
            </div>
            {/* <div className='flex justify-center'>
                <img src={gif}/>
            </div> */}
            
        </div>
     );
}
 
export default HomePage;