import Detail from "./Detail";
import { withRouter } from "react-router-dom"
; import Recherche from "./Recherche" ; 
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Image from '../images/forgotpasswordback.jpg'


import "./../index.css";
import Add from "./Add";
import SideBar from "./SideBar";


import Cookies from 'js-cookie'
import AjouterSwitch from "./AjouterSwitch";

import Table from "./table";
import { useEffect, useState } from "react";
import Usefetch from "./Usefetch";
import Modifier from "./modifier";
import Loading from './loading'
import { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";

const Home = (props) => {
  const {isAuth}=useContext(LoginContext) ;
  const [modifier, setModifer] = useState(false);
  const [switchModifer, setSwitchModifer] = useState({
    _id: "",
    Adresse_IP: "",
    Adresse_MAC: "",
    Armoire: "",
    Bloc: "",
    Etat: "",
    Marque: "",
    Modèle: "",
    N_Serie: "",
    N_d_inventaire: "",
    Nom: "",
    Nombre_de_ports_F_E: "",
    Nombre_de_ports_G_E: "",
    Nombre_de_ports_SFP: "",
  });
  const [searche, setsearch] = useState(true); //when it is true it means that we show the seerch bar else the detail of switch is showed
  const [loadingDetailPorts, setLoadingDetailPorts] = useState(false);
  const [Detailswitch, setDetailswitch] = useState({
    _id: "",
    Adresse_IP: "",
    Adresse_MAC: "",
    Armoire: "",
    Bloc: "",
    Etat: "",
    Marque: "",
    Modèle: "",
    N_Serie: "",
    N_d_inventaire: "",
    Nom: "",
    Nombre_de_ports_F_E: "",
    Nombre_de_ports_G_E: "",
    Nombre_de_ports_SFP: "",
    ports: [],
  });
  //get all the switches that we have on the data base 
  const { switches, loading, setSwitches } = Usefetch(
    "http://localhost:5000/api/switch"
  );
  const [lesSwitches , setLesSwitches] = useState([]) ; 
  const [ports , setPorts ] = useState([]);
   useEffect(()=>{
    // fetch("http://localhost:5000/api/port")
    // .then(function  (responce)  {
    //   return responce.json();
    // }).then(function(data){
    //   setPorts(data) ; 
    //   console.log("les ports "  ) ; 
    //   console.log("les switches " , switches ) ; 
    // })
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "x-access-token": Cookies.get("jwt"),
      "Content-Type": "application/json"
     }
     
    
     
 fetch("http://localhost:5000/api/port", { 
       method: "GET",
       headers: headersList
     }).then(function(response) {
       return response.json();
     }).then(function(data) {
       console.log(data);
       setPorts(data) ; 
     }) ; 
     fetch("http://localhost:5000/api/switch", { 
       method: "GET",
       headers: headersList
     }).then(function(response) {
       return response.json();
     }).then(function(data) {
       console.log(data);
       setLesSwitches(data) ; 
     }) ; 

   } , []) ; 
  

  
  function getDetails(elem) {
    fetch("http://localhost:5000/api/getbyid", {
      method: "POST",
      headers: {  'Content-Type': 'application/json',
      'x-access-token': Cookies.get("jwt"), },
      body: JSON.stringify({ _id: elem._id }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDetailswitch({
          _id: `${elem._id}`,
          Adresse_IP: `${elem.Adresse_IP}`,
          Adresse_MAC: `${elem.Adresse_MAC}`,
          Armoire: `${elem.Armoire}`,
          Bloc: `${elem.Bloc}`,
          Etat: `${elem.Etat}`,
          Marque: `${elem.Marque}`,
          Modèle: `${elem.Modèle}`,
          N_Serie: `${elem.N_Serie}`,
          N_d_inventaire: `${elem.N_d_inventaire}`,
          Nom: `${elem.Nom}`,
          Nombre_de_ports_F_E: `${elem.Nombre_de_ports_F_E}`,
          Nombre_de_ports_G_E: `${elem.Nombre_de_ports_G_E}`,
          Nombre_de_ports_SFP: `${elem.Nombre_de_ports_SFP}`,
          ports: data.ports,
        });
        //console.log(Detailswitch.ports) ;
        setsearch(false);
      });
  }

  //modifier un switch
  function Gomodifier(elem) {
    setModifer(true);
    setSwitchModifer(elem);
    // console.log(elem) ;
  }

  return (
    <div>
      {modifier && (
        <div>
          <Modifier Switch={switchModifer}></Modifier>
        </div>
      )}
      {!modifier && (
        <div className="App">
          <div className="App  " style={{ height: "100vh" }}>
            <div className="flex" style={{ height: "100vh" }}>
              <Navbar  />
              <div
                style={{ height: "100vh" }}
                className="scrollbar w-full overflow-auto "
              >
                <SideBar
                  image="./../images/image01.png"
                  nom= {props.user2.name}
                  titre="Acceuil"
                />
                {!searche && (
                  <div
                    className="px-4 py-2 flex justify-end"
                    onClick={() => {
                      setsearch(true);
                    }}
                  >
                    {" "}
                    <button className="hover:bg-blue-800 bg-blue-700 px-4 py-2 border rounded-lg text-white font-bold">
                      Retour
                    </button>
                  </div>
                )}

                {searche ? (
                  <Recherche switches={switches} ports = {ports} setSwitches = {setSwitches } lesSwitches = {lesSwitches} />
                ) : (
                  <Detail Detailswitch={Detailswitch} />
                )}

                {!loading ? (
                  <Table
                    switches={switches}
                    setsearch={setsearch}
                    getDetails={getDetails}
                    Gomodifier={Gomodifier}
                  />
                ) : (
                  <Loading></Loading>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>

  );
};

export default (Home) ;
