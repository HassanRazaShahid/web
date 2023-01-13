import star from '../images/Social-Proof-Section/icon-star.svg'
import ImgAnne from '../images/Social-Proof-Section/image-anne.jpg'
import ImgColton from '../images/Social-Proof-Section/image-colton.jpg'
import ImgIrene from '../images/Social-Proof-Section/image-irene.jpg'

export default function SocialProofSection(){
    return (
        <div className="flex flex-col">
            <h1 className='text-2xl font-serif justify-center mt-10 flex'>
                Social Proof Profile Section
            </h1>

            <div className="flex flex-col bg-slate-200 justify-between m-10 p-5 ">
                <div className="flex mt-10 ">

                    <div className="flex flex-col gap-5 ">
                        <h2 className='text-3xl tracking-tight w-1/2 text-violet-800 font-semibold '>
                            10,000+ of our users love our products.
                        </h2>
                        <p className='text-sm tracking-tight w-1/2'> 
                            We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">

                        <div className="flex h-4 gap-2 justify-between items-center bg-slate-300 p-5 rounded-md">
                            <img src={star} alt="star" className='' />
                            <img src={star} alt="star" className='' />
                            <img src={star} alt="star" className='' />
                            <img src={star} alt="star" className='' />
                            <img src={star} alt="star" className='' />

                            <p className='text-violet-800 font-medium tracking-tight'>
                                Rated 5 stars in reviews
                            </p>
                        </div>

                        <div className="flex h-4 gap-2 justify-between items-center bg-slate-300 p-5 rounded-md ">
                            <img src={star} alt="star" className='' />
                            <img src={star} alt="star" className='' />
                            <img src={star} alt="star" className='' />
                            <img src={star} alt="star" className='' />
                            <img src={star} alt="star" className='' />

                            <p className='text-violet-800 font-medium tracking-tight'>
                                Rated 5 stars in report
                            </p>
                        </div>

                        <div className="flex h-4 gap-2 justify-between items-center bg-slate-300 p-5 rounded-md ">
                            <img src={star} alt="star" className='' />
                            <img src={star} alt="star" className='' />
                            <img src={star} alt="star" className='' />
                            <img src={star} alt="star" className='' />
                            <img src={star} alt="star" className='' />

                            <p className='text-violet-800 font-medium tracking-tight'>
                                Rated 5 stars in product
                            </p>
                        </div>

                    </div>

                </div> 

                   <div className="flex gap-36 rounded-md p-10 items-center text-white">
                       
                        <div className="bg-violet-500 p-5">
                            <div className="flex gap-5 items-center">
                                <img src={ImgAnne} alt="" className='rounded-full h-16' />
                                <div className="">
                                    <h2 className='text-lg font-medium'>
                                        Elisa Bay
                                    </h2>
                                    <h3 className='text-sm font-semibold text-rose-700'>
                                        Verified Buyer
                                    </h3>
                                </div>
                           </div>
                            <p className='mt-3 tracking-tight font-medium'>
                                " We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we alos recieved it in time. Excellent ! "
                            </p>
                        </div>

                        <div className="bg-violet-500 p-5 mt-5">
                           <div className="flex gap-5 items-center">
                                <img src={ImgColton} alt="" className='rounded-full h-16'/>
                                <div className="">
                                    <h2 className='text-lg font-medium'>
                                        John Doe
                                    </h2>
                                    <h3 className='text-sm font-semibold text-rose-700'>
                                        Verified Buyer
                                    </h3>
                                </div>
                           </div>
                            <p className='mt-3 tracking-tight font-medium'>
                                " Customer service is always excellent and very wuick turn around. Completely delighted with the simplicity of purchase and speed of delivery. "
                            </p>
                        </div>

                        <div className="bg-violet-500 p-5 mt-10">
                            <div className="flex gap-5 items-center">
                                <img src={ImgIrene} alt="" className='rounded-full h-16'/>
                                <div className="">
                                    <h2 className='text-lg font-medium'>
                                        Mary Rose 
                                    </h2>
                                    <h3 className='text-sm font-semibold text-rose-700'>
                                        Verified Buyer
                                    </h3>
                                </div>
                           </div>
                            <p className='mt-3 tracking-tight font-medium'>
                                " Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recomend them to everyone ! "
                            </p>
                        </div>
                   </div>
            </div>

            
           
        </div>
    )
}