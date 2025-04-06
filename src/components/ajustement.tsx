"use client";
import { useState } from 'react'
import ProduitSimpleCard from './produitSimpleCard';
import { X } from 'lucide-react';
import { Calendar } from "primereact/calendar";
import { addLocale } from "primereact/api";
import fr from "../constants/fr.json";
import { Dropdown } from 'primereact/dropdown';
import { produits } from '@/data/produit';

addLocale("fr", fr.fr)

interface AjustementProps {
    setAjustementOpen: (isOpen: boolean) => void,
    ajustementOpen: boolean
}

const Ajustement = ({setAjustementOpen, ajustementOpen}: AjustementProps) => {
    const [isQuantite, setIsQuantite] = useState<boolean>(false)
    const [isPrix, setIsPrix] = useState<boolean>(false)
    const [date, setDate] = useState<Date | null>(new Date())
    const [raison, setRaison] = useState<string>("");

    const raisons = ["Perdu", "Volé", "Accident", "Autre"];    

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
            <div className="w-full flex items-center justify-between">
                <span className="text-white text-2xl font-bold tracking-wide">Nouvel Ajustement</span>
                <X onClick={() => setAjustementOpen(!ajustementOpen)} size={30} strokeWidth={2} className="stroke-gray-500 cursor-pointer" />
            </div>
            <div className="w-full flex items-center justify-start flex-col gap-4">
                <ProduitSimpleCard
                    produitProps={produits[0]}                               
                />
                <div className="w-full flex items-start justify-start flex-col gap-4">
                    <span className="text-gray-50 text-lg font-semibold">Type d&apos;ajustement</span>
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
            <div className="mt-4 pb-4 w-full h-[53%] flex items-center justify-start flex-col gap-6 overflow-auto">
                <div className='w-full flex items-center justify-between'>
                    <div className='w-[45%] flex items-start justify-center flex-col gap-4'>
                        <span className="text-gray-50 text-lg font-semibold">Date</span>
                        <div className='w-full'>
                            <Calendar 
                                id='datepicker'                   
                                onChange={(e) => setDate(e.value as Date | null)}
                                value={date}                               
                                locale="fr" 
                                placeholder="Choisir une date"
                                showIcon={false}
                            /> 
                        </div>
                    </div>
                    <div className='w-[45%] flex items-start justify-center flex-col gap-4'>
                        <span className="text-gray-50 text-lg font-semibold">Raison</span>
                        <div className='w-full'>
                            <Dropdown 
                                id='raison'                   
                                value={raison}                               
                                options={raisons} 
                                optionLabel="label"
                                onChange={(e) => setRaison(e.value as string)}
                                placeholder="Selectionner.."
                                highlightOnSelect={false}
                                checkmark={false}
                            />
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <div className='w-[45%] flex items-start justify-center flex-col gap-4'>
                        <span className="text-gray-50 text-lg font-semibold">Qauntité Disponible</span>
                        <input type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 px-2 rounded-lg text-gray-50 text-lg outline-none focus:ring-gray-300 focus:border-gray-300 placeholder:text-gray-400' placeholder='0' />
                    </div>
                    <div className='w-[45%] flex items-start justify-center flex-col gap-4'>
                        <span className="text-gray-50 text-lg font-semibold">Nouvelle Qauntité</span>
                        <input type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 px-2 rounded-lg text-gray-50 text-lg outline-none focus:ring-gray-300 focus:border-gray-300 placeholder:text-gray-400' placeholder='0' />
                    </div>
                </div>
                <div className='w-full flex items-start justify-center flex-col gap-4'>
                    <span className="text-gray-50 text-lg font-semibold">Description</span>
                    <textarea className='border-[1.5px] border-fonce-400 w-full h-36 py-1.5 px-2 rounded-lg text-gray-50 text-lg outline-none focus:ring-gray-300 focus:border-gray-300 placeholder:text-gray-400 resize-none' placeholder="Information sur l'ajustement..." ></textarea>
                </div>
            </div>
            <div className="absolute bottom-0 bg-fonce-400 py-4 px-8 rounded-b-2xl w-full flex items-center justify-between">
                <button onClick={() => setAjustementOpen(!ajustementOpen)} className='border border-vert bg-transparent px-4 py-2 cursor-pointer rounded-xl text-vert text-lg  tracking-wide font-semibold transition duration-200 ease-in-out hover:bg-vert hover:text-fonce-600 hover:border-transparent'>
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
