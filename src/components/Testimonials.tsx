import {
  Card
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {  ChevronLeft, ChevronRight, Star } from "lucide-react";
import Testimonial from "@/types/Testimonial";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => setCurrent((prev) => (prev + 1) % Testimonial.length);
  const prev = () => setCurrent((prev) => (prev - 1 + Testimonial.length) % Testimonial.length);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [autoplay, current]);

  return (
    <section className="bg-gradient-to-r from-sombrero to-orbita text-white py-20">
      <div className="relative max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-white/80">
            Descubre por qué miles de clientes confían en nosotros
          </p>
        </div>

        <Card className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 border-0">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Sección de información del cliente */}
            <div className="md:w-1/3 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-blue-100/50">
                <img
                  src={Testimonial[current].image}
                  alt={Testimonial[current].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-xl mb-1 text-gray-900">
                {Testimonial[current].name}
              </h3>
              <p className="text-gray-600 mb-2">{Testimonial[current].role}</p>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Testimonial[current].rating 
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Sección de testimonio */}
            <div className="md:w-2/3 relative">
              <div className="absolute -top-4 -left-4 text-6xl text-blue-100 font-serif">“</div>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic relative z-10">
                {Testimonial[current].content}
              </p>
              <div className="absolute -bottom-4 -right-4 text-6xl text-blue-100 font-serif">”</div>
            </div>
          </div>
        </Card>

        {/* Controles de navegación */}
        <div className="flex justify-center mt-8 gap-3">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-gray-300"
            onClick={prev}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </Button>
          
          <div className="flex items-center gap-2">
            {Testimonial.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`w-3 h-3 p-0 rounded-full ${
                  index === current ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={() => {
                  setCurrent(index);
                  setAutoplay(false);
                }}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-gray-300"
            onClick={next}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;