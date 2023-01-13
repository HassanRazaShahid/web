import SedanIcon from '../images/Three-Column/icon-sedans.svg'
import SUVIcon from '../images/Three-Column/icon-suvs.svg'
import LuxuryIcon from '../images/Three-Column/icon-luxury.svg'

export default function ThreeColumn(){
    return(
    <div className="">
        <h1 className='text-2xl font-serif justify-center mt-5 flex'>
            Three-Column
        </h1>
            <div class="container flex flex-row max-w-xl py-4 px-4 my-16 mx-auto">
                
            <div class="bg-orange-600">
                <img src={SedanIcon} alt="icon-sedans" class="p-2 m-2" />
                <h1 class="font-medium text-white p-3">
                    SEDANS
                </h1>
                <p class="text-white text-xs m-3 mb-3 font-medium">
                    Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or an your next road trip.
                </p>  
                <div class="mb-5">
                    <button class="bg-white py-2 hover:bg-orange-600 outline outline-white rounded-full font-medium m-4 p-3 text-xs">
                        Learn More
                    </button>
                </div>
            </div>
        
            <div class="bg-slate-600 ">
                <img src={SUVIcon} alt="icon-suvs" class="p-2 m-2" />
                <h1 class="font-medium text-white p-3">
                    SUV
                </h1>
                <p class="text-white text-xs m-3 mb-3 font-medium">
                    Take an SUV for its spacious interior,power and versatity. Perfect for your next family vacation and off-road adventure.
                </p>
                <div class="">
                    <button class="bg-white py-2 hover:bg-slate-600 outline outline-white font-medium m-4 p-3 rounded-full text-xs">
                        Learn More
                    </button>
                </div>
            </div>

            <div class="bg-green-700 ">
                <img src={LuxuryIcon} alt="icon-luxury" class="p-2 m-2" />
                <h1 class="font-medium text-white p-3 ">
                    LUXURY
                </h1>
                <p class="text-white text-xs m-3 mb-3 font-medium">
                    Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.
                </p>
                <div class="mb-4">
                <button class="bg-white py-2 hover:bg-green-700 outline outline-white font-medium m-4 p-3 rounded-full text-xs">
                    Learn More
                </button>
                </div>
            </div>
        </div>
    </div>
    )
}