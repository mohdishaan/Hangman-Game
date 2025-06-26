import { Link, useLocation } from "react-router-dom"
import MaskedText from "../../Components/MaskedText/MaskedText"
import LetterButtons from "../../Components/LetterButtons/LetterButtons"
import { useState } from "react"
import Hangman from "../../Components/Hangman/Hangman"

function PlayGame() {
    const [usedletters , setusedletters ] =  useState([])

    const [gameover , setgameover] = useState(false)

    const [step , setstep] = useState(0);

    const location = useLocation()
    const wordselected = location.state?.wordselected;

    const handleletterclick = function(letter) {
    
        if (gameover || usedletters.includes(letter)) return;

        
        const updatedUsed = [...usedletters, letter];
        setusedletters(updatedUsed);

        const word = wordselected.toUpperCase();
        const isCorrect = word.includes(letter);

        
        if (!isCorrect) {
            const nextStep = step + 1;
            setstep(nextStep);

            if (nextStep >= 7) {
                setgameover(true); 
            }
        }

        
        if (isCorrect) {
            const allLetters = word.split('').filter(ch => ch !== ' ');
            const guessedAll = allLetters.every(ch => updatedUsed.includes(ch));

            if (guessedAll) {
                setgameover(true); 
            }
        }
};
    return(
        <div className="min-h-screen px-4 py-8 bg-gradient-to-tr from-slate-50 via-blue-100 to-white">
            <h1 className="text-5xl font-bold text-center text-blue-800 mb-6">Play Game</h1>

            <div className="text-center text-2xl font-mono mb-6 tracking-widest">
                <MaskedText text={wordselected} usedletters={usedletters}/>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                <div className="flex-1 grid grid-cols-7 gap-2 justify-items-center">
                    <LetterButtons text={wordselected} usedletters={usedletters} onLetterClick={handleletterclick} gameover = {gameover}/>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <Hangman step={step}/>  
                </div>
            </div>

            <div className="mt-8 text-center">
                <Link to='/start' className="inline-block text-lg text-blue-700 hover:underline hover:text-blue-900 transition">
                    ⬅️ Start New Game
                </Link>
            </div>

            {gameover && (
                <div className="text-center mt-6 text-3xl font-bold text-red-600 animate-pulse">
                    🎯 Game Over!
                </div>
            )}

        </div>

    )
    
}
export default PlayGame