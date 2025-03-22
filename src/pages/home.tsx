
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Heros from "../components/Heros";
const home = () => {
  return (
    <div>
      <Heros />
      <FeaturedProducts />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default home;
