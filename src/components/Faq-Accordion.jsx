import FaqAccordion from '../images/FAQ-Accordion-Card/accordion-card.svg'

export default function FAQAccordion(){
    return(
        <div className="">
            <h1 className='text-2xl font-serif justify-center mt-5 flex'>
                FAQ-Accordion-Card
            </h1>

            <div className="container antialiased flex justify-center items-center ">
                <img src={FaqAccordion} alt="FAQ" className='w-96 h-80 ' />

                <div className="flex flex-col p-20">
                    <h2 className='font-bold text-2xl'>
                        FAQ
                    </h2>
                    <div className="border-b-2">
                        <div className="flex gap-2 justify-between items-center m-3 cursor-pointer">
                            <p className='tracking-tighter text-slate-500'>
                                How many team members can I invite ?
                            </p>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-slate-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                    <div className="border-b-2">
                        <div className="flex gap-2 cursor-pointer justify-between items-center m-3">
                            <p className='tracking-tighter text-slate-500'>
                                What is maximum file upload size ?
                            </p>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-slate-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                    <div className="border-b-2">
                        <div className="flex gap-2 cursor-pointer items-center m-3 justify-between">
                            <p className='tracking-tighter text-slate-500'>
                                How do I reset my password ?
                            </p>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-slate-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                    <div className="border-b-2">
                        <div className="flex gap-2 cursor-pointer items-center m-3 justify-between">
                            <p className='tracking-tighter text-slate-500'>
                                Can I cancel my subscription ?
                            </p>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-slate-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                    <div className="border-b-2">
                        <div className="flex gap-2 cursor-pointer items-center m-3 justify-between">
                            <p className='tracking-tighter text-slate-500'>
                                Do you provide additional support ?
                            </p>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-slate-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}