import { Navbar } from "../components/homepage-component/Navbar";
import Carousel from "../components/homepage-component/Carousel";
import Destinations from "../components/homepage-component/Destinations";
import Featured from "../components/homepage-component/Featured";
import Trending from "../components/homepage-component/Trending";

export const HomePage = () => {
   return (
      <>
         <Navbar />
         <Carousel />
         <Destinations />
         <Trending />
         <Featured />
      </>
   );
};
