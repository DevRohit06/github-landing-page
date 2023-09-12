import { useState } from "react";
import { BsGithub, BsBell } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import Dropdown from "./dropdown";
import { HiMenu } from "react-icons/hi";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const MenuList = [
    {
      name: "Dashboard",
      link: "#",
    },
    {
      name: "Pull requests",
      link: "#",
    },
    {
      name: "Issues",
      link: "#",
    },
    {
      name: "Codespaces",
      link: "#",
    },
    {
      name: "Markteplace",
      link: "#",
    },
    {
      name: "Explore",
      link: "#",
    },
    {
      name: "Sponsors",
      link: "#",
    },
    {
      name: "Settings",
      link: "#",
    },
  ];
  const PlusList = [
    {
      name: "Add repository",
      link: "#",
    },
    {
      name: "Import repository",
      link: "#",
    },
    {
      name: "New codespace",
      link: "#",
    },
    {
      name: "New gist",
      link: "#",
    },
    {
      name: "New organisation",
      link: "#",
    },
    {
      name: "New project",
      link: "#",
    },
  ];
  const profileList = [
    {
      name: "Your profile",
      link: "#",
    },
    {
      name: "Your repositories",
      link: "#",
    },
    {
      name: "Your organisations",
      link: "#",
    },
    {
      name: "Your enterprises",
      link: "#",
    },
    {
      name: "Your projects",
      link: "#",
    },
    {
      name: "Your discussions",
      link: "#",
    },
    {
      name: "Your stars",
      link: "#",
    },
    {
      name: "Your gists",
      link: "#",
    },
    {
      name: "Your sponsors",
      link: "#",
    },
  ];
  return (
    <>
      <header className="relative">
        <div className="px-4 py-4 mx-auto ">
          <div className="flex gap-4 items-center justify-between">
           <button>
           <HiMenu
              onClick={() => {
                setMobileMenu(!mobileMenu);
              }}
              className="text-white w-12 h-8 md:hidden block"
            />
           </button>
            <div>
              <BsGithub className="text-white w-8 h-8" />
            </div>
            <button className="hidden rounded-lg md:flex items-center w-96 h-8 bg-gray-900 border-2 border-gray-500">
              <LuSearch className="text-gray-400 ml-2" />
              <div className="flex items-center w-full justify-between px-2">
                <h1 className="px-2 text-gray-400 text-sm">
                  Search or jump to..
                </h1>
                <div className="py-0.5 px-2 rounded-md text-white border-gray-500 border-2 text-[10px]">
                  /
                </div>
              </div>
            </button>
            <div className="md:flex items-center w-full justify-between hidden">
              <div className="flex gap-4 text-white text-sm font-semibold">
                <a className="flex items-center gap-1" href="">
                  Pull <span className="xl:block hidden"> requests</span>
                </a>
                <a href="">Issues</a>
                <a href="">Codespaces</a>
                <a href="">Marketplace</a>
                <a href="">Explore</a>
              </div>
              <div className="flex gap-2 items-center">
                <BsBell className="text-white" />
                <Dropdown icon={<AiOutlinePlus />} item={PlusList} />
                <Dropdown
                  icon={
                    <img
                      className="rounded-full w-5"
                      src="https://avatars.githubusercontent.com/u/66678395?s=40&v=4"
                    />
                  }
                  item={profileList}
                />
                <div></div>
              </div>
            </div>
            <BsBell className="text-white md:hidden block w-12 h-6" />
          </div>
        </div>
        {
          mobileMenu ? 
          <div className="md:hidden block absolute top-0 w-full -z-10 bg-[#24292f] pb-8">
          <div className="pt-16 ">
          <button className="mx-auto rounded-lg flex items-center w-5/6 h-8 bg-gray-900 border-2 border-gray-500">
              <LuSearch className="text-gray-400 ml-2" />
              <div className="flex items-center w-full justify-between px-2">
                <h1 className="px-2 text-gray-400 text-sm">
                  Search or jump to..
                </h1>
                <div className="py-0.5 px-2 rounded-md text-white border-gray-500 border-2 text-[10px]">
                  /
                </div>
              </div>
            </button>
            <div>
              <div className="text-white pt-4 font-bold text-sm">
              {
                MenuList && MenuList.map((items, index) => {
                  return (
                    <>
                    
                    <div key={index} className="py-2 px-4 mx-auto flex flex-col justify-center">
                    <hr className=" border-gray-500 w-full p-1 mx-auto" />
                      <a className="" href={items.link}>{items.name}</a>
                    </div>
                    </>
                  )
                })
              }
              </div>
            </div>
          </div>
        </div>
        : null
        }
      </header>
    </>
  );
}
