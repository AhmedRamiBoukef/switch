import {Route} from "react-router-dom";
import {Redirect} from "react-router-dom";
console.log("the is auth ine protected Route ") ;
const ProtectedRoutes = ({isAuth : isAuth,setIsAuth:setIsAuth,component:Component,...rest}) => {
    // let history = useHistory();
    // console.log(isAuth) ;
  
    return ( <Route {...rest}
         render={(props)=>{
        if(isAuth)
        {
            return <Component setIsAuth={setIsAuth}/> ;
        }
        else
        {
              return <Redirect to={{pathname:"/Login",state:{from:props.location}}} />
        }
    }} />

     );
}
 
export default ProtectedRoutes;