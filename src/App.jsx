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
  const [loading, setLoading] =useState(false);
  const download = useRef(null);
  const date = new Date();
  const Content = () => {
    return (
      <div>
        <div
          className="relative text-white shadow-2xl  px-10 py-3  font-thin "
          ref={download}
        >
          <div className="absolute inset-0 bg-white  bg-opacity-20 backdrop-blur-md rounded-xl drop-shadow-lg"></div>
          <div className="relative ">
            <div className="p-3 text-base md:text-xl max-w-xl">"{quote.quote}"</div>
            <div className="flex flex-row-reverse w-full text-base md:text-lg">
              -{quote.character}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Quotegenerate = async () => {
    setLoading(true)
    await axios.get("https://animechan.vercel.app/api/random").then((res) => {
      setQoutes({
        anime: res.data.anime,
        character: res.data.character,
        quote: res.data.quote,
      });
      
    });
    setLoading(false)
    
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

  const Loading = () => {
    return (
      <button
        disabled
        className="text-sm inset-0 ring-1 ring-gray-400 px-8 py-3  text-white  bg-white opacity-40  bg-opacity-10 backdrop-blur-md rounded-full drop-shadow-lg"
        type="submit"
      >
        Loading....
      </button>
    );
  };

  const Generate = () => {
    return (
      <button
        className="ring-1 ring-white px-4 py-3  text-white  bg-white  bg-opacity-20 backdrop-blur-md rounded-full drop-shadow-lg"
        type="submit"
        onClick={Quotegenerate}
      >
        Generate
      </button>
    );
  };

  return (
    <div
      className="h-screen "
      style={{
        backgroundImage:
          'url("https://r4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-9b468c3dc3116f4905f43bc9cddc0cf0.jpg")',
      }}
    >
      <NavBar quote={handleSearch} display={setdisplayContent} />
      <div className="text-2xl grid place-content-center h-5/6  px-5">
        <div className="md:mx-72">{displayContent ? <Content /> : null}</div>
      </div>
      <div className="w-screen grid grid-cols-2 place-content-center font-thin text-2xl gap-4">
        <div className="relative flex flex-row-reverse">
          {loading ? <Loading /> : <Generate/>}
        </div>
        <div className="">
          <button
            type="submit"
            onClick={handleDownload}
            className="ring-1 ring-white px-4 py-3  text-white  bg-white  bg-opacity-20 backdrop-blur-md rounded-full drop-shadow-lg"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
