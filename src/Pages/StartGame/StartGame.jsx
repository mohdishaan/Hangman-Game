import { Link, useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../Components/TextInputForm/TextInputFormConatiner";

function StartGame() {
  const navigate = useNavigate();

  function handlesubmit(value) {
    navigate("/play", { state: { wordselected: value } });
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <h1 className="text-5xl font-extrabold text-blue-800 mb-4 animate-fade-in">
        🧠 Start the Game
      </h1>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-md">
        Enter a word or phrase. Your opponent will try to guess it!
      </p>
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-2xl border border-blue-100 transition hover:shadow-blue-200">
        <TextInputFormContainer onSubmit={handlesubmit} />
      </div>

      <div className="mt-8">
        <Link
          to="/"
          className="text-blue-700 font-semibold hover:underline hover:text-blue-900 transition"
        >
          ⬅️ Back to Home
        </Link>
      </div>
    </div>
  );
}

export default StartGame;
