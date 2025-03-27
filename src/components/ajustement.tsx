"use client";
import { useState } from 'react'
import ProduitSimpleCard from './produitSimpleCard';
import { X } from 'lucide-react';

const Ajustement = () => {
    const [isQuantite, setIsQuantite] = useState<boolean>(false)
    const [isPrix, setIsPrix] = useState<boolean>(false)

    const handleQuantiteChange = () => {
        setIsQuantite(true);
        setIsPrix(false);
      };
    
    const handlePrixChange = () => {
        setIsPrix(true);
        setIsQuantite(false);
    };

    return (
        <div className="absolute top-0 right-0 border border-gray-600 p-4 bg-fonce-600 rounded-2xl w-1/2 h-full flex items-center justify-start flex-col gap-4">
            <div className="border border-green-300 p-1 w-full flex items-center justify-between">
                <span className="text-white text-2xl font-bold tracking-wide">Nouvel Ajustement</span>
                <X size={30} strokeWidth={2} className="stroke-gray-500 cursor-pointer" />
            </div>
            <div className="border border-purple-300 p-1 w-full flex items-center justify-start flex-col gap-4">
                <ProduitSimpleCard
                    id={1}
                    image="/mac.jpg"
                    nomProduit="Macbook pro 16&quot; puce M3 Max 1TB/36GB"
                    categorie="Ordinateur"
                    quantite={37}
                    stockFaible={false}            
                />
                <div className="w-full flex items-start justify-start flex-col gap-2">
                    <span className="text-gray-50 text-lg font-semibold">Type d&apos;ajustementt</span>
                    <div className="w-full flex items-center justify-between">
                        <div className="relative w-[45%] flex items-center justify-items-center group">
                            <input id="quantite" checked={isQuantite} onChange={() => handleQuantiteChange()} type="checkbox" className="sr-only peer" />
                            <label htmlFor="quantite" className="border-[1.75px] border-fonce-400 cursor-pointer py-1 px-2 w-full rounded-lg text-gray-50 text-lg font-semibold transition-all duration-200 group-hover:border-vert peer-checked:border-vert">
                                Quantité                                   
                            </label>
                            <div className="absolute right-2 border border-fonce-200 bg-fonce-400 rounded-full h-5 w-5 peer-checked:border-transparent peer-checked:bg-vert transition-all duration-200"></div>
                            <div className="absolute right-[13px] bg-fonce-800 rounded-full w-2.5 h-2.5 hidden peer-checked:block transition-all duration-200" />
                        </div>
                        <div className="relative w-[45%] flex items-center justify-items-center group">
                            <input checked={isPrix} onChange={() => handlePrixChange()} id="prix" type="checkbox" className="sr-only peer" />
                            <label htmlFor="prix" className="border-[1.75px] border-fonce-400 cursor-pointer py-1 px-2 w-full rounded-lg text-gray-50 text-lg font-semibold transition-all duration-200 group-hover:border-vert peer-checked:border-vert">
                                Prix                                   
                            </label>
                            <div className="absolute right-2 border border-fonce-200 bg-fonce-400 rounded-full h-5 w-5 peer-checked:border-transparent peer-checked:bg-vert transition-all duration-200"></div>
                            <div className="absolute right-[13px] bg-fonce-800 rounded-full w-2.5 h-2.5 hidden peer-checked:block transition-all duration-200" />
                        </div>
                    </div>                            
                </div>
            </div>
            <div className="border border-amber-300 p-1 py-4 w-full flex items-center justify-start flex-col gap-4">

            </div>
            <div className="absolute bottom-0 bg-fonce-400 py-4 px-8 rounded-b-2xl w-full flex items-center justify-between">
                <button className='border border-vert bg-transparent px-4 py-2 cursor-pointer rounded-xl text-vert text-lg  tracking-wide font-semibold transition duration-200 ease-in-out hover:bg-vert hover:text-fonce-600 hover:border-transparent'>
                    Annuler
                </button>
                <button className='border border-transparent bg-vert px-4 py-2 cursor-pointer rounded-xl text-noir text-lg font-semibold transition duration-200 ease-in-out hover:bg-transparent hover:text-vert hover:border-vert'>
                    Enregistrer
                </button> 
            </div>
        </div>                                    
    )
}

export default Ajustement
