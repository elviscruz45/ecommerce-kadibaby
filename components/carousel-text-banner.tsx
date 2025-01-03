"use client";
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

export const dataCarouselTop = [
  {
    id: 0,
    title: "Envíos a todo el Perú",
    description:
      "Se aplica un adicional para otras regiones. ¡Conoce más y aprovecha!",
    link: "#",
  },
  {
    id: 1,
    title: "Envíos gratuitos en Arequipa",
    description:
      "Disfruta de envíos sin costo en todos tus pedidos en Arequipa. ¡Conoce más y aprovecha!",
    link: "#",
  },
  {
    id: 2,
    title: "Entrega rápida en 24/48 h",
    description:
      "Recibe tus pedidos en tiempo récord y viste a tus pequeños sin esperar. ¡Descubre más y únete ahora!",
    link: "#!",
  },
  // {
  //   id: 2,
  //   title: "Consigue hasta un -25% en compras superiores a S/. 100",
  //   description:
  //     "Ahorra en grande: −20 % al gastar S/. 100 o −25 % al gastar S/. 150. Usa el código BABYSHOP.",
  //   link: "#",
  // },
  {
    id: 3,
    title: "Devoluciones ",
    description:
      "Disfruta de devoluciones sin costo durante 15 días en todos tus pedidos. ¡Conoce más y aprovecha!",
    link: "#",
  },

  // {
  //   id: 4,
  //   title: "Explora nuestras novedades",
  //   description:
  //     "Descubre las últimas colecciones con hasta un 50% de descuento. ¡No te lo pierdas!",
  //   link: "#",
  // },
];

const CarouselTextBanner = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-200 dark:bg-primary">
      <Carousel
        className="w-full max-w-4xl mx-auto"
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent>
          {dataCarouselTop.map(({ id, title, link, description }) => (
            <CarouselItem
              key={id}
              onClick={() => router.push(link)}
              className="cursor-pointer"
            >
              <div>
                <Card className="shadow-none border-none bg-transparent">
                  <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                    <p className="sm:text-lg text-wrap dark:text-secondary">
                      {title}
                    </p>
                    <p className="text-xs sm:text-sm text-wrap dark:text-secondary">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselTextBanner;
