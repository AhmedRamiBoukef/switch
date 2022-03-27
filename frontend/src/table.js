
import background from "./img/site-background.jpg"
const Table = () => {
    return ( 
        <div className="bg-cover" style={{backgroundImage: `url(${background})`,height:'100vh'}}>
            <div className="scrollbar overflow-auto p-4 shadow-md  shadow-gray-500/75  m-4 border border-gary-400 rounded-xl shad h-1/2">
            <table className="w-full border-gray-300 border-solid">
                <thead className="bg-gray-300  border-2   ">
                    <th className=" text-center py-3 px-2">id</th>
                    <th className=" text-center py-3 px-2">Nom</th>
                    <th className=" text-center py-3 px-2">Emplacement</th>
                    <th className=" text-center lg:block  md:hidden py-3 px-2">Num inventaire</th>
                    <th className=" text-center  py-3 px-2">Nbr Port</th>
                    <th className=" text-center py-3 px-2">Active</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr className="bg-white m-2 border border-2 border-b-solid" >
                        <td className=" text-center py-2 ">1234</td>
                        <td className=" text-center  py-1 ">Cisico12</td>
                        <td className=" text-center  py-2 ">Blog pedagogique</td>
                        <td className=" text-center lg:block md:hidden  py-2 ">123456</td>
                        <td className=" text-center    py-2 ">48</td>
                        <td className=" text-center  py-2 "><span className="font-bold border border-green-500 border-2 rounded-lg p-1 bg-green-300">Oui</span></td>
                        <td><div className="text-center"><button className=" hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Detail</button> <button  className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Modifier</button> </div></td>
                    </tr>
                    <tr className="bg-white m-2 border border-2 border-b-solid" >
                        <td className=" text-center py-2 ">1234</td>
                        <td className=" text-center  py-1 ">Cisico12</td>
                        <td className=" text-center  py-2 ">Blog pedagogique</td>
                        <td className=" text-center lg:block md:hidden py-2 ">123456</td>
                        <td className=" text-center    py-2 ">48</td>
                        <td className=" text-center  py-2 "><span className="font-bold border border-green-500 border-2 rounded-lg p-1 bg-green-300">Oui</span></td>
                        <td><div className="text-center"><button className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Detail</button> <button  className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Modifier</button> </div></td>
                    </tr>
                    <tr className="bg-white m-2 border border-2 border-b-solid" >
                        <td className=" text-center py-2 ">1234</td>
                        <td className=" text-center  py-1 ">Cisico12</td>
                        <td className=" text-center  py-2 ">Blog pedagogique</td>
                        <td className=" text-center lg:block md:hidden py-2 ">123456</td>
                        <td className=" text-center    py-2 ">48</td>
                        <td className=" text-center  py-2 "><span className="font-bold border border-green-500 border-2 rounded-lg p-1 bg-green-300">Oui</span></td>
                        <td><div className="text-center"><button className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Detail</button> <button  className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Modifier</button> </div></td>
                    </tr>
                    <tr className="bg-white m-2 border border-2 border-b-solid" >
                        <td className=" text-center py-2 ">1234</td>
                        <td className=" text-center  py-1 ">Cisico12</td>
                        <td className=" text-center  py-2 ">Blog pedagogique</td>
                        <td className=" text-center lg:block md:hidden py-2 ">123456</td>
                        <td className=" text-center    py-2 ">48</td>
                        <td className=" text-center  py-2 "><span className="font-bold border border-red-500 border-2 rounded-lg p-1 bg-red-300">Oui</span></td>
                        <td><div className="text-center"><button className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Detail</button> <button  className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Modifier</button> </div></td>
                    </tr>
                    <tr className="bg-white m-2 border border-2 border-b-solid" >
                        <td className=" text-center py-2 ">1234</td>
                        <td className=" text-center  py-1 ">Cisico12</td>
                        <td className=" text-center  py-2 ">Blog pedagogique</td>
                        <td className=" text-center lg:block md:hidden py-2 ">123456</td>
                        <td className=" text-center    py-2 ">48</td>
                        <td className=" text-center  py-2 "><span className="font-bold border border-green-500 border-2 rounded-lg p-1 bg-green-300">Oui</span></td>
                        <td><div className="text-center"><button className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Detail</button> <button  className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Modifier</button> </div></td>
                    </tr>
                    <tr className="bg-white m-2 border border-2 border-b-solid" >
                        <td className=" text-center py-2 ">1234</td>
                        <td className=" text-center  py-1 ">Cisico12</td>
                        <td className=" text-center  py-2 ">Blog pedagogique</td>
                        <td className=" text-center lg:block md:hidden py-2 ">123456</td>
                        <td className=" text-center    py-2 ">48</td>
                        <td className=" text-center  py-2 "><span className="font-bold border border-green-500 border-2 rounded-lg p-1 bg-green-300">Oui</span></td>
                        <td><div className="text-center"><button className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Detail</button> <button  className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Modifier</button> </div></td>
                    </tr>
                    <tr className="bg-white m-2 border border-2 border-b-solid" >
                        <td className=" text-center py-2 ">1234</td>
                        <td className=" text-center  py-1 ">Cisico12</td>
                        <td className=" text-center  py-2 ">Blog pedagogique</td>
                        <td className=" text-center lg:block md:hidden py-2 ">123456</td>
                        <td className=" text-center    py-2 ">48</td>
                        <td className=" text-center  py-2 "><span className="font-bold border border-red-500 border-2 rounded-lg p-1 bg-red-300">Oui</span></td>
                        <td><div className="text-center"><button className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Detail</button> <button  className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Modifier</button> </div></td>
                    </tr>
                    <tr className="bg-white m-2 border border-2 border-b-solid" >
                        <td className=" text-center py-2 ">1234</td>
                        <td className=" text-center  py-1 ">Cisico12</td>
                        <td className=" text-center  py-2 ">Blog pedagogique</td>
                        <td className=" text-center lg:block md:hidden py-2 ">123456</td>
                        <td className=" text-center    py-2 ">48</td>
                        <td className=" text-center  py-2 "><span className="font-bold border border-green-500 border-2 rounded-lg p-1 bg-green-300">Oui</span></td>
                        <td><div className="text-center"><button className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Detail</button> <button  className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Modifier</button> </div></td>
                    </tr>
                    <tr className="bg-white m-2 border border-2 border-b-solid" >
                        <td className=" text-center py-2 ">1234</td>
                        <td className=" text-center  py-1 ">Cisico12</td>
                        <td className=" text-center  py-2 ">Blog pedagogique</td>
                        <td className=" text-center lg:block md:hidden py-2 ">123456</td>
                        <td className=" text-center    py-2 ">48</td>
                        <td className=" text-center  py-2 "><span className="font-bold border border-green-500 border-2 rounded-lg p-1 bg-green-300">Oui</span></td>
                        <td><div className="text-center"><button className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Detail</button> <button  className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Modifier</button> </div></td>
                    </tr>
                    <tr className="bg-white m-2 border border-2 border-b-solid" >
                        <td className=" text-center py-2 ">1234</td>
                        <td className=" text-center  py-1 ">Cisico12</td>
                        <td className=" text-center  py-2 ">Blog pedagogique</td>
                        <td className=" text-center lg:block md:hidden py-2 ">123456</td>
                        <td className=" text-center    py-2 ">48</td>
                        <td className=" text-center  py-2 "><span className="font-bold border border-red-500 border-2 rounded-lg p-1 bg-red-300">Oui</span></td>
                        <td><div className="text-center"><button className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Detail</button> <button  className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Modifier</button> </div></td>
                    </tr>
                    <tr className="bg-white m-2 border border-2 border-b-solid" >
                        <td className=" text-center py-2 ">1234</td>
                        <td className=" text-center  py-1 ">Cisico12</td>
                        <td className=" text-center  py-2 ">Blog pedagogique</td>
                        <td className=" text-center lg:block md:hidden py-2 ">123456</td>
                        <td className=" text-center    py-2 ">48</td>
                        <td className=" text-center  py-2 "><span className="font-bold border border-red-500 border-2 rounded-lg p-1 bg-red-300">Oui</span></td>
                        <td><div className="text-center"><button className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Detail</button> <button  className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Modifier</button> </div></td>
                    </tr>
                    <tr className="bg-white m-2 border border-2 border-b-solid" >
                        <td className=" text-center py-2 ">1234</td>
                        <td className=" text-center  py-1 ">Cisico12</td>
                        <td className=" text-center  py-2 ">Blog pedagogique</td>
                        <td className=" text-center lg:block md:hidden py-2 ">123456</td>
                        <td className=" text-center    py-2 ">48</td>
                        <td className=" text-center  py-2 "><span className="font-bold border border-green-500 border-2 rounded-lg p-1 bg-green-300">Oui</span></td>
                        <td><div className="text-center"><button className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Detail</button> <button  className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Modifier</button> </div></td>
                    </tr>
                    <tr className="bg-white m-2 border border-2 border-b-solid" >
                        <td className=" text-center py-2 ">1234</td>
                        <td className=" text-center  py-1 ">Cisico12</td>
                        <td className=" text-center  py-2 ">Blog pedagogique</td>
                        <td className=" text-center lg:block md:hidden py-2 ">123456</td>
                        <td className=" text-center    py-2 ">48</td>
                        <td className=" text-center  py-2 "><span className="font-bold border border-red-500 border-2 rounded-lg p-1 bg-red-300">Non</span></td>
                        <td><div className="text-center"><button className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Detail</button> <button  className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Modifier</button> </div></td>
                    </tr>
                    <tr className="bg-white m-2 border border-2 border-b-solid" >
                        <td className=" text-center py-2 ">1234</td>
                        <td className=" text-center  py-1 ">Cisico12</td>
                        <td className=" text-center  py-2 ">Blog pedagogique</td>
                        <td className=" text-center lg:block md:hidden py-2 ">123456</td>
                        <td className=" text-center    py-2 ">48</td>
                        <td className=" text-center  py-2 "><span className="font-bold border border-green-500 border-2 rounded-lg p-1 bg-green-300">Oui</span></td>
                        <td><div className="text-center"><button className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Detail</button> <button  className="hover:bg-blue-800 bg-blue-700 px-2 py-1 border rounded-lg text-white font-bold">Modifier</button> </div></td>
                    </tr>
                  

                </tbody>
            </table>
            </div>  
            
        </div>
     );
}
 
export default Table;