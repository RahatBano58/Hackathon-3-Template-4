import HeroSection from "./components/Hero";  // Ensure the file name is correct
import FeaturedProducts from "./components/FeaturedProducts";
import LatestBlog from "./components/LatestBlog"; 
import LatestProducts from "./components/LatestProducts";
import TrendingProducts from "./components/TrendingProduct";
import Th from "./components/TrendingTh";
import DiscountItems from "./components/Discount";
import UniqueFeature from "./components/UniqueFeatures";
import Offers from "./components/Offers";
import TopCategory from "./components/TopCategory";
import ShopexOffer from "./components/ShopexOffer";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <UniqueFeature/>
      <LatestProducts />
      <ShopexOffer/>
      <DiscountItems />
      <TopCategory/>
      <Offers />
      <TrendingProducts />
      <Th />
      <LatestBlog /> 
      
    </div>
  );
}
