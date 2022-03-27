import background from "./img/site-background.jpg"
import esi from "./img/esi.jpg"
const Login = () => {
    return ( 
        <div className="login bg-cover relative flex md:justify-center  md:items-center" style={{ backgroundImage: `url(${background})`,height:"100vh" }} >
        <div className="  flex md:w-4/5 lg:w-3/12 lg:w-1/2">
        <div className="  shadow-xl shadow-gray-500/75 w-1/2  bg-cover"   style={{ backgroundImage: `url(${esi})`,borderBottomLeftRadius:"15px",borderTopLeftRadius:"15px"}} ></div>
        
        <div style={{ backgroundImage: `url(${background})`,borderBottomRightRadius:"15px",borderTopRightRadius:"15px"}} className=" shadow-xl shadow-gray-500/75  py-4  md:w-1/2  relative     ">  
          <div   className="flex justify-center mb-14"> 
            <h1 className="font-bold text-4xl ">Connexion</h1>
          </div>
          <div className=" pb-12 flex flex-col items-center  ">
            <div className="text-left w-9/12 pb-4">
          <label className=" font-bold py-2" htmlFor="email "> Adresse email </label>
            </div>
          <input type="email" id="email"  className=" px-4 h-12 focus:border focus:border-solid  w-9/12 bg-gray-300 border-none rounded-full" />
          </div>
          <div className=" pb-10 flex flex-col items-center  ">
            <div className="text-left w-9/12 pb-4">
          <label className=" font-bold py-2" htmlFor="password">Mot de passe</label>
            </div>
          <input type="password" id="password" className=" px-4 h-12 focus:border focus:border-gray-200  w-9/12 bg-gray-300 border-none rounded-full" />
          </div>
          <div className="w-full">
            <div className="flex justify-center">
          <button className=" hover:bg-sky-400 bg-blue-500 px-10 text-white font-bold text-lg py-2 w-auto border-none rounded-full "> Connecter</button>
          </div>
          <div className="flex justify-center">
          <h1 className=" hover:text-gray-600 font-bold text-gray-400  pt-2">Mot de passe oublie ?</h1>
          </div>
          </div>
        </div>
        </div>
      </div>
     );
}
 
export default Login;