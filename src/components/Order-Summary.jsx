import HeroIcon from '../images/Order-Summary/illustration-hero.svg'
import IconMusic from '../images/Order-Summary/icon-music.svg'
export default function OrderSummary(){
    return(
<div className="">
    <h1 className='text-2xl font-serif justify-center mt-5 flex'>
        Order Summary
    </h1>

    <div class="container flex flex-col max-w-lg mt-4 shadow-md overflow-hidden gap-4 w-80 mb-5 mx-auto">
            <div class="w-full ">
                    <img src={HeroIcon} alt="illustration-hero" />
            </div>
            <div class="text-center">
                    <h2 class="font-extrabold text-cyan-900 text-lg">
                         Order Summary
                    </h2>
                    <p class="text-slate-600 font-medium text-sm tracking-tight">
                        You can now listen to millions of songs, audiobooks, and podcast on my device anywhere you like!
                    </p>
            </div>
            <div class="flex justify-between bg-slate-100 h-16 w-full rounded-md p-2 ">
                    <img src={IconMusic} alt="icon-music" class="" />
                <div class="flex flex-col">
                        <p class="text-cyan-900 font-bold">
                            Annual Plan
                        </p>
                        <p class="text-slate-500">
                            $59.99/year
                        </p>
                </div>  
                    <button class="text-blue-800 tracking-tighter font-medium underline">
                        Change
                    </button>
            </div>
            <div>
                    <button class="bg-blue-600 text-white p-2 text-sm w-80 ">
                        Proceed to Payment
                    </button>
            </div>
            <div class="text-center text-slate-500 font-medium mb-8 ">
                   <button>
                     Cancel Order
                    </button>
            </div>
                    
    </div>
</div>
    )
}
