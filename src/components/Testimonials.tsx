import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Juan Pérez",
    avatar: "https://i.pravatar.cc/50?img=1",
    testimonial:
      "La mejor experiencia de compra, productos de alta calidad y atención excepcional.",
  },
  {
    id: 2,
    name: "María López",
    avatar: "https://i.pravatar.cc/50?img=2",
    testimonial:
      "Me encanta la variedad y la innovación. Recomiendo NovaTech a todos.",
  },
  {
    id: 3,
    name: "Carlos Ramírez",
    avatar: "https://i.pravatar.cc/50?img=3",
    testimonial:
      "Un servicio al cliente impecable y tecnología de punta. ¡Estoy encantado!",
  },
];

const Testimonials = () => {
  return (
    <section className="container mx-auto px-4 py-12 ">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonios</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex items-center space-x-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-10 h-10 rounded-full"
              />
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                <Quote className="w-8 h-8 text-orbita mb-2" />
                <CardDescription className="text-center italic">
                  {item.testimonial}
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
