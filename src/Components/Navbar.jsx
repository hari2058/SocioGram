import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-[rgb(123,154,145)] w-full">
        <div className="flex justify-between bg-[rgb(123,154,145)] h-20 items-center ml-10 mr-10 ">
          <div className="   align">
            <Link to={"/"}>
              <h1 className=" text-white text-3xl font-bold tracking-wide ">
                SOCIOGRAM
              </h1>
            </Link>
          </div>
          <div>
            <div className="  hidden sm:grid sm:grid-cols-6 items-center sm:gap-3 ">
              <Link to={"/"}>
                <h3 className="hover:text-white ">Home</h3>
              </Link>
              <Link to={"/profile"}>
                <h3 className="hover:text-white">Profile</h3>
              </Link>
              <Link to={"/post"}>
                <h3 className="hover:text-white ">Post</h3>
              </Link>
              <Link to={"/bookmark"}>
                <h3 className="hover:text-white ">Bookmarks</h3>
              </Link>
              <Link to={"/setting"}>
                <h3 className="hover:text-white ">Settings</h3>
              </Link>
              <Link to={"/login"}>
                <Button text={"Login"} />
              </Link>
            </div>
            <div className=" sm:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <img className=" h-10 " src="cross.png" alt="" />
                ) : (
                  <img className=" h-10 " src="list.png" alt="" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div>
            <div className=" bg-[rgb(123,154,145)]  h-100 flex  flex-col text-center   sm:hidden">
              <Link to={"/"} onClick={() => setIsOpen(false)}>
                <h3>Home</h3>
              </Link>
              <Link to={"/profile"} onClick={() => setIsOpen(false)}>
                <h3>Profile</h3>
              </Link>
              <Link to={"/post"} onClick={() => setIsOpen(false)}>
                <h3>Post</h3>
              </Link>
              <Link to={"/bookmark"} onClick={() => setIsOpen(false)}>
                <h3>Bookmark</h3>
              </Link>
              <Link to={"/setting"} onClick={() => setIsOpen(false)}>
                <h3>Setting</h3>
              </Link>
              <div className="  flex justify-center">
                <Link to={"/register"} onClick={() => setIsOpen(false)}>
                  <Button text={"Register"} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
