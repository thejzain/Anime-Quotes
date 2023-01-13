import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import CharSearch from "./navItems/charSearch";
import AnimeSearch from "./navItems/animeSearch";

export default function NavBar() {
  const [menuButton, setMenuButton] = useState({
    state: "hidden",
  });
  const [char, setChar] = useState(true);

  const buttonhandler = () => {
    if (menuButton.state == "hidden") {
      setMenuButton({ state: "" });
    } else {
      setMenuButton({ state: "hidden" });
    }
  };
  const charHandle = () => {
    setChar(true);
  };
  const animeHandle = () => {
    setChar(false);
  };

  return (
    <nav className=" flex flex-row-reverse ">
      <div className="p-5 rounded-xl bg-gray-200 m-5 shadow-xl absolute">
        <div
          onClick={buttonhandler}
          className="w-full flex flex-row-reverse text-4xl"
        >
          <AiOutlineMenu />
        </div>
        <div className={menuButton.state}>
          <div className="grid grid-cols-2  gap-2  text-center">
            <button type="button" onClick={charHandle}>
              Charecter
            </button>
            <button type="button" onClick={animeHandle}>
              Anime
            </button>
          </div>
          {char ? <CharSearch /> : <AnimeSearch/>}
        </div>
      </div>
    </nav>
  );
}
