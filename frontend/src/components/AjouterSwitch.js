import React, { useEffect, useState } from "react";
import Usefetch from "./Usefetch";
import { Link, Route } from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Image from '../images/forgotpasswordback.jpg'
 function AjouterSwitch(props) {
   const [locals,setLocals]=useState([]) ;
   const [marques,setMarques]=useState([]) ;
  const [loadsubmitDet, setLoadsubmitDet] = useState(false);
  const [Switch, setSwitch] = useState({
    Bloc: "",
    Armoire: "",
    Nom: "",
    Marque: "",
    Modèle: "",
    Adresse_IP: "",
    N_d_inventaire: "",
    N_Serie: "",
    Adresse_MAC: "",
    Nombre_de_ports_F_E: 0,
    Nombre_de_ports_G_E: 0,
    Nombre_de_ports_SFP: 0,
    Etat: false,
  });
  // const [nb,setNb]=useState(0) ;
  async function Ajouter() {
    const n =
      parseInt(Switch.Nombre_de_ports_F_E) +
      parseInt(Switch.Nombre_de_ports_G_E) +
      parseInt(Switch.Nombre_de_ports_SFP);
    console.log("start ajouter ");
    if(Switch.Bloc!="" && Switch.Armoire!="" && Switch.Nom!="" && Switch.Marque!="" && Switch.Modèle!="" && Switch.Adresse_IP!="" 
    && Switch.N_d_inventaire!="" && Switch.N_Serie!="" && Switch.Adresse_MAC!=""
    ){
    await fetch("http://localhost:5000/api/postswitch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": Cookies.get("jwt"),
      },
      body: JSON.stringify(Switch),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setTimeout(() => {
        //   //

        // }, 7000)
        setLoadsubmitDet(false);
        console.log("End ajouter");
      });
    props.setNbPorts(n);
    props.setPort(Switch);
  }
}
  // const Ajouter = () => {
  //   fetch('http://localhost:5000/api/switch'
  //   ).then(res => res.json())
  //     .then(data => console.log(data));
  //  }


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
    }).then(()=>{
      console.log("les marques") ;

      fetch("http://localhost:5000/api/marque",{
      method: "GET",
      headers: headersList}
      ).then(function(response) {
      return response.json();
     }).then(function(data) {
       console.log("les marques") ;
      console.log(data);
      setMarques(data) ;
      // setLocals(data) ;
      console.log("==========") ;
    }) ;
    }) ;

  //   console.log("les marques") ;

  //   fetch("http://localhost:5000/api/marque",{
  //   method: "GET",
  //   headers: headersList}
  //   ).then(function(response) {
  //   return response.json();
  //  }).then(function(data) {
  //    console.log("les marques") ;
  //   console.log(data);
  //   setMarques(data) ;
  //   // setLocals(data) ;
  //   console.log("==========") ;
  // }) ;


  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSwitch((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // if(name==="Nombre_de_ports_F_E" || name==="Nombre_de_ports_G_E" || name==="Nombre_de_ports_SFP" )
    if (name === "Nom") {
      props.setNomSwitch(value);
    }
  };
  return (
    <div style={{ height: "100vh",backgroundImage: `url(${Image})` }} className="flex   w-full   ">
      <Navbar></Navbar>
      <div className="scrollbar w-full overflow-y-auto    ">
        <SideBar
          image="./../images/image01.png"
          nom={props.user2.name}
          titre="AJOUTER SWITCH"
        ></SideBar>
        <div className="  text-black text-xl w-full bg-cover">
          <div className="flex  justify-end space-x-8 lg:space-x-12 p-6">
            <Link to="/Login">
              <button className=" hover:bg-blue-800 bg-blue-700 px-2 py-2 border rounded-lg text-white font-bold  ">
                Annuler
              </button>
            </Link>
          </div>
          <form className="sm:w-full lg:w-2/3 mx-auto block rounded-2xl   lg:p-10 px-5 py-3 ">
            <div className="grid grid-cols-2 lg:gap-y-10 lg:gap-x-28 gap-10 bg-blue-200 lg:p-10 px-5 py-3 rounded-2xl ">
              <div>
                <label htmlFor="nomswitch"> Nom Switch </label>
                <input
                  type="text"
                  id="nomswitch"
                  className="block  rounded-md w-full p-2"
                  name="Nom"
                  value={Switch.Nom}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <label > Bloc </label>
                {/* <input
                  type="text"
                  liste="nomswitches"
                  id="Bloc"
                  className="block rounded-md w-full p-2"
                  name="Bloc"
                  value={Switch.Bloc}
                  onChange={handleChange}
                  required
                ></input>
                {locals.length!=0 &&
                  <datalist id="nomswitches">
                    {locals.map((elem)=>(
                      <option value={"hello"}></option>
                      //  <option key={elem.id} value={elem.local}></option>
                    ))}
                  </datalist>
                  } */}
                

                
                <input
                    value={Switch.Bloc}
                    type="text"
                    id="nomswitch"
                    name="Bloc"
                    list="nomswitchs"
                    className="block  rounded-md w-full p-2"
                    onChange={handleChange}
                    //  onChange={(e) => setBloc(e.target.value)}
                  ></input>
                  {locals.length!=0 &&
                  
                  <datalist id="nomswitchs">
                    {locals.map((elem)=>(
                      //<option value={"hello"}></option>
                       <option key={elem.id} value={elem.local}></option>
                    ))}
                  </datalist>
                  }

                {/* <label> Bloc </label>
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
                  } */}
              </div>
              <div>
                <label > Modèle </label>
                <input
                  type="text"
                  id="nomswitch"
                  className="block  rounded-md w-full p-2"
                  name="Modèle"
                  value={Switch.Modèle}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="nominvent"> Nom Inventaire </label>
                <input
                  className="block  rounded-md w-full p-2"
                  type="text"
                  id="nominvent"
                  name="N_d_inventaire"
                  value={Switch.N_d_inventaire}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="mac"> Adresse Mac </label>
                <input
                  className="block  rounded-md w-full p-2"
                  type="text"
                  id="mac"
                  name="Adresse_MAC"
                  value={Switch.Adresse_MAC}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="nbreport"> Nombre de ports G_E </label>
                <input
                  className="block  rounded-md w-full p-2"
                  type="text"
                  id="nbreport"
                  name="Nombre_de_ports_G_E"
                  value={Switch.Nombre_de_ports_G_E}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="nbreport"> Armoire </label>
                <input
                  className="block  rounded-md w-full p-2"
                  type="text"
                  id="nbreport"
                  name="Armoire"
                  value={Switch.Armoire}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="nbreport"> Marque </label>
                <input
                     value={Switch.Marque}
                    type="text"
                    id="Marque"
                    name="Marque"
                    list="marques"
                    className="block  rounded-md w-full p-2"
                    onChange={handleChange}
                    //  onChange={(e) => setBloc(e.target.value)}
                  ></input>
                  {marques.length!=0 &&
                  
                  <datalist id="marques">
                    {marques.map((elem)=>(
                      //<option value={"hello"}></option>
                       <option key={elem.id} value={elem.marque}></option>
                    ))}
                  </datalist>
                  }


                {/* <input
                  className="block  rounded-md w-full p-2"
                  type="text"
                  id="nbreport"
                  name="Marque"
                  value={Switch.Marque}
                  onChange={handleChange}
                  required
                ></input> */}
              </div>
              <div>
                <label htmlFor="nbreport"> Adresse_IP </label>
                <input
                  className="block  rounded-md w-full p-2"
                  type="text"
                  id="nbreport"
                  name="Adresse_IP"
                  value={Switch.Adresse_IP}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="nbreport"> N_Serie </label>
                <input
                  className="block  rounded-md w-full p-2"
                  type="text"
                  id="nbreport"
                  name="N_Serie"
                  value={Switch.N_Serie}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="nbreport"> Nombre_de_ports_F_E </label>
                <input
                  className="block  rounded-md w-full p-2"
                  type="text"
                  id="nbreport"
                  name="Nombre_de_ports_F_E"
                  value={Switch.Nombre_de_ports_F_E}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="empl">Nombre_de_ports_SFP </label>
                <input
                  className="block  rounded-md w-full p-2"
                  type="text"
                  id="empl"
                  name="Nombre_de_ports_SFP"
                  value={Switch.Nombre_de_ports_SFP}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className=" flex  ">
                <input
                  type="checkbox"
                  id="stock"
                  className="self-center w-5 mr-6 h-5 cursor-pointer"
                />
                <label htmlFor="stock" className="self-center">
                  Switch de stock{" "}
                </label>
              </div>
            </div>
            <Link to={"/ConfigurerPorts"}>
              <button
                className=" hover:bg-blue-800 bg-blue-700 px-2 py-2 border rounded-lg text-white font-bold block mx-auto mt-4 "
                onClick={Ajouter}
                type="submit"
              >SUIVANT</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AjouterSwitch;
