import { authMiddleware } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import Cart from "./Cart";
import { UserButton, UserProfile } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";


export default function Navbar() {

 const {userId}= auth(); 

  return (
    <div className=" m-7 py-4 px-8 flex items-center justify-between">
      {/* Logo */}
      <Image src={"/Dine.webp"} alt="Image" width={150} height={100} />

      {/* Navigation Links */}
      <ul className="flex space-x-12">
        
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        {!userId && (
          <>
          <li>
          <Link href={"/sign-up"}>Sign-up</Link>
        </li>
        <li>
          <Link href={"/sign-in"}>Sign-in</Link>
        </li>  
          </>
        )}
         
         <li>
          <Link href={"/female"}>Female</Link>
        </li>
        <li>
          <Link href={"/male"}>Male</Link>
        </li>
        <li>
          <Link href={"/kids"}>Kids</Link>
        </li>
        <li>
          <Link href={"/all_products"}>All Products</Link>
        </li>
      </ul>

      {/* Search Input */}
      <Input className="w-30 h-6" placeholder="Search..." />

      {/* Cart Icon */}
     <Cart/>

     {/*User Profile Details*/}
      
      
     {/*Logout Button*/}
     <UserButton afterSignOutUrl="/"/>
    </div>
  ); 
}
 