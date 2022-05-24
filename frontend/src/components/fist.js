// import { Link } from "react-router-dom";
// import { withRouter } from "react-router-dom"
// const PremierePage = () => {
//     return ( <div>
//         PREMIERE PAGE
//         <Link to={'/Home'}>click</Link>
//     </div> );
// }
 
// export default withRouter(PremierePage) ;
import { Link } from "react-router-dom";



import React from 'react'
//import image from './switch.png'
import TypeAnimation from 'react-type-animation';

function PremierePage() {
  return (
    <div className='flex flex-col min-h-screen justify-between  '>
      <header className="w-full h-max body-font flex-wrap ">
        <div className="container mx-auto flex flex-wrap p-10 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-3xl font-bold font-mono">ESI <span className='text-[#3319E8]'>SWITCH</span></span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-between ">
            {/* <a id="a-propre" className="mr-5 font-bold text-2xl text-indigo-700 hover:text-[#3319E8] cursor-pointer pr-8 hover:underline "><Link to={"/Login"}>Login</Link></a> */}
            <a className="mr-5 font-bold text-2xl text-indigo-700 hover:text-[#3319E8] cursor-pointer hover:underline"><Link to={"/Aide"}>Aide en ligne</Link></a>
          </nav>
        </div>
      </header>
      <section className=" flex h-max body-font flex-wrap  ">
        <div class="container m-auto px-28 flex  md:flex-row flex-col place-content-center place-items-center">
          <div class="lg:flex-grow  md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-6xl text-3xl mb-4 font-bold text-gray-900 font-mono">Bienvenu dans
              <br class="hidden lg:inline-block" /> ESI
              <span className='text-[#3319E8]'>
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    ' SWITCH',
                    2000,
                    ''
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                />
              </span>
            </h1>
            <h4 class="mb-8 leading-relaxed ">Copper mug Heirloom echo park mlkshk tote bag selvage hot chicken try-hard chambray.</h4>
            <div class="flex justify-center ml-5">
              <button class="inline-flex text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-[#3319E8] shadow-[-8px_15px_30px_-5px_rgba(51,25,232,1)] hover:shadow-[-5px_15px_30px_-10px_rgba(51,25,232,1)] rounded-lg text-lg cursor-pointer font-mono tracking-widest font-extrabold hover:-translate-y-1 hover:scale-110 transition duration-300"><Link to={"/Login"}>Connecter</Link></button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:items-center">
            {/* <img class="object-cover object-center rounded" alt="hero" src={image} /> */}

          </div>
        </div>

      </section>


      <footer className=' w-full h-max body-font flex flex-wrap  md:flex-row text-center justify-center '>
        <p className='text-sm'>Developé par ESI Team
          <br /><p>Copyright © 2022 - imagecolorpicker.com | V: m5ZpctxKF0YYWSKn230ra | Privacy Policy|Imprint</p>
        </p>
      </footer>


    </div>
  )
}

export default PremierePage
