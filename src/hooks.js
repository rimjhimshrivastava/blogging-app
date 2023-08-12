import { useState } from "react";

export function useFormInputs(initialValue){   //using a custom hook to create set value statement for us
    const [value, setValue] = useState(initialValue);
    function handleChange(e){
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange,
    }
  }