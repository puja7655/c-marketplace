'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css"
import { GlobalContextProvider } from "../Context/store";

const navLinks = [
    { name: 'MarketPlace', href: "/product-list" },
    { name: 'Cart', href: "/cart" },
]

export default function MartketPlaceLayout({ children }:
    {
        children: React.ReactNode
    }) {
        const pathName=usePathname();//it gives the current URL
    return (
        <div>
            {navLinks.map((link) => {
                const isActive=pathName.startsWith(link.href)
                return (
                    <Link 
                    className={isActive?"font-bold mr-4":"text-blue-500 mr-4"}
                    href={link.href} 
                    key={link.name}>{link.name}</Link>
                )
            })}
            <GlobalContextProvider>{children}</GlobalContextProvider>
        </div>

    )
}