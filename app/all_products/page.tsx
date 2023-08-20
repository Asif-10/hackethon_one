import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Image as IImage } from "sanity";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

export const getProducts = async ()=>{
  const res = await client.fetch(`
  *[_type == "products"] {
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


export default async function Main() {

 const data:IProducts[]= await getProducts();

  return (
    <>
   

    
    <div>
      {
        data.map((e)=>(
         <div key={e._id}>
          <Link href={`/all_products/${e._id}`}>
          <Image
          width={300}
          height={300}
          src={urlForImage(e.image).url()} alt="Product Image"/>
          {e.name}
          {e.price}
          {e.category.name}
          </Link>
         </div>
        ))
      }
    </div>
    </>
  );
}
  