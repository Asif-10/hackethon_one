/*
import { NextResponse, NextRequest } from "next/server";
import { cartTable, db } from "@/app/drizzle/drizle";
import {v4 as uuid} from "uuid";
import { cookies } from "next/headers";





export const GET = async (request: NextRequest) =>{
 
   try{

    const res =await db.select().from(cartTable);
    
    return NextResponse.json({res})

   } 
   catch(error){
      
    console.log(error);
      
    return NextResponse.json({message:"Something went wrong"})
      
   } 
}




export const POST = async (request: NextRequest) => {
   
    const req = await request.json();

   const uid = uuid()

   const setCookies = cookies();

   const user_id= cookies().get("user_id")

   if(!user_id){
     setCookies.set("user_id",uid)
   }

    try{
     const res = await db.insert(cartTable).values({
        product_id: req.product_id,
        quantity:1,
        user_id:cookies().get("user_id")?.value as string
     }).returning();
     return NextResponse.json({res})
   }
    catch(error) {
      console.log(error);
      return NextResponse.json({message:"An Error Occured"})
      
    }
}



*/ 


           //MALE PAGE.TSX FILE CODE
/*

import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Image as IImage} from "sanity";
import { urlForImage } from "@/sanity/lib/image";

export const maleProducts = async ()=>{
  const res = await client.fetch(`
  *[_type == "products" && category->name=="Male"] {
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
   <Image
   width={300}
   height={300}
   src={urlForImage(e.image).url()} alt="Product Image"/>
   {e.name}
   {e.price}
  </div>
 ))

   }

   </div>
  )
}


*/


