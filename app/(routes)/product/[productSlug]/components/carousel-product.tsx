/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface CarouselProductProps {
  images: any;
  // {
  //   data: {
  //     id: number;
  //     attributes: {
  //       url: string;
  //     };
  //   }[];
  // };
}

const CarouselProduct = (props: CarouselProductProps) => {
  const { images } = props;
  console.log("images", images);

  return (
    <div className="sm:px-16">
      <Carousel>
        <CarouselContent>
          {images.map((image: any) => (
            <CarouselItem key={image.id}>
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${
                  image?.formats?.large?.url ??
                  image?.formats?.medium?.url ??
                  image?.formats?.small?.url ??
                  image?.formats?.thumbnail?.url
                }`}
                alt="Image product"
                className="rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
