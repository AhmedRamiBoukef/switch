import React, { useState } from "react";
import { Link } from "react-router-dom";
import esiImage from "../images/esi_white.png";
import {
  Group,
  Search,
  Add,
  Help,
  ExpandLess,
  ExpandMore,
  ChangeHistory,
  History,
  Router,
} from "@material-ui/icons";
import Cookies from 'js-cookie'
import { useEffect  } from "react";
export default function Navbar(props) {
  const [users,setUsers]=useState([]) ;
  const [user, setUser] = useState("hidden");
  const [user2,setUser2]=useState({}) ;
  const [icone, setIcone] = useState(<ExpandMore />);
  
  useEffect(() => {
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "x-access-token":  Cookies.get("jwt"),
      "Content-Type": "application/json"
     }
     
    
     
     fetch("http://localhost:5000/getCurrentUser", { 
       method: "GET",
      
       headers: headersList
     }).then(function(response) {
       return response.json();
     }).then(function(data) {
       setUser2(data) ;   
     })
  },[])
  return (
    <div
      style={{ height: "100vh" }}
      className="overflow-hidden text-white  bg-gradient-to-b from-blue-800 to-blue-900  lg:w-1/6 w-1/4  m-0 text-xl h-full"
    >
      <div className="flex p-2 text-center py-3 flex flex-col ">
        <img src={esiImage} className="h-20 w-20 mx-auto"></img>

        <h1 className="text-2xl uppercase mx-auto font-extrabold place-items-center font-serif lg:pt-3 font-mono">
          Suivi <br />
          de Switch
        </h1>
      </div>
      <div className="">
        <div className="border-y text-center py-2 mx-2">
          <Link to="/Login"><h1 className="text-2xl hover:scale-110 hover:shadow-xl shadow-white">
            Acceuil{" "}
          </h1>
          </Link>
        </div>
        <div className="my-2  pl-2">
          <h1 className="text-lg text-slate-400">interface</h1>
          {(user2.role===0) && 
          <h2 className="text-xl hover:scale-105 lg:hover:scale-110 cursor-pointer  hover:bg-slate-200 hover:text-black hover:duration-300">
            <span className="mr-2 cursor-pointer">{<Group />}</span>
            Utilisateur
            <span
              className="ml-2"
              onClick={() => {
                setUser("active");
                if (user === "visible") {
                  console.log("more");
                  setIcone(<ExpandMore />);
                  setUser("hidden");
                } else {
                  setIcone(<ExpandLess />);
                  setUser("visible");
                }
              }}
            >
              {icone}
            </span>
          </h2>
          }
          {user2.role===0 &&
          <ul className={`${user}  text-lg `}>
            <li className="pl-8 hover:scale-105 hover:text-red-600">
              {" "}
              <Link to={'/CreateUser'}> - ajouter</Link> 
            </li>
            <li className="pl-8 hover:scale-105 hover:text-red-600">
              {" "}

             <Link to={'/UsersMangement'}>-Lister</Link>
            </li>
          </ul>
          }
        </div>
        <div className="my-2 pl-2">
          <h1 className="text-lg text-slate-400">fonctionalitées </h1>
          <ul className="space-y-4">
            <h2 className="text-xl hover:scale-105 lg:hover:scale-110 hover:bg-slate-200 hover:text-black hover:duration-300">
              <span className="mr-2">{<Search />}</span>
             <Link to={'/Login'}> Rechercher </Link>
            </h2>
            {(user2.role===1 || user2.role===0) &&
            <h2 className="text-xl  hover:scale-105 lg:hover:scale-110 hover:bg-slate-200 hover:text-black hover:duration-300">
              <span className="mr-2">{<Router />}</span>
              <Link to={'/AjouterSwitch'}> Ajouter Switch</Link>
            </h2>
            }

            <h2 className="text-xl hover:scale-105 lg:hover:scale-110 hover:bg-slate-200 hover:text-black hover:duration-300">
              <span className="mr-2">{<History />}</span>
             <Link to={'/ProfilePersonnel'}>Profile Personnel</Link>
            </h2>
            
            <h2 className="text-xl hover:scale-105 lg:hover:scale-110 hover:bg-slate-200 hover:text-black hover:duration-300">
              <span className="mr-2">{<History />}</span>
             <Link to={'/Statistic'}>Statistiques</Link>
            </h2>

            <h2 className="text-xl hover:scale-105 lg:hover:scale-110 hover:bg-slate-200 hover:text-black hover:duration-300">
              <span className="mr-2">{<Help />}</span>
            <Link to={'/Aide'} > Aide en ligne </Link>
            </h2>
            {/* <h2 className="text-xl hover:scale-105 lg:hover:scale-110 hover:bg-slate-200 hover:text-black hover:duration-300">
              <span className="mr-2">{<Help />}</span> */}
            <button onClick={()=>{Cookies.remove("jwt") ;document.location.reload()}}>
            <h2 className="text-xl hover:scale-105 lg:hover:scale-110 hover:bg-slate-200 hover:text-black hover:duration-300">
              <span className="mr-2">{<Help />}</span> Deconnexion
              </h2>
             </button>
             
            
            {/* <h2 className="text-xl hover:scale-105 lg:hover:scale-110 hover:bg-slate-200 hover:duration-300 hover:text-black">
              <span className="mr-2">{<Add />}</span>
              Ajouter compte{" "}
            </h2> */}
          </ul>
        </div>
      </div>
      <ul></ul>
    </div>
  );
}
