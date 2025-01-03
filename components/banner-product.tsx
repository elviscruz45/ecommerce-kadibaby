import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
  return (
    <>
      <div> </div>
      <div className="mt-4 text-center">
        <p>Sumérgete en un mundo de ternura </p>
        <div className="mt-10"> </div>
        <h3 className="text-2xl font-semibold"> </h3>

        <h4 className="mt-2 text-5xl font-extrabold upperce">Kadi Baby</h4>
        <div className="mt-10"> </div>

        <p className="my-2 text-lg">
          Descubre estilo y comodidad en cada prenda.
        </p>
        <div className="mt-10"> </div>

        <Link href="#" className={buttonVariants()}>
          Ver los productos
        </Link>
      </div>
      <div className="mt-10"> </div>

      <div className="h-[350px] bg-cover lg:h-[600px] bg-[url('/banner2.png')] bg-center mt-5" />
    </>
  );
};

export default BannerProduct;
