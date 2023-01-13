import { Link } from "react-router-dom";

export default function Components(){
    return(
        <div className="p-5 flex flex-col gap-2 mt-5">
            <h1 className="text-2xl font-medium text-blue-600">
                Components
            </h1>

            <div className="flex flex-col gap-1 text-lg ">
                <Link to="./product-card" className="hover:text-blue-500">Product Card</Link>
                <Link to="./nft-card" className="hover:text-blue-500">NFT Card</Link>
                <Link to="./qr-code" className="hover:text-blue-500">QR Code</Link>
                <Link to="./three-column" className="hover:text-blue-500">Three Column</Link>
                <Link to="./order-summary" className="hover:text-blue-500">Order Summary</Link>
                <Link to="./stats-preview-card" className="hover:text-blue-500">Stats Preview Card</Link>
                <Link to="./four-card" className="hover:text-blue-500">Four Card Feature Section </Link>
                <Link to="./social-proof-section" className="hover:text-blue-500">Social Proof Profile Section </Link>
                <Link to="./base-apparel" className="hover:text-blue-500">Base Apparel Coming Soon Page</Link>
                <Link to="./Faq-Accordion" className="hover:text-blue-500">FAQ Accordion Card</Link>
                <Link to="./Single-Price-Grid" className="hover:text-blue-500">Single Price Grid Component</Link>
                <Link to="./Ping-Single-Column" className="hover:text-blue-500">Ping Single Column Coming Soon Page</Link>
            </div>
        </div>
    )
}