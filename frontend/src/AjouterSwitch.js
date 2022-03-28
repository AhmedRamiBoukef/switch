import { CheckBox } from "@material-ui/icons";
import React from "react";

export default function AjouterSwitch() {
  return (
    <div className=" ajouterSwitch text-black text-xl">
      <div className="flex  justify-end space-x-8 lg:space-x-12 p-6">
        <button className=" hover:scale-110 hover:bg-blue-500 hover:outline-none hover:ring-2 ring-purple-700 hover:shadow-lg hover:shadow-blue-500 px-3  py-2 bg-blue-600 rounded-xl sm:text-xl  text-2xl text-white">
          Sauvegarder
        </button>
        <button className="hover:scale-110 hover:bg-blue-500 hover:outline-none hover:ring-2 ring-purple-700 hover:shadow-lg hover:shadow-blue-500 px-3 py-2 bg-blue-600 rounded-xl sm:text-xl text-2xl text-white">
          Annuler
        </button>
      </div>
      <form className="sm:w-full lg:w-2/3 mx-auto lg:my-5 my-2 rounded-2xl shadow-2xl shadow-slate-700  lg:p-10 px-5 py-3 bg-gradient-to-b from-white  via-slate-300  to-slate-400 ">
        <div className="grid grid-cols-2 lg:gap-y-10 lg:gap-x-28 gap-10">
          <div>
            <label htmlFor="nomswitch"> Nom Switch </label>
            <input
              type="text"
              id="nomswitch"
              className="block  rounded-md w-full p-2"
            ></input>
          </div>
          <div>
            <label htmlFor="nominvent"> Nom Inventaire </label>
            <input
              className="block  rounded-md w-full p-2"
              type="text"
              id="nominvent"
            ></input>
          </div>
          <div>
            <label htmlFor="mac"> Adresse Mac </label>
            <input
              className="block  rounded-md w-full p-2"
              type="text"
              id="mac"
            ></input>
          </div>
          <div>
            <label htmlFor="nbreport"> Nombre de ports </label>
            <input
              className="block  rounded-md w-full p-2"
              type="text"
              id="nbreport"
            ></input>
          </div>
          <div>
            <label htmlFor="empl">Emplacement </label>
            <input
              className="block  rounded-md w-full p-2"
              type="text"
              id="empl"
            ></input>
          </div>
          <div className=" flex  ">
            <input
              type="checkbox"
              id="stock"
              className="self-center w-5 mr-6 h-5"
            />
            <label htmlFor="stock" className="self-center">
              Switch de stock{" "}
            </label>
          </div>
        </div>
        <button className="hover:scale-110 hover:bg-blue-800 hover:outline-none hover:ring-2 ring-purple-700 hover:shadow-2xl hover:shadow-blue-500 mx-auto block mt-5 px-3 py-2 bg-blue-600 rounded-xl sm:text-xl text-2xl text-white">
          Suivant
        </button>
      </form>
    </div>
  );
}
