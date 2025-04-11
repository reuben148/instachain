import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import {HiUser} from 'react-icons/hi2';
import { useState } from "react";
import FullScreenModal from "./fullScreenModal";
import { useAuthContext } from "../hooks/useAuthContext";


const Navbar = () => {
    
    const {user} = useAuthContext()
    const location = useLocation()
    const [modal, setModal] = useState(false)
    
    return (
        <div className={`grid grid-cols-3 px-8 py-5 text-white ${location.pathname !== '/home' && `bg-[#18203A]`}`}>
            <Logo/>

            <div className="">

            </div>

            <div className="flex justify-end">
                {user ?  
                    <div className="flex gap-x-4 items-center">
                        <Link
                            to={`/logout`}
                            class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-2 border-transparent rounded-md text-white p-2"
                        >
                            logout
                        </Link>

                        <HiUser size={30}/>
                    </div>
                    
                    :<div className="flex gap-x-4">
                        <Link
                            className="whitespace-nowrap py-2 px-4 rounded-[2px] bg-white gradient-text border border-slate-300 hoverg-slate-90 rounded-lg  font-bold whitespace-nowrap"
                            to={`/login`}
                        >
                            login
                        </Link>

                        <Link
                            class="whitespace-nowrap bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-2 border-transparent rounded-md text-white p-2"
                            to={`/signup`}
                        >
                            create new account
                        </Link>
                    </div>
                }
            </div>
            {modal && <FullScreenModal close={()=>{setModal(false)}}/>}
        </div>
     );
}
 
export default Navbar;