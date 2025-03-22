import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

import Products from "@/types/Products";

const FeaturedProducts = () => {
  const filteredProducts = Products.filter((_, index) => index % 2 === 0).slice(0, 6);
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-4xl  font-bold text-center mb-8">
        Productos Destacados
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <img
                src={product.image}
                alt={product.name}
                className="mb-4 rounded-md object-cover w-full h-80"
              />
              <CardDescription>{product.description}</CardDescription>
              <p className="mt-2 text-xl font-bold text-gray-800">
                {product.price}
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full bg-orbita hover:bg-orbita/90 text-white text-lg ">Ver más</Button>
              </DialogTrigger>
              <DialogContent className="w-[95vw] max-w-[95vw] sm:max-w-[90vw] md:max-w-[800px] max-h-[90vh] overflow-y-auto p-4 sm:p-6 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                  {/* Sección de Imagen */}
                  <div className="relative h-48 sm:h-64 md:h-96 group">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="rounded-xl object-cover w-full h-full shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl" />
                  </div>

                  {/* Sección de Información */}
                  <div className="flex flex-col gap-4 sm:gap-6">
                    <DialogHeader className="space-y-2">
                      <DialogTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orbita to-green-400 bg-clip-text text-transparent">
                        {product.name}
                      </DialogTitle>
                      <DialogDescription className="text-base sm:text-lg text-gray-600">
                        {product.description}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 border-t border-b border-gray-100 py-4">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                        <Label className="text-gray-600 font-medium">Precio:</Label>
                        <p className="text-xl sm:text-2xl font-bold text-orbita">
                          {product.price}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                        <Label className="text-gray-600 font-medium">Categoría:</Label>
                        <span className="px-3 py-1 bg-orbita/10 text-orbita rounded-full text-sm font-medium">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    <DialogFooter className="mt-2 sm:mt-4">
                      <Button 
                        className="w-full bg-orbita hover:bg-orbita/90 text-white py-4 sm:py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                      >
                        Comprar Ahora
                      </Button>
                    </DialogFooter>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
