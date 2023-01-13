import { useState, useEffect, useRef } from "react";
import NavBar from "./navBar";
import axios from "axios";
import { toPng, toSvg } from "html-to-image";

function App() {
  const [quote, setQoutes] = useState({
    anime: "",
    character: "",
    quote: "",
  });
  const [displayContent, setdisplayContent] = useState(false);
  const download = useRef(null);
  const date = new Date();
  const Content = () => {
    return (
      <div>
        <div
          className=" shadow-2xl rounded-3xl px-10 py-3 bg-slate-400"
          ref={download}
        >
          <div className="p-3">"{quote.quote}"</div>
          <div className="flex flex-row-reverse w-full text-xl">
            -{quote.character}
          </div>
        </div>
      </div>
    );
  };

  const Quotegenerate = async () => {
    await axios.get("https://animechan.vercel.app/api/random").then((res) => {
      setQoutes({
        anime: res.data.anime,
        character: res.data.character,
        quote: res.data.quote,
      });
    });
    setdisplayContent(true);
  };

  const handleDownload = () => {
    toPng(download.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download =
          "Quote" +
          date.getDate() +
          date.getMonth() +
          1 +
          date.getFullYear() +
          ".png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearch = (anime, character, quote) => {
    // console.log(character);
    setQoutes({ character: character, anime: anime, quote: quote });
  };

  return (
    <div className="bg-gray-400 h-screen">
      <NavBar quote={handleSearch} display={setdisplayContent}/>
      <div className="text-2xl grid place-content-center h-5/6  px-5">
        <div className="md:mx-72">{displayContent ? <Content /> : null}</div>
      </div>
      <div className="w-screen grid grid-cols-2 place-content-center text-2xl gap-4">
        <div className="flex flex-row-reverse">
          <button
            className="px-2 py-1 bg-slate-800 text-white rounded "
            type="submit"
            onClick={Quotegenerate}
          >
            Generate
          </button>
        </div>
        <div className="">
          <button
            type="submit"
            onClick={handleDownload}
            className="px-2 py-1 bg-slate-800 text-white rounded "
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
