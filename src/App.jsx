import { Routes, Route, useNavigate } from "react-router-dom";
import TextInput from "./Components/TextInput/TextInput";
import TextInputForm from "./Components/TextInputForm/TextInputForm";
import TextInputFormContainer from "./Components/TextInputForm/TextInputFormConatiner";
import PlayGame from "./Pages/PlayGame/PlayGame";
import StartGame from "./Pages/StartGame/StartGame";

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/play" element={<PlayGame />} />
      <Route path="/start" element={<StartGame />} />
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-white flex flex-col justify-center items-center px-4">
            <h1 className="text-5xl font-extrabold text-blue-800 mb-6 text-center animate-fade-in">
              Welcome to Hangman 🎯
            </h1>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-md">
              Test your vocabulary and guess the hidden word before the Hangman completes. Ready to play?
            </p>
            <button
              onClick={() => {
                navigate("/start");
              }}
              className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-900 transition shadow-lg hover:shadow-xl"
            >
              🚀 Click to Start the Game
            </button>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
