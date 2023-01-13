import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";

export default function CharSearch(prop) {
  const [char, setChar] = useState([]);
  const [search, setSearch] = useState([]);
  const handleChange = (evt) => {
    const value = evt.target.value;
    setSearch({ [evt.target.name]: value });
  };
  const getChar = async () => {
    await axios
      .get(
        "https://animechan.vercel.app/api/quotes/character?name=" +
          search.charkey
      )
      .catch((err) => console.log("error"))
      .then((res) => setChar(res.data));
  };

  const list = char.map((char) => {
    const handleclick = (character, anime, quote) => {
      prop.quote(anime, character, quote);
      prop.display(true);
    };
    return (
      <div
        key={char._id}
        id={char._id}
        value={char}
        onClick={() => handleclick(char.character, char.anime, char.quote)}
        className="bg-slate-300 m-3 p-2 rounded-xl shadow-xl"
      >
        <div className=" ">{char.quote}</div>
        <div className="flex flex-row-reverse">-{char.character}</div>
      </div>
    );
  });
  return (
    <div>
      <div className="p-2 w-60">
        <input
          name="charkey"
          className="rounded-md h-8"
          placeholder="  Charecter Name"
          type={"text"}
          onChange={handleChange}
        />
        <button
          className="ml-2 bg-blue-400 p-1 rounded-md"
          onClick={getChar}
          type="submit"
        >
          <AiOutlineSearch />
        </button>
      </div>
      <div className="">{list}</div>
    </div>
  );
}
