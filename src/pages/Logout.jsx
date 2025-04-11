import { useLogout } from "../hooks/useLogout";

const Logout = () => {

    const {logOut} = useLogout()


    const handleLogout = () => {
        logOut()
    }

    return (  
        <div className="flex-1 grid grid-cols-1 text-slate-100">
            <div className="p-5 rounded-md border boder-white m-auto gap-y-4">
                <h4 className="text-[20px]">Are you sure you want to logout ?</h4>
                <button onClick={handleLogout} className='p-2 rounded-md border hover:bg-red-100 bg-opacity-50 hover:text-red-400' type="button">Logout</button>
            </div>
        </div>
     );
}
 
export default Logout;