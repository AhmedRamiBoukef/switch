import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import Cookies from "js-cookie";
import { swal } from "sweetalert";
import {
  Autocomplete,
  TextField,
  Stack,
  Select,
  Box,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import {
  FaArrowDown,
  FaArrowUp,
  FaSearch,
  FaTrash,
  FaEye,
  FaWrench,
} from "react-icons/fa";
// import { Link } from "react-router-dom";
import CreateUser from "./CreateUser";
import ModifierUser from "./ModifierUser";
import UserInformations from "./UserInformations";

function UsersManagement({
  users,
  setUsers,
  userAvisualiser,
  setUserAvisualiser,
  userNameActual,
}) {
  useEffect(() => {
    fetch("http://localhost:5000/getusers")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setUsers(data);
      });
  }, []);
  console.log("les user de mang", users);
  // const [users , setUsers] = useState([]) ;

  // useEffect(()=>{
  //   let headersList = {
  //     "Accept": "*/*",
  //     "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  //     "x-access-token": Cookies.get('jwt')
  //    }

  //    fetch("http://localhost:5000/getusers", {
  //      method: "GET",
  //      headers: headersList
  //    }).then(function(response) {
  //      return response.text();
  //    }).then(function(data) {
  //      console.log(data);
  //      setUsers(data) ;

  //    })
  // } , [])
  function supprimer(id) {
    // let headersList = {
    //   Accept: "application/json",
    //   "Content-Type": "application/json",
    // };

    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "x-access-token": Cookies.get("jwt"),
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      _id: id,
    });

    

    fetch("http://localhost:5000/delete", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        document.location.reload() ;
      })
      .then(() => {
        fetch("http://localhost:5000/getusers")
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);
            setUsers(data);
          });
      });

   

    setUsersList2(
      UsersList.filter((elem) => {
        if (elem._id != id) return elem;
      })
    );
    UsersList = usersList2;
  }
  
  const [nom, setNom] = useState("");
  const [idUserASupprimer, setIdUserASupprimer] = useState("");
  const [confirmer, setConfirmer] = useState(false);
  const [typeUser, setTypeUser] = useState(2);
  // console.log("youcef refisee" , typeUser);
  const [typeUser02, setTypeUser02] = useState(0);

  const [selection, setSelection] = useState(0);
  
  let i = 1;
 

  const filterUsers = users.filter((elem) => {
  

    if (nom == "" || nom == null) {
      if (typeUser02 === 0) {
        return elem;
      } else {
        if (elem.role == typeUser) return elem;
      }
    } else {
      if (typeUser02 === 0) {
        if (elem.name === nom) return elem;
      } else {
        if (elem.name === nom && elem.role === typeUser) return elem;
      }
    }

  });
  

  let UsersList = [];

  for (let i = 0; i < filterUsers.length; i++) {
    UsersList.push(
      <tr>
        <td className="p-1">
          {<span className="bg-orange-500 p-1 rounded-xl">{i + 1}</span>}
        </td>
        <td className="p-1">{filterUsers[i].name}</td>
        <td className="p-1">{filterUsers[i].email}</td>
        <td className="p-1">{filterUsers[i].phone}</td>
        <td className="p-1">
          {filterUsers[i].role == 0
            ? "admin "
            : filterUsers[i].role == 1
            ? "gestionnaire"
            : "simple utilisateur "}
        </td>
        <td className="p-1">
          {
            <div className="space-x-2">
              <span className="bg-violet-800 p-1 rounded-md hover:bg-violet-600">
                <button
                  onClick={async () => {
                    console.log("user a informer ", filterUsers[i]);
                    await setUserAvisualiser(filterUsers[i]);
                  }}
                >
                  <Link to={"/UserInformation"}>{<FaEye />}</Link>{" "}
                </button>
              </span>
              <span className="bg-green-700 p-1 rounded-md hover:bg-green-500">
                <button
                  onClick={async () => {
                    await setUserAvisualiser(filterUsers[i]);
                  }}
                >
                  {" "}
                  <Link to={"/ModiferUser"}>{<FaWrench />}</Link>
                </button>
              </span>
              <span className="bg-red-600 p-1 rounded-md hover:bg-red-400">
                <button
                  onClick={() => {
                    
                    setConfirmer(true);
                    setIdUserASupprimer(filterUsers[i]._id);
           
                  }}
                  id={filterUsers[i]._id}
                >
                  {<FaTrash />}{" "}
                </button>
              </span>
            </div>
          }
        </td>
      </tr>
    );
  }
  const [usersList2, setUsersList2] = useState();
  // console.log(UsersList);
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

            <div className="p-6">
              {!confirmer && (
                <div>
                  {" "}
                  <h1 className="text-3xl text-black my-4 text-left ">
                    Liste des utilisateures{" "}
                  </h1>
                  <div className="space-y-10">
                    <div className="flex justify-between">
                      <div className="grid grid-cols-2 gap-x-10 sm:w-full lg:w-1/2">
                        <div>
                          {" "}
                          <Autocomplete
                            id="free-solo-demo"
                            freeSolo
                            options={users.map((option) => option.name)}
                            renderInput={(params) => (
                              <TextField {...params} label="Nom utilisateur" />
                            )}
                            onInputChange={async (event, newInputValue) => {
                              console.log(newInputValue);
                              await setNom(newInputValue);
                            }}
                            onChange={async (event, newValue) => {
                              console.log(newValue);
                              await setNom(newValue);
                            }}
                         
                          />
                        </div>
                        <div>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Type utilisateur
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={typeUser}
                              label="Type utilisateur"
                              onChange={(e) => {
                                setTypeUser(e.target.value);
                                setTypeUser02(1);
                                console.log(" role ", e.target.value);
                              }}
                            >
                              <MenuItem value={0}>Admin</MenuItem>
                              <MenuItem value={1}>gestionnaire</MenuItem>
                              <MenuItem value={2}>simple utilisteur</MenuItem>
                              
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                      <div className="self-center space-x-4">
                        <button
                          className="text-white bg-slate-900 p-2 self-center hover:bg-slate-800 hover:scale-105 rounded-md"
                          onClick={() => {
                            setTypeUser02(0);
                            setNom("");
                          }}
                        >
                          Tous
                        </button>
                        <button className="text-white bg-slate-900 p-2 self-center hover:bg-slate-800 hover:scale-105 rounded-md">
                          <Link to={"/CreateUser"}>+ Add User</Link>
                        </button>
                      </div>
                    </div>
                    {UsersList.length > 0 && (
                      <table className="w-full   text-center divide-y">
                        <thead className="mb-1 ">
                          <th>User</th>
                          <th>User Name</th>
                          <th>Email</th>
                          <th>phone</th>
                          <th>Admin</th>
                          <th>Actions</th>
                        </thead>
                        <tbody className="">
                          {/* {usersList2.length == 0 ? UsersList : usersList2} */}
                          {UsersList}
                        </tbody>
                      </table>
                    )}
                  </div>
                  <button className="text-white bg-slate-900 p-2 self-center hover:bg-slate-800 hover:scale-105 rounded-md right-8 mt-12 absolute right-0 mr-6">
                    <Link to={"/Login"}>Retour </Link>{" "}
                  </button>
                </div>
              )}
              {confirmer && (
                <div className="rounded-xl shadow-xl mx-auto mt-12 lg:w-1/3 sm:w-1/2 bg-gradient-to-r from-blue-100 via-purple-200 to-pink-300  ">
                  <p className="text-3xl font-bold text-black  m-4 text-center  ">
                    Voulez vous supprimer cet utilisateur ?
                  </p>
                  <div className="grid grid-cols-2 gap-60  ">
                    <button
                      onClick={(elem) => {
                        supprimer(idUserASupprimer);
                        setConfirmer(false);
                        console.log("rana fi suprimi ", idUserASupprimer);
                      }}
                      className="text-xl rounded-lg bg-green-500 p-3 m-6"
                    >
                      {" "}
                      Oui{" "}
                    </button>
                    <button
                      className="text-xl rounded-lg bg-red-500 p-3 m-6  "
                      onClick={(elem) => {
                        setConfirmer(false);
                      }}
                    >
                      {" "}
                      Non{" "}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersManagement;

