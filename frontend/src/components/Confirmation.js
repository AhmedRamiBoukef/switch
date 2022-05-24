import React, { useRef, useState } from "react";
import Detail from "./Detail";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Image from '../images/forgotpasswordback.jpg'


const Confirmation = (props) => {
  console.log(props.Ports);
  const Sauvegarder = () => {
    props.Ports.map((item) => {
      console.log(item);
    });
    props.Ports.map((item) => {
      fetch("http://localhost:5000/api/postport", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": Cookies.get("jwt"),
        },
        body: JSON.stringify(item),
      })
        .then((res) => res.json())
        .then((data) => console.log(""));
    });
  };
  let items = [];
  for (let I = 0; I < props.NbPorts; I++) {
    items.push(
      <tr className="bg-white m-2 border border-2 border-b-solid">
        <th scope="row" className=" text-center py-2 ">
          {props.Ports[I].nm_port}
        </th>
        <td className=" text-center py-2 ">{props.Ports[I].ip_vlan}</td>
        <td className=" text-center py-2 ">{props.Ports[I].type}</td>
        <td className=" text-center py-2 ">
          {props.Ports[I].cscade ? (
            <span class="bg-green-300 hover:bg-green-500 text-black font-bold py-1 px-2 rounded-full">
              Oui
            </span>
          ) : (
            <span class="bg-red-300 hover:bg-red-500 text-black font-bold py-1 px-2 rounded-full">
              Non
            </span>
          )}
        </td>
        <td className=" text-center py-2 ">
          {props.Ports[I].EtatDePort ? (
            <span class="bg-green-300 hover:bg-green-500 text-black font-bold py-1 px-2 rounded-full">
              Active
            </span>
          ) : (
            <span class="bg-red-300 hover:bg-red-500 text-black font-bold py-1 px-2 rounded-full">
              Inactive
            </span>
          )}
        </td>
        <td className=" text-center py-2 ">
          {props.Ports[I].Cascades_vers_depuis}
        </td>
        <td>
          {props.Ports[I].Entree ? (
            <button class="bg-green-300 hover:bg-green-500 text-black font-bold py-1 px-2 rounded-full">
              Oui
            </button>
          ) : (
            <button class="bg-red-300 hover:bg-red-500 text-black font-bold py-1 px-2 rounded-full">
              Non
            </button>
          )}
        </td>
        <td className=" text-center py-2 ">{props.Ports[I].Cable}</td>
        <td className=" text-center py-2 ">{props.Ports[I].prise}</td>
      </tr>
    );
  }
  const [click, setClick] = useState(true);
  const [click2, setClick2] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const handleClick2 = () => {
    setClick2(!click2);
  };
  return (
    <div style={{ height: "100vh",backgroundImage: `url(${Image})`  }} className="flex w-full cover">
      <Navbar></Navbar>
      <div className="scrollbar w-full  overflow-auto  ">
        <SideBar
          image="./../images/image01.png"
          nom={props.user2.name}
          titre="Confirmer la configuration des ports"
        ></SideBar>
        {/* <div className="relative z-20">
          <p className="mb-2 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">
            Confirmation
          </p>
            </div> */}
        {/* <div className="flex items-center">
          <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
            Confirmer la configuration
          </h1>
        </div> */}
        <div className="flex justify-end">
          <button
            className="mt-4 mr-4 hover:bg-blue-800 bg-blue-700 px-4 py-2 border rounded-lg text-white font-bold mb-4 "
            onClick={Sauvegarder}
          >
            Confirmer
          </button>
          <Link to="/Login">
            <button className="mt-4 mr-4 hover:bg-blue-800 bg-blue-700 px-4 py-2 border rounded-lg text-white font-bold mb-4">
              Annuler
            </button>
          </Link>
        </div>
        <div className="flex relative flex-col justify-between ">
          <div
            className="h-14 cursor-pointer shadow-md sm:rounded-lg flex text-xs text-gray-700 uppercase bg-blue-50   justify-between"
            onClick={handleClick}
          >
            <div>
              <h4 className="inline-block text-xl font-semibold sm:text-3xl tracking-tight  p-2">
                CONSULTATION SWITCH
              </h4>
            </div>
            <div className="object-right p-5">
              <svg
                aria-hidden="true"
                className="animate-bounce border-2 rounded-full bg-violet-500  "
                data-reactid="266"
                fill="none"
                height="24"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="6 9 12 15 18 10"></polyline>
              </svg>
            </div>
          </div>
          {click ? (
            <div className="transition-all duration-300 ease-in-out delay-150">
              <div className="shadow-md sm:rounded-lg mt-2 delay-150">
                <table className="w-full border-gray-300 border-solid ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-300  ">
                    <th className=" text-center py-3 px-2 ">nom</th>
                    <th className=" text-center py-3 px-2 ">marque</th>
                    <th className=" text-center py-3 px-2 ">Bloc</th>
                    <th className=" text-center py-3 px-2 ">Armoire</th>
                    <th className=" text-center py-3 px-2 ">Modèle</th>
                    <th className=" text-center py-3 px-2 ">Adresse_IP</th>
                    <th className=" text-center py-3 px-2 ">
                      Nombre de port F_E
                    </th>
                    <th className=" text-center py-3 px-2 ">
                      Nombre de Port G-E
                    </th>
                    <th className=" text-center py-3 px-2 ">
                      Nombre de Port SFP
                    </th>
                    <th className=" text-center py-3 px-2 ">Etat</th>
                    <th className=" text-center py-3 px-2 ">Adresse Mac</th>
                    <th className=" text-center py-3 px-2 ">
                      Numero d'inventaire
                    </th>
                    <th className=" text-center py-3 px-2 ">Numero de serie</th>
                    <th className=" text-center py-3 px-2 "></th>
                  </thead>
                  <tbody>
                    <tr className="bg-white m-2 border border-2 border-b-solid">
                      <td scope="row" className=" text-center py-2 ">
                        {props.Port.Nom}
                      </td>
                      <td className=" text-center py-2 ">
                        {props.Port.Marque}
                      </td>
                      <td className=" text-center py-2 ">{props.Port.Bloc}</td>
                      <td className=" text-center py-2 ">
                        {props.Port.Armoire}
                      </td>
                      <td className=" text-center py-2 ">
                        {props.Port.Modèle}
                      </td>
                      <td className=" text-center py-2 ">
                        {props.Port.Adresse_IP}
                      </td>
                      <td className=" text-center py-2 ">
                        {props.Port.Nombre_de_ports_F_E}
                      </td>

                      <td className=" text-center py-2 ">
                        {props.Port.Nombre_de_ports_G_E}
                      </td>
                      <td className=" text-center py-2 ">
                        {props.Port.Nombre_de_ports_SFP}
                      </td>
                      <td className=" text-center py-2 ">
                        <span className="text-green-400">
                          {props.Port.Etat}
                        </span>
                      </td>
                      <td className=" text-center py-2 ">
                        {props.Port.Adresse_MAC}
                      </td>
                      <td className=" text-center py-2 ">
                        {props.Port.N_d_inventaire}
                      </td>
                      <td className=" text-center py-2 ">
                        {props.Port.N_Serie}
                      </td>
                      <td className=" text-center py-2 "></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}
          <div
            className="mt-16 cursor-pointer h-14 shadow-md sm:rounded-lg flex text-xs text-gray-700 uppercase bg-blue-50   justify-between"
            onClick={handleClick2}
          >
            <div>
              <h4 className="inline-block text-xl font-semibold sm:text-3xl tracking-tight  p-2">
                CONSULTATION PORTS
              </h4>
            </div>
            <div className="object-right p-5">
              <svg
                aria-hidden="true"
                className="animate-bounce border-2 rounded-full bg-violet-500 "
                data-reactid="266"
                fill="none"
                height="24"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
          {click2 ? (
            <div className="shadow-md sm:rounded-lg mt-2 delay-150">
              <table className="w-full border-gray-300 border-solid">
                <thead className="bg-gray-300  border-2   ">
                  <th className=" text-center py-3 px-2 ">num de port</th>
                  <th className=" text-center py-3 px-2 ">ip_vlan</th>
                  <th className=" text-center py-3 px-2 ">type</th>
                  <th className=" text-center py-3 px-2 ">cascade</th>
                  <th className=" text-center py-3 px-2 ">Etat De Port</th>
                  <th className=" text-center py-3 px-2 ">
                    Cascades_vers_depuis
                  </th>
                  <th className=" text-center py-3 px-2 ">entree</th>
                  <th className=" text-center py-3 px-2 ">cable</th>
                  <th className=" text-center py-3 px-2 ">prise</th>
                </thead>
                <tbody>{items}</tbody>
              </table>
            </div>
          ) : null}
        </div>
        <footer className="flex justify-center">
          {/* <Link to={"/Login"}> */}
          {/* <button
            className="mt-4 hover:bg-blue-800 bg-blue-700 px-4 py-2 border rounded-lg text-white font-bold"
            onClick={Sauvegarder}
          >
            Confirmer
          </button> */}
          {/* </Link> */}
        </footer>
      </div>
    </div>
  );
};

export default Confirmation;
