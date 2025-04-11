import {HiOutlineXMark} from 'react-icons/hi2'

const FullScreenModal = ({close, children}) => {
    return ( 
        <div className="inset-0 overlay fixed w-full h-screen bg-[#18203A] bg-opacity-80 flex ">
            <div className="flex flex-col md:w-4/12 w-11/12 p-5 rounded-lg m-auto gap-y-4 bg-[#0A0A0B]">
                <HiOutlineXMark onClick={close} size={20} className='self-end text-red-500 cursor-pointer'/>
                {children}
            </div>
        </div>
     );
}
 
export default FullScreenModal;