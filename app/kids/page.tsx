import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Image as IImage} from "sanity";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

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

export default async function page() {
  
  const data:IProducts[]= await maleProducts();

  return (
   <div>

   {

data.map((e)=>(
  <div key={e._id}>
    <Link href={`/kids/${e._id}`}>
   <Image
   width={300}
   height={300}
   src={urlForImage(e.image).url()} alt="Product Image"/>
   {e.name}
   {e.price}
   </Link>
  </div>
 ))

   }

   </div>
  )
}
