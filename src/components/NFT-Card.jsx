import EquilibriumImage from '../images/NFT-Card/image-equilibrium.jpg'
import AvatarImage from '../images/NFT-Card/image-avatar.png'

export default function NFTCard(){
    return(
        
    <div className="">
        <h1 className='text-2xl font-serif justify-center mt-5 flex'>
            NFT-Card
        </h1>

        <div class="flex flex-col bg-gradient-to-b from-blue-800 via-violet-800 to-purple-800  gap-3 rounded-md w-64 p-3 mx-auto my-10">
          

        <img src={EquilibriumImage} alt="image-equilibrium" class="h-44 object-cover rounded-md" />
    
        <h2 class="font-medium text-white">
            Equlibrium #3429
        </h2>
        <p class="text-white text-sm tracking-tight">
            Our equlibrium collection promotes balance and calm.
        </p>

        <div class="flex justify-between border-b py-3 border-slate-400">
            <div class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-cyan-400 fill-cyan-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                <span class="font-mono tracking-tightest text-cyan-400 lining-nums text-sm">0.041ETH</span>
            </div>

            <div class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5 stroke-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-white tracking-tight text-sm">3 days left</span>    
            </div>
        </div>

        <div class="flex justify-around items-center">
            <img src={AvatarImage} alt="image-avatar" class="w-10 justify-center" />
            <p class="text-white text-sm tracking-tight">Creation of Hassan Raza</p>
        </div>
        </div>
    </div>
    )
}
