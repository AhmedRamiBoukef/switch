import React, { useState, UseEffect } from "react";
import {
  Autocomplete,
  TextField,
  Stack,
  Select,
  Box,
  FormControl,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Cookies from "js-cookie";
export default function Recherche({
  switches,
  ports,
  setSwitches,
  lesSwitches,
}) {
  // const [lesSwitches , setLesSwitches] = useState([]) ;
  // setLesSwitches(switches) ;

  console.log("tableau de lesSwitches", switches);
  console.log("tableau de ports", ports);
  const unique = [...new Set(switches.map((option) => option.Marque))];
  console.log(unique);
  const [user, setUser] = useState("hidden");
  const [age, setAge] = React.useState("");
  const a = switches;
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleSwitch = () => {
    swi.Nom = Nom;
    swi.Adresse_MAC = Adresse_MAC;
    swi.Bloc = Bloc;
    swi.Marque = Marque;
    swi.N_d_inventaire = N_d_inventaire;
    swi.ip_vlan = ip_vlan;
    swi.prise = prise;
    console.log("chooooof", swi);

    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "x-access-token": Cookies.get("jwt"),
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify(swi);

    fetch("http://localhost:5000/api/search", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setSwitches(data);
      });

    // fetch("http://localhost:5000/api/search", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(swi), //'62555a53eb287372cf3ffdaa'
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log("Ramiiiiiiiiiiiiiii", data);
    //     setSwitches(data) ;
    //   });
  };

  const [icone, setIcone] = useState(<FaArrowDown />);

  const [_id, set_id] = useState("");
  const [ip_vlan, setIp_vlan] = useState("");
  const [Adresse_MAC, setAdresse_MAC] = useState("");
  const [Armoire, setArmoire] = useState("");
  const [Bloc, setBloc] = useState("");
  const [Etat, setEtat] = useState("");
  const [Marque, setMarque] = useState("");
  const [Modèle, setModèle] = useState("");
  const [N_Serie, setN_Serie] = useState("");
  const [N_d_inventaire, setN_d_inventaire] = useState("");
  const [Nom, setNom] = useState("");
  const [Nombre_de_ports_F_E, setNombre_de_ports_F_E] = useState("");
  const [Nombre_de_ports_G_E, setNombre_de_ports_G_E] = useState("");
  const [Nombre_de_ports_SFP, setNombre_de_ports_SFP] = useState("");
  const [port, setport] = useState([]);
  const [prise, setPrise] = useState("");
  const [switchRecherche, setSwitchRecherche] = useState({
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
  let swi = {
    Nom: "",
    ip_vlan: "",
    Adresse_MAC: "",
    N_d_inventaire: "",
    Marque: "",
    prise: "",
    Bloc: "",
  };

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
    port: [],
  });
  return (
    // <div className="  text-black m-3  rounded-2xl py-8 px-8 shadow-md shadow-slate-500 bg-gradient-to-r from-cyan-500 to-blue-500">
    <div className="  text-black m-3  rounded-2xl py-8 px-8 ">
      <div className="  text-black m-3  rounded-2xl py-8 px-8 shadow-md shadow-slate-500  bg-white  ">
        {" "}
        {/* //bg-gradient-to-b from-blue-300 to-blue-400 */}
        <h1 className="text-2xl lg:text-4xl">Rechercher un switch </h1>
        <div className="flex justify-between mt-4">
          <div className="lg:w-1/3 sm:w-1/2">
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              options={lesSwitches.map((option) => option.Nom)}
              renderInput={(params) => (
                <TextField {...params} label="Nom Switch" />
              )}
              onInputChange={async (event, newInputValue) => {
                console.log(newInputValue);
                await setNom(newInputValue);
              }}
              onChange={(event, newValue) => {
                setNom(newValue);
              }}
            />
          </div>
          <div className="flex space-x-5 sm:ml-4 ">
            <button
              className=" text-sm lg:text-xl text-white p-2  self-center  rounded-xl bg-slate-300 inline-block "
              onClick={() => {
                setUser("active");
                if (user === "visible") {
                  console.log("more");
                  setIcone(<FaArrowDown />);

                  setUser("hidden");
                } else {
                  setIcone(<FaArrowUp />);
                  setUser("visible");
                }
              }}
            >
              {icone}
            </button>
            <button
              className="sm:text-sm text-xl lg:w-32 lg:text-xl lg:h-12 text-white p-2  place-self-center rounded-lg bg-blue-700 font-bold inline-block"
              onClick={() => setSwitches(lesSwitches)}
            >
              Tous
            </button>
            <button
              className="sm:text-sm text-xl lg:w-32 lg:text-xl lg:h-12 text-white p-2  place-self-center rounded-lg bg-blue-700 font-bold inline-block"
              onClick={handleSwitch}
            >
              Recherche
            </button>
          </div>
        </div>
        <div className="mt-10  ">
          <div
            className={`${user}   grid grid-cols-2  lg:grid-cols-3  gap-4 gap-y-6 lg:gap-x-20  flex  `}
          >
            <div className=" ">
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={ports.map((option) => option.ip_vlan)}
                renderInput={(params) => <TextField {...params} label="VLAN" />}
                onInputChange={(event, newInputValue) => {
                  console.log(newInputValue);
                  setIp_vlan(newInputValue);
                }}
                onChange={(event, newValue) => {
                  setIp_vlan(newValue);
                }}
              />
            </div>
            <div className="  ">
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={lesSwitches.map((option) => option.Adresse_MAC)}
                renderInput={(params) => (
                  <TextField {...params} label="Adresse MAC" />
                )}
                onInputChange={(event, newInputValue) => {
                  console.log(newInputValue);
                  setAdresse_MAC(newInputValue);
                }}
                onChange={(event, newValue) => {
                  setAdresse_MAC(newValue);
                }}
              />
            </div>
            <div className="   ">
              {/* <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={switches.map((option) => option.Adresse_MAC)}
                renderInput={(params) => (
                  <TextField {...params} label="Adresse MAC" />
                )}
                onInputChange={(event, newInputValue) => {
                  console.log(newInputValue);
                  setAdresse_MAC(newInputValue);
                }}
                onChange={(event, newValue) => {
                  setAdresse_MAC(newValue);
                }}
              /> */}
              <Autocomplete
                id="free-solo"
                freeSolo
                options={unique}
                renderInput={(params) => (
                  <TextField {...params} label="Marques" />
                )}
                onInputChange={(event, newInputValue) => {
                  console.log(newInputValue);
                  setMarque(newInputValue);
                }}
                onChange={(event, newValue) => {
                  setMarque(newValue);
                }}
              />
              {/* <Box sx={{ minWidth: 120 }}>

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Marques</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Marques"
                    onChange={(e) => setMarque(e.target.value)}
                  >
                   { 
                   <MenuItem value={10}>cisco</MenuItem>
                    <MenuItem value={20}>cisco2</MenuItem>
                    <MenuItem value={30}>cisco3</MenuItem>
                    }
                  </Select>
                </FormControl> 
              </Box> */}
            </div>
            <div className="   ">
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={lesSwitches.map((option) => option.N_d_inventaire)}
                renderInput={(params) => (
                  <TextField {...params} label="Numéro inventaire" />
                )}
                onInputChange={(event, newInputValue) => {
                  console.log(newInputValue);
                  setN_d_inventaire(newInputValue);
                }}
                onChange={(event, newValue) => {
                  setN_d_inventaire(newValue);
                }}
              />
              {/* </Stack> */}
            </div>
            <div className="  ">
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={lesSwitches.map((option) => option.Bloc)}
                renderInput={(params) => (
                  <TextField {...params} label="Emplacement Switch" />
                )}
                onInputChange={(event, newInputValue) => {
                  console.log(newInputValue);
                  setBloc(newInputValue);
                }}
                onChange={(event, newValue) => {
                  setBloc(newValue);
                }}
              />
              {/* </Stack> */}
            </div>
            <div className="  ">
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={ports.map((option) => option.prise)}
                renderInput={(params) => (
                  <TextField {...params} label="Emplacement port" />
                )}
                onInputChange={(event, newInputValue) => {
                  console.log(newInputValue);
                  setPrise(newInputValue);
                }}
                onChange={(event, newValue) => {
                  setPrise(newValue);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//
