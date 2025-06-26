const ALPHABETS = new Array(26).fill('').map((e, index) => String.fromCharCode(65 + index));

function LetterButtons({ text, usedletters, onLetterClick , gameover}) {
    const originalcharacters = new Set(text.toUpperCase().split(''));
    const selectedletters = new Set(usedletters.join('').toUpperCase().split(''));

    const buttonstyle = function(letter) {
        if (selectedletters.has(letter)) {
            return `${originalcharacters.has(letter) ? 'bg-green-600 border-green-700' : 'border-[#000] border-4 bg-red-600 '} `;
        } else {
            return `bg-blue-600 border-blue-700 hover:bg-blue-700`;
        }
    }

    const handleclick = function(event) {
        const characters = event.target.value;
        onLetterClick?.(characters);
    }

    const buttons = ALPHABETS.map(letter => (
        <button
            key={`button-${letter}`}
            value={letter}
            disabled={selectedletters.has(letter) || gameover}
            onClick={handleclick}
            className={`h-12 w-12 m-1 rounded-md focus:outline-none text-white ${buttonstyle(letter)}`}
        >
            {letter}
        </button>
    ));

    return <>{buttons}</>;
}

export default LetterButtons;
