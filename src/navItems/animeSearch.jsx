import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";

export default function AnimeSearch() {
  const [anime, setAnime] = useState([]);
  const [search, setSearch] = useState();

  const handleChange = (e) => {
    setSearch({
      [e.target.name]: e.target.value,
    });
    console.log(search);
  };

  const getAnime = () => {
    axios
      .get("https://animechan.vercel.app/api/quotes/anime?title=" + search.key)
      .then((res) => setAnime(res.data));
  };
  const list = anime.map((anime, key) => {
    return (
      <div key={key} className="bg-slate-300 m-3 p-2 rounded-xl shadow-xl">
        <div className=" ">{anime.quote}</div>
        <div className="flex flex-row-reverse">-{anime.character}</div>
      </div>
    );
  });
  return (
    <div>
      <div className="p-2">
        <input
          placeholder=" Anime Name"
          className="h-8 rounded-md"
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
      <div>{list}</div>
    </div>
  );
}
