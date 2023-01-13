import IconSupervisor from "../images/Four-Card/icon-supervisor.svg"
import IconCalculator from "../images/Four-Card/icon-calculator.svg"
import IconBuilder from "../images/Four-Card/icon-team-builder.svg"
import IconKarma from "../images/Four-Card/icon-karma.svg"


export default function FourCard(){
    return (
        <div className="">
             <h1 className='text-2xl font-serif justify-center mt-10 flex'>
                Four Card Feature Section
            </h1>

            <div className="bg-slate-100 mx-20 flex flex-col mt-10 ">
               
                <div className="flex flex-col gap-3 mt-5 items-center">
                <h2 className="text-2xl text-slate-400 tracking-tight">
                    Realiable, efficient delivery
                </h2>
                <h2 className="text-2xl font-medium tracking-tight">
                    Powered by Technology
                </h2>
                <p className="text-slate-500">
                    Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful.
                </p>
                </div>

                <div className="flex justify-around">
                    <div className="flex flex-col mt-20 w-72 px-8 bg-white border-t-4 border-red-700 gap-2 p-3 rounded-lg">
                        <h2 className="text-lg font-medium tracking-tighter">
                            Supervisor
                        </h2>
                        <p className="text-md tracking-tighter text-slate-500">
                            Monitors activity to identify project roadblocks.
                        </p>
                        <img src={IconSupervisor} alt="Icon Supervisor" className="h-20 w-20 mt-6 ml-40"/>
                    </div>

                    <div className="flex flex-col mt-20 w-72 px-8 ml-96 bg-white border-t-4 border-blue-700 gap-2 p-3 rounded-lg">
                        <h2 className="text-lg font-medium tracking-tighter">
                            Calculator
                        </h2>   
                        <p className="text-md tracking-tighter text-slate-500">
                            Uses data from past projects to provide better delivery estimates.
                        </p>
                        <img src={IconCalculator} alt="Icon Supervisor" className="h-20 w-20 mt-6 ml-40"/>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center flex-wrap mb-10">
                    <div className="flex flex-col mt-20 w-72 px-8 bg-white border-t-4 rounded-lg border-violet-700 gap-2 p-3">
                        <h2 className="text-lg font-medium tracking-tighter">
                            Team Builder
                        </h2>   
                        <p className="text-md tracking-tighter text-slate-500">
                            Scans our talent network to create the optimal team for your project.
                        </p>
                        <img src={IconBuilder} alt="Icon Supervisor" className="h-20 w-20 mt-6 ml-40"/>
                    </div>

                    <div className="flex flex-col mt-20 w-72 px-8 bg-white border-t-4 rounded-lg border-cyan-500 gap-2 p-3">
                        <h2 className="text-lg font-medium tracking-tighter">
                            Karma 
                        </h2>   
                        <p className="text-md tracking-tighter text-slate-500">
                            Regularly evaluates our talent to ensure quality.
                        </p>
                        <img src={IconKarma} alt="Icon Supervisor" className="h-20 w-20 mt-6 ml-40"/>
                    </div>
                </div>

            </div>
        </div>
    )
}