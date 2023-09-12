import { AiOutlineCaretDown, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import propsType from "prop-types";
export default function Dropdown(props) {
  const data = props.item;
  const [hide, sethide] = useState(false);
  return (
    <>
      <div className="relative">
        <div className="inline-flex items-center overflow-hidden rounded-md  bg-transparent">
          <button
            onClick={() => {
              sethide(!hide);
            }}
            className="h-full p-2 text-white  flex gap-1 items-center"
          >
            <span className="sr-only">Menu</span>
            {props.icon}
            {/* <AiOutlinePlus/> */}
            <AiOutlineCaretDown />
          </button>
        </div>

        {hide ? (
          <div
            className="absolute end-0 z-10 mt-2 w-40 rounded-md border border-gray-100 bg-white shadow-lg"
            role="menu"
          >
            <div className="">
              {data.map((items, index) => {
                return (
                  <a
                  key={index}
                  href={items.link}
                  className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  role="menuitem"
                >
                  {items.name}
                </a>
                )
              })}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
