//Presentation Component
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function TextInputForm({handleformsubmit , handletextinputchange , value , inputtype='text' , setinputtype}){

    
    const navigate = useNavigate();

    return(
        <form className="flex items-end" onSubmit={handleformsubmit}>
            <div className="mr-2 flex-1">
                <TextInput  
                label = 'Enter a word or phrase'
                type={inputtype}
                onChange={handletextinputchange}
                value={value}
                />
            </div>
            <div>
                    <Button
                    styleid="secondary"
                    type="button"
                    text={inputtype == 'password' ? 'Show' : 'Hide'}
                    onClick={() => { setinputtype(inputtype == 'password' ? 'text' : 'password' )}} 
                    />
            </div>
            <div className="flex">
                    <Button
                    text="Ok"
                    type="submit"
                    onClick={()=>{navigate('/play')}}
                    />
            </div>
        </form>
    )
}

export default TextInputForm;