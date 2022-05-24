import React, { useState } from "react";
import { Link } from "react-router-dom";
// import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
export default function UserInformations({ user , userNameActual }) {
  console.log("from userInformations ", user);
 
  return (



    
<div className="App">
      <div className="App  " style={{ height: "100vh" }}>
        <div className="flex" style={{ height: "100vh" }}>
          <Navbar />
          <div
            style={{ height: "100vh" }}
            className="scrollbar w-full overflow-auto "
          >
            <SideBar
              image="./../images/image01.png"
              nom={userNameActual}
              titre="Acceuil"
            />


<div className="  pt-24  ">
      <button className="text-white text-xl  bg-slate-900 p-3 self-center hover:bg-slate-800 hover:scale-105 rounded-md right-8 mt-12 absolute right-0 top-0 mt-20 ">
        <Link to={"/UsersMangement"}>Retour </Link>
      </button>
      
      <div className="lg:w-1/2 sm:w-5/6 text-blue-500  my-auto self-center mx-auto text-xl font-serif p-6 rounded-xl shadow-md shadow-black space-y-6 bg-gradient-to-b from-blue-300 to-blue-400">
        <h1 className="text-4xl text-center text-purple-700">
          Fiche d'informations{" "}
        </h1>
        <div className="grid grid-cols-2 gap-6">
          <TextField
            focused
            color="secondary"
            id="outlined-read-only-input"
            label="Name"
            defaultValue={user.name}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Prénom"
            defaultValue={user.prenom}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Email"
            defaultValue={user.email}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Numero de telephone"
            defaultValue={user.phone}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
        <div>
          <TextField
            color="secondary"
            focused
            fullWidth
            id="outlined-read-only-input"
            label="poste de travaille "
            defaultValue={user.occupation}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>

        <div className="grid grid-cols-2 gap-6 ">
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Role"
            defaultValue={
              user.role == 0
                ? "admin"
                : user.role == 1
                ? "gestionnaire"
                : "simple utilisateur"
            }
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Etat"
            defaultValue={user.deleted == true ? "desactivé" : "activé"}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
      </div>
    </div>
          
            
          </div>
        </div>
      </div>
    </div>
   /* <div className="  pt-24  ">
      <button className="text-white text-xl  bg-slate-900 p-3 self-center hover:bg-slate-800 hover:scale-105 rounded-md right-8 mt-12 absolute right-0 top-0">
        <Link to={"/UsersMangement"}>Retour </Link>
      </button>
      
      <div className="lg:w-1/2 sm:w-5/6 text-blue-500  my-auto self-center mx-auto text-xl font-serif p-6 rounded-xl shadow-md shadow-black space-y-6 ">
        <h1 className="text-4xl text-center text-purple-700">
          Fiche d'informations{" "}
        </h1>
        <div className="grid grid-cols-2 gap-6">
          <TextField
            focused
            color="secondary"
            id="outlined-read-only-input"
            label="Name"
            defaultValue={user.name}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Prénom"
            defaultValue={user.prenom}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Email"
            defaultValue={user.email}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Numero de telephone"
            defaultValue={user.phone}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
        <div>
          <TextField
            color="secondary"
            focused
            fullWidth
            id="outlined-read-only-input"
            label="poste de travaille "
            defaultValue={user.occupation}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>

        <div className="grid grid-cols-2 gap-6 ">
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Role"
            defaultValue={
              user.role == 0
                ? "admin"
                : user.role == 1
                ? "gestionnaire"
                : "simple utilisateur"
            }
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            color="secondary"
            focused
            id="outlined-read-only-input"
            label="Etat"
            defaultValue={user.deleted == true ? "desactivé" : "activé"}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
      </div>
    </div>*/
  );
}





