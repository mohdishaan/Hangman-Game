function TextInput({label , type = "Text" , value , onChange}){
     return(
        <label className="block"> 
            {/* ToDo Handle Label */}
            {label && <span className="text-gray-700">{label }</span>}
            <input type={type}
                className="px-4 py-2 h-10 border border-gray-500 rounded-md w-full" 
                onChange={onChange}
                placeholder= {label}
                value={value}
            />
        </label>
    )
}

export default TextInput;