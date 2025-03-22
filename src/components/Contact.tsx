import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";


const Contact = () => {
  return (
    <section className="min-h-[600px] lg:h-[800px] flex items-center bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Form */}
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Envíanos un mensaje</h2>
            <p className="text-gray-600 mb-8">
              Completa el formulario y nuestro equipo te responderá lo antes posible.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo
                  </label>
                  <Input id="name" placeholder="Tu nombre" className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico
                  </label>
                  <Input id="email" type="email" placeholder="tu@email.com" className="w-full" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto
                </label>
                <Input id="subject" placeholder="¿En qué podemos ayudarte?" className="w-full" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <Textarea id="message" placeholder="Escribe tu mensaje aquí..." className="w-full min-h-[150px]" />
              </div>

              <Button className="w-full py-6 bg-orbita hover:bg-orbita/90 text-white text-lg">
                <Send className="mr-2 h-4 w-4" /> Enviar mensaje
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="relative">
            <div
              className="absolute inset-0 z-0 bg-gradient-to-r from-sombrero to-orbita"
            ></div>
            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col text-white">
              <h3 className="text-2xl font-bold mb-8">Información de contacto</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white/10 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Dirección</h4>
                    <p className="text-white/80">Av. Tecnología 123, Ciudad Tecnológica, CP 12345</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white/10 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Teléfono</h4>
                    <p className="text-white/80">+1 (51) 987-654-321</p>
                    <p className="text-white/80">+1 (51) 987-654-321</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white/10 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-white/80">info@novatech.com</p>
                    <p className="text-white/80">soporte@novatech.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white/10 p-3 rounded-full mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Horario de atención</h4>
                    <p className="text-white/80">Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                    <p className="text-white/80">Sábado: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <h4 className="font-medium mb-4">Síguenos</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Contact