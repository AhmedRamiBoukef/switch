import React, { useState } from "react";
import image01 from "./../images/image01.png";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
export default function SideBar(props) {
  console.log(image01);
  const [icone, setIcone] = useState(<ExpandMore />);
  
  return (
    <div className="sticky top-0 z-50 ">
      <div className="navBar flex justify-between p-2  border-b-2 text-black bg-slate-200 shadow-md bg-gradient-to-r from-blue-300    to-blue-500">
        <div className="text-3xl font-bold px-2">
          <h1 className="text-black">{props.titre}</h1>
        </div>
        <div className="flex place-items-center space-x-4">
          <img
            src={image01}
            alt="user photo"
            className="h-12 w-12 rounded-full"
          />

          <p className="font-semibold self-center">{props.nom}</p>
          <span
            className="hover:cursor-pointer"
            onClick={() => {
              setIcone(<ExpandLess />);
            }}
          >
            {icone}
          </span>
        </div>
      </div>
    </div>
  );
}
