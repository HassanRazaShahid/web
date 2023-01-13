import { Route, Routes } from "react-router-dom";
import Components from "../components/Components";
import Home from "../components/Home";
import ProductCard from "../components/Product-Card";
import NFTCard from "../components/NFT-Card";
import QRCode from "../components/QR-Code";
import ThreeColumn from "../components/Three-Column";
import OrderSummary from "../components/Order-Summary";
import StatsPreviewCard from "../components/Stats-Preview-Card";
import FourCard from "../components/Four-Card";
import SocialProofSection from "../components/Social-Proof-Section";
import BaseApparel from "../components/Base-Apparel";
import FAQAccordion from "../components/Faq-Accordion";
import SinglePriceGrid from "../components/Single-Price-Grid";
import PingSingleColumn from "../components/Ping-Single-Column";

export default function Navigation() {
  return (
    <div>
        <Routes>
            <Route path="/">

              <Route index element={<Home />}></Route>

              <Route path="components">
                  <Route index element={<Components />} />
                  <Route path="product-card" element={<ProductCard />} />
                  <Route path="nft-card" element={<NFTCard />} />
                  <Route path="QR-Code" element={<QRCode />} />
                  <Route path="Three-Column" element={<ThreeColumn />} />
                  <Route path="Order-Summary" element={<OrderSummary />} />
                  <Route path="Stats-Preview-Card" element={<StatsPreviewCard/>} />
                  <Route path="Four-Card" element={<FourCard/>} />
                  <Route path="Social-Proof-Section" element={<SocialProofSection/>} />
                  <Route path="Base-Apparel" element={<BaseApparel/>} />
                  <Route path="FAQ-Accordion" element={<FAQAccordion/>} />
                  <Route path="Single-Price-Grid" element={<SinglePriceGrid/>} />
                  <Route path="Ping-Single-Column" element={<PingSingleColumn/>} />
              </Route>

            </Route>

        </Routes>
    </div>
  );
}