import { AiOutlineMenu } from "react-icons/ai";
import {  useState } from "react";
import CharSearch from "./navItems/charSearch";
import AnimeSearch from "./navItems/animeSearch";

export default function NavBar(prop) {
  const [menuButton, setMenuButton] = useState({
    state: "hidden",
  });
  const [char, setChar] = useState(true);
  const [anim, setAnim] = useState(false);

  const buttonhandler = () => {
    if (menuButton.state == "hidden") {
      setMenuButton({ state: "" });
    } else {
      setMenuButton({ state: "hidden" });
    }
  };

  const radiohandle = (e) => {
    if (e.target.value == "char") {
      setChar(true);
      setAnim(false);
    }
    if (e.target.value == "anim") {
      setAnim(true);
      setChar(false);
    }
  };

  return (
    <nav className=" flex flex-row-reverse ">
      <div className="p-5 rounded-xl bg-gray-200 m-5 shadow-xl absolute ">
        <div
          onClick={buttonhandler}
          className="w-full flex flex-row-reverse text-4xl"
        >
          <AiOutlineMenu />
        </div>
        <div className={menuButton.state}>
          <div
            className="grid grid-cols-2  w-52 text-center gap-2   rounded-lg "
            onChange={radiohandle}
          >
            <div>
              <label className="">
                <input
                  type={"radio"}
                  id="char"
                  name="select"
                  value={"char"}
                  className="appearance-none peer"
                />
                <div className="shadow-2xl peer-checked:bg-blue-300 rounded relative -top-5">
                  Charecter
                </div>
              </label>
            </div>
            <div>
              <label className="">
                <input
                  type={"radio"}
                  id="anim"
                  name="select"
                  value={"anim"}
                  className="appearance-none peer"
                />
                <div className="shadow-2xl peer-checked:bg-blue-300 rounded relative -top-5">
                  Anime
                </div>
              </label>
            </div>
          </div>
          <div className="">
            {char ? (
              <CharSearch quote={prop.quote} display={prop.display} />
            ) : (
              <AnimeSearch quote={prop.quote} display={prop.display} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
