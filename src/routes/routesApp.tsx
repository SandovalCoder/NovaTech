import { Routes, Route } from "react-router-dom";
import Layout from "../app/Layout";
import Home from "../pages/home";
import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";
import AllProducts from "../components/AllProducts";
import Innovation from "../components/Innovation";
import Contact from "../components/Contact";

const RoutesApp = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/innovations" element={<Innovation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/registerform" element={<RegisterForm />} />
      </Route>
    </Routes>
  );
};

export default RoutesApp;
