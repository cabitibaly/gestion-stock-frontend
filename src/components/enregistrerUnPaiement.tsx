"use client";
import { Props } from "@/interface/simpleProps";
import { X } from "lucide-react";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";

const EnregistrerUnPaiement = ({ id, setIsOpen, isOpen }: Props) => {
    const [methodePaiement, setMethodePaiement] = useState<string>("Cash")
    const [deposerA, setDeposerA] = useState<string>("")
    const [montant, setMontant] = useState<string>("")
    const [avis, setAvis] = useState<string>("")

    return (
        <div key={id} className="absolute top-0 right-0 border border-gray-600 p-4 bg-fonce-600 rounded-2xl w-1/2 h-full flex items-center justify-start flex-col gap-4">
            <div className="w-full flex items-center justify-between">
                <span className="text-white text-2xl font-bold tracking-wide">Enregistrer un paiement</span>
                <X onClick={() => setIsOpen(!isOpen)} size={30} strokeWidth={2} className="stroke-gray-500 cursor-pointer" />
            </div>
            <div className="bg-fonce-400 p-4 rounded-lg w-full flex items-start justify-start flex-col gap-2">
                <span className="text-gray-500 text-base font-semibold uppercase">Paiement Pour</span>
                <div className="w-full flex items-center justify-between">
                    <span className="text-gray-50 text-base font-semibold uppercase">#VT-215</span>
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-gray-500 text-base font-semibold uppercase">Montant Total :</span>
                        <span className="text-white text-base font-semibold">1630000 FCFA</span>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-start flex-col gap-4">                
                <div className="w-full flex items-start justify-center flex-col gap-3">
                    <span className="text-gray-50 text-lg font-semibold">Montant Reçu</span>
                    <div className='w-full rounded-lg flex'>
                        <div className='bg-fonce-200 rounded-s-lg w-[15%] flex items-center justify-center text-lg text-white font-semibold'>
                            FCFA
                        </div>
                        <input value={montant} onChange={(e) => setMontant(e.target.value)} type="text" className='w-full rounded-e-lg py-1.5 px-2 text-gray-50 text-lg font-semibold outline-none border-[1.5px] border-fonce-400  placeholder:text-gray-400' placeholder='0' />                            
                    </div>
                </div>
                <div className="w-full flex items-start justify-center flex-col gap-4">
                    <span className="text-gray-50 text-lg font-semibold">Méthode de Paiement</span>
                    <div className='w-full'>
                        <Dropdown
                            value={methodePaiement}                               
                            options={["Cash", "Mobile Money", "Check", "Autres"]}
                            optionLabel="label"
                            onChange={(e) => setMethodePaiement(e.value as string)}
                            placeholder="Selectionner une méthode.."
                            highlightOnSelect={false}
                            checkmark={false}
                        />
                    </div>
                </div>
                <div className="w-full flex items-start justify-center flex-col gap-4">
                    <span className="text-gray-50 text-lg font-semibold">Déposer à</span>
                    <div className='w-full'>
                        <Dropdown
                            value={deposerA}                               
                            options={["Caisse", "+226 00000000", "+226 00000000", "Bank Transfer", "Autres"]}
                            optionLabel="label"
                            onChange={(e) => setDeposerA(e.value as string)}
                            placeholder="Selectionner un compte.."
                            highlightOnSelect={false}
                            checkmark={false}
                        />
                    </div>
                </div>
                <div className='w-full flex items-start justify-center flex-col gap-4'>
                    <span className="text-gray-50 text-lg font-semibold">Avis</span>
                    <textarea value={avis} onChange={(e) => setAvis(e.target.value)} className='border-[1.5px] border-fonce-400 w-full h-32 py-1.5 px-2 rounded-lg text-gray-50 text-lg outline-none focus:ring-gray-300 focus:border-gray-300 placeholder:text-gray-400 resize-none' placeholder="Un avis..." ></textarea>
                </div>
            </div>
            <div className="absolute bottom-0 bg-fonce-400 py-4 px-8 rounded-b-2xl w-full flex items-center justify-between">
                <button onClick={() => setIsOpen(!isOpen)} className='border border-vert bg-transparent px-4 py-2 cursor-pointer rounded-xl text-vert text-lg  tracking-wide font-semibold transition duration-200 ease-in-out hover:bg-vert hover:text-fonce-600 hover:border-transparent'>
                    Annuler
                </button>
                <button className='border border-transparent bg-vert px-4 py-2 cursor-pointer rounded-xl text-noir text-lg font-semibold transition duration-200 ease-in-out hover:bg-transparent hover:text-vert hover:border-vert'>
                    Enregistrer
                </button> 
            </div>
        </div>
    )
}

export default EnregistrerUnPaiement
