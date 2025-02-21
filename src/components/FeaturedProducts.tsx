import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const products = [
  {
    id: 1,
    name: "Apple iPhone 14",
    description: "Innovador smartphone con rendimiento excepcional.",
    image:
      "https://manofmany.com/wp-content/uploads/2022/09/iPhone-14-pro-Max-1200x900.jpg",
    price: "S/ 4,499",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    description: "Smartphone de alta gama con cámara revolucionaria.",
    image:
      "https://www.androidauthority.com/wp-content/uploads/2023/01/samsung-galaxy-s23-lineup-standing.jpg",
    price: "S/ 3,999",
  },
  {
    id: 3,
    name: "Sony Bravia 4K TV",
    description: "Televisor 4K para una experiencia visual inmersiva.",
    image:
      "https://www.worten.pt/i/5e71c13603c78c375656a572232eb1ee7a28ecb1.jpg",
    price: "S/ 5,999",
  },
  {
    id: 4,
    name: "Dell XPS 15",
    description: "Laptop premium con rendimiento profesional.",
    image:
      "https://cdn.mos.cms.futurecdn.net/5PxxHa4jXrwmGdKZpTWuZi-1200-80.jpg",
    price: "S/ 6,499",
  },
  {
    id: 5,
    name: "Apple AirPods Pro",
    description: "Auriculares inalámbricos con cancelación de ruido activa.",
    image:
      "https://macmagazine.com.br/wp-content/uploads/2022/09/Apple-AirPods-Pro-2nd-gen-hero-220907.jpg",
    price: "S/ 1,299",
  },
  {
    id: 6,
    name: "Apple iPad Pro",
    description: "Tablet potente para productividad y entretenimiento.",
    image:
      "https://s.yimg.com/os/creatr-uploaded-images/2021-05/96cfbee2-b84a-11eb-9ffe-69eb1ae41eb7",
    price: "S/ 3,499",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Productos Destacados
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <img
                src={product.image}
                alt={product.name}
                className="mb-4 rounded-md object-cover w-full h-48"
              />
              <CardDescription>{product.description}</CardDescription>
              <p className="mt-2 text-xl font-bold text-gray-800">
                {product.price}
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button className="bg-sombrero hover:bg-sombrero/80 text-white">
                Ver más
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
