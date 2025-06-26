//Container Component for TextInputForm

import { useState } from "react";
import TextInputForm from "./TextInputForm";
 
function TextInputFormContainer({onSubmit}){

    const [value , setvalue] = useState('');
    const [inputtype, setinputtype] = useState('password');


    function handleformsubmit(event){
        event.preventDefault();
        console.log("Form Submitted" , value);
        onSubmit?.(value)
        
    }

    function handletextinputchange(event){
        console.log("Text input changed");
        console.log(event.target.value);
        setvalue(event.target.value)
    }

    return(
        <TextInputForm
            handleformsubmit={handleformsubmit}
            handletextinputchange={handletextinputchange}
            value={value}
            inputtype={inputtype}
            setinputtype={setinputtype}
        />
    )
}
export default TextInputFormContainer;