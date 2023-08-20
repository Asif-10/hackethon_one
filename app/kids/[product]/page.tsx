import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Image as IImage} from "sanity";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {FaPlus, FaMinus} from "react-icons/fa"
import AddToCart from "@/components/AddToCartButton";

export const maleProducts = async ()=>{
  const res = await client.fetch(`
  *[_type == "products" && category->name=="Kids"] {
    price,
    _id,
    name,
    description,
    image,
    category -> {
      name
    }
  }
`)
  return res;
}

interface IProducts {
  _id:string;
  name:string;
  description:string;
  price:number;
  image:IImage;
  category:{
    name:string;
  }
}



export default async function product({ params }: { params: { product: string } }) {

    const data: IProducts[] = await maleProducts();
    const product = data.find((i) => i._id === params.product);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <Image
      height={400}
      width={400}
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src={urlForImage(product?.image as IImage).url()}
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
          {product?.category.name}
        </h2>
        <h1 className="text-black text-3xl title-font font-bold mb-1">
          {product?.name}
        </h1>
        <p className="leading-relaxed">
          {product?.description} Lorem ipsum, dolor sit amet consectetur adipisicing
           elit. In fugiat, nostrum adipisci necessitatibus voluptates maxime dicta 
          o maxime quasi 
            .
        </p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
           
          
           </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3 text-black font-bold">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        {/*Quantity*/ }
        <div className="flex items-center ">
        <span className="mr-3 text-black font-bold">Quantity</span>
        <Button className="ml-10" >
            <FaMinus/>
            Less 
          </Button>
          <div className="mr-2 ml-2 scroll-m-20 text-bs font-semibold tracking-tight">
           1
          </div>
          <Button className="ml-10" >
            <FaPlus/>
            Add 
          </Button>
        </div>
        <div className="flex mt-16">
          <span className="title-font  text-2xl text-gray-900 font-bold">
            ${product?.price}
          </span>
          <Button className="ml-10" >
            <AddToCart item={product}/>
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
