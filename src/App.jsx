import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [quote, setQoutes] = useState();
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
    <div className="grid place-content-center h-screen bg-gray-400">
      <div>
      <div>{quote.quote}</div>
        <button
          className="px-2 py-1 bg-slate-800 text-white rounded"
          type="submit"
          onClick={Quotegenerate}
        >
          Generate
        </button>
          
      </div>
    </div>
  );
}

export default App;
