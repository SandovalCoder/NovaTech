import { Button } from "../components/ui/button";

const CallToAction = () => {
  return (
    <section className="container mx-auto px-4 py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">
        ¿Listo para transformar tu experiencia tecnológica?
      </h2>
      <p className="mb-8">
        Únete a nosotros y descubre productos que te conectarán con el futuro.
      </p>
      <Button className="bg-sombrero text-white hover:bg-sombrero/80">
        ¡Comienza Ahora!
      </Button>
    </section>
  );
};

export default CallToAction;
