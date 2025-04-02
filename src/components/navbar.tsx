"use client";
import Image from "next/image"
import { Bell, ChevronDown, LayoutDashboard, Package, PackageOpen, ReceiptText, Settings, ShoppingCart, User2 } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation";


const Navbar = () => {
    const pathname = usePathname(); 

    return (
        <nav className="w-full flex items-center justify-between">
            <Image src={"/powertech.png"} height={"10"} width={"200"} alt="logo-powertech" />
            <ul className="flex items-center justify-between gap-8">
                <li className={`rounded-full group transition-all duration-200 ease-in-out hover:bg-fonce-200 hover:border-transparent ${pathname === "/" ? "bg-fonce-200" : "border border-gray-600" }`}>
                    <Link href={"/"} className="py-2 px-4 flex items-center justify-center gap-2">
                        <LayoutDashboard size={20} strokeWidth={2} className={`transition delay-200 ease-in-out group-hover:stroke-vert ${pathname === "/" ? "stroke-vert" : "stroke-gray-600"}`} />
                        <span className={`text-sm font-semibold transition delay-200 ease-in-out group-hover:text-white ${pathname === "/" ? "text-white" : "text-gray-600"}`}>Dashboard</span>
                    </Link>                    
                </li>
                <li className={`rounded-full group transition-all duration-200 ease-in-out hover:bg-fonce-200 hover:border-transparent ${pathname === "/inventaire" ? "bg-fonce-200" : "border border-gray-600" }`}>
                    <Link href={"/inventaire"} className="py-2 px-4 flex items-center justify-center gap-2">
                        <Package size={20} strokeWidth={2} className={`transition delay-200 ease-in-out group-hover:stroke-vert ${pathname === "/inventaire" ? "stroke-vert" : "stroke-gray-600"}`} />
                        <span className={`text-sm font-semibold transition delay-200 ease-in-out group-hover:text-white ${pathname === "/inventaire" ? "text-white" : "text-gray-600"}`}>Inventaire</span>
                    </Link>
                </li>
                <li className={`relative rounded-full group transition-all duration-200 ease-in-out hover:bg-fonce-200 hover:border-transparent ${pathname === "/vente" ? "bg-fonce-200" : "border border-gray-600" }`}>
                    <Link href={"/vente"} className="py-2 px-4 flex items-center justify-center gap-2">
                        <ShoppingCart size={20} strokeWidth={2} className={`transition delay-200 ease-in-out group-hover:stroke-vert ${pathname === "/vente" ? "stroke-vert" : "stroke-gray-600"}`} />
                        <span className={`text-sm font-semibold transition delay-200 ease-in-out group-hover:text-white ${pathname === "/vente" ? "text-white" : "text-gray-600"}`}>Vente</span>    
                        <ChevronDown size={20} strokeWidth={2} className={`transition delay-200 duration-100 ease-in-out group-hover:stroke-white group-hover:rotate-180 ${pathname === "/vente" ? "stroke-white" : "stroke-gray-600"} mr-1`} />                
                    </Link>
                    <div className={`absolute top-10 rounded-full group hidden transition-all duration-200 ease-linear group-hover:flex group-hover:opacity-100 hover:bg-fonce-200 hover:border-transparent ${pathname === "/client" ? "bg-fonce-200" : "border border-gray-600" }`}>
                        <Link href={"/client"} className="py-2 px-4 flex items-center justify-center gap-2">
                            <User2 size={20} strokeWidth={2} className={`transition delay-200 ease-in-out group-hover:stroke-vert ${pathname === "/client" ? "stroke-vert" : "stroke-gray-600"}`} />
                            <span className={`text-sm font-semibold transition delay-200 ease-in-out group-hover:text-white ${pathname === "/client" ? "text-white" : "text-gray-600"}`}>Client</span>                            
                        </Link>
                    </div>                    
                </li>
                <li className={`rounded-full group transition-all duration-200 ease-in-out hover:bg-fonce-200 hover:border-transparent ${pathname === "/bon-commande" ? "bg-fonce-200" : "border border-gray-600" }`}>
                    <Link href={"/bon-commande"} className="py-2 px-4 flex items-center justify-center gap-2">
                        <PackageOpen size={20} strokeWidth={2} className={`transition delay-200 ease-in-out group-hover:stroke-vert ${pathname === "/bon-commande" ? "stroke-vert" : "stroke-gray-600"}`} />
                        <span className={`text-sm font-semibold transition delay-200 ease-in-out group-hover:text-white ${pathname === "/bon-commande" ? "text-white" : "text-gray-600"}`}>Bon de commande</span>
                        <ChevronDown size={20} strokeWidth={2} className={`transition delay-200 duration-100 ease-in-out group-hover:stroke-white group-hover:rotate-180 ${pathname === "/bon-commande" ? "stroke-white" : "stroke-gray-600"} mr-1`} />                
                    </Link>
                </li>
                <li className={`rounded-full group transition-all duration-200 ease-in-out hover:bg-fonce-200 hover:border-transparent ${pathname === "/factures" ? "bg-fonce-200" : "border border-gray-600" }`}>
                    <Link href={"/factures"} className="py-2 px-4 flex items-center justify-center gap-2">
                        <ReceiptText size={20} strokeWidth={2} className={`transition delay-200 ease-in-out group-hover:stroke-vert ${pathname === "/factures" ? "stroke-vert" : "stroke-gray-600"}`} />
                        <span className={`text-sm font-semibold transition delay-200 ease-in-out group-hover:text-white ${pathname === "/factures" ? "text-white" : "text-gray-600"}`}>Factures</span>
                    </Link>
                </li>
            </ul>
            <div className="flex items-center justify-between gap-4">
                <Link href={"/parametres"} className="bg-fonce-400 p-2 rounded-full flex items-center justify-center">
                    <Settings size={20} strokeWidth={2} className="stroke-gray-200" />
                </Link>
                <button className="cursor-pointer relative bg-fonce-400 p-2 rounded-full flex items-center justify-center after:absolute after:top-2 after:right-3 after:h-1.5 after:w-1.5 after:rounded-full after:bg-green-300">
                    <Bell size={20} strokeWidth={2} className="stroke-gray-200" />
                </button>
                <Link href={"/parametres"} className="bg-fonce-400 p-2 rounded-full flex items-center justify-center">
                    <User2 size={20} strokeWidth={2} className="stroke-gray-200" />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
