import Achievemnt from "@/components/home/Achievenent";
import Banner from "@/components/home/Banner";
import Brand from "@/components/home/Brand";
import BrandCards from "@/components/home/BrandCards";
import Quote from "@/components/home/Quote";
import Skills from "@/components/home/Skills";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Skills />
      <Quote />
      <Brand />
      <BrandCards />
      <Achievemnt />
      <Footer />
    </div>
  );
}
