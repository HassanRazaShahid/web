import CodeImage from '../images/QR-Code/image-qr-code.png'

export default function QrCode(){
    return(

        <div className="">
            <h1 className='text-2xl font-serif justify-center mt-5 flex'>
                QR-Code
            </h1>
        <div class="flex flex-col items-center p-2 rounded-md gap-4 mt-10 w-48 border shadow-lg mx-auto">
            <img src={CodeImage} alt="image-qr-code" class="w-full rounded-md" />

            <h2 class="flex flex-col text-sm font-medium text-center">
                Improve your front-end skills by building projects
            </h2>

            <p class="text-slate-600 text-xs text-center mb-2">
                Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.
            </p>
        </div> 
        </div>
    )
}