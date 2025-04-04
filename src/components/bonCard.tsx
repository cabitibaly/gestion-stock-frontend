"use client";
import { Dot, Ellipsis, Eye, MapPin, Pen, Trash, User2 } from "lucide-react";
import Image from "next/image";
import StatutCommande from "./statutCommande";
import { BonType } from "@/types/bonType";
import { useEffect, useRef, useState } from "react";

interface Props {
    bonProps: BonType,    
    setIsopen: (isOpen: boolean) => void,
    isOpen: boolean
}

const BonCard = ({ bonProps, setIsopen, isOpen }: Props) => {
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
        <div onClick={() => setIsopen(!isOpen)} className="py-3 px-4 rounded-xl bg-fonce-400 w-full flex items-center justify-start flex-col gap-2">
            <div className='relative w-full flex items-center justify-between'>
                <span className='text-3xl text-white font-bold tracking-wide'>BC-{bonProps.id}</span>
                <div className='flex items-center justify-center gap-6'>
                    <span className='text-xl text-white font-bold tracking-wide'>{bonProps.montantCommande} FCFA</span>
                    <div className={`px-2.5 py-0 rounded-lg flex items-center justify-center gap-2 ${bonProps.statutPaiement === "Payé" ? "bg-vert" : "bg-rouge"}`}>                        
                        {
                            bonProps.statutPaiement === "Payé" ?
                                <Image src={"/wallet-check.png"} width={22} height={10} alt="wallet-check" /> :
                                <Image src={"/wallet-remove.png"} width={22} height={10} alt="wallet-remove" />
                        }
                        <span className='text-lg text-black font-semibold'>
                            {bonProps.statutPaiement === "Payé" ? "Payé" : "Impayé"}
                        </span>
                    </div>
                    <button ref={buttonRef} onClick={(e) => {setIsvisible(!isVisible); e.stopPropagation()}} className="cursor-pointer border border-gray-500 p-1 rounded-lg flex items-center justify-center">
                        <Ellipsis size={28} strokeWidth={2} className="stroke-gray-500" />
                    </button>
                    {   
                        isVisible &&
                        <div ref={menuRef} className='border border-gray-500 bg-fonce-400 z-30 absolute top-[2.75rem] right-0 rounded-xl w-1/6'>
                            <button onClick={() => setIsopen(!isOpen)} className='bg-fonce-transparent border-b border-gray-500 cursor-pointer px-3 py-1.5 rounded-t-xl w-full text-gray-50 text-lg font-semibold flex items-center justify-start gap-2 transition duration-200 ease-out hover:bg-fonce-200'>
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
            </div>                        
            <div className="self-start w-auto flex items-center justify-between">
                <div className="flex items-center justify-between gap-2">
                    <User2 size={24} strokeWidth={2} className="stroke-gray-500" />
                    <span className="text-base text-gray-500 font-medium">{bonProps.nomFournisseur} {bonProps.prenomFournisseur}</span>
                </div>
                <Dot size={30} strokeWidth={2} className="stroke-gray-500" />
                <div className="flex items-center justify-between gap-2">
                    <MapPin size={24} strokeWidth={2} className="stroke-gray-500" />
                    <span className="text-base text-gray-500 font-medium">{bonProps.adresseLivraison}</span>
                </div>
            </div>
            <div className='bg-fonce-200 w-full py-3 px-4 rounded-lg flex items-start justify-start flex-col gap-2'>
                <span className='text-xl text-white font-bold tracking-wide'>Commande créée, <span className='text-gray-500'>{bonProps.date.toLocaleDateString("fr-FR")}</span></span>
                <StatutCommande statutCommande={bonProps.statutCommande} />
            </div>
        </div>
    )
}

export default BonCard;
