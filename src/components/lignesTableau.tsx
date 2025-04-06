"use client";

import { Ellipsis, Eye, Pen, Trash } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const LignesTableau = () => {
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
        <tr className="bg-fonce-800 border-b border-gray-700 transition duration-300 ease-in hover:bg-fonce-400">
            <th scope="row" className="px-6 py-4 font-medium text-gray-50 whitespace-nowrap">
                2025-01
            </th>
            <td scope="row" className="flex items-center gap-2 px-6 py-3 text-gray-50 font-medium whitespace-nowrap">
                <Image src="/zoro.jpg" alt="Zoro" width={35} height={30} className="rounded-full" />
                <span>Roronoa Zoro</span>  
            </td>
            <td className="px-6 py-4 text-gray-50 font-medium">
                06/04/2025
            </td>
            <td className="px-6 py-4 text-gray-50 font-medium">
                10/04/2025
            </td>
            <td className="px-6 py-4 text-gray-50 font-medium">
                1 630 000FCFA
            </td>
            <td className="relative px-6 py-4 text-gray-50 font-medium">
                <button ref={buttonRef} onClick={(e) => {setIsvisible(!isVisible); e.stopPropagation()}} className="cursor-pointer border border-transparent p-1 rounded-lg flex items-center justify-center transition duration-200 ease-in-out group hover:border-gray-500">
                    <Ellipsis size={24} strokeWidth={2} className="stroke-gray-500 transition-all duration-200 ease-linear group-hover:stroke-gray-50" />
                </button>   
                {   
                    isVisible &&
                    <div ref={menuRef} className='border border-gray-500 bg-fonce-600 z-30 absolute top-[3.5rem] right-14 rounded-xl w-40'>
                        <button className='bg-fonce-transparent border-b border-gray-500 cursor-pointer px-3 py-1.5 rounded-t-xl w-full text-gray-50 text-lg font-semibold flex items-center justify-start gap-4 transition duration-200 ease-out hover:bg-fonce-200'>
                            <Eye size={24} strokeWidth={1.5} className="stroke-green-400" />
                            Voir                                
                        </button>                                
                        <button className='bg-fonce-transparent border-b border-gray-500 cursor-pointer px-3 py-1.5 w-full text-gray-50 text-lg font-semibold flex items-center justify-start gap-4 transition duration-200 ease-out hover:bg-fonce-200'>
                            <Pen size={24} strokeWidth={1.5} className="stroke-blue-400" />
                            Modifier                                
                        </button>                                
                        <button className='bg-fonce-transparent cursor-pointer px-3 py-1.5 rounded-b-xl w-full text-gray-50 text-lg font-semibold flex items-center justify-start gap-4 transition duration-200 ease-out hover:bg-fonce-200'>
                            <Trash size={24} strokeWidth={1.5} className="stroke-red-400" />
                            Supprimer                               
                        </button>  
                    </div>
                }                                 
            </td>
        </tr>
    )
}

export default LignesTableau
