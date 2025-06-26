import { useState } from "react"
import styles from "./GetStyled"

function Button({text , styleid , type , onClick}){
    return(

        <>
        <button onClick={onClick} type={{type}} className={styles(styleid)}>{text}</button>
        
        </>
        
    )
}

export default Button