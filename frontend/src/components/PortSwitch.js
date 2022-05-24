import { render } from '@testing-library/react';
import React, { useCallback, useEffect, useState } from 'react';
import {  Link } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Cookies from 'js-cookie'
import Image from '../images/forgotpasswordback.jpg'

const DetailsPort = {
    "nm_port": 0,
    "nom_switch":"",
    "ip_vlan": "",
    "type": "",
    "cscade": "",
    "EtatDePort": "",
    "Cascades_vers_depuis": "",
    "Cable": "",
    "Entree": "",  
    "prise": "",
};

const ConfigurerPorts = (props) => { // Entrer le nombre de port dans Home
   
    // console.log()
    const [locals,setLocals]=useState([]) ;
    const [Ports, setPorts] = useState([]);
    const [Port, setPort] = useState(DetailsPort);
    Port.nom_switch=props.nomSwitch ;
    const items = [];
    
    
    
    // const Sauvegarder = () => {
    //   fetch('http://localhost:5000/api/ports'
    //   ).then(res => res.json())
    //     .then(data => console.log(data));
    //  }
    const handleChange = (e, Index) => {
        const { name, value } = e.target;
        {/*if(name==="cascade"){
            if(value==="oui"){
                //  value=true;
                setPort(prevState => ({
                    ...prevState,
                    [name]: true,
                    nm_port: Index + 1,
                }))
                console.log("i am in the if")
            }
            else{
                //  value =false;
                setPort(prevState => ({
                    ...prevState,
                    [name]: false,
                    nm_port: Index + 1,
                }))
                console.log("non")
            }
        }else*/}
        
        setPort(prevState => ({
            ...prevState,
            [name]: value,
            nm_port: Index + 1,
        }))
    
    }

    const portExists = (inputs, nm) => {
        return inputs.some((el) => {
            return el.nm_port === nm;
        });
    }

    useEffect(() => {
        if (Port != DetailsPort) {
            let inputs = [...Ports]
            if (inputs.length == 0) {
                let b1 = Port.Entree === "true";
                Port.Entree = b1;
                
                 b1 = Port.cscade === "oui";
                 Port.cscade = b1;
                inputs.push(Port)
                setPorts(inputs)
                console.log(Port.cscade);
            }
            else {
                if (portExists(inputs, Port.nm_port)) {
             
                    if (Ports[Port.nm_port - 1] != DetailsPort) {
                        let p = Ports[Port.nm_port - 1];
                        Object.keys(Port).forEach((key) => {
                            if (Port[key] != "") {
                                p[key] = Port[key];
                            }
                        })
                        let b1;
                        if(Ports[Port.nm_port-1].Entree!=true && Ports[Port.nm_port-1].Entree!=false)
                        { b1 = p.Entree === "true";
                        p.Entree = b1;}
                        if(Ports[Port.nm_port-1].cscade!=true && Ports[Port.nm_port-1].cscade!=false)
                         {b1 = p.cscade === "oui";
                         p.cscade = b1;}
                        inputs[Port.nm_port - 1] = p
                        setPorts(inputs)
                        console.log(p.cscade);
                    }
                }
                else {
                    inputs.push(Port);
                    setPorts(inputs)
                    
                }
            }
            setPort(DetailsPort)
            
        }
    }, [Port])
    useEffect(()=>{props.setPorts1(Ports);
    },[Ports]
    )

    useEffect(()=>{
        let headersList = {
          "Accept": "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
          "x-access-token": Cookies.get("jwt"),
          "Content-Type": "application/json"
         }
         
    
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


    
    // setPort(DetailsPort)

    // useEffect((e, Index) => {
    //     console.log(Ports)
    //     setPort(DetailsPort)
    // }, [handleChange])
    for (let I = 0; I < props.NbPorts; I++) {
        items.push(
            <tr className="bg-white border-b-solid" key={I}>
                <td className="  text-center py-2 px-2  "> <span className=" px-2 py-1 rounded-lg bg-gray-300">{I + 1}</span> </td>
                <td className=" text-center  py-1  px-2 "> <input name="ip_vlan" type="text" className="px-2 py-1 w-full border rounded-md" key={I} onChange={(e) => handleChange(e, I)} /></td>
                <td className="  text-center  py-1  px-2">
                    <select name="type" className="px-2 py-1 w-full border rounded-md" onChange={(e) => handleChange(e, I)} >
                        <option ></option>
                        <option value="RG-45">RG-45</option>
                        <option value="Fibre optique">Fibre optique</option>
                        <option value="WIFI">WIFI</option>
                        <option value="Utilise">Utilise</option>
                        <option value="Non-Utilise">Non-Utilise</option>
                        <option value="Cruptu">Cruptu</option>
                    </select>
                </td>
                <td className="  text-center  py-1  px-2">
                    <select name="Entree" className="px-2 py-1 w-full border rounded-md text-center" onChange={(e) => handleChange(e, I)} >
                        <option ></option>
                        <option value="true">Oui</option>
                        <option value="false">Non</option>
                    </select>
                </td>
                <td className="  text-center  py-1  px-2">
                    <select name="cscade" className="px-2 py-1 w-full border rounded-md text-center" onChange={(e) => handleChange(e, I)} >
                        <option ></option>
                        <option value="oui">Oui</option>
                        <option value="non">Non</option>
                    </select>
                </td>
                <td className="  text-center  py-1  px-2 "> <input name="Cascades_vers_depuis" type="text" className="px-2 py-1 w-full border rounded-md text-center" onChange={(e) => handleChange(e, I)} /></td>
                <td className="  text-center  py-1  px-2"> 
                {/* <input name="prise" type="text" className="px-2 py-1 w-full border rounded-md text-center" onChange={(e) => handleChange(e, I)} /> */}
                <input
                    // value={elem.prise}
                    type="text"
                    id="nomswitch"
                    name="prise"
                    list="nomswitchs"
                    className="px-2 py-1 w-full border rounded-md text-center"
                    onChange={(e) => handleChange(e, I)}
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
                    <select name="Cable" className="px-2 py-1 w-full border rounded-md text-center" onChange={(e) => handleChange(e, I)} >
                        <option ></option>
                        <option value="F_E">F_E</option>
                        <option value="G_E">G_E</option>
                        <option value="SFP">SFP</option>
                    </select>
                </td>
                <td className="  text-center  py-1  px-2">
                    <select name="EtatDePort" className="px-2 py-1 w-full border rounded-md text-center" onChange={(e) => handleChange(e, I)} >
                        <option ></option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </td>
            </tr>

        );
    }

    return (
        <div  style={{height:"100vh",backgroundImage: `url(${Image})`}} className="flex   w-full   ">
            <Navbar></Navbar>
            <div className="scrollbar w-full overflow-y-auto    ">
            <SideBar
          image="./../images/image01.png"
          nom={props.user2.name}
          titre="CONFIGURER LES PORTS DE SWITCH"
        ></SideBar>
            <div className="flex justify-end m-5">
                 <Link to={"/Confirmation"}> 
                <button className=" hover:bg-blue-800 bg-blue-700 px-2 py-2 border rounded-lg text-white font-bold  "   >Sauvegarder
                </button>
                 </Link> 
            </div>
            <div className=" table   w-full p-2 mr-5 bg-white shadow-md  shadow-gray-500/75 border border-gary-400 rounded-xl ">
                {/* <div className="  shadow-md  shadow-gray-500/75   border border-gary-400 rounded-xl "> */}
                <table className="w-full border-gray-300  border-solid">
                    <thead className="bg-gray-300  border-2   ">
                        <tr>
                            <th className=" text-center py-3 px-2">Num Port</th>
                            <th className=" text-center py-3 px-2">IP Vlan</th>
                            <th className=" text-center py-3 px-2">Type</th>
                            <th className=" text-center py-3 px-2">Entrée</th>
                            <th className=" text-center  py-3 px-2">Cascade</th>
                            <th className=" text-center py-3 px-2">Cascade (depuis/vers)</th>
                            <th className=" text-center py-3 px-2">Prise</th>
                            <th className=" text-center py-3 px-2">Cable</th>
                            <th className=" text-center py-3 px-2">Etat De Port</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
                {/* </div> */}
            </div>
            </div>
        </div>
    )
};


export default ConfigurerPorts ;
