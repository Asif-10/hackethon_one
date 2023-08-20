import { authMiddleware } from "@clerk/nextjs";
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
     try{
     const res = await db.insert(cartTable).values({
        product_id: req.product_id,
        quantity:1,
        user_id:req.userId
     }).returning();
     return NextResponse.json({res})
   }
    catch(error) {
      console.log(error);
      return NextResponse.json({message:"An Error Occured"})
      
    }
}
