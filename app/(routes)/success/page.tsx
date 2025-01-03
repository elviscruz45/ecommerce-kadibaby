"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PageSuccess = () => {
  const router = useRouter();

  return (
    <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
      <div className="flex flex-col-reverse gap-2 sm:flex-row">
        <div className="flex justify-center md:min-w-[400px]">
          <Image
            src="/success.jpg"
            alt="Success"
            width={250}
            height={500}
            className="rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl">¡Gracias por tu compra!</h1>
          <p className="my-3">
            En breve, nuestro equipo comenzará a preparar tu pedido con cuidado
            y dedicación, seleccionando las mejores prendas para tus pequeños.
            Mientras tanto, siéntate, relájate y piensa en lo bien que lucirán
            con su nueva ropa.
          </p>
          <p className="my-3">
            Gracias de nuevo por confiar en nosotros para vestir a tus pequeños
            con estilo y comodidad. ¡Estamos emocionados de que disfruten
            nuestra colección!
          </p>
          <p className="my-3">¡Hasta pronto!</p>

          <Button onClick={() => router.push("/")}>Volver a la tienda</Button>
        </div>
      </div>
    </div>
  );
};

export default PageSuccess;
