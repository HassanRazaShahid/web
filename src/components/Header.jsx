import { Link } from "react-router-dom";
import Logo from '../images/logo.jpg'

export default function Header(){
    return (
        <header className="flex gap-3 py-2 px-5 border-b items-center justify-around">

            <nav className="flex items-center gap-2">
                <img src={Logo} alt="favicon" className="w-12 h-12 rounded-full"/>
                <Link to="/" className="hover:text-blue-500 tracking-tight font-medium">
                    Web Dev
                </Link>
            </nav>

            <nav className="flex gap-2">
                <Link to="/components" className="hover:text-blue-500 tracking-tight font-medium">
                    Components
                </Link>
            </nav>

            <div className="flex shadow-xl">
                <input type="text" className="outline-none border-2 px-2 border-violet-500"/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 bg-violet-500 stroke-white p-2 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

            </div>

        </header>
    )
}