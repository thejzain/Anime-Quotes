import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";

export default function NavBar() {
  const [menuButton, setMenuButton] = useState({
    state: "hidden",
  });

  const [char, setChar] = useState([]);
  const [search, setSearch] = useState([]);

  const buttonhandler = () => {
    if (menuButton.state == "hidden") {
      setMenuButton({ state: "" });
    } else {
      setMenuButton({ state: "hidden" });
    }
  };

  const handleChange = (evt) => {
    const value = evt.target.value;
    setSearch({ [evt.target.name]: value });
  };

  const getChar = () => {
    axios
      .get(
        "https://animechan.vercel.app/api/quotes/character?name=" + search.charkey
      )
      .then((res) => setChar(res.data));
  };

  const list = char.map((char, index) => {
    return (
      <div className="bg-slate-300 m-3 p-2 rounded-xl shadow-xl">
        <div className=" ">{char.quote}</div>
        <div className="flex flex-row-reverse">-{char.character}</div>
      </div>
    );
  });

  return (
    <nav className=" flex flex-row-reverse ">
      <div className="p-5 rounded-xl bg-gray-200 m-5 shadow-xl ">
        <div
          onClick={buttonhandler}
          className="w-full flex flex-row-reverse text-4xl"
        >
          <AiOutlineMenu />
        </div>
        <div className={menuButton.state}>
          <div className="p-2 w-60">
            <input
            name="charkey"
              className="rounded-md h-8"
              placeholder="  Charecter Name"
              type={"text"}
              onChange={handleChange}
            />
            <button className="ml-2 bg-blue-400 p-1 rounded-md" onClick={getChar} type="submit">
              <AiOutlineSearch />
            </button>
          </div>
          {list}
        </div>
      </div>
    </nav>
  );
}
