import { useRef } from "react";


export const numFields = 5;

// Function to handle pasting values and auto-focus to the next field
export const handlePaste = (event, index) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData("text/plain");
    const numbersOnly = pastedText.replace(/[^0-9]/g, "");
    const newValue = numbersOnly.charAt(0) || "";

    handleInputChange(index, newValue);
  };

  // Function to handle backspace and delete field
export const handleBackspace = (index, event) => {
    const [values, setValues] = useState(Array(numFields).fill(""))
    const inputRefs = useRef([]);
      if (event.key === "Backspace") {
      const newValues = [...values];
      newValues[index] = "";

      setValues(newValues);

      if (index > 0) {
          inputRefs.current[index - 1].focus();
      }
      }
  };

  // format currency
export const formatCurrency = (amt) => {
    return amt.toLocaleString(undefined, {
        style: "currency",
        currency: "usd"
    })
}

export const formatDate = (epoch) => new Date(epoch).toLocaleDateString()