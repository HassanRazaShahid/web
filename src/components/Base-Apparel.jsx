import logo from '../images/Base-Apparel/logo.svg'
import hero from '../images/Base-Apparel/hero.jpg'

export default function BaseApparel(){
    return(
        <div className=" ">
            <h1 className="text-2xl font-serif justify-center mt-10 flex">
                Base Apparel Coming Soon Page
            </h1>

            <div className="bg-gradient-to-tr from bg-pink-100 to-white mt-10 flex m-20">
                <div className="flex flex-col gap-5 p-10 ">
                    <img src={logo} alt="" className='w-56'/>

                    <h1 className='text-6xl w-10 mt-20 font-serif'>
                       <span className='text-pink-400'>WE'RE</span> COMING SOON
                    </h1>

                    <p className='w-1/2 text-pink-500 tracking-tight text-sm'>
                        Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
                    </p>

                    <div className="flex shadow-xl">
                        <input type="text" className="outline-none border-2 px-2 border-pink-400"/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-10 bg-pink-400 stroke-white p-2 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </div>

                </div>

                <div className="">
                    <img src={hero} alt="" />
                </div>
            </div>
        </div>
    )
}