import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Bootstrab/Acceil/sb-admin-2.css";
import esiImage from "../images/esi_white.png";
import {
  Group,
  Search,
  Add,
  Help,
  ExpandLess,
  ExpandMore,
  ChangeHistory,
  History,
  Router,
} from "@material-ui/icons";

export default function Navbar() {
  const [user, setUser] = useState("hidden");
  const [icone, setIcone] = useState(<ExpandMore />);
  return (
    <div
      style={{ height: "100vh" }}
      className="overflow-hidden text-white  bg-gradient-to-b from-black to-blue-900 via-purple-900 lg:w-1/6 w-1/4 float-left m-0 text-xl h-full"
    >
      <div className="flex p-2 text-center py-3  ">
        <img src={esiImage} className="h-20 w-20 "></img>
        <h1 className="text-xl mx-auto font-extrabold place-items-center font-serif lg:pt-3 ">
          Suivi <br />
          de Switch
        </h1>
      </div>
      <div className="">
        <div className="border-y text-center py-2 mx-2">
          <h1 className="text-2xl hover:scale-110 hover:shadow-xl shadow-white">
            Acceuil{" "}
          </h1>
        </div>
        <div className="my-2  pl-2">
          <h1 className="text-lg text-slate-400">interface</h1>
          <h2 className="text-xl hover:scale-105 lg:hover:scale-110  hover:bg-slate-200 hover:text-black hover:duration-300">
            <span className="mr-2">{<Group />}</span>
            Utilisateur
            <span
              className="ml-2"
              onClick={() => {
                setUser("active");
                if (user === "visible") {
                  console.log("more");
                  setIcone(<ExpandMore />);
                  setUser("hidden");
                } else {
                  setIcone(<ExpandLess />);
                  setUser("visible");
                }
              }}
            >
              {icone}
            </span>
          </h2>
          <ul className={`${user}  text-lg `}>
            <li className="pl-8 hover:scale-105 hover:text-red-600">
              {" "}
              - ajouter
            </li>
            <li className="pl-8 hover:scale-105 hover:text-red-600">
              {" "}
              - supprimer
            </li>
            <li className="pl-8 hover:scale-105 hover:text-red-600">
              {" "}
              - lister
            </li>
          </ul>
        </div>
        <div className="my-2 pl-2">
          <h1 className="text-lg text-slate-400">fonctionalitées </h1>
          <ul className="space-y-4">
            <h2 className="text-xl hover:scale-105 lg:hover:scale-110 hover:bg-slate-200 hover:text-black hover:duration-300">
              <span className="mr-2">{<Search />}</span>
              Recherche{" "}
            </h2>
            <h2 className="text-xl  hover:scale-105 lg:hover:scale-110 hover:bg-slate-200 hover:text-black hover:duration-300">
              <span className="mr-2">{<Router />}</span>
              Ajouter switch
            </h2>
            <h2 className="text-xl hover:scale-105 lg:hover:scale-110 hover:bg-slate-200 hover:text-black hover:duration-300">
              <span className="mr-2">{<History />}</span>
              Modifier{" "}
            </h2>
            <h2 className="text-xl hover:scale-105 lg:hover:scale-110 hover:bg-slate-200 hover:text-black hover:duration-300">
              <span className="mr-2">{<Help />}</span>
              Aide en ligne{" "}
            </h2>
            <h2 className="text-xl hover:scale-105 lg:hover:scale-110 hover:bg-slate-200 hover:duration-300 hover:text-black">
              <span className="mr-2">{<Add />}</span>
              Ajouter un compte{" "}
            </h2>
          </ul>
        </div>
      </div>
      <ul></ul>
    </div>
  );
}
