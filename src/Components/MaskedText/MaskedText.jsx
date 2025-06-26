/**
 * @param {text} The Word to be guessed
 * @param {usedletters} The array of letters that have been guessed so far
 */

import { getAllCharacters } from "./MaskedTextUtility";

function MaskedText({text , usedletters}){
    const letters = getAllCharacters(text , usedletters);

    return(
        <>
            <div>{letters.split('').map((letter , index)=>{
                return (
                    <span key={`letter-${index}`} className="inline-block mx-2 text-3xl border-b-2 border-gray-400 w-6 text-center">
                        {letter}
                    </span>

                )
            })}</div>
        </>
    )
}


export default MaskedText;