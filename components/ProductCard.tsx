"use client"
import { authMiddleware, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "./ui/button";
import { urlForImage } from "@/sanity/lib/image";
import { FC } from "react";


export const ProductCard:FC<{item:any}>= ({item}) =>{
  const {userId}= useAuth()
 /* const handleAddToCart = async ()=>{

   

    const res = await fetch("/api/cart",{
        method:"POST",
        body:JSON.stringify({
            product_id: item._id,
            userId
        })
    })
    const result =await res.json()
  }
  */

    return (
        <>
        <Image
        width={300}
        height={300}
        src={urlForImage(item.image).url()} alt="Product Image"/>
        {item.name}
        {item.price}
        
        </>
    )
}
