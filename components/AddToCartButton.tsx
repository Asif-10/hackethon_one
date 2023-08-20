"use client"   
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { cartActions } from "@/app/slices/cartSlice";





interface IProduct {
  name: string;
  price: number;
  _id: string;
}

const AddToCart: React.FC<{ item?: IProduct }> = ({ item = undefined }) => {
  const dispatch = useDispatch();

  const addItem = () => { 
    if (item) {
      const { name, price, _id } = item;

      dispatch(
        cartActions.addToCart({
          id: _id,
          name,
          price,
          quantity: 0,
          _id: undefined,
        })
      );
    } else {
      console.error("AddToCart: item prop is missing or undefined.");
    }
  };

  return (
    <div>
      <Button onClick={addItem}>Add to Cart</Button>
    </div>
  );
};

export default AddToCart;
