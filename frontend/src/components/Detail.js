import { WorkRounded } from '@material-ui/icons';
import React, { useState } from 'react'


/***************l'erreure si que la recherche se fait par rapport a la valeur saisir et pas a ce que l'utilasateur a cliquer  */


function Detail(props) {

    const [hide, setHide] = useState(false);
    const [icon, setIcon] = useState(true);
    const [valueSearch,setValueSearch]=useState("") ;
    const [filterredTable,setFilterredTable]=useState([]) ;
    const [tablePorts,setTablePorts]=useState(props.Detailswitch.ports) ;
    const handleHide = (props) => {
        setHide(props);
    }
    const handleIcon = (props) => {
        setIcon(props);
    }

    function FilterPorts(e) //filtrer le tableau cliquant sur l'un des suggestions de la recherche
    {
        // console.log(e.prise.replace(/\s/g, '').toLowerCase()) ;
        
        const newfilterPorts=((props.Detailswitch.ports).filter((ele)=>{return ((ele.prise.toLowerCase())===(e.prise.toLowerCase()))})) ;
        setTablePorts(newfilterPorts) ;
       
    }

    function filter(searchword)//filtrer les suggestions 
    {
      
       const newfilter=((props.Detailswitch.ports).filter((ele)=>{return (ele.prise.toLowerCase().includes(searchword.toLowerCase()))})) ;
       const newfilterPorts=((props.Detailswitch.ports).filter((ele)=>{return (ele.prise.toLowerCase().includes(searchword.toLowerCase()))})) ;
       if(searchword==="" )
       {
        setFilterredTable([]) ;
        setTablePorts(props.Detailswitch.ports) ;
       }
       else
       {
        setFilterredTable(newfilter);
        setTablePorts(newfilterPorts) ;
       }
      
    } ;

    return (
        
        <div  className='overflow-x-hidden flex w-full  h-96  '>





            <div className='tableau   w-3/5 overflow-auto m-2 text-black m-3  rounded-2xl  shadow-md shadow-slate-500 '>
            <div className='flex flex-col bg-white rounded-lg h-full  w-full  ' >
                <div className="mb-2 p-2 w-full flex flex-col justify-center md:flex-row">
                    <div className="w-full">
                        <div className="input-group relative flex items-stretch w-full ">
                           
                            <div className='flex flex-col  ml-2 mt-2'>
                            <input type="search" placeholder="nom de prise"    onChange={(e)=>filter(e.target.value)} className=" form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  aria-label="Search" aria-describedby="button-addon2 " />
                             { (filterredTable.length !=0    ) && (<div className='scrollbar  overflow-x-hidden overflow-y-auto relative flex-auto min-w-0 block w-full  py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  h-20 mb-2'> { 
                                filterredTable.map((ele)=>(
                                    <p className='cursor-pointer font-semibold  h-auto border-solid border-b-2 border-gray-100 hover:bg-gray-200 ' onClick={()=>{FilterPorts(ele) ;setFilterredTable([]) ;}} key={ele.nm_port}>{ele.prise} </p>
                                ))
                             } </div>)}
                           
                           
                            </div> 

                            <div>
                            <button className="mt-2 h-auto px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center " type="button" id="button-addon2">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                </svg>
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-row  justify-end mt-2 '>
                        <div>
                            <button class=" px-2 py-1 mr-2 h-auto bg-white hover:bg-gray-300 text-gray-800 font-semibold  border border-gray-400 rounded shadow-sm shadow-slate-500" onClick={() => handleHide(true)}>
                                Afficher Cascade
                            </button>
                        </div>
                        <div>
                            <button class="h-auto py-1 bg-white hover:bg-gray-300 text-gray-800 font-semibold border border-gray-400 rounded shadow-sm shadow-slate-500" onClick={() => handleHide(false)}>
                                Masquer Cascade
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-full flex flex-col overflow-auto border border-gray-200  ">
                    <div class="scrollbar overflow-auto flex mt-2">
                        <table class="w-full border-gray-300 border-solid">
                            <thead className='bg-gray-300  border-2  '>
                                    <th
                                        className="text-center py-3 px-2  ">
                                        Num</th>
                                     <th
                                        className="text-center py-3 px-2  ">
                                        Vlan</th> 
                                    <th
                                        className="text-center py-3 px-2  ">
                                        Type</th>
                                        { hide? <th
                                        className=" text-center py-3 px-2    ">
                                        Cascade</th>:null}
                                   { hide? <th
                                        className=" text-center py-3 px-2   ">
                                        C_dep/vers</th>:null}
                                    <th className=" text-center py-3 px-2  ">Etat</th>
                                    {hide ? <th
                                        className=" text-center py-3 px-2   ">
                                        Entree</th> : null}
                                     <th
                                        className=" text-center py-3 px-2    ">
                                        Cable</th> 
                                        <th className=' text-center py-3 px-2   '>prise</th>
                               
                            </thead>
                            <tbody>
                             {(tablePorts).map((ele)=>(
                                  <tr key={ele.nm_port} className="bg-white m-2 border border-2 border-b-solid">
                                    
                                     <td className=" text-center py-2 "> {ele.nm_port}</td>
                                     <td className=" text-center py-2 "> {ele.ip_vlan}</td>
                                     <td className=" text-center py-2 "> {ele.type}</td>
                                     {hide ? <td className=" text-center py-2 ">     {ele.cscade ? (
                <span className="font-bold border border-green-500 border-2 rounded-lg p-1 bg-green-300">
                  Oui
                </span>
              ) : (
                <span className="font-bold border border-red-500 border-2 rounded-lg p-1 bg-red-300">
                  Non
                </span>
              )}</td>:null}
                                    {hide ? (<td className=" text-center py-2 "> {ele.Cascades_vers_depuis}</td>):(null)}
                                     <td className=" text-center py-2 font-bold "> {ele.EtatDePort}</td>
                                     {!hide ?null: <td className=" text-center py-2 "> {ele.Entree ? (
                <span className="font-bold border border-green-500 border-2 rounded-lg p-1 bg-green-300">
                  Oui
                </span>
              ) : (
                <span className="font-bold border border-red-500 border-2 rounded-lg p-1 bg-red-300">
                  Non
                </span>
              )}</td>}
                                     <td className=" text-center py-2 "> {ele.Cable}</td>
                                     <td className=" text-center py-2 "> {ele.prise}</td>  
                              </tr>
                             ))}  
                            </tbody>  
                        </table> 
                    </div>
                </div>
            </div>
            </div>





            <div  className='detail  w-2/5 flex flex-col bg-white  items-center overflow-auto m-2 text-black m-3  rounded-2xl  shadow-md shadow-slate-500'>
          
                 <div className='grid grid-cols-2 gap-2 font-bold h-full justify-between w-full'>  {/*grid grid-cols-2 gap-2 font-bold */}
                    <div className='flex flex-col mx-auto mt-auto md:mx-auto w-full'>
                        <h2>Nom</h2>
                        <h3 className='font-semibold'>{(props.Detailswitch).Nom}</h3>
                    </div>

                    <div className='flex flex-col mx-auto mt-auto md:mx-auto w-full'>
                        <h2>Marque</h2>
                        <h3 className='font-semibold'>{(props.Detailswitch).Marque}</h3>
                    </div>


                    <div className='flex flex-col mx-auto mt-auto md:mx-auto w-full'>
                        <h2>Nombre de port F_E</h2>
                        <h3 className='font-semibold'>{(props.Detailswitch).Nombre_de_ports_F_E}</h3>
                    </div>
                    <div className='flex flex-col mx-auto mt-auto md:mx-auto w-full'>
                        <h2>Etat</h2>
                        <h3 className='font-semibold'>{(props.Detailswitch).Etat}</h3>
                    </div>


                    <div className='flex flex-col mx-auto mt-auto md:mx-auto w-full'>
                        <h2>Nombre de Port G-E</h2>
                        <h3 className='font-semibold'>{(props.Detailswitch).Nombre_de_ports_G_E}</h3>
                    </div>
                    <div className='flex flex-col mx-auto mt-auto md:mx-auto w-full'>
                        <h2>Adresse Mac</h2>
                        <h3 className='font-semibold'>{(props.Detailswitch).Adresse_MAC}</h3>
                    </div>

                    <div className='flex flex-col mx-auto mt-auto md:mx-auto w-full'>
                        <h2>Numero d'inventaire</h2>
                        <h3 className='font-semibold'>{(props.Detailswitch).N_d_inventaire}</h3>
                    </div>
                    <div className='flex flex-col mx-auto mt-auto md:mx-auto w-full'>
                        <h2>Numero de serie</h2>
                        <h3 className='font-semibold'>{(props.Detailswitch).N_Serie}</h3>
                    </div>
                </div>
            
            </div>
        </div>
       
    )
}

export default Detail




 