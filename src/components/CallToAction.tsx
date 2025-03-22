import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden text-black py-24">
      <div className="container mx-auto px-4">
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-6  md:text-xl lg:text-6xl">
            ¿Listo para transformar<br />
            tu experiencia tecnológica?
          </h2>
          
          <p className="mb-10 text-lg  max-w-2xl mx-auto md:text-xl">
            Únete a nosotros y descubre productos que te conectarán con el futuro digital.
          </p>

          <Button 
            size="lg"
            className="bg-orbita text-white hover:bg-orbita/90 hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all transform hover:scale-105 shadow-2xl"
          >
            ¡Comienza Ahora!
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;