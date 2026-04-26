import FeaturedProductGrid from "@/components/HomePage/FeaturedProductGrid/FeatureProductGrid";
import Hero from "@/components/HomePage/HeroSection/HeroSection";
import Highlights from "@/components/HomePage/Highlight/Highlight";
import Newsletter from "@/components/HomePage/Highlight/NewsLetter/Newsletter";

export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <FeaturedProductGrid></FeaturedProductGrid>
      <Highlights></Highlights>
      <Newsletter></Newsletter>
    </div>
  );
}
