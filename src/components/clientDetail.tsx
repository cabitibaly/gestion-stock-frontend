"use client"
import { Props } from "@/interface/simpleProps"
import { ArrowLeft, ArrowRight, CircleCheckBig } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import VenteCard from "./venteCard"

const ClientDetail = ({id, setIsOpen, isOpen}: Props) => {
    const [isTransaction, setIsTransaction] = useState<boolean>(false)
    const typeClient: string = "Physique"

    return (
        <div onClick={() => setIsOpen(!isOpen)} key={id} className='absolute top-0 left-0 z-40 p-4 bg-noir/70 w-full h-full flex items-start justify-end'>
            <div onClick={(e) => e.stopPropagation()} className={`${typeClient === "Moral" ? "w-[65%]" : "w-[60%]"} relative border border-fonce-400 p-4 bg-fonce-600 rounded-2xl h-full flex items-center justify-start flex-col gap-6`}>
                <div className='w-full flex items-center justify-between'>
                    <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer bg-fonce-400 p-2 rounded-xl flex items-center justify-center'>
                        <ArrowRight size={28} strokeWidth={2} className='stroke-gray-500' />
                    </div>                                            
                    <button className='border border-vert bg-transparent px-4 py-2 cursor-pointer rounded-xl text-vert text-lg  tracking-wide font-semibold transition duration-200 ease-in-out hover:bg-vert hover:text-fonce-600 hover:border-transparent'>
                        Modifier
                    </button>                                       
                </div>
                <div className='w-full flex items-center justify-start flex-col gap-4 overflow-auto'>
                    <div className='w-full flex items-center justify-between'>
                        <div className="flex items-center justify-center gap-6">
                            <Image src={"/zoro.jpg"} height={10} width={80} alt="mac" className="rounded-3xl" />
                            <div className="flex items-start justify-start flex-col">
                                <span className="text-xl text-white font-semibold">Roronoa Zoro</span>
                                <span className="text-base text-gray-500 font-semibold line-clamp-1">roronoazoro@mugiwara.op</span>
                            </div>
                        </div> 
                        <div className="flex items-center justify-center gap-3">
                            <button className="border border-fonce-400 p-2 rounded-xl flex items-center justify-center">
                                <ArrowLeft size={28} strokeWidth={2} className='stroke-gray-500' />
                            </button>
                            <button className="border border-fonce-400 p-2 rounded-xl flex items-center justify-center">
                                <ArrowRight size={28} strokeWidth={2} className='stroke-gray-500' />
                            </button>
                        </div>                       
                    </div>
                    <div className="self-start rounded-xl bg-fonce-800 flex items-center justify-center gap-2">
                        <button onClick={() => setIsTransaction(false)} className={`px-4 py-1 cursor-pointer rounded-xl text-lg  tracking-wide font-semibold transition duration-200 ease-in-out hover:bg-fonce-400 hover:text-vert ${ !isTransaction ? "bg-fonce-400 text-vert" : "text-gray-600" }`}>
                            Information Générale
                        </button> 
                        <button onClick={() => setIsTransaction(true)} className={`px-14 py-1 cursor-pointer rounded-xl text-lg  tracking-wide font-semibold transition duration-200 ease-in-out hover:bg-fonce-400 hover:text-vert ${ isTransaction ? "bg-fonce-400 text-vert" : "text-gray-600" }`}>
                            Transaction
                        </button> 
                    </div>
                    {
                        !isTransaction &&
                        <div className="w-full flex items-start justify-between gap-4">
                            <div className={`${typeClient === "Moral" ? "w-[65%]" : "w-1/2"} flex items-start justify-start flex-col gap-6`}>
                                <div className='w-full flex items-start jusify-start flex-col gap-4'>
                                    <h4 className="text-white text-2xl font-bold tracking-wide">Détails du Client</h4>
                                    <div className="w-full flex items-start justify-between gap-2">                                    
                                        <div className="flex flex-col items-start justify-start gap-2">
                                            <span className="text-gray-500 text-lg font-semibold uppercase">Type de client</span>
                                            <span className="text-gray-500 text-lg font-semibold uppercase">Source</span>
                                            <span className="text-gray-500 text-lg font-semibold uppercase">Créance</span>
                                            {typeClient === "Moral" && <span className="text-gray-500 text-lg font-semibold uppercase">N° IFU</span>}
                                            {typeClient === "Moral" && <span className="text-gray-500 text-lg font-semibold uppercase">RCCM</span>}
                                            {typeClient === "Moral" && <span className="text-gray-500 text-lg font-semibold uppercase">Régime fiscal</span>}
                                            {typeClient === "Moral" && <span className="text-gray-500 text-lg font-semibold uppercase">Division Fiscale</span>}
                                        </div>
                                        <div className="w-[55%] flex flex-col items-start justify-start gap-2">
                                            <span className="text-gray-50 text-lg font-semibold">Physique</span>
                                            <span className="text-gray-50 text-lg font-semibold">Ajout Manuel</span>
                                            <span className="text-gray-50 text-lg font-semibold">100000 FCFA</span>
                                            {typeClient === "Moral" && <span className="text-gray-500 text-lg font-semibold uppercase">XXXXXXXXX</span>}
                                            {typeClient === "Moral" && <span className="text-gray-500 text-lg font-semibold uppercase">XX-XXX-00-0000-X-00000</span>}
                                            {typeClient === "Moral" && <span className="text-gray-500 text-lg font-semibold uppercase">XXX</span>}
                                            {typeClient === "Moral" && <span className="text-gray-500 text-lg font-semibold uppercase">XXX/XXXX</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full flex items-start jusify-start flex-col gap-4'>
                                    <h4 className="text-white text-2xl font-bold tracking-wide">Information Contact</h4>
                                    <div className="w-full flex items-start justify-between gap-2">                                    
                                        <div className="flex flex-col items-start justify-start gap-2">                                        
                                            <span className="text-gray-500 text-lg font-semibold uppercase">Téléphone</span>
                                            <span className="text-gray-500 text-lg font-semibold uppercase">Site Web</span>
                                        </div>
                                        <div className="w-[55%] flex flex-col items-start justify-start gap-2">                                        
                                            <span className="text-gray-50 text-lg font-semibold">+226 61500768</span>
                                            <span className="text-gray-50 text-lg font-semibold">roronoazoro.bushi</span>
                                        </div>                                    
                                    </div>
                                </div>
                                <div className='w-full flex items-start jusify-start flex-col gap-2'>
                                    <h4 className="text-white text-2xl font-bold tracking-wide">Note</h4>
                                    <p className="w-full text-gray-400 text-lg font-semibold">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="px-4 py-4 bg-fonce-400 rounded-lg w-1/2 flex items-start justify-start flex-col gap-4">
                                <div className="w-full flex items-start justify-start flex-col gap-2">
                                    <div className="w-full flex items-center justify-between">
                                        <span className="text-white text-2xl font-semibold">Achat active</span>  
                                        <div className="flex items-center justify-center gap-3">
                                            <button className="border border-fonce-600 p-2 rounded-xl flex items-center justify-center">
                                                <ArrowLeft size={20} strokeWidth={2} className='stroke-gray-500' />
                                            </button>
                                            <button className="border border-fonce-600 p-2 rounded-xl flex items-center justify-center">
                                                <ArrowRight size={20} strokeWidth={2} className='stroke-gray-500' />
                                            </button>
                                        </div>  
                                    </div>                                
                                    <div className="py-4 px-4 bg-fonce-200 w-full rounded-lg flex items-center justify-start flex-col gap-6">
                                        <div className="w-full flex items-center justify-between">
                                            <span className="text-white text-xl font-semibold uppercase">#VT-215</span>   
                                            <button className="text-vert text-lg font-semibold hover:underline cursor-pointer">Voir</button>   
                                        </div>   
                                        <div className="border-b border-gray-500 pb-4 w-full flex items-center justify-start flex-col gap-2">
                                            <div className="w-full flex items-center justify-between">
                                                <span className="text-gray-500 text-lg font-semibold uppercase">Montant total</span>
                                                <span className="text-white text-lg font-semibold">1630000 FCFA</span>
                                            </div> 
                                            <div className="w-full flex items-center justify-between">
                                                <span className="text-gray-500 text-lg font-semibold uppercase">Statut Paiement</span>
                                                <span className="text-rouge text-lg font-semibold">Impayé</span>
                                            </div> 
                                        </div> 
                                        <div className="w-full flex items-end justify-end gap-2">
                                            <div className="w-[45%] flex items-center justify-start flex-col gap-2">
                                                <span className="self-start text-white text-base font-semibold">Satut commande</span>
                                                <div className="w-full flex items-center justify-center gap-2">
                                                    <span className="flex items-center justify-center w-10 h-10 bg-blue-300 rounded-full shrink-0">
                                                        <CircleCheckBig size={20} strokeWidth={2} className="stroke-bleu" />
                                                    </span>
                                                    <span className=" text-white text-base font-semibold">Créée</span>
                                                </div>                                            
                                            </div>
                                            <div className='bg-fonce-400 w-10 h-10 rounded-full flex items-center justify-center'>
                                                <ArrowRight size={20} strokeWidth={2} className='stroke-gray-500' />
                                            </div>                                                                              
                                            <div className="w-[45%] flex items-center justify-start flex-col gap-2">
                                                <span className="text-white text-base font-semibold">Prochain Satut</span>
                                                <div className="w-full flex items-center justify-center gap-2">
                                                    <span className="flex items-center justify-center w-10 h-10 bg-gray-400 rounded-full shrink-0">
                                                        <Image src={"/emballe-gris.png"} width={20} height={16} alt="emballe-gris" />
                                                    </span>
                                                    <span className=" text-white text-base font-semibold">Emballée</span>
                                                </div>                                            
                                            </div>
                                        </div>                                     
                                    </div>                                
                                </div>
                            </div>
                        </div>
                    }
                    {
                        isTransaction &&
                        <div className="w-full flex items-start justify-start flex-col gap-4">
                            <VenteCard
                                venteProps={
                                    {
                                        id: 193,
                                        nomClient: "Vinsmoke",
                                        prenomClient: "Sanji",
                                        adresseClinet: "North Blue, One Piece",
                                        montantCommande: 200000,
                                        statutCommande: "EMBALLEE",
                                        statutPaiement: "Impayé",
                                        date: new Date()
                                    }
                                }  
                                setIsopen={setIsOpen}
                                isOpen={isOpen}
                            />
                            <VenteCard
                                venteProps={
                                    {
                                        id: 193,
                                        nomClient: "Vinsmoke",
                                        prenomClient: "Sanji",
                                        adresseClinet: "North Blue, One Piece",
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
                    }
                </div>                
            </div>            
        </div>
    )
}

export default ClientDetail
