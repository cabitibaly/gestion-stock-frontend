"use client";
import { ClientType } from "@/types/clientType";
import { Ellipsis, Eye, Pen, Trash } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ClientCardProps {
    clientProps: ClientType,
    setIsopen: (isOpen: boolean) => void,
    isOpen: boolean
}

const ClientCard = ({setIsopen, isOpen, clientProps}: ClientCardProps) => {
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
        <div onClick={() =>setIsopen(!isOpen)} className="relative p-4 rounded-xl bg-fonce-400 w-full flex items-center justify-start gap-3">
            <Image src={clientProps.image} height={10} width={60} alt={clientProps.nom} className="rounded-full" />
            <div className="w-auto flex items-start justify-center gap-1">
                <div className='pr-8 border-r border-gray-500 w-[250px]'>
                    <p className="text-lg text-white font-semibold line-clamp-1">{clientProps.nom + " " + clientProps.prenom}</p>
                    <p className="text-sm text-gray-500 font-semibold line-clamp-1">{clientProps.source}</p>
                </div>                                               
            </div>
            <div className=" mx-8 w-auto flex items-start justify-center gap-1">
                <div className=''>
                    <p className="text-base text-gray-500 font-semibold line-clamp-1">Email</p>
                    <p className="text-ld text-gray-50 font-semibold line-clamp-1">{clientProps.email}</p>
                </div>                                               
            </div>
            <div className="mr-8 w-auto flex items-start justify-center gap-1">
                <div className=''>
                    <p className="text-base text-gray-500 font-semibold line-clamp-1">Téléphone</p>
                    <p className="text-ld text-gray-50 font-semibold line-clamp-1">{clientProps.telephone}</p>
                </div>                                               
            </div>
            <div className="mr-8 w-auto flex items-start justify-center gap-1">
                <div className=''>
                    <p className="text-base text-gray-500 font-semibold line-clamp-1">Créance</p>
                    <p className="text-ld text-gray-50 font-semibold line-clamp-1">{clientProps.creance} FCFA</p>
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
    )
}

export default ClientCard
