'use client'

import { useGlobalContext } from "@/app/Context/store";
import CartItem from "@/components/CartItem";
import Link from "next/link";

export default function Cart() {
  const { cartData } = useGlobalContext();
  return (
    <div>
      <div className="flex flex-row items-center justify-center space-x-10">
        <h1>Cart Summary</h1>
        <Link className={"mt-4 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"} href="/product-list">
          Back to Marketplace
        </Link>
      </div>
      {cartData.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
    </div>
  );
}