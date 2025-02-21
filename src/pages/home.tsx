import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

const home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default home;
