import { Button } from "./ui/button"


const Heros = () => {
  return (
    <section className="bg-gradient-to-r from-sombrero to-orbita text-white min-h-[600px] lg:h-[700px] flex items-center">
    <div className="container mx-auto px-4 py-2 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold mb-6">
                ¡Descubre la revolución digital!
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white mb-8">
                Sumérgete en un universo de innovación y descubre dispositivos que
                redefinen la experiencia digital: smartphones, laptops y televisores
                de última generación.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button className="bg-sombrero hover:bg-sombrero/95 text-white text-md px-6 py-3 rounded-md shadow-md">
                    Explorar
                </Button>
                <Button className="mt-4 sm:mt-0 sm:ml-4 bg-white hover:bg-orbita hover:text-white text-gray-800 text-md px-6 py-3 rounded-md shadow-md">
                    Comprar Ahora
                </Button>
                </div>
            </div>
            <div className="order-1 md:order-2 mt-6 md:mt-0">
                <img
                src="https://www.toracom.net/wp-content/uploads/2022/06/la-revolucion-digital-esta-aqui-3.png"
                alt="Dispositivos tecnológicos en acción"
                className="w-full h-auto max-h-[400px] object-contain"
                />
            </div>
        </div>
    </div>
    </section>
  )
}

export default Heros