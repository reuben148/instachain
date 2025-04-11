import { Link } from "react-router-dom";

const Logo = ({text=true}) => {
    return ( 
        <Link to={`/`} className="flex items-center gap-x-2">
            <h4 className="px-2 rounded-md bg-[#18203A] text-white text-2xl flex items-center font-bold">IIn</h4>
            {/* {text && <small className="text-white font-semibold">Instantchain</small>} */}
        </Link>
     );
}
 
export default Logo;