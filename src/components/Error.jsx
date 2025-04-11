import { Link, useNavigate, useRouteError } from "react-router-dom";
import bg1 from '../assets/error.svg'

const Error = () => {

    const error = useRouteError()
    const navigate = useNavigate()

    return ( 
        <div className="flex flex-col items-center justify-center text-slate-100">
            <h1 className="text-3xl text-center">We've encountered a problem !</h1>
            <p>{error.message || error.statusText}</p>
            <img src={bg1} alt="" />
        </div>
     );
}
 
export default Error;