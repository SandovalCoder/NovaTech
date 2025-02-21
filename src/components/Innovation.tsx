import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const innovations = [
  {
    id: 1,
    title: "Realidad Virtual Inmersiva",
    description: "Explora nuevos mundos con la última tecnología en VR.",
    image:
      "https://imascono.com/wp-content/uploads/2023/07/Realidad-virtual-inmersiva.jpg",
  },
  {
    id: 2,
    title: "Smart Home Integrado",
    description:
      "Controla tu hogar con dispositivos conectados y automatizados.",
    image:
      "https://albukairiyah.com/wp-content/uploads/2020/04/Home-Smart-Tech-1024x576.jpg",
  },
  {
    id: 3,
    title: "Coches Autónomos",
    description:
      "La movilidad del futuro está aquí con tecnología de conducción autónoma.",
    image:
      "https://quees.mobi/wp-content/uploads/2021/01/vehiculos-autonomos.jpg",
  },
  {
    id: 4,
    title: "Drones de Última Generación",
    description: "Captura imágenes y videos desde ángulos imposibles.",
    image:
      "https://img.freepik.com/fotos-premium/primer-plano-dron-ultima-generacion-accion-que-captura-su-precision-versatilidad_909576-940.jpg",
  },
];

const Innovation = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-2">Novedades</h2>
      <p className="text-center text-gray-600 mb-8">
        Aquí podrás ver las últimas innovaciones en tecnología, tendencias y
        avances que están marcando el futuro.
      </p>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {innovations.map((item) => (
          <Card key={item.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <img
                src={item.image}
                alt={item.title}
                className="mb-4 rounded-md object-cover w-full h-48"
              />
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button className="bg-sombrero hover:bg-sombrero/80 text-white">
                Ver Detalles
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Innovation;
