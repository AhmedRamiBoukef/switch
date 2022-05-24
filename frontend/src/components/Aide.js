import Im1 from "../images/17.PNG"
import Im2 from "../images/cascade.PNG"
import Im3 from "../images/18.PNG"
import Im4 from "../images/13.PNG"
import Im5 from "../images/aceuil.PNG"

import recherche from "../images/recherche.png"
import creerUser from "../images/creerUser.PNG"
import modifierUser from "../images/modifierUser.PNG"
import informationPersonnel from "../images/informationPersonnel.PNG"
import navbar from "../images/navbar.PNG"
import users from "../images/users.PNG"
import user from "../images/user.PNG"
import React, { useRef } from 'react'
import { Link } from 'react-scroll'
import image from '../images/Capture2.PNG'
import image2 from '../images/Capture3.PNG'
import image3 from '../images/image.PNG'
const Aide = () => {
  return (
      <div className="flex w-full  smooth scroll-smooth" style={{height:"100vh" , scrollBehavior: "smooth" }}>
          <div className="w-1/6   bg-blue-700 flex flex-col space-y-8 text-xl font-semibold text-white pl-10 pt-10" style={{height:"100vh"}}>
              <a href="#port" className="  hover:scale-110 hover:underline hover:text-red-500">Ports</a>
              <a href="#modifierSwitch" className="  hover:scale-110 hover:underline hover:text-red-500">Modifier Switch</a>
              <a href="#accueill" className="  hover:scale-110 hover:underline hover:text-red-500">Page d'accueill</a>
              <a href="#navbar" className="  hover:scale-110 hover:underline hover:text-red-500">Navbar</a>
              <a href="#recherche" className="  hover:scale-110 hover:underline hover:text-red-500">Recherche</a>
              <a href="#ajouterUser" className="  hover:scale-110 hover:underline hover:text-red-500">Ajouter utilisateur</a>
              <a href="#modifierUser" className="  hover:scale-110 hover:underline hover:text-red-500">Modifier utilisateur</a>
              <a href="#users" className="  hover:scale-110 hover:underline hover:text-red-500">Lister utilisateurs</a>
              <a href="#user" className="  hover:scale-110 hover:underline hover:text-red-500">Information utilisateur</a>
              <a href="#profilPersonnel" className="  hover:scale-110 hover:underline hover:text-red-500">Profile Personnel</a>
              <a href="#details" className="  hover:scale-110 hover:underline hover:text-red-500">Détail switch</a>
              <a href="#ajouter" className="  hover:scale-110 hover:underline hover:text-red-500">Ajouter Switch</a>
              <a href="#configurer" className="  hover:scale-110 hover:underline hover:text-red-500">Configurer Port </a>
          </div>
      
    <div  className=" w-full flex flex-col font-semibold space-y-20 scrollbar overflow-auto"  >
      {/* <div
        style={{ height: "100vh" }}
        className="overflow-hidden text-white  bg-gradient-to-b from-blue-800 to-blue-900  lg:w-1/6 w-1/4  m-0 text-xl h-full"
      ></div> */}
         <div className=" lg:w-2/3 mx-auto p-6 shadow-xl  rounded-md  " id="port">
            <h1 className="text-3xl font-bold  m-6">Les Ports d'un Switch</h1>
            <div className=" w-full">
            <p className=" mr-2xl">
            Les utilisateurs de Esi-Switch besoin toujours de vérifier un switch précis et la configuration de ses Ports, Donc pour cela notre plateforme donne cette possibilité juste en cliquant sur le bouton Détail
            </p>
            
            <img src={Im1} alt="image..." className=" mx-auto my-6" />
            </div>


            
            <div className=" w-full ">
            <p className="">
            toutes les Information concernant le Switch vont apparaitre ,et on a fait cette opération par une requête contenant le ID de  ce switch, et on reçoit toutes ses détails. Dans cette nouvelle fenêtre on a donné la possibilité de rechercher l’un des Ports de Switch avec son nom de prise, et pour cela il suffit de taper les premières lettres de la prise pour que des suggestion apparaitre , et on cliquant sur l’une de ces dernières une filtration automatique du tableau des ports sera effectuer. En cliquant sur le bouton Afficher Cascade, les info sur le cascade des ports vont s’afficher.
            </p>
            <img src={Im2} alt="image..." className="mx-auto my-6" />
            </div>
            
       </div> 


        <div className=" lg:w-2/3 mx-auto p-6 shadow-xl  rounded-md  " id="modifierSwitch">
            <h1 className="text-3xl font-bold  m-6">Modifier un Switch :</h1>
            <div className=" w-full">
            <p className="">
            Des fois les employés du service réseau ont besoin de déplacer un switch ou modifier l’un de ses propriétés,  ou reconfigurer ses ports, Alors la modification d’un switch est possible avec Esi Switch, et Pour modifier un Switch il faut cliquer sur le bouton Modifier
            </p>
            <img src={Im1} alt="image..." className=" mx-auto my-6"/>
            </div>
            <div className=" w-full">
            <p className="">
            Une requête contenant l’ID de switch va être envoyer vers le serveur. Après cette dernière action une page de modification d’un switch va apparaitre avec les informations actuelles de switch, mais on n’a pas donner la possibilité de modifier toutes les propriétés car certain parmi eux sont unique. En cliquant sur sauvegarder les modifications vont sauvegarder et l’utilisateur va être transférer vers la page d’accueil, et si il veut annuler toute l’opération il fallait juste cliquer sur Annuler  
            </p>
            <img className="text-center mx-auto my-6" src={Im3} alt="image..." />
            </div>

            <div className=" w-full">
            <p className="">
            Et si ils veulent modifier les ports de ce Switch il suffit juste de cliquer sur le butons Suivant pour envoyer une requête vers le serveurs contenant le Nom de switch, pour que cette fenêtre s’affiche avec les infos actuelle de ces ports .
            </p>
            <img src={Im4} alt="image..." className=" mx-auto my-6"/>
            </div>
            
            
        </div>
        <div className=" lg:w-2/3 mx-auto p-6 shadow-xl  rounded-md  " id="accueill">
            <h1 className="text-3xl font-bold  m-6">La page d’accueil :</h1>
           <p> Des que un utilisateur est rentré dans le site , il se retrouve  directement devant la page où on va afficher tous les Switches de la base de donnés.            
           </p>
           <img src={Im5} alt="image..."  className=" mx-auto my-6"/>
        </div>
            
        <div  className=" lg:w-2/3 mx-auto p-6 shadow-xl  rounded-md  " id="navbar">
          <h1 className="text-3xl font-bold  m-6">NavBar (Bar de taches) :</h1>
          <p>qui contient : </p>
          <ul>
            <li  className="text-xl font-semibold">
              1) Une barre de navigation qui comporte un logo qui permettra à
              l’utilisateur de retourner au page principale
            </li>
            <li >
            <span className="text-xl font-semibold" >2)  Un menu qui permettra de :</span> 
              <ul className="">
                <li> - Retourner à son compte.</li>
                <li> - Accéder à son profil.</li>
                <li>
                  {" "}
                 - Ajouter un utilisateur en tant qu’un utilisateur simple au admin
                  .
                </li>
                <li> - Modifier les informations d’un utilisateur.</li>
                <li> -  Rechercher un switch ou bien un port .</li>
                <li> - Ajouter ou supprimer un switch .</li>
                <li> - Configurer un switch .</li>
                <li> - Modifier le mot de passe personnel .</li>
                <li> - Lister les utilisateurs .</li>
              </ul>
            </li>
          </ul>
          <img src={navbar} alt="image..." className=" mx-auto my-6"/>
        </div>
        <div className=" lg:w-2/3 mx-auto p-6 shadow-xl  rounded-md  " id="recherche">
          <h1 className="text-3xl font-bold  m-6">L’interface de recherche :</h1>
          <p>
            La recherche se fait selon un ou plusieurs critères , par exemple
            l’utilisateur (soit admin , gestionnaire ou simple utilisateur) peut
            faire entrer le nom du switch , son adresse MAC , nom d’inventaire ,
            VLAN , emplacement switch , son marque ou bien par l’emplacement des
            prises , pour trouver le détail sur ce switch (nombre de ports et
            leurs liaisons . . . . ), tous en minimisant les erreurs possibles qui
            peuvent être lieu au moment du saisie des différentes informations
            dans les champs listés auparavant , par lui fournir une liste de tous
            les informations liées au critère de recherche voulue . On attire
            votre attention que les suggestions affichées sont celles qui existent
            dans la base de données au moment de la recherche .
          </p>
          <img src={recherche} alt="image..." className=" mx-auto my-6"/>
        </div>
        <div className=" lg:w-2/3 mx-auto p-6 shadow-xl  rounded-md  " id="ajouterUser">
          <h1 className="text-3xl font-bold  m-6">L’interface de l’ajout d’un nouveau utilisateur :</h1>
          <p>
            Seule les utilisateurs qui sont crées comme des admins ont la
            possibilité de créer un nouveau utilisateur et cela en remplissant un
            formulaire apparaît où il devrait communiquer le nom du nouveau
            utilisateur ,son prénom ,son adresse mail, son mot de passe, son
            numéro de téléphone (ce champs n’est pas obligatoire contrairement au
            champs cités auparavant) et enfin il faut préciser si ce nouveau
            compte est active au pas et si ce nouveau utilisateur est un admin au
            bien un simple utilisateur , tous les champs spécifiés auparavant
            contient un système de détection des erreurs lors des saisies des
            informations (en cas de non-conformité des types spécifies et ceux
            entrés , mot de passe courtes , numéro de téléphone non valide . . . .
            ) .
          </p>
          <img src={creerUser} alt="image..." className=" mx-auto my-6"/>
        </div>
        <div className=" lg:w-2/3 mx-auto p-6 shadow-xl  rounded-md  " id="modifierUser">
          <h1 className="text-3xl font-bold  m-6">
            L’interface de modifications des informations d’un utilisateur :
          </h1>
          <p>
            Seule les utilisateurs qui sont crées comme des admins ont la
            possibilité de modifier les informations d’un utilisateur et cela en
            remplissant un formulaire apparaît où il devrait communiquer l’
            adresse mail d’utilisateur , son numéro de téléphone (ce champs n’est
            pas obligatoire contrairement au champs cités auparavant) et enfin il
            faut préciser si ce nouveau compte est active au pas et si ce nouveau
            utilisateur est un admin au bien un simple utilisateur ,on tire votre
            attention qu’on peut pas modifier le nom de l’utilisateur ,ainsi que
            son mot de passe (seulement l’utilisateur concerné peut modifier son
            mot de passe) , tous les champs spécifiés auparavant contient un
            système de détection des erreurs lors des saisies des informations (en
            cas de non-conformité des types spécifies et ceux entrés , mot de
            passe courtes , numéro de téléphone non valide . . . . ) .pour que
            l’opération de modification aura lieu il faut qu’au moins un champs
            soit modifiés .
          </p>
          <img src={modifierUser} alt="image..." className=" mx-auto my-6"/>
        </div>
        <div className=" lg:w-2/3 mx-auto p-6 shadow-xl  rounded-md  " id="users">
          <h1 className="text-3xl font-bold  m-6">L’interface des utilisateures :</h1>
          <p>
            Cette interface permet seulement à l'admin de visualiser tous les
            autres utilisateures ainsi que leures informations , et le donne la
            possibilité de modifier , supprimer et voir le profile d'un
            utilisateur. on peut chercher un utilisateur or la liste des
            utilisateur qui porte une description commune grace au cases de
            recherche (le recherche se fait soit en basant sur le role ou bien sur
            le nom).
          </p>
          <img src={users} alt="image..." className=" mx-auto my-6"/>
        </div>
        <div className=" lg:w-2/3 mx-auto p-6 shadow-xl  rounded-md  " id="user">
          <h1 className="text-3xl font-bold  m-6">L’interface utilisateur :</h1>
          <p>
            Cette interface permet seulement à l'admin de visualiser tous les
            autres utilisateures c'est-à-dire voir leures profiles personnels (nom
            , prenom ... ) .
          </p>
          <img src={user} alt="image..." className=" mx-auto my-6"/>
        </div>
        <div className=" lg:w-2/3 mx-auto p-6 shadow-xl  rounded-md  " id="profilPersonnel">
          <h1 className="text-3xl font-bold  m-6">Profile personnel :</h1>
          <p>
            Cette interface permet à tous les utilisateures de voir leures
            profiles personnels et aussi les donner la possibilité de changer
            leurs mots de passe .
          </p>
          <img src={informationPersonnel} alt="image..." className=" mx-auto my-6"/>
        </div>


        {/* <div> */}
        {/* <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around',background:'skyblue'}} className="h-14">
          <li className='mt-4 font-bold'><Link activeClass="active" to="details" spy={true} smooth={true}>DETAILS SWITCH</Link></li>
          <li className='mt-4 font-bold'><Link  to="ajouter" spy={true} smooth={true}>AJOUTER SWITCH</Link></li>
          <li className='mt-4 font-bold'><Link  to="configurer" spy={true} smooth={true}>CONFIGURER PORTS</Link></li>
        </ul> */}
        <div className=" lg:w-2/3 mx-auto p-6 shadow-xl  rounded-md  " id='details' >
            <h1 className="text-3xl font-bold  m-6">DETAILS SWITCH</h1>
            <p className='mt-5 font-semibold'>On cliquant sur le buttons “DETAIL” se trouve a droite du tableau </p> 
            <p className='ml-34 font-semibold'>des Switchs l’utilisateur peut consulter les toutes caractéristiques d’un Switch ce qui concerne</p>
            <p className='ml-34 font-semibold'>(Nom , Marque, Nombre de port F_E et G_E , l’état , Adresse Mac , Numéro d’inventaire et numéro de série).</p>
            <img src={image} className=" mx-auto my-6"></img>
        </div>
        {/* <div className=" lg:w-2/3 mx-auto p-6 shadow-xl  rounded-md  " id='details'>
           
        </div> */}
        {/* <hr className='border-b-2'></hr> */}
        <div className=" lg:w-2/3 mx-auto p-6 shadow-xl  rounded-md  " id='ajouter'>
            
            <h1 className="text-3xl font-bold  m-6" >AJOUTER SWITCH</h1>
            <p className='mt-5 font-semibold'>Pour ajouter un nouveau Switch , Il suffit de cliquer sur le bouton AJOUTER qui apparait sur la barre a gauche.</p>
            <img src={image2} className='mt-10 mx-auto my-6' ></img>
            <p className='mt-5 font-semibold'>Une fois la configuration des ports est terminée, cliquez sur sauvegarder pour rajouter le nouveau switch avec ses ports à la base de donnée.</p>
        </div>
        {/* <hr className='mt-10 border-b-2'></hr> */}
        <div className=" lg:w-2/3 mx-auto p-6 shadow-xl  rounded-md  " id='configurer'>
            <h1 className="text-3xl font-bold  m-6" >CONFIGURATION PORTS</h1>
            <p className='mt-5 font-semibold'>Pour configurer les ports du Switch, il faudra cliquer sur le bouton suivant de l’étape précédente, qui ouvrira le tableau à remplir pour la configuration.</p>
            <img src={image3} className=" mx-auto my-6"></img>
        </div>
    {/* </div> */}
    </div>

    </div>
  );
};

export default Aide;





