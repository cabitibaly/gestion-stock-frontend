"use client";
import { PersonneType } from "@/types/personneType";
import Image from "next/image";

const PersonneCard = ({ id, image, nom, prenom, email, telephone } : PersonneType) => {
    return (
        <div key={id} className="px-2 py-3 bg-fonce-200 w-full rounded-lg flex items-center justify-start flex-col gap-2">                                       
            <div className="w-full flex items-center justify-start gap-3">
                <Image src={image} height={10} width={50} alt={`${nom} ${prenom}`} className="rounded-2xl" />
                <span className="text-white text-lg font-semibold">{nom} {prenom}</span>
            </div> 
            <div className="w-full flex items-center justify-between">
                <span className="text-gray-500 text-sm font-semibold uppercase">Telephone</span>
                <span className="text-white text-sm font-semibold">{telephone}</span>
            </div>                              
            <div className="w-full flex items-center justify-between">
                <span className="text-gray-500 text-sm font-semibold uppercase">Email</span>
                <span className="text-white text-sm font-semibold">{email}</span>
            </div>
            <button className='mt-1 border border-vert bg-transparent w-full py-2 cursor-pointer rounded-xl text-vert text-sm  tracking-wide font-semibold transition duration-200 ease-in-out hover:bg-vert hover:text-fonce-600 hover:border-transparent'>
                Envoyer un Email
            </button>                             
        </div>        
    )
}

export default PersonneCard;
