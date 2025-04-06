"use client";
import { FournisseurType } from "@/types/fournisseurType";
import { Box, Ellipsis, Eye, MapPin, Pen, Trash } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface FournisseurCardProps {
    fournisseur: FournisseurType,
    setIsopen: (isOpen: boolean) => void,
    isOpen: boolean
}

const FournisseurCard = ({ fournisseur, setIsopen, isOpen } : FournisseurCardProps) => {
    const [isVisible, setIsvisible] = useState<boolean>(false)
    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handeClickOutSide = (event: MouseEvent) => {
            if(
                buttonRef.current && !buttonRef.current.contains(event.target as Node) &&
                menuRef.current && !menuRef.current.contains(event.target as Node)
            ) {
                setIsvisible(false)
            }
        }

        if (isVisible) {
            document.addEventListener("mousedown", handeClickOutSide);
        } else {
            document.removeEventListener("mousedown", handeClickOutSide);
        }
        
        return () => {
            document.removeEventListener("mousedown", handeClickOutSide);
        }

    }, [isVisible])

    return (
        <div onClick={() =>setIsopen(!isOpen)} className="relative p-4 rounded-xl bg-fonce-400 w-full flex flex-col items-center justify-start gap-3">
            <div className="w-full flex items-center justify-start gap-3">
                <Image src={fournisseur.image} height={10} width={60} alt={fournisseur.nom} className="rounded-full" />
                <div className="w-auto flex items-start justify-center gap-1">
                    <div className='pr-8 border-r border-gray-500 w-[250px]'>
                        <p className="text-lg text-white font-semibold line-clamp-1">{fournisseur.nom + " " + fournisseur.prenom}</p>
                        <p className="text-sm text-gray-500 font-semibold line-clamp-1">Shikamaru Nara</p>
                    </div>                                               
                </div>
                <div className=" mx-8 w-auto flex items-start justify-center gap-1">
                    <div className=''>
                        <p className="text-base text-gray-500 font-semibold line-clamp-1">Email</p>
                        <p className="text-ld text-gray-50 font-semibold line-clamp-1">{fournisseur.email}</p>
                    </div>                                               
                </div>
                <div className="mr-8 w-auto flex items-start justify-center gap-1">
                    <div className=''>
                        <p className="text-base text-gray-500 font-semibold line-clamp-1">Téléphone</p>
                        <p className="text-ld text-gray-50 font-semibold line-clamp-1">{fournisseur.telephone}</p>
                    </div>                                               
                </div>
                <div className="mr-8 w-auto flex items-start justify-center gap-1">
                    <div className=''>
                        <p className="text-base text-gray-500 font-semibold line-clamp-1">Dette</p>
                        <p className="text-ld text-gray-50 font-semibold line-clamp-1">{fournisseur.dette} FCFA</p>
                    </div>                                               
                </div>
                <button ref={buttonRef} onClick={(e) => {setIsvisible(!isVisible); e.stopPropagation()}} className="cursor-pointer border border-gray-500 p-1 absolute right-2 rounded-lg flex items-center justify-center">
                    <Ellipsis size={28} strokeWidth={2} className="stroke-gray-500" />
                </button>
                {   
                    isVisible &&
                    <div ref={menuRef} className='border border-gray-500 bg-fonce-400 z-30 absolute top-[4.5rem] right-2 rounded-xl w-1/6'>
                        <button onClick={() =>setIsopen(!isOpen)} className='bg-fonce-transparent border-b border-gray-500 cursor-pointer px-3 py-1.5 rounded-t-xl w-full text-gray-50 text-lg font-semibold flex items-center justify-start gap-2 transition duration-200 ease-out hover:bg-fonce-200'>
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
            <div className="py-2 px-4 bg-fonce-200 rounded-lg w-full flex items-center justify-between">
                <div className="flex items-center justify-between gap-10">
                    <div className="flex items-center justify-between gap-2">
                        <MapPin size={22} strokeWidth={2} className="stroke-gray-500" />
                        <span className="text-base text-gray-50 font-medium">{fournisseur.adresse}</span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <Box size={22} strokeWidth={2} className="stroke-gray-500" />
                        <span className="text-base text-gray-50 font-medium">{fournisseur.nbProduits} produits</span>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <span className="text-base text-gray-50 font-medium mr-2">Statut : </span>
                    <div className={`px-2.5 py-0 rounded-lg flex items-center justify-center gap-2 ${fournisseur.estActive ? "bg-vert" : "bg-rouge"}`}>                                                                                
                        <span className='text-base text-black font-semibold'>
                            {fournisseur.estActive ? "Active" : "Inactive"}
                        </span>
                    </div>                    
                </div>
            </div>          
        </div>        
    )
}

export default FournisseurCard
