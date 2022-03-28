import Rect, { useState } from "react";
import { Search, KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";

function RechercheSwitch() {
  const [user, setUser] = useState("hidden");
  const [icone, setIcone] = useState(<KeyboardArrowDown />);
  return (
    <div className="  text-black m-3 rounded-2xl py-8 px-8 shadow-2xl shadow-slate-500 ">
      <h1 className="text-2xl lg:text-4xl">Rechercher un switch / port </h1>
      <div className="flex justify-between mt-4">
        <input
          className="block w-full  border-slate-300 self-center  lg:text-xl p-3 lg:p-4  bg-slate-100 rounded-xl active:outline-none lg:w-1/3 text-sm sm:h-10  sm:w-1/2 "
          type="search"
          placeholder="Par nom,VLAN et emplacement ..."
        ></input>
        <div className="flex space-x-5  ">
          <div className="flex flex-col lg:text-xl text-sm ">
            <label>Caractéristiques </label>
            <select className="border-2 rounded-md border-slate-500 p-2 ">
              <option> option 01 </option>
              <option> option 02 </option>
              <option> option 03 </option>
              <option> option 04 </option>
            </select>
          </div>
          <button
            className=" text-sm lg:text-xl text-white p-2  self-center  rounded-xl bg-slate-300 inline-block "
            onClick={() => {
              setUser("active");
              if (user === "visible") {
                console.log("more");
                setIcone(<KeyboardArrowDown />);
                setUser("hidden");
              } else {
                setIcone(<KeyboardArrowUp />);
                setUser("visible");
              }
            }}
          >
            {icone}
          </button>
          <button className="sm:text-sm text-xl lg:w-32 lg:text-xl lg:h-12 text-white p-2  place-self-center rounded-xl bg-blue-600 inline-block">
            Recherche
          </button>
        </div>
      </div>
      <div className={`${user}  flex mt-10 justify-between flex-wrap  `}>
        <div className=" w-5/12 lg:w-1/4  ">
          <label htmlFor="vlan">VLAN </label>
          <input
            type="text"
            id="vlan"
            className="block w-full  border-slate-300 self-center  lg:text-xl  lg:p-4 p-3 bg-slate-100 rounded-xl active:outline-none   text-sm sm:h-10   "
          ></input>
          <label htmlFor="mac">Adress Mac </label>
          <input
            type="text"
            id="mac"
            className="block w-full  border-slate-300 self-center  lg:text-xl  lg:p-4 p-3 bg-slate-100 rounded-xl active:outline-none  text-sm sm:h-10   "
          ></input>
        </div>
        <div className=" w-5/12 lg:w-1/4  ">
          <label>Marque </label>
          <select className="block w-full border-2 rounded-md border-slate-500 p-2 ">
            <option> option 01 </option>
            <option> option 02 </option>
            <option> option 03 </option>
            <option> option 04 </option>
          </select>
          <label htmlFor="num_inv">Numero inventaire </label>
          <input
            type="text"
            id="num_inv"
            className="block w-full  border-slate-300 self-center  lg:text-xl  lg:p-4 p-3 bg-slate-100 rounded-xl active:outline-none  text-sm sm:h-10   "
          ></input>
        </div>
        <div className=" w-5/12 lg:w-1/4  ">
          <label htmlFor="vlan">Emplacement Switch </label>
          <input
            type="text"
            id="vlan"
            className="block w-full  border-slate-300 self-center  lg:text-xl  lg:p-4 p-3 bg-slate-100 rounded-xl active:outline-none text-sm sm:h-10   "
          ></input>
          <label htmlFor="vlan">Emplacement Prise </label>
          <input
            type="text"
            id="vlan"
            className="block w-full  border-slate-300 self-center  lg:text-xl  lg:p-4 p-3 bg-slate-100 rounded-xl active:outline-none  text-sm sm:h-10   "
          ></input>
        </div>
      </div>
      <div className="hbhfbhjbhjbhjhvj">
        <div
          className={`${user}  grid grid-cols-2  lg:grid-cols-3  gap-4 lg:gap-x-20  `}
        >
          <div className="  ">
            <label htmlFor="vlan">VLAN </label>
            <input
              type="text"
              id="vlan"
              className="block w-full  border-slate-300 self-center  lg:text-xl  lg:p-4 p-3 bg-slate-100 rounded-xl active:outline-none   text-sm sm:h-10   "
            ></input>
          </div>
          <div className="  ">
            <label htmlFor="mac">Adress Mac </label>
            <input
              type="text"
              id="mac"
              className="block w-full  border-slate-300 self-center  lg:text-xl  lg:p-4 p-3 bg-slate-100 rounded-xl active:outline-none  text-sm sm:h-10   "
            ></input>
          </div>
          <div className="   ">
            <label>Marque </label>
            <select className="block w-full border-2 rounded-md border-slate-500 p-2 ">
              <option> option 01 </option>
              <option> option 02 </option>
              <option> option 03 </option>
              <option> option 04 </option>
            </select>
          </div>
          <div className="   ">
            <label htmlFor="num_inv">Numero inventaire </label>
            <input
              type="text"
              id="num_inv"
              className="block w-full  border-slate-300 self-center  lg:text-xl  lg:p-4 p-3 bg-slate-100 rounded-xl active:outline-none  text-sm sm:h-10   "
            ></input>
          </div>
          <div className="  ">
            <label htmlFor="vlan">Emplacement Switch </label>
            <input
              type="text"
              id="vlan"
              className="block w-full  border-slate-300 self-center  lg:text-xl  lg:p-4 p-3 bg-slate-100 rounded-xl active:outline-none text-sm sm:h-10   "
            ></input>
          </div>
          <div className="  ">
            <label htmlFor="vlan">Emplacement Prise </label>
            <input
              type="text"
              id="vlan"
              className="block w-full  border-slate-300 self-center  lg:text-xl  lg:p-4 p-3 bg-slate-100 rounded-xl active:outline-none  text-sm sm:h-10   "
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RechercheSwitch;
