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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Innovations from "@/types/Innovations";


const Innovation = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-2">Novedades</h2>
      <p className="text-center text-gray-600 mb-8 mt-4">
        Aquí podrás ver las últimas innovaciones en tecnología, tendencias y
        avances que están marcando el futuro.
      </p>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {Innovations.map((item) => (
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-orbita hover:bg-orbita/90 text-white text-lg">
                    Más información
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-[95vw] max-w-[95vw] sm:max-w-[90vw] md:max-w-[800px] max-h-[90vh] overflow-y-auto p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50">
                  {item.details.map((detail) => (
                    <div key={detail.id} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                      {/* Sección de Imagen */}
                      <div className="relative h-48 sm:h-64 md:h-96 group">
                        <img
                          src={detail.image}
                          alt={detail.title}
                          className="rounded-xl object-cover w-full h-full shadow-lg transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Sección de Información */}
                      <div className="flex flex-col gap-4 sm:gap-6">
                        <DialogHeader className="space-y-2 sm:space-y-3">
                          <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-orbita to-green-400 bg-clip-text text-transparent">
                            {detail.title}
                          </DialogTitle>
                          <DialogDescription className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-2 sm:space-y-4">
                            <p>{detail.description}</p>
                          </DialogDescription>
                        </DialogHeader>
                      </div>
                    </div>
                  ))}
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Innovation;
