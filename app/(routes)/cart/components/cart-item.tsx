import ProductImageMinuature from "@/components/shared/product-image-miniature";
import ProductTasteOrigin from "@/components/shared/product-taste-origin";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";

interface CartItemProps {
  product: ProductType;
}

const CartItem = (props: CartItemProps) => {
  const { product } = props;
  const { removeItem } = useCart();

  return (
    <li className="flex py-6 border-b">
      <ProductImageMinuature
        slug={product.slug}
        url={`${process.env.NEXT_PUBLIC_BACKEND_URL}${
          product?.images[0]?.formats?.large?.url ??
          product?.images[0]?.formats?.medium?.url ??
          product?.images[0]?.formats?.small?.url ??
          product?.images[0]?.formats?.thumbnail?.url
        }`}
      />

      <div className="flex justify-between flex-1 px-6">
        <div>
          <h2 className="text-lg font-bold">{product.productName}</h2>
          {/* <p className="font-bold">{formatPrice(product.price)}</p> */}
          <p className="font-bold">S/. {product.price}</p>

          <ProductTasteOrigin taste={product.taste} origin={product.origin} />
        </div>
        <div>
          <button
            className={cn(
              "dark:text-black rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition"
            )}
          >
            <X size={20} onClick={() => removeItem(product.id)} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
