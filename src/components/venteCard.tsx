import { VenteType } from '@/types/vente'
import { CircleCheckBig, Dot, Ellipsis, Eye, MapPin, Pen, Trash, User2 } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

interface Props {
    venteProps: VenteType,
    setIsopen: (isOpen: boolean) => void,
    isOpen: boolean
}

const VenteCard = ({ venteProps, setIsopen, isOpen }: Props) => {
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
        <div className="py-3 px-4 rounded-xl bg-fonce-400 w-full flex items-center justify-start flex-col gap-2">
            <div className='relative w-full flex items-center justify-between'>
                <span className='text-3xl text-white font-bold tracking-wide'>VT-{venteProps.id}</span>
                <div className='flex items-center justify-center gap-6'>
                    <span className='text-xl text-white font-bold tracking-wide'>{venteProps.montantCommande} FCFA</span>
                    <div className={`px-2.5 py-0 rounded-lg flex items-center justify-center gap-2 ${venteProps.statutPaiement === "Payé" ? "bg-vert" : "bg-rouge"}`}>                        
                        {
                            venteProps.statutPaiement === "Payé" ?
                                <Image src={"/wallet-check.png"} width={22} height={10} alt="wallet-check" /> :
                                <Image src={"/wallet-remove.png"} width={22} height={10} alt="wallet-remove" />
                        }
                        <span className='text-lg text-black font-semibold'>
                            {venteProps.statutPaiement === "Payé" ? "Payé" : "Impayé"}
                        </span>
                    </div>
                    <button ref={buttonRef} onClick={() => setIsvisible(!isVisible)} className="cursor-pointer border border-gray-500 p-1 rounded-lg flex items-center justify-center">
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
                    <span className="text-base text-gray-500 font-medium">{venteProps.nomClinet} {venteProps.prenomClinet}</span>
                </div>
                <Dot size={30} strokeWidth={2} className="stroke-gray-500" />
                <div className="flex items-center justify-between gap-2">
                    <MapPin size={24} strokeWidth={2} className="stroke-gray-500" />
                    <span className="text-base text-gray-500 font-medium">{venteProps.adresseClinet}</span>
                </div>
            </div>
            <div className='bg-fonce-200 w-full py-3 px-4 rounded-lg flex items-start justify-start flex-col gap-2'>
                <span className='text-xl text-white font-bold tracking-wide'>Commande créée, <span className='text-gray-500'>{venteProps.date.toLocaleDateString("fr-FR")}</span></span>
                <ol className="flex items-center w-full">
                    <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-300 after:border-4 after:inline-block">
                        <span className="flex items-center justify-center w-10 h-10 bg-blue-300 rounded-full shrink-0">
                            <CircleCheckBig size={20} strokeWidth={2} className="stroke-bleu" />
                        </span>
                    </li>
                    <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-400 after:border-4 after:inline-block">
                        <span className="flex items-center justify-center w-10 h-10 bg-gray-400 rounded-full shrink-0">                                        
                            <Image src={"/emballe-gris.png"} width={20} height={16} alt="emballe-gris" />                                        
                        </span>
                    </li>
                    <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-400 after:border-4 after:inline-block">
                        <span className="flex items-center justify-center w-10 h-10 bg-gray-400 rounded-full shrink-0">
                            <Image src={"/expedie-gris.png"} width={20} height={16} alt="expedie-gris" />                                        
                        </span>
                    </li>
                    <li className="flex items-center w-full">
                        <span className="flex items-center justify-center w-10 h-10 bg-gray-400 rounded-full shrink-0">
                            <Image src={"/livre-gris.png"} width={20} height={16} alt="livre-gris" />                                        
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default VenteCard
