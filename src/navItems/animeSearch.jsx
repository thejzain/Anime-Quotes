import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";

export default function AnimeSearch(prop) {
  const [anime, setAnime] = useState([]);
  const [search, setSearch] = useState();

  const handleChange = (e) => {
    setSearch({
      [e.target.name]: e.target.value,
    });
  };

  const getAnime = () => {
    axios
      .get("https://animechan.vercel.app/api/quotes/anime?title=" + search.key)
      .then((res) => setAnime(res.data));
  };
  const list = anime.map((anime) => {
    const handleclick = (character, anime, quote) => {
      prop.quote(anime, character, quote);
      prop.display(true);
    };
    return (
      <div
        key={anime._id}
        onClick={() => handleclick(anime.character, anime.anime, anime.quote)}
        className="bg-slate-200 bg-opacity-20 backdrop-blur-md drop-shadow-lg m-3 p-2 rounded-xl shadow-xl active:translate-y-1 active:backdrop-blur-none active:bg-opacity-40"
      >
        <div className=" md:w-96 p2">{anime.quote}</div>
        <div className="flex flex-row-reverse">-{anime.character}</div>
      </div>
    );
  });
  return (
    <div>
      <div className="p-2 ">
        <input
          placeholder=" Anime Name"
          className="h-8 rounded-md text-black font-normal"
          name="key"
          onChange={handleChange}
        />
        <button
          className="ml-2 bg-blue-400 p-1 rounded-md"
          type="submit"
          onClick={getAnime}
        >
          <AiOutlineSearch />
        </button>
      </div>
      <div className="max-h-[78vh] overflow-auto ">{list}</div>
    </div>
  );
}
