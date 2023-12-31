"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Image as IImage } from "sanity";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { Button } from "@/components/ui/button";
import Link from "next/link";



 
const getProducts = async () => {
  const res = await client.fetch(`*[_type=="products"]{
    image, 
    _id,
  }`);
  return res;
};

interface IProduct {
  image: IImage;
  _id: string;
}

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );

  const [data, setData] = React.useState<IProduct[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const products: IProduct[] = await getProducts();
      setData(products);
    };
    fetchData();
  }, []);

  // Calculate the total price using Redux data
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  
   
  return (
    <div className="container mx-auto mt-8">
      {cartItems.length === 0 ? (
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-semibold">Your Cart is Empty</h2>
          <p className="text-gray-500">
            Add some items to your cart to see them here.
          </p>
        </div>
      ) : (
        <>
          <h2 className="mb-4 text-2xl font-semibold">Your Cart</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {cartItems.map((item) => {
              const product = data.find((p) => p._id === item.id);
              return (
                product && (
                  <div
                    key={item.id}
                    className="p-4 bg-white rounded-md shadow-md"
                  >
                    <div className="mb-4">
                      <Image
                        src={urlForImage(product.image).url()}
                        alt={item.name}
                        height={150}
                        width={150}
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                )
              );
            })}
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Receipt</h2>
            <div className="p-4 bg-white rounded-md shadow-md">
              <p>Total Quantity: {totalQuantity}</p>
              <p>Total Price: ${totalPrice.toFixed(2)}</p>
            </div>
          </div>
          <div>
            <Link href={"/checkout"}>
            <Button>Process to checkout</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;