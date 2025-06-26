import Image from "next/image";
import Image1 from "../../../public/mobile_1ab715a6-0df6-45f3-a563-cb949883e34e.webp";
import Image2 from "../../../public/PC_ce16889c-6c88-439b-8105-c966ab315b35.webp";
import Content from "../content1/Content";
import Footer from "../footer/Footer";
import Header from "../header/Header";
const HomePage = () => {
  return (
    <>
      <Header />
      <div className="lg:hidden ">
        <Image alt="image" src={Image1} />
      </div>
      <div className="hidden lg:block mb-5">
        <Image alt="image" src={Image2} />
      </div>
      <Content />
      <Footer />
    </>
  );
};

export default HomePage;
