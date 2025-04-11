"use client"
import { SimpleInformation } from "@/interface/simpleInformation"
import { Plus, X } from "lucide-react"
import Image from "next/image"

interface ClientAddCardProps {
    client: SimpleInformation,
    handleClick?: (id: number) => void,
    handleRemove?: () => void,
    btnAdd?: boolean,
    btnRemove?: boolean,
}

const ClientAddCard = ({ client, handleClick, handleRemove, btnAdd,  btnRemove }: ClientAddCardProps) => {
    
    return (
        <div className='p-1 w-full flex items-center justify-between gap-2 rounded-lg transition duration-200 hover:bg-fonce-800'>
            <div className='flex items-center justify-center gap-2'>
                <Image src={client.image} alt="Zoro" width={50} height={30} className="rounded-full" />
                <div className='flex items-start justify-center flex-col'>
                    <span className='text-base text-white font-semibold'>{client.nom} {client.prenom}</span>
                    <span className='text-sm text-gray-500 font-semibold'>{client.email}</span>
                </div>
            </div>                                        
            {   
                btnAdd &&
                <button onClick={() => handleClick?.(client.id)} className="cursor-pointer w-10 h-10 rounded-xl bg-fonce-400 flex items-center justify-center">
                    <Plus size={24} strokeWidth={2} className="stroke-vert" />
                </button>
            }

            {
                btnRemove &&
                <button onClick={() => handleRemove?.()} className="cursor-pointer w-10 h-10 rounded-xl bg-fonce-400 flex items-center justify-center">
                  <X size={24} strokeWidth={2} className="stroke-gray-500" />
                </button>
            }
        </div>
    )
}

export default ClientAddCard
