import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { stringify } from "postcss";
export default function NavBar() {
  const [menuButton, setMenuButton] = useState({
    state: "hidden",
  });
  const buttonhandler = () => {
    if (menuButton.state == "hidden") {
      setMenuButton({ state: "" });
    } else {
      setMenuButton({ state: "hidden" });
    }
  };
  return (
    <nav className=" flex flex-row-reverse ">
      <div className="p-5 rounded-full bg-gray-200 m-5 shadow-xl absolute">
        <div
          onClick={buttonhandler}
          className="w-full flex flex-row-reverse text-4xl"
        >
          <AiOutlineMenu />
        </div>
        <div className={menuButton.state}>
          <div className="flex">
            Colors : 
          </div>
        </div>
      </div>
    </nav>
  );
}
