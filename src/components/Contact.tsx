import React from "react";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import Logo from "../assets/Logo.png";
import { Textarea } from "../components/ui/textarea";

function Contact() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Columna Izquierda: Logo + Formulario */}
      <div className="flex flex-col gap-4 p-6 md:p-10 bg-background">
        {/* Logo */}
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-auto items-center justify-center rounded-md">
              <img src={Logo} alt="logo" className="h-8 w-auto" />
            </div>
            NovaTech
          </a>
        </div>

        {/* Formulario de Contacto */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Columna Derecha: Imagen */}
      <div className="relative hidden bg-muted lg:block">
        <img
          src="https://3.bp.blogspot.com/-gZKCPgjRfro/V_XC9K5Ul8I/AAAAAAAAAl4/C6ulu8lLaQgKrNqH_qvAqAOxD7_gTXChQCLcB/s1600/181407018.jpg"
          alt="Contact Background"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}

function ContactForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      {/* Encabezado */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-bold">Contáctanos</h1>
        <p className="text-sm text-muted-foreground">
          Llena el formulario y nos pondremos en contacto contigo a la brevedad.
        </p>
      </div>

      {/* Campos del Formulario */}
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name">Nombre</Label>
          <Input id="name" type="text" placeholder="Tu Nombre" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@ejemplo.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="subject">Asunto</Label>
          <Input id="subject" type="text" placeholder="Asunto" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Mensaje</Label>
          <Textarea
            id="message"
            placeholder="Escribe tu mensaje aquí..."
            className="resize-none rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            rows={4}
            required
          />
        </div>

        {/* Botón de Envío */}
        <Button
          type="submit"
          className="w-full bg-sombrero text-white hover:bg-sombrero/80"
        >
          Enviar Mensaje
        </Button>
      </div>

      <div className="text-center text-sm">
        ¿Tienes alguna consulta adicional? Escríbenos y te responderemos pronto.
      </div>
    </form>
  );
}

export default Contact;
