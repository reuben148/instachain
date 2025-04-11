import { useEffect, useRef, useState } from "react";
import { handlePaste, numFields } from "../utils/helpers";
import { useAuthContext } from "../hooks/useAuthContext";


const Verification = () => {

    const {user} = useAuthContext()

    const [values, setValues] = useState(Array(numFields).fill(""))
    const inputRefs = useRef([]);

    useEffect(() => {
        inputRefs.current[0].focus(); // Set focus on the first input field when the component mounts
      }, []);

      // Function to handle input change and auto-focus to the next field
    const handleInputChange = (index, value) => {
        if (!isNaN(value) && value !== "") {
          const newValues = [...values];
          newValues[index] = value;
    
          setValues(newValues);
    
          if (index < numFields - 1) {
            inputRefs.current[index + 1].focus();
          }else{
              // verifcation api will be called here
              const verificationCode = newValues.join('')
  
              const userData = {
                  verificationCode,
                //   id: user.alumni._id
              }
  
            //   dispatch(verify(userData))
          }
          
        }
      };

      // Function to handle backspace and delete field
    const handleBackspace = (index, event) => {
        if (event.key === "Backspace") {
        const newValues = [...values];
        newValues[index] = "";

        setValues(newValues);

        if (index > 0) {
            inputRefs.current[index - 1].focus();
        }
      }
  };

  console.log(user)

    return ( 
        <div className='flex flex-col md:w-1/2 m-auto flex-1 items-center gap-y-[50px] p-5'>
        <h4 className='font-bold text-slate-100 text-[20px] md:text-[30px]'>Enter Verification token</h4>
        <form className='grid grid-cols-5 md:gap-x-5 gap-x-2'>
            {Array.from({ length: numFields }, (_, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className='border-2 bg-[#18203A] text-slate-100 rounded-lg border-purple-300 text-center py-2'
                    ref={(el) => (inputRefs.current[index] = el)}
                    value={values[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onPaste={(e) => handlePaste(e, index)}
                    onKeyDown={(e) => handleBackspace(index, e)}
                />
            ))}
        </form>

        {/* {isLoading ? <Spinner/> : ``} */}

        <div className='flex flex-col'>
            <p className='text-center text-slate-100'>Please Insert the 5 digit token sent to your email</p>
            <p className='text-[#6B3FA0] text-center'>{user !== null && user.data.email}</p>
        </div>

    </div>
     );
}
 
export default Verification;