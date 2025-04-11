"use client";
import Navbar from "@/components/navbar";
import { clientData } from "@/data/clientData";
import { Check, ChevronDown, RotateCw, Search } from "lucide-react";
import Link from "next/link";
import { Calendar } from "primereact/calendar";
import { useState } from "react";
import { addLocale } from "primereact/api";
import fr from "../../constants/fr.json";
import LignesTableau from "@/components/lignesTableau";

addLocale("fr", fr.fr)

const Factures = () => {
    const [recherche, setRecherche] = useState<string>("")
    const [client, setClient] = useState<string>("")
    const [date, setDate] = useState<Date | null>(null)
    const [montantMin, setMontantMin] = useState<string>("")
    const [montantMax, setMontantMax] = useState<string>("")
    const [typeFacture, setTypeFacture] = useState<string>("")

    const handleReset = (): void => {
        setDate(null);
        setMontantMin("");
        setMontantMax("");
        setClient("");
        setTypeFacture("");
    }

    return (
        <section className="relative px-6 pt-6 pb-2 w-full h-auto bg-noir flex items-start justify-start flex-col gap-8">
            <Navbar />
            <div className='mt-2 w-full flex items-end justify-between gap-2'>  
                <div className='flex items-end gap-6'>
                    <h1 className='text-5xl text-white font-bold tracking-wide'>Factures</h1>
                    <div className='border border-gray-300 h-7 px-2.5 py-0 rounded-lg flex items-center justify-center gap-2'>
                        <span className='text-white text-base font-semibold'>47</span>
                        <span className='text-gray-600 text-base font-semibold'>Factures</span>
                    </div>
                </div>  
                <form onSubmit={(e) => e.preventDefault()} className="w-[60%] flex items-center">   
                    <label htmlFor="faq-search" className="sr-only">Recherche</label>
                    <div className="relative w-full flex items-center justify-center">
                        <div className="absolute inset-y-0 start-1 flex items-center ps-3 pointer-events-none">
                            <Search strokeWidth={2} size={28} color="#FFF" />
                        </div>
                        <input value={recherche} onChange={(e) => setRecherche(e.target.value)} type="text" className="bg-transparent border-2 border-gray-600 text-gray-300 text-lg rounded-xl outline-none focus:ring-gray-300 focus:border-gray-300 block w-full ps-14  p-1.5 placeholder:text-gray-400" placeholder="Rechercher un bon..." />
                    </div>
                </form>                 
                <hr className='border border-gray-600 h-11' />
                <Link href={"/factures/nouveau"} className='border border-transparent bg-vert px-2.5 py-2 cursor-pointer rounded-xl text-noir text-lg font-semibold transition duration-200 ease-in-out hover:bg-transparent hover:text-vert hover:border-vert'>
                    Nouvelle Facture
                </Link>                         
            </div>
            <div className='w-full h-[75.25vh] flex items-center justify-between gap-4'>
                <div className='relative bg-fonce-800 px-4 py-4 rounded-3xl w-1/4 h-full flex items-center justify-start flex-col gap-3'>                    
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-gray-500 text-lg font-semibold'>Date</span>
                        <div id="fact" className='w-full'>
                            <Calendar 
                                className='w-full'
                                id='datepicker'                   
                                onChange={(e) => setDate(e.value as Date | null)}
                                value={date}                               
                                locale="fr" 
                                placeholder="Choisir une date"
                                showIcon={false}
                            /> 
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-gray-500 text-lg font-semibold'>Clients</span>
                        <div className='relative bg-fonce-600 py-2 px-3 cursor-pointer rounded-xl w-full flex items-center justify-between group'>
                            <span className='text-gray-50 text-lg font-semibold'>{client ? client : 'Aucune sélection'}</span>
                            <ChevronDown size={28} strokeWidth={2.5} className='stroke-gray-500 transition duration-200 ease-linear group-hover:stroke-gray-50 group-hover:rotate-180' />
                            <div className="border border-gray-700 bg-fonce-600 w-full max-h-52 absolute left-0 top-full rounded-xl hidden items-start justify-start flex-col overflow-auto z-20 group-hover:flex">                              
                                {
                                    clientData.map((clientItem, index) => (
                                        <button key={index} onClick={() => setClient(clientItem.nom + " " + clientItem.prenom)} className={`bg-fonce-transparent border-b border-gray-700 cursor-pointer px-3 py-1.5 w-full text-gray-50 text-lg font-semibold flex items-center justify-between transition duration-200 ease-out hover:bg-fonce-200 ${index === 0 ? "rounded-t-xl" : index === clientData.length - 1 ? "rounded-b-xl" : ""}`}>
                                            {clientItem.nom + " " + clientItem.prenom}
                                            { client === (clientItem.nom + " " + clientItem.prenom) && <Check size={28} strokeWidth={2.5} className='stroke-vert' /> }
                                        </button>
                                    ))
                                }                               
                            </div>
                        </div>
                    </div>                    
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-gray-500 text-lg font-semibold'>Type Facture</span>
                        <div className='relative bg-fonce-600 py-2 px-3 cursor-pointer rounded-xl w-full flex items-center justify-between group'>
                            <span className='text-gray-50 text-lg font-semibold'>{typeFacture ? typeFacture : 'Aucune sélection'}</span>
                            <ChevronDown size={28} strokeWidth={2.5} className='stroke-gray-500 transition duration-200 ease-linear group-hover:stroke-gray-50 group-hover:rotate-180' />
                            <div className="border border-gray-700 bg-fonce-600 w-full max-h-52 absolute left-0 top-full rounded-xl hidden items-start justify-start flex-col overflow-auto z-20 group-hover:flex">                              
                                {
                                    ["Définitive", "Proforma", "Vente"].map((facture, index) => (
                                        <button key={index} onClick={() => setTypeFacture(facture)} className={`bg-fonce-transparent border-b border-gray-700 cursor-pointer px-3 py-1.5 w-full text-gray-50 text-lg font-semibold flex items-center justify-between transition duration-200 ease-out hover:bg-fonce-400 ${index === 0 ? "rounded-t-xl" : index === 2 ? "rounded-b-xl" : ""}`}>
                                            {facture}
                                            { typeFacture === facture && <Check size={28} strokeWidth={2.5} className='stroke-vert' /> }
                                        </button>
                                    ))
                                }                               
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-gray-500 text-lg font-semibold'>Montant</span>
                        <div className='border border-gray-500 h- rounded-xl flex'>
                            <div className='bg-fonce-600 rounded-s-xl w-[20%] flex items-center justify-center text-lg text-white font-semibold'>
                                FCFA
                            </div>
                            <input value={montantMin} onChange={e => setMontantMin(e.target.value)} type="text" className='py-2 px-3 rounded-e-xl w-[80%] text-gray-50 text-lg font-semibold outline-none placeholder:text-gray-400' placeholder='Montant Minimum' />                            
                        </div>
                        <div className='border border-gray-500 h- rounded-xl flex'>
                            <div className='bg-fonce-600 rounded-s-xl w-[20%] flex items-center justify-center text-lg text-white font-semibold'>
                                FCFA
                            </div>
                            <input value={montantMax} onChange={e => setMontantMax(e.target.value)} type="text" className='py-2 px-3 rounded-e-xl w-[80%] text-gray-50 text-lg font-semibold outline-none placeholder:text-gray-400' placeholder='Montant Maximun' />                            
                        </div>
                    </div>
                    <div className='absolute bottom-0 rounded-b-2xl bg-fonce-600 py-4 w-full flex items-center justify-center'>
                        <div onClick={() => handleReset()} className='cursor-pointer flex items-center justify-center gap-2 group'>
                            <RotateCw size={25} strokeWidth={2} className='stroke-gray-50 transition duration-200 ease-linear group-hover:stroke-blue-500' />
                            <span className='text-gray-50 text-xl font-semibold transition duration-200 ease-linear group-hover:text-blue-500'>Réinitialiser</span>
                        </div>
                    </div>
                </div>
                <div className='rounded-xl w-3/4 h-full flex items-center justify-start flex-col gap-4 overflow-auto'>
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="rounded-xl text-xs text-gray-700 uppercase bg-fonce-600">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Numéro de facture
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Clients
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date de Création
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date d&apos;échéance
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Montant
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>                             
                            <LignesTableau />                          
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Factures
