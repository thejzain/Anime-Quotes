import { useState, useEffect } from "react";
import NavBar from "./navBar";
import axios from "axios";

function App() {
  const [quote, setQoutes] = useState({
    anime: "",
    character: "",
    quote: "",
  });
  const Quotegenerate = () => {
    axios.get("https://animechan.vercel.app/api/random").then((res) => {
      setQoutes({
        anime: res.data.anime,
        character: res.data.character,
        quote: res.data.quote,
      }),
        console.log(res.data);
    });
  };

  return (
    <div className="bg-gray-400 h-screen">
      <NavBar />
      <div className="text-2xl grid place-content-center h-5/6  px-5">
        <div >
          <div className="p-3">"{quote.quote}"</div>
          <div className="flex flex-row-reverse w-full text-xl">
            -{quote.character}
          </div>
          <button
            className="px-2 py-1 bg-slate-800 text-white rounded"
            type="submit"
            onClick={Quotegenerate}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
