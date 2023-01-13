export default function SinglePriceGrid(){
    return (
        <div className="">
            <h1 className='text-2xl font-serif justify-center mt-10 flex'>
                Single Price Grid Component
            </h1>

            <div className="flex flex-col w-1/2 ml-80 mt-10 shadow-lg rounded-md overflow-hidden">
                <h2 className="text-xl ml-7 mt-8 mb-3 text-blue-500 font-bold">
                    Join our community
                </h2>

                <h3 className="text-lg ml-7 mb-2 text-lime-400 font-medium">
                    30-day, hassle-free money back guarantee 
                </h3>

                <p className="text-slate-500 ml-7 mb-5 text-sm font-light">
                    Gain access to our full library of tutorials along with expert code reviews. <br /> Perfect for any developers who are serious about honing their skills. 
                </p>

                <div className="flex">
                    <div className="flex flex-col w-1/2 bg-blue-500 gap-2">
                        <h2 className="text-white mt-3 ml-7">
                            Monthly Subscrption
                        </h2>

                        <div className="flex items-center ml-7 gap-3">
                            <p className="text-xl font-medium text-white">
                                $29
                            </p>
                            <p className="text-xs text-slate-300 font-light">
                                per month
                            </p>
                        </div>

                        <p className="text-white font-light text-sm ml-7">
                            Full access for less than $1 a day 
                        </p>

                        <button className="w-1/2 p-2 m-2 rounded-lg bg-lime-400 ml-7 mb-5 text-white">
                            Sign Up
                        </button>
                    </div>

                    <div className="bg-blue-400 w-1/2 text-white">
                        <h2 className="ml-7 mt-3 mb-2">
                            Why Us
                        </h2>

                       <div className="text-xs ml-7 text-slate-200 font-light">
                            <p> 
                                Tutorial by industry experts
                            </p>
                            <p>
                                Peer & expert code review
                            </p>
                            <p>
                                Coding excercises
                            </p>
                            <p>
                                Access to our GitHub repos
                            </p>
                            <p>
                                Community forum
                            </p>
                            <p>
                                Flashcard decks
                            </p>
                            <p>
                                New videos every week
                            </p>
                       </div>
                    </div>

                </div>
               

            </div>

           
        </div>
    )
}