import { tab } from "@testing-library/user-event/dist/tab";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Navbar from "./Navbar";
import {  Link } from "react-router-dom";
import SideBar from "./SideBar";
import Image from '../images/forgotpasswordback.jpg'
const Modifier = (props) => {
  // console.log(props.Switch) ;
  const [ports, setPorts] = useState(false); //when it's true thats mean that we show the table of ports to modifie else we show the table of (nom d'inventaire etc...)
  const [tablePorts, setTablePorts] = useState([]);
  const [Adresse_IP, setAdresse_IP] = useState(props.Switch.Adresse_IP);
  const [Adresse_MAC, setAdresse_MAC] = useState(props.Switch.Adresse_MAC);
  const [Armoire, setArmoire] = useState(props.Switch.Armoire);
  const [Bloc, setBloc] = useState(props.Switch.Bloc);
  const [Etat, setEtat] = useState(props.Switch.Etat);
  const [Marque, setMarque] = useState(props.Switch.Marque);
  const [Modèle, setModèle] = useState(props.Switch.Modèle);
  const [N_Serie, setN_Serie] = useState(props.Switch.N_Serie);
  const [N_d_inventaire, setN_d_inventaire] = useState(
    props.Switch.N_d_inventaire
  );
  const [Nom, setNom] = useState(props.Switch.Nom);
  const [Nombre_de_ports_F_E, setNombre_de_ports_F_E] = useState(
    props.Switch.Nombre_de_ports_F_E
  );
  const [Nombre_de_ports_G_E, setNombre_de_ports_G_E] = useState(
    props.Switch.Nombre_de_ports_G_E
  );
  const [Nombre_de_ports_SFP, setNombre_de_ports_SFP] = useState(
    props.Switch.Nombre_de_ports_SFP
  );
  

  const [loadsubmitDet, setLoadsubmitDet] = useState(false);
  const [loadingSauvegarder, setLoadingSauvegarder] = useState(false);
  const [confirmer, setConfirmer] = useState(false);
  const [confirmerone, setConfirmerOne] = useState(false);
  const [loadsubmitDetTwo,setLoadsubmitDetTwo]=useState(false) ;
  const [terminerSubmit,setTerminerSubmit]=useState(false) ;
  const [terminerSauvegarde,setTerminerSauvegarde]=useState(false) ;
  const [locals,setLocals]=useState([]) ;
  useEffect(()=>{
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "x-access-token": Cookies.get("jwt"),
      "Content-Type": "application/json"
     }
     
    
     
//  fetch("http://localhost:5000/api/port", { 
//        method: "GET",
//        headers: headersList

    console.log("les locales") ;
      fetch("http://localhost:5000/local",{
      method: "GET",
      headers: headersList}
      ).then(function(response) {
      return response.json();
     }).then(function(data) {
       console.log("les locales") ;
      console.log(data);
      setLocals(data) ;
      console.log("==========") ;
    })
  },[])

  //show the loading when we save the modification of n_inventaire etcc...

  function submitDet() {
    setLoadsubmitDet(true);
    var switcher = {
      _id: `${props.Switch._id}`,
      Adresse_IP: `${Adresse_IP}`,
      Adresse_MAC: `${Adresse_MAC}`,
      Armoire: `${Armoire}`,
      Bloc: `${Bloc}`,
      Etat: Etat,
      Marque: `${Marque}`,
      Modèle: `${Modèle}`,
      N_Serie: `${N_Serie}`,
      N_d_inventaire: `${N_d_inventaire}`,
      Nom: `${Nom}`,
      Nombre_de_ports_F_E: `${Nombre_de_ports_F_E}`,
      Nombre_de_ports_G_E: `${Nombre_de_ports_G_E}`,
      Nombre_de_ports_SFP: `${Nombre_de_ports_SFP}`,
    };
    fetch("http://localhost:5000/api/modifier", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": Cookies.get("jwt"),
      },
      body: JSON.stringify(switcher),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("submitdet");
        setTablePorts(data);
        setLoadsubmitDet(false);
         setPorts(true);
         
      });
  }
  function submitDetTwo() {
    setLoadsubmitDetTwo(true);
    var switcher = {
      _id: `${props.Switch._id}`,
      Adresse_IP: `${Adresse_IP}`,
      Adresse_MAC: `${Adresse_MAC}`,
      Armoire: `${Armoire}`,
      Bloc: `${Bloc}`,
      Etat: Etat,
      Marque: `${Marque}`,
      Modèle: `${Modèle}`,
      N_Serie: `${N_Serie}`,
      N_d_inventaire: `${N_d_inventaire}`,
      Nom: `${Nom}`,
      Nombre_de_ports_F_E: `${Nombre_de_ports_F_E}`,
      Nombre_de_ports_G_E: `${Nombre_de_ports_G_E}`,
      Nombre_de_ports_SFP: `${Nombre_de_ports_SFP}`,
    };
    fetch("http://localhost:5000/api/modifier", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": Cookies.get("jwt"),
      },
      body: JSON.stringify(switcher),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(switcher);
        console.log("submitdettwo");
        console.log(data) ;
        // setTablePorts(data);
        setTerminerSubmit(true)
        setTimeout(() => {
          // 
          setTerminerSubmit(false) ;
          setConfirmerOne(false);
        }, 4000);

        setLoadsubmitDetTwo(false);
        
        //  setPorts(true);
      });
  }
  function change_Cascade(e, index) {
    let newArr = [...tablePorts];
    if (e.target.value.toString() === "true") {
      newArr[index].cscade = true;
    } else {
      newArr[index].cscade = false;
    }
    setTablePorts(newArr);
    console.log(tablePorts);
  }

  function change_CascadeDepuisvers(e, index) {
    let newArr = [...tablePorts];
    newArr[index].Cascades_vers_depuis = e.target.value;
    setTablePorts(newArr);
  }

  function change_Prise(e, index) {
    let newArr = [...tablePorts];
    newArr[index].prise = e.target.value;
    setTablePorts(newArr);
  }

  function change_Type(e, index) {
    let newArr = [...tablePorts];
    newArr[index].type = e.target.value;
    setTablePorts(newArr);
  }

  function change_Entree(e, index) {
    let newArr = [...tablePorts];
    if (e.target.value.toString() === "true") {
      newArr[index].Entree = true;
    } else {
      newArr[index].Entree = false;
    }
    setTablePorts(newArr);
    console.log(tablePorts);
  }

  function change_Cable(e, index) {
    let newArr = [...tablePorts];
    newArr[index].Cable = e.target.value;
    setTablePorts(newArr);
  }

  function change_IPvlan(e, index) {
    let newArr = [...tablePorts];
    newArr[index].ip_vlan = e.target.value;
    setTablePorts(newArr);
  }

  function change_Etat(e, index) {
    let newArr = [...tablePorts];
    newArr[index].EtatDePort = e.target.value;
    setTablePorts(newArr);
  }

  function sauvegarder() {
    setLoadingSauvegarder(true);
    fetch("http://localhost:5000/api/modifierPort", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": Cookies.get("jwt"),
      },
      body: JSON.stringify(tablePorts),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("submitsauvegarder");
        // console.log(data);
        setConfirmer(false);
        setLoadingSauvegarder(false);
        setTerminerSauvegarde(true) ;
      });
  }


  return (
    /********************the form where the user will write the name of switch etc.... */
    <div style={{ height: "100vh",backgroundImage: `url(${Image})` }} className="flex w-full bg-cover  ">
      <Navbar></Navbar>
      <div  className="scrollbar overflow-auto   w-full">
     
                {/* <div  className=" mt-4  scrollbar  w-full"> */}
        {!ports && (
          
          <div className="  text-black text-xl w-full bg-cover ">
             <SideBar
                  image="./../images/image01.png"
                  nom="Refisse Youcef "
                  titre="Modifer les caracterisqtue de Switch"
                />
            {confirmerone ? (
                    <div className="w-full flex justify-center">
                      {" "}
                      {!terminerSubmit?
                      <div className=" rounded-lg shadow-lg shadow-gray-500 p-2 flex flex-col justify-between h-32 md:w-2/5 lg:w-1/5 ">
                        <h1 className="font-bold text-xl text-center ">
                          Vous êtes sûr de sauvegarder ?
                        </h1>
                        <div className="w-full flex justify-between">
                          <button
                            onClick={() => {
                              submitDetTwo() ;
                              // setConfirmerOne(false);
                            }}
                            className=" bg-green-600 hover:bg-green-700 px-3 py-2  rounded-md sm:text-xl font-bold text-white"
                          >
                            {!loadsubmitDetTwo ? (
                              <h3>confirmer</h3>
                            ) : (
                              <div class="loadingio-spinner-spin-guwuy00vjh">
                                <div class="ldio-kp6g3e7ejdo">
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </button>
                          <button
                            onClick={() => {
                              setConfirmerOne(false);
                            }}
                            className=" bg-red-600 hover:bg-red-700 px-3 py-2  rounded-md sm:text-xl font-bold text-white"
                          >
                            annuler
                          </button>
                        </div>
                      </div>:
                      <div className=" rounded-lg shadow-lg shadow-gray-500 p-2 flex flex-col justify-center items-center h-32 md:w-2/5 lg:w-1/5 ">
                      
                       <h1 className="font-bold text-3xl text-green-500 text-center ">
                       sauvegarde terminer
                      </h1>
                   
                    </div>
                      }{" "}
                    </div>
                  ) : (
                    <div className="flex justify-end">
                      <button
                        onClick={() => {
                          setConfirmerOne(true);
                        }}
                        className=" bg-blue-600 hover:bg-blue-700 px-3 py-2  rounded-md sm:text-xl font-bold text-white"
                      >
                        sauvegarder
                      </button>
                    </div>
                  )}


            {/* <div className="flex  justify-end space-x-8 lg:space-x-12 p-6">
              <button className="  hover:bg-blue-700   hover:shadow-sm hover:shadow-blue-500 px-3  py-2 bg-blue-600 rounded-xl sm:text-xl  font-bold text-white">
                Sauvegarder
              </button>
              <button className=" hover:bg-blue-700  hover:shadow-sm hover:shadow-blue-500 px-3 py-2 bg-blue-600 rounded-xl sm:text-xl font-bold text-white">
                Annuler
              </button>
            </div> */}

            <form className="sm:w-full lg:w-2/3 mx-auto  lg:my-5 my-2 rounded-2xl shadow-xl shadow-slate-300  lg:p-10 px-5 py-3 bg-blue-200 ">
              <div className="grid grid-cols-2 lg:gap-y-10 lg:gap-x-28 gap-10">
                <div>
                  <label> Bloc </label>
                  <input
                    value={Bloc}
                    type="text"
                    id="nomswitch"
                    name="nomswitch"
                    list="nomswitchs"
                    className="block  rounded-md w-full p-2"
                    onChange={(e) => setBloc(e.target.value)}
                  ></input>
                  {locals.length!=0 &&

                  <datalist id="nomswitchs">
                    {locals.map((elem)=>(
                      //<option value={"hello"}></option>
                       <option key={elem.id} value={elem.local}></option>
                    ))}
                  </datalist>
                  }
                </div>
                <div>
                  <label> Armoire </label>
                  <input
                    value={Armoire}
                    className="block  rounded-md w-full p-2"
                    type="text"
                    id="nominvent"
                    onChange={(e) => setArmoire(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label> Nom </label>
                  <input
                    value={Nom}
                    className="block  rounded-md w-full p-2"
                    type="text"
                    id="mac"
                    onChange={(e) => setNom(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label> Marque </label>
                  <input
                    disabled
                    value={Marque}
                    className="block  rounded-md w-full p-2"
                    type="text"
                    id="nbreport"
                    onChange={(e) => setMarque(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label> Modèle </label>
                  <input
                    disabled
                    value={Modèle}
                    className="block  rounded-md w-full p-2"
                    type="text"
                    id="empl"
                    onChange={(e) => setModèle(e.target.value)}
                  ></input>
                </div>

                <div>
                  <label>Adresse_IP </label>
                  <input
                    value={Adresse_IP}
                    className="block  rounded-md w-full p-2"
                    type="text"
                    id="empl"
                    onChange={(e) => setAdresse_IP(e.target.value)}
                  ></input>
                </div>

                <div>
                  <label>N_d_inventaire </label>
                  <input
                    disabled
                    value={N_d_inventaire}
                    className="block  rounded-md w-full p-2"
                    type="text"
                    id="empl"
                    onChange={(e) => setN_d_inventaire(e.target.value)}
                  ></input>
                </div>

                <div>
                  <label>N_Serie </label>
                  <input
                    disabled
                    value={N_Serie}
                    className="block  rounded-md w-full p-2"
                    type="text"
                    id="empl"
                    onChange={(e) => setN_Serie(e.target.value)}
                  ></input>
                </div>

                <div>
                  <label>Adresse_MAC </label>
                  <input
                    value={Adresse_MAC}
                    className="block  rounded-md w-full p-2"
                    type="text"
                    id="empl"
                    onChange={(e) => setAdresse_MAC(e.target.value)}
                  ></input>
                </div>

                <div>
                  <label>Nombre_de_ports_F_E </label>
                  <input
                    value={Nombre_de_ports_F_E}
                    className="block  rounded-md w-full p-2"
                    type="text"
                    id="empl"
                    onChange={(e) => setNombre_de_ports_F_E(e.target.value)}
                  ></input>
                </div>

                <div>
                  <label>Nombre_de_ports_G_E </label>
                  <input
                    value={Nombre_de_ports_G_E}
                    Adresse_MAC
                    className="block  rounded-md w-full p-2"
                    type="text"
                    id="empl"
                    onChange={(e) => setNombre_de_ports_G_E(e.target.value)}
                  ></input>
                </div>

                <div>
                  <label>Nombre_de_ports_SFP </label>
                  <input
                    value={Nombre_de_ports_SFP}
                    className="block  rounded-md w-full p-2"
                    type="text"
                    id="empl"
                    onChange={(e) => setNombre_de_ports_SFP(e.target.value)}
                  ></input>
                </div>
                <div className=" flex flex-rcol   ">
                  <label className="self-center">Etat </label>
                  <select
                    value={Etat}
                    onChange={(e) => {
                      if (e.target.value.toString() === "true") {
                        setEtat(true);
                      } else {
                        setEtat(false);
                      }
                    }}
                    name=""
                    id=""
                    className="border rounded-lg ml-2 h-8 flex flex-col items-center"
                  >
                    <option>true</option>
                    <option>false</option>
                  </select>
                </div>
              </div>
            </form>
            <button
              onClick={() => submitDet()}
              className="font-bold hover:bg-blue-700   hover:shadow-sm hover:shadow-blue-500 mx-auto block mt-5 px-3 py-2 bg-blue-600 rounded-xl sm:text-xl text-2xl text-white"
            >
              {!loadsubmitDet ? (
                <h3>suivant</h3>
              ) : (
                <div class="loadingio-spinner-spin-guwuy00vjh">
                  <div class="ldio-kp6g3e7ejdo">
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                    </div>
                  </div>
                </div>
              )}
            </button>
          </div>
        )}

        {ports && (
          <div className="scrollbar overflow-auto w-full ">
            <div  className="bg-cover w-full  ">
            <SideBar
                  image="./../images/image01.png"
                  nom="Refisse Youcef "
                  titre="Modifer les ports de switch"
                />
              <div className="table w-full p-2 m-2 bg-white shadow-md  shadow-gray-500/75 border border-gary-400 rounded-xl  h-1/2">
                <div className="  scrollbar overflow-auto  shadow-md  shadow-gray-500/75   border border-gary-400 rounded-xl ">
                  {confirmer ? (
                    <div className="w-full flex justify-center">
                      {" "}
                      <div className=" rounded-lg shadow-lg shadow-gray-500 p-2 flex flex-col justify-between h-32 md:w-2/5 lg:w-1/5 ">
                        <h1 className="font-bold text-xl text-center ">
                          Vous êtes sûr de sauvegarder ?
                        </h1>
                        <div className="w-full flex justify-between">
                          <button
                            onClick={() => {
                              sauvegarder();
                              
                            }}
                            className=" bg-green-600 hover:bg-green-700 px-3 py-2  rounded-md sm:text-xl font-bold text-white"
                          >
                            {!loadingSauvegarder ? (
                              <h3>confirmer</h3>
                            ) : (
                              <div class="loadingio-spinner-spin-guwuy00vjh">
                                <div class="ldio-kp6g3e7ejdo">
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                  <div>
                                    <div></div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </button>
                          <button
                            onClick={() => {
                              setConfirmer(false);
                            }}
                            className=" bg-red-600 hover:bg-red-700 px-3 py-2  rounded-md sm:text-xl font-bold text-white"
                          >
                            annuler
                          </button>
                        </div>
                      </div>{" "}
                    </div>
                  ) : (
                    <div className="flex justify-end">
                      {!terminerSauvegarde ? 
                      <button
                        onClick={() => {
                          setConfirmer(true);
                        }}
                        className=" bg-blue-600 hover:bg-blue-700 px-3 py-2  rounded-md sm:text-xl font-bold text-white"
                      >
                        sauvegarder
                      </button>
                      :
                      <button
                        onClick={()=>{document.location.reload()}}
                      className=" bg-blue-600 hover:bg-blue-700 px-3 py-2  rounded-md sm:text-xl font-bold text-white"
                    >
                     Aller a l'Acceuil
                    </button>
                      }
                    </div>
                  )}
                  <table className="w-full border-gray-300  border-solid">
                    <thead className="bg-gray-300  border-2   ">
                      <th className=" text-center py-3 px-2">N</th>
                      <th className=" text-center py-3 px-2">IP_Vlan</th>
                      <th className=" text-center py-3 px-2">Type</th>
                      <th className=" text-center py-3 px-2">Entrée</th>
                      <th className=" text-center  py-3 px-2">Cascade</th>
                      <th className=" text-center py-3 px-2">C(depuis/vers)</th>
                      <th className=" text-center py-3 px-2">Prise</th>
                      <th className=" text-center py-3 px-2">Cable</th>
                      <th className=" text-center py-3 px-2">Etat De Port</th>
                    </thead>
                    <tbody>
                      {tablePorts.map((elem, index) => (
                        <tr key={elem._id} className="bg-white border-b-solid">
                          <td className="  text-center py-2 px-2  ">
                            {" "}
                            <span className=" px-2 py-1 rounded-lg bg-gray-300">
                              {elem.nm_port}
                            </span>{" "}
                          </td>
                          <td className=" text-center  py-1  px-2 ">
                            {" "}
                            <input
                              value={elem.ip_vlan}
                              onChange={(e) => {
                                change_IPvlan(e, index);
                              }}
                              type="text"
                              className="px-2 py-1 w-full border rounded-full"
                            />
                          </td>
                          <td className="  text-center  py-1  px-2">
                            <select
                              onChange={(e) => {
                                change_Type(e, index);
                              }}
                              name="type"
                              className="px-2 py-1 w-full border rounded-full"
                            >
                              {elem.type === "wifi" ? (
                                <option selected>wifi</option>
                              ) : (
                                <option>wifi</option>
                              )}
                              {elem.type === "utilise" ? (
                                <option selected>utilise</option>
                              ) : (
                                <option>utilise</option>
                              )}
                              {elem.type === "nonUtiliser" ? (
                                <option slected>nonUtiliser</option>
                              ) : (
                                <option>nonUtiliser</option>
                              )}
                              {elem.type === "cruptu" ? (
                                <option selected>cruptu</option>
                              ) : (
                                <option>cruptu</option>
                              )}
                            </select>
                          </td>
                          <td className="  text-center  py-1  px-2">
                            <select
                              onChange={(e) => {
                                change_Entree(e, index);
                              }}
                              name="type"
                              className="px-2 py-1 w-full border rounded-full text-center"
                            >
                              {elem.Entree.toString() === "true" ? (
                                <option selected>true</option>
                              ) : (
                                <option>true</option>
                              )}
                              {elem.Entree.toString() === "false" ? (
                                <option selected>false</option>
                              ) : (
                                <option>false</option>
                              )}
                            </select>
                          </td>
                          <td className="  text-center  py-1  px-2">
                            <select
                              onChange={(e) => {
                                change_Cascade(e, index);
                              }}
                              name="type"
                              className="px-2 py-1 w-full border rounded-full text-center"
                            >
                              {elem.cscade.toString() === "true" ? (
                                <option selected>true</option>
                              ) : (
                                <option>true</option>
                              )}
                              {elem.cscade.toString() === "false" ? (
                                <option selected>false</option>
                              ) : (
                                <option>false</option>
                              )}
                            </select>
                          </td>
                          <td className="flex  text-center  py-1  px-2 ">
                            {" "}
                            <input
                              value={elem.Cascades_vers_depuis}
                              onChange={(e) => {
                                change_CascadeDepuisvers(e, index);
                              }}
                              type="text"
                              className="px-2 py-1 w-full border rounded-full"
                            />
                          </td>
                          <td className="  text-center  py-1  px-2">
                            {" "}
                            {/* <input
                              value={}
                              onChange={(e) => {
                                change_Prise(e, index);
                              }}
                              type="text"
                              className="px-2 py-1 w-full border rounded-full"
                            /> */}
                              
                  <input
                    value={elem.prise}
                    type="text"
                    id="nomswitch"
                    name="nomswitch"
                    list="nomswitchs"
                    className="block  rounded-md w-full p-2"
                    onChange={(e) => {
                      change_Prise(e, index);
                    }}
                  ></input>
                  {locals.length!=0 &&
                  
                  <datalist id="nomswitchs">
                    {locals.map((elem)=>(
                      //<option value={"hello"}></option>
                       <option key={elem.id} value={elem.local}></option>
                    ))}
                  </datalist>
                  }
                          </td>
                          <td className="  text-center  py-1  px-2">
                            <select
                              onChange={(e) => {
                                change_Cable(e, index);
                              }}
                              name="type"
                              className="px-2 py-1 w-full border rounded-full text-center"
                            >
                              {elem.Cable === "SFP" ? (
                                <option selected>SFP</option>
                              ) : (
                                <option>SFP</option>
                              )}
                              {elem.Cable === "F_E" ? (
                                <option selected>F_E</option>
                              ) : (
                                <option>F_E</option>
                              )}
                              {elem.Cable === "G_E" ? (
                                <option selected>G_E</option>
                              ) : (
                                <option>G_E</option>
                              )}
                            </select>
                          </td>
                          <td className="  text-center  py-1  px-2">
                            <select
                              onChange={(e) => {
                                change_Etat(e, index);
                              }}
                              name="type"
                              className="px-2 py-1 w-full border rounded-full text-center"
                            >
                              {elem.EtatDePort === "Active" ? (
                                <option selected value={"Active"}>
                                  Active
                                </option>
                              ) : (
                                <option value={"Active"}>Active</option>
                              )}
                              {elem.EtatDePort === "NonActive" ? (
                                <option selected value={"NonActive"}>
                                  NonActive
                                </option>
                              ) : (
                                <option value={"NonActive"}>NonActive</option>
                              )}
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <div className="flex justify-center">
                <button onClick={()=>{sauvegarder()}} className=" bg-blue-600 hover:bg-blue-700 px-3 py-2  rounded-md sm:text-xl font-bold text-white" >
                {!loadingSauvegarder ? <h3>sauvegarder</h3> :
                     <div class="loadingio-spinner-spin-guwuy00vjh"><div class="ldio-kp6g3e7ejdo">
                     <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
                      </div></div>
                  }
                </button>
              </div> */}
            </div>
          </div>
        )}
        {/* </div> */}
        </div>
    </div>
  );
};

export default Modifier;
