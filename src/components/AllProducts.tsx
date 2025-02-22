import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Simulación de productos reales
const products = [
  {
    id: 1,
    name: "Apple iPhone 14",
    category: "celular",
    description: "Smartphone innovador con cámara avanzada.",
    image:
      "https://manofmany.com/wp-content/uploads/2022/09/iPhone-14-pro-Max-1200x900.jpg",
    price: "S/ 4,499",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    category: "celular",
    description: "Smartphone de alta gama con diseño moderno.",
    image:
      "https://www.androidauthority.com/wp-content/uploads/2023/01/samsung-galaxy-s23-lineup-standing.jpg",
    price: "S/ 3,999",
  },
  {
    id: 3,
    name: "Dell XPS 15",
    category: "laptop",
    description: "Laptop premium para profesionales creativos.",
    image:
      "https://cdn.mos.cms.futurecdn.net/5PxxHa4jXrwmGdKZpTWuZi-1200-80.jpg",
    price: "S/ 6,499",
  },
  {
    id: 4,
    name: "Apple MacBook Pro",
    category: "laptop",
    description: "Máxima potencia y rendimiento en un diseño elegante.",
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/apple_mbp_14_sg_24_14_2_macbook_pro_with_1668224.jpg",
    price: "S/ 8,999",
  },
  {
    id: 5,
    name: "Sony Bravia 4K TV",
    category: "televisor",
    description: "Televisor 4K para una experiencia visual inigualable.",
    image:
      "https://www.worten.pt/i/5e71c13603c78c375656a572232eb1ee7a28ecb1.jpg",
    price: "S/ 5,999",
  },
  {
    id: 6,
    name: "LG OLED TV",
    category: "televisor",
    description: "Tecnología OLED para colores vibrantes y negros profundos.",
    image: "https://cdn.mos.cms.futurecdn.net/YkjkdYkHYMJ6Ju2CrRpvjA.jpg",
    price: "S/ 7,299",
  },
  {
    id: 7,
    name: "Sony WH-1000XM4",
    category: "audifonos",
    description:
      "Audifonos de alta calidad con tecnología de alto rendimiento.",
    image:
      "https://images.idgesg.net/images/article/2020/09/5j0a0247_final-100857111-orig.jpg",
    price: "S/ 2,999",
  },
];

const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Componente interno para listar productos según la categoría y paginar
  const ProductList = ({ category }: { category: string }) => {
    const filteredProducts =
      category === "todos"
        ? products
        : products.filter((p) => p.category === category);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = filteredProducts.slice(
      startIndex,
      startIndex + itemsPerPage
    );

    return (
      <>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {currentProducts.map((product) => (
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
                  Comprar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {totalPages > 1 && (
          <Pagination className="mt-8 flex justify-center items-center">
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            />
            <PaginationContent className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem
                  key={i}
                  className={currentPage === i + 1 ? "active" : ""}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  <PaginationLink>{i + 1}</PaginationLink>
                </PaginationItem>
              ))}
            </PaginationContent>
            <PaginationNext
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            />
          </Pagination>
        )}
      </>
    );
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <Tabs
        defaultValue="todos"
        onValueChange={() => setCurrentPage(1)} // Reinicia la paginación al cambiar de pestaña
      >
        <TabsList className="mb-8">
          <TabsTrigger value="todos">Todos</TabsTrigger>
          <TabsTrigger value="laptop">Laptops</TabsTrigger>
          <TabsTrigger value="celular">Celulares</TabsTrigger>
          <TabsTrigger value="televisor">Televisores</TabsTrigger>
        </TabsList>
        <TabsContent value="todos">
          <ProductList category="todos" />
        </TabsContent>
        <TabsContent value="laptop">
          <ProductList category="laptop" />
        </TabsContent>
        <TabsContent value="celular">
          <ProductList category="celular" />
        </TabsContent>
        <TabsContent value="televisor">
          <ProductList category="televisor" />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default AllProducts;
