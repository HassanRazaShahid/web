import StatsPreview from '../images/Stats-Preview/stats-preview.jpg'
import Men from '../images/Stats-Preview/men.jpg'

export default function StatsPreviewCard(){
    return (
    <div className="conatiner antialiased">
            <h1 className='text-2xl font-serif justify-center mt-5 flex'>
                Stats Preview Card
            </h1>

        <div className="flex max-w-lg mx-auto my-10 bg-violet-900 text-white  ">

           <div className="flex flex-col p-8 h-full w-full backdrop-brightness-50 ">

                <h2 className="text-2xl font-medium mb-5 tracking-tight">
                    Get <span className='text-purple-700'>insights</span> that help your business grow.
                </h2>

                <p className="text-sm text-slate-400 mb-4 tracking-tighter">
                    Discover the benefits of data analytics and make better decisions regarding revenue, customer experience and overfall efficiency.
                </p>

                <div className="flex justify-between ">
                    <p className="flex flex-col text-lg font-medium">
                        10K+ <span className='text-xs text-slate-400 font-serif'> Companies </span>
                    </p>
                    <p className="flex flex-col text-lg font-medium">
                        314 <span className='text-xs text-slate-400 font-serif'> Template </span>
                    </p>
                    <p className="flex flex-col text-lg font-medium">
                        12M+ <span className='text-xs text-slate-400 font-serif'> Queries </span>
                    </p>
                </div>
           </div>
                
            <div className="bg-violet-900/50 ">
                <img src={StatsPreview} alt="stats-preview" className='object-cover  h-full '/>
            </div>
        </div>
        
                                        {/* MEN */} 

        <div className="flex max-w-lg mx-auto my-10 bg-blue-900 text-white  ">

           <div className="flex flex-col p-9 h-full w-full backdrop-brightness-50 ">

                <h2 className="text-2xl font-medium mb-5 tracking-tight">
                    Get <span className='text-blue-700'>insights</span> that help your business grow.
                </h2>

                <p className="text-sm text-slate-400 mb-4 tracking-tighter">
                    Discover the benefits of data analytics and make better decisions regarding revenue, customer experience and overfall efficiency.
                </p>

                <div className="flex justify-between ">
                    <p className="flex flex-col text-lg font-medium">
                        10K+ <span className='text-xs text-slate-400 font-serif'> Companies </span>
                    </p>
                    <p className="flex flex-col text-lg font-medium">
                        314 <span className='text-xs text-slate-400 font-serif'> Template </span>
                    </p>
                    <p className="flex flex-col text-lg font-medium">
                        12M+ <span className='text-xs text-slate-400 font-serif'> Queries </span>
                    </p>
                </div>
            </div>
                
            <div className=" w-80">
                <img src={Men} alt="stats-preview" className='object-cover '/>
            </div>

        </div>

    </div>
    )
}