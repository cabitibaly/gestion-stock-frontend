"use client";
import Navbar from "@/components/navbar";
import { Check, ChevronDown, List, RotateCw, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "primereact/calendar";
import { useState } from "react";
import { addLocale } from "primereact/api";
import fr from "../../constants/fr.json";
import { fournisseurData } from "@/data/fournisseurData";
import BonCard from "@/components/bonCard";
import BonDesc from "@/components/bonDesc";

addLocale("fr", fr.fr)

const BonCommande = () => {
    const [recherche, setRecherche] = useState<string>("")
    const [isList, setIsList] = useState<boolean>(true)
    const [statut, setStatut] = useState<string>("Tout")
    const [statutPaiement, setStatutPaiement] = useState<string>("")
    const [prixMin, setPrixMin] = useState<string>("")
    const [prixMax, setPrixMax] = useState<string>("")
    const [fournisseur, setFournisseur] = useState<string>("")
    const [date, setDate] = useState<Date | null>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleReset = (): void => {
        setDate(null);
        setStatut("Tout");
        setStatutPaiement("");    
        setPrixMin("");
        setPrixMax("");
        setFournisseur("")
    }

    return (
        <section className="relative px-6 pt-6 pb-2 w-full h-auto bg-noir flex items-start justify-start flex-col gap-8">
            <Navbar />
            <div className='mt-2 w-full flex items-end justify-between gap-2'>  
                <div className='flex items-end gap-6'>
                    <h1 className='text-5xl text-white font-bold tracking-wide'>Bon de Commande</h1>
                    <div className='border border-gray-300 h-7 px-2.5 py-0 rounded-lg flex items-center justify-center gap-2'>
                        <span className='text-white text-base font-semibold'>97</span>
                        <span className='text-gray-600 text-base font-semibold'>Bons</span>
                    </div>
                </div>  
                <form onSubmit={(e) => e.preventDefault()} className="w-[40%] flex items-center">   
                    <label htmlFor="faq-search" className="sr-only">Recherche</label>
                    <div className="relative w-full flex items-center justify-center">
                        <div className="absolute inset-y-0 start-1 flex items-center ps-3 pointer-events-none">
                            <Search strokeWidth={2} size={28} color="#FFF" />
                        </div>
                        <input value={recherche} onChange={(e) => setRecherche(e.target.value)} type="text" className="bg-transparent border-2 border-gray-600 text-gray-300 text-lg rounded-xl outline-none focus:ring-gray-300 focus:border-gray-300 block w-full ps-14  p-1.5 placeholder:text-gray-400" placeholder="Rechercher un bon..." />
                    </div>
                </form> 
                <div className='rounded-xl h-11 bg-fonce-200 flex'>
                    <div onClick={() => setIsList(!isList) } className={`${ isList ? "border border-vert" : "border border-transparent" } cursor-pointer rounded-xl p-2 h-full flex items-center justify-center`}>
                        <List size={28} strokeWidth={2} className={`${ isList ? "stroke-vert" : "stroke-gray-400" }`} />
                    </div>
                    <div onClick={() => setIsList(!isList) } className={`${ !isList ? "border border-vert" : "border border-transparent" } cursor-pointer rounded-xl p-2 h-full flex items-center justify-center`}>
                        {
                            isList ? <Image src="/grid-gris.png" alt="grid-gris" width={30} height={10} /> :<Image src="/grid-vert.png" alt="grid-gris" width={30} height={10} />                            
                        }                        
                    </div>
                </div>
                <hr className='border border-gray-600 h-11' />
                <Link href={"/bon-commande/nouveau"} className='border border-transparent bg-vert px-2.5 py-2 cursor-pointer rounded-xl text-noir text-lg font-semibold transition duration-200 ease-in-out hover:bg-transparent hover:text-vert hover:border-vert'>
                    Nouveau Bon
                </Link>                         
            </div>
            <div className='w-full h-[75.25vh] flex items-center justify-between gap-4'>
                <div className='relative bg-fonce-400 px-4 py-4 rounded-3xl w-1/4 h-full flex items-center justify-start flex-col gap-3'>                    
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-gray-500 text-lg font-semibold'>Date</span>
                        <div id='vente-date' className='w-full'>
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
                        <span className='text-gray-500 text-lg font-semibold'>Statut Livraison</span>
                        <div className='relative bg-fonce-200 py-2 px-3 cursor-pointer rounded-xl w-full flex items-center justify-between group'>
                            <span className='text-gray-50 text-lg font-semibold'>{statut}</span>
                            <ChevronDown size={28} strokeWidth={2.5} className='stroke-gray-500 transition duration-200 ease-linear group-hover:stroke-gray-50 group-hover:rotate-180' />
                            <div className="border border-gray-500 bg-fonce-400 w-full absolute left-0 top-full rounded-xl hidden items-start justify-start flex-col z-20 group-hover:flex">
                                <button onClick={() => setStatut('Tout')} className='bg-fonce-transparent border-b border-gray-500 cursor-pointer px-3 py-1.5 rounded-t-xl w-full text-gray-50 text-lg font-semibold flex items-center justify-between transition duration-200 ease-out hover:bg-fonce-200'>
                                    Tout
                                    { statut === "Tout" && <Check size={28} strokeWidth={2.5} className='stroke-vert' /> }
                                </button>                                
                                <button onClick={() => setStatut('Créée')} className='bg-fonce-transparent border-b border-gray-500 cursor-pointer px-3 py-1.5 w-full text-gray-50 text-lg font-semibold flex items-center justify-between transition duration-200 ease-out hover:bg-fonce-200'>
                                    Créée
                                    { statut === "Créée" && <Check size={28} strokeWidth={2.5} className='stroke-vert' /> }
                                </button>                                
                                <button onClick={() => setStatut('Emballée')} className='bg-fonce-transparent border-b border-gray-500 cursor-pointer px-3 py-1.5 w-full text-gray-50 text-lg font-semibold flex items-center justify-between transition duration-200 ease-out hover:bg-fonce-200'>
                                    Emballée
                                    { statut === "Emballée" && <Check size={28} strokeWidth={2.5} className='stroke-vert' /> }
                                </button>                                
                                <button onClick={() => setStatut('Expédiée')} className='bg-fonce-transparent border-b border-gray-500 cursor-pointer px-3 py-1.5 w-full text-gray-50 text-lg font-semibold flex items-center justify-between transition duration-200 ease-out hover:bg-fonce-200'>
                                    Expédiée
                                    { statut === "Expédiée" && <Check size={28} strokeWidth={2.5} className='stroke-vert' /> }
                                </button>                                
                                <button onClick={() => setStatut('Livrée')} className='bg-fonce-transparent cursor-pointer px-3 py-1.5 rounded-b-xl w-full text-gray-50 text-lg font-semibold flex items-center justify-between transition duration-200 ease-out hover:bg-fonce-200'>
                                    Livrée
                                    { statut === "Livrée" && <Check size={28} strokeWidth={2.5} className='stroke-vert' /> }
                                </button>                                
                            </div>
                        </div>
                    </div>                    
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-gray-500 text-lg font-semibold'>Statut Paiement</span>
                        <div className='relative bg-fonce-200 py-2 px-3 cursor-pointer rounded-xl w-full flex items-center justify-between group'>
                            <span className='text-gray-50 text-lg font-semibold'>{statutPaiement === "" ? "Aucune selection" : statutPaiement }</span>
                            <ChevronDown size={28} strokeWidth={2.5} className='stroke-gray-500 transition duration-200 ease-linear group-hover:stroke-gray-50 group-hover:rotate-180' />
                            <div className="border border-gray-500 bg-fonce-400 w-full absolute left-0 top-full rounded-xl hidden items-start justify-start flex-col z-20 group-hover:flex">
                                <button onClick={() => setStatutPaiement('Payé')} className='bg-fonce-transparent border-b border-gray-500 cursor-pointer px-3 py-1.5 rounded-t-xl w-full text-gray-50 text-lg font-semibold flex items-center justify-between transition duration-200 ease-out hover:bg-fonce-200'>
                                    Payé
                                    { statutPaiement === "Payé" && <Check size={28} strokeWidth={2.5} className='stroke-vert' /> }
                                </button>                                
                                <button onClick={() => setStatutPaiement('Impayé')} className='bg-fonce-transparent border-b border-gray-500 cursor-pointer px-3 py-1.5 w-full text-gray-50 text-lg font-semibold flex items-center justify-between transition duration-200 ease-out hover:bg-fonce-200'>
                                    Impayé
                                    { statutPaiement === "Impayé" && <Check size={28} strokeWidth={2.5} className='stroke-vert' /> }
                                </button>                              
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-gray-500 text-lg font-semibold'>Fournisseurs</span>
                        <div className='relative bg-fonce-200 py-2 px-3 cursor-pointer rounded-xl w-full flex items-center justify-between group'>
                            <span className='text-gray-50 text-lg font-semibold'>{fournisseur ? fournisseur : 'Aucune sélection'}</span>
                            <ChevronDown size={28} strokeWidth={2.5} className='stroke-gray-500 transition duration-200 ease-linear group-hover:stroke-gray-50 group-hover:rotate-180' />
                            <div className="border border-gray-500 bg-fonce-400 w-full absolute left-0 top-full rounded-xl hidden items-start justify-start flex-col z-20 group-hover:flex">                              
                                {
                                    fournisseurData.map((fournisseurItem, index) => (
                                        <button key={index} onClick={() => setFournisseur(fournisseurItem)} className='bg-fonce-transparent border-b border-gray-500 cursor-pointer px-3 py-1.5 rounded-t-xl w-full text-gray-50 text-lg font-semibold flex items-center justify-between transition duration-200 ease-out hover:bg-fonce-200'>
                                            {fournisseurItem}
                                            { fournisseur === fournisseurItem && <Check size={28} strokeWidth={2.5} className='stroke-vert' /> }
                                        </button>
                                    ))
                                }                               
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-gray-500 text-lg font-semibold'>Prix</span>
                        <div className='border border-gray-500 h- rounded-xl flex'>
                            <div className='bg-fonce-200 rounded-s-xl w-[20%] flex items-center justify-center text-lg text-white font-semibold'>
                                FCFA
                            </div>
                            <input value={prixMin} onChange={e => setPrixMin(e.target.value)} type="text" className='py-2 px-3 rounded-e-xl w-[80%] text-gray-50 text-lg font-semibold outline-none placeholder:text-gray-400' placeholder='Prix Minimum' />                            
                        </div>
                        <div className='border border-gray-500 h- rounded-xl flex'>
                            <div className='bg-fonce-200 rounded-s-xl w-[20%] flex items-center justify-center text-lg text-white font-semibold'>
                                FCFA
                            </div>
                            <input value={prixMax} onChange={e => setPrixMax(e.target.value)} type="text" className='py-2 px-3 rounded-e-xl w-[80%] text-gray-50 text-lg font-semibold outline-none placeholder:text-gray-400' placeholder='Prix Maximun' />                            
                        </div>
                    </div>
                    <div className='absolute bottom-0 rounded-b-2xl bg-fonce-200 py-4 w-full flex items-center justify-center'>
                        <div onClick={() => handleReset()} className='cursor-pointer flex items-center justify-center gap-2 group'>
                            <RotateCw size={25} strokeWidth={2} className='stroke-gray-50 transition duration-200 ease-linear group-hover:stroke-blue-500' />
                            <span className='text-gray-50 text-xl font-semibold transition duration-200 ease-linear group-hover:text-blue-500'>Réinitialiser</span>
                        </div>
                    </div>
                </div>
                <div className='rounded-xl w-3/4 h-full flex items-center justify-start flex-col gap-4 overflow-auto'>
                    <BonCard
                        bonProps={
                            {
                                id: 215,
                                nomFournisseur: "Uzumaki",
                                prenomFournisseur: "Naruto",
                                adresseLivraison: "Bobo Dioulasso, secteur 09",
                                montantCommande: 1630000,
                                statutCommande: "CREEE",
                                statutPaiement: "Payé",
                                date: new Date()
                            }
                        }  
                        setIsopen={setIsOpen}
                        isOpen={isOpen}
                    />
                    <BonCard
                        bonProps={
                            {
                                id: 193,
                                nomFournisseur: "Uchiha",
                                prenomFournisseur: "Sasuke",
                                adresseLivraison: "Bobo Dioulasso, secteur 29",
                                montantCommande: 200000,
                                statutCommande: "EMBALLEE",
                                statutPaiement: "Impayé",
                                date: new Date()
                            }
                        }  
                        setIsopen={setIsOpen}
                        isOpen={isOpen}
                    />
                </div>
            </div>
            { isOpen && <BonDesc id={1} setIsOpen={setIsOpen} isOpen={isOpen} /> }
        </section>
    )
}

export default BonCommande
