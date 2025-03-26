"use client";
import { ProduitType } from "@/types/produits";
import { Dot, Ellipsis, Eye, Pen, Trash } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ProduitCard = (produitProps: ProduitType) => {
    const [isVisible, setIsvisible] = useState<boolean>(false)
    const menuRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handeClickOutSide = (event: MouseEvent) => {
            if(menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsvisible(false)
            }
        }

        document.addEventListener("mousedown", handeClickOutSide);

        return () => {
            document.removeEventListener("mousedown", handeClickOutSide);
        }

    }, [])

    return (
        <div className="relative p-2 rounded-xl bg-fonce-400 w-full flex items-center justify-start gap-4">
            <Image src={produitProps.image} height={10} width={80} alt="mac" className="rounded-xl" />
            <div className="w-auto flex items-start justify-start flex-col gap-1">
                <div className='max-w-[450px]'>
                    <p className="text-lg text-white font-semibold line-clamp-1">{produitProps.nomProduit}</p>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <span className="text-sm text-gray-500 font-semibold">{produitProps.categorie}</span>
                    <Dot size={25} strokeWidth={2} className="stroke-gray-500" />
                    <div className="flex items-center justify-between gap-2">
                        <Image src={"/product-service.png"} height={10} width={20} alt="produit-service" />
                        <div className="text-sm text-gray-500 font-semibold">
                            <span className="text-sm text-gray-500 font-semibold mr-2">Stock : </span>
                            <span className="text-sm text-gray-50 font-semibold">{produitProps.quantite} en stock</span>
                        </div>
                    </div> 
                    {   
                        produitProps.stockFaible &&  
                        <div className='flex'>
                            <Dot size={25} strokeWidth={2} className="stroke-gray-500" />
                            <div className="flex items-center justify-between gap-2">
                                <Image src={"/low.png"} height={10} width={20} alt="Faible" />                  
                                <span className="text-sm text-rouge font-semibold mr-2">Faible </span>                  
                            </div>
                        </div>
                    }
                </div>
            </div>
            <hr className='mx-4 border border-gray-600 h-11' />
            <div className="p-1.5 flex items-start justify-between flex-col gap-2">
                <span className="text-base text-gray-500 font-semibold tracking-wide">Prix de Vente</span>
                <span className="text-base text-gray-50 font-semibold tracking-wide">{produitProps.prixVente} FCFA</span>
            </div>
            <div className="ml-2 p-1.5 flex items-start justify-between flex-col gap-2">
                <span className="text-base text-gray-500 font-semibold tracking-wide">Prix d&apos;Achat</span>
                <span className="text-base text-gray-50 font-semibold tracking-wide">{produitProps.prixAchat} FCFA</span>
            </div>
            <button ref={menuRef} onClick={() => setIsvisible(!isVisible)} className="border border-gray-500 p-1 absolute right-2 rounded-lg flex items-center justify-center">
                <Ellipsis size={28} strokeWidth={2} className="stroke-gray-500" />
            </button>
            {   
                isVisible &&
                <div className='border border-gray-500 bg-fonce-400 z-30 absolute top-[4.5rem] right-2 rounded-xl w-1/6'>
                    <button className='bg-fonce-transparent border-b border-gray-500 cursor-pointer px-3 py-1.5 rounded-t-xl w-full text-gray-50 text-lg font-semibold flex items-center justify-start gap-2 transition duration-200 ease-out hover:bg-fonce-200'>
                        <Eye size={24} strokeWidth={1.5} className="stroke-green-400" />
                        Voir                                
                    </button>                                
                    <button className='bg-fonce-transparent border-b border-gray-500 cursor-pointer px-3 py-1.5 w-full text-gray-50 text-lg font-semibold flex items-center justify-start gap-2 transition duration-200 ease-out hover:bg-fonce-200'>
                        <Pen size={24} strokeWidth={1.5} className="stroke-blue-400" />
                        Modifier                                
                    </button>                                
                    <button className='bg-fonce-transparent cursor-pointer px-3 py-1.5 rounded-b-xl w-full text-gray-50 text-lg font-semibold flex items-center justify-start gap-2 transition duration-200 ease-out hover:bg-fonce-200'>
                        <Trash size={24} strokeWidth={1.5} className="stroke-red-400" />
                        Supprimer                               
                    </button>  
                </div>
            }
        </div>
    )
}

export default ProduitCard
