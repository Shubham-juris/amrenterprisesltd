import MarketAnalysis from "../components/stockmarket/MarketAnalysis";
import OurMisson from "../components/stockmarket/OurMisson";
import StockHeader from "../components/stockmarket/StockHeader";
import ImageGallery from "../components/stockmarket/ImageGallery";

export default function StockMarketPage() {
  return (
    <div>
      <StockHeader />
      <OurMisson />
      <MarketAnalysis />
      <ImageGallery />
    </div>
  );
}
