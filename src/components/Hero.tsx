import { Button } from "@/components/ui/button";
const Hero = () => {
  return (
    <section className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto sm:px-6 p-8 md:flex-row">
      {/* Sección de texto */}
      <div className="flex flex-col justify-center py-5 md:w-1/2 md:pr-10">
        <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
          ¡Descubre la revolución digital!
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Sumérgete en un universo de innovación y descubre dispositivos que
          redefinen la experiencia digital: smartphones, laptops y televisores
          de última generación.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row">
          <Button className="bg-sombrero hover:bg-sombrero/95 text-white px-6 py-3 rounded-md shadow-md">
            Explorar
          </Button>
          <Button className="mt-4 sm:mt-0 sm:ml-4 bg-gray-200 hover:bg-orbita text-gray-800 px-6 py-3 rounded-md shadow-md">
            Comprar Ahora
          </Button>
        </div>
      </div>
      {/* Sección de imagen */}
      <div className="flex justify-center py-5 md:w-1/2">
        <img
          src="https://www.toracom.net/wp-content/uploads/2022/06/la-revolucion-digital-esta-aqui-3.png"
          alt="Dispositivos tecnológicos en acción"
          className="rounded-lg object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
