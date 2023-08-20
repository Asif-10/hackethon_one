"use client"
import { Button } from "./ui/button";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";



export default function Checkout() {
 
    const router = useRouter()
    const cartValue = useSelector(
      (state: RootState) => state.cart.totalQuantity
    );

  return (
    <Button onClick={()=>router.push("/cart")} variant="ghost" className="flex items-center">
        <ShoppingCartCheckoutIcon /> {cartValue}
      </Button>
  )
}
