import Logo from "../images/Ping-Single-Coming-Soon-Page/logo.svg"
import Dashboard from "../images/Ping-Single-Coming-Soon-Page/illustration-dashboard.png"
import Whatsapp from "../images/Ping-Single-Coming-Soon-Page/whatsapp.jpg"
import Twitter from "../images/Ping-Single-Coming-Soon-Page/twitter.jpg"
import Instagram from "../images/Ping-Single-Coming-Soon-Page/instagram.jpg"

export default function PingSingleColumn(){
    return (
        <div className="">
             <h1 className='text-2xl font-serif justify-center mt-10 flex'>
                Ping Single Column Coming Soon Page
            </h1>
            
            <div className="flex flex-col items-center mt-8 ">
                <img src={Logo} alt="logo" />

                <h2 className="text-slate-500 mt-10 font-light text-3xl">
                    We are launching <span className="text-black font-semibold">soon!</span> 
                </h2>

                <p className="text-sm mt-2 font-medium text-slate-600">
                    Subscribe and get notified.
                </p>

                <div className="flex gap-3 mt-5 items-center">
                    <input type="email" className="border rounded-full stroke-slate-500 px-2 outline-slate-300 w-72 h-8" />

                    <button className="border rounded-full bg-blue-600 text-white text-sm p-2 w-32">
                        Notify me.
                    </button>
                </div>

                <img src={Dashboard} alt="picture" className="w-1/3 mt-14"/>

                <div className="flex w-8 gap-1 cursor-pointer mt-10 ">
                    <img src={Whatsapp} alt="whatsapp" />

                    <img src={Instagram} alt="instagram" />

                    <img src={Twitter} alt="twitter" />
                </div>

                <div className="text-xs text-slate-400 mt-3 font-extralight ml-14">
                    <p>
                        @ Copyright Ping. All rights reserved.
                    </p>
                </div>
            </div>

        </div>
    )
}