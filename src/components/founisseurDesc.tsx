"use client";
import { Props } from "@/interface/simpleProps"
import { ArrowLeft, ArrowRight, Plus, Search, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link";
import { useState } from "react"
import PersonneCard from "./personneCard";
import BonCard from "./bonCard";
import ProduitCard from "./produitCard";
import { produits } from "@/data/produit";
import ProduitSimpleCard from "./produitSimpleCard";

const FounisseurDesc = ({id, setIsOpen, isOpen}: Props) => {
    const [tabs, setTabs] = useState<string>("Information Générale")
    const [isAdd, setIsAdd] = useState<boolean>(false)
    const [recherche, setRecherche] = useState<string>("")

    const produitFiltered = produits.filter((produit) => (
        produit.nomProduit.toLowerCase().includes(recherche.toLowerCase())
    ))

    return (
        <div onClick={() => setIsOpen(!isOpen)} key={id} className='absolute top-0 left-0 z-40 p-4 bg-noir/70 w-full h-full flex items-start justify-end'>
            <div onClick={(e) => e.stopPropagation()} className={`w-[65%] relative border border-fonce-400 p-4 bg-fonce-600 rounded-2xl h-full flex items-center justify-start flex-col gap-6`}>
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
                        <div className="flex items-center justify-center gap-4">
                            <Image src={"/naruto.jpeg"} height={10} width={80} alt="mac" className="rounded-3xl" />
                            <div className="flex items-start justify-start flex-col">
                                <span className="text-xl text-white font-semibold">Uzumaki Naruto</span>
                                <div className="flex items-center justify-between gap-2">
                                    <span className="text-lg text-gray-500 font-medium mr-1">Dette : </span>
                                    <span className="text-lg text-gray-50 font-semibold">1630000 FCFA</span>
                                </div>
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
                        <button onClick={() => setTabs("Information Générale")} className={`px-4 py-1 cursor-pointer rounded-xl text-lg  tracking-wide font-semibold transition duration-200 ease-in-out hover:bg-fonce-400 hover:text-vert ${ tabs === "Information Générale" ? "bg-fonce-400 text-vert" : "text-gray-600" }`}>
                            Information Générale
                        </button> 
                        <button onClick={() => setTabs("Produits")} className={`px-14 py-1 cursor-pointer rounded-xl text-lg  tracking-wide font-semibold transition duration-200 ease-in-out hover:bg-fonce-400 hover:text-vert ${ tabs === "Produits" ? "bg-fonce-400 text-vert" : "text-gray-600" }`}>
                            Produits
                        </button> 
                        <button onClick={() => setTabs("Transaction")} className={`px-14 py-1 cursor-pointer rounded-xl text-lg  tracking-wide font-semibold transition duration-200 ease-in-out hover:bg-fonce-400 hover:text-vert ${ tabs === "Transaction" ? "bg-fonce-400 text-vert" : "text-gray-600" }`}>
                            Transaction
                        </button> 
                    </div>  
                    {
                        tabs === "Information Générale" &&
                        <div className="w-full flex items-start justify-between gap-4">
                            <div className={`w-1/2 flex items-start justify-start flex-col gap-6`}>
                                <div className='w-full flex items-start jusify-start flex-col gap-4'>
                                    <h4 className="text-white text-2xl font-bold tracking-wide">Détails du Fournisseur</h4>
                                    <div className="w-full flex items-start justify-between gap-2">                                    
                                        <div className="flex flex-col items-start justify-start gap-2">
                                            <span className="text-gray-500 text-lg font-semibold uppercase">Site Web</span>
                                            <span className="text-gray-500 text-lg font-semibold uppercase">Statut</span>                                            
                                        </div>
                                        <div className="w-[55%] flex flex-col items-start justify-start gap-2">
                                            <span className="text-bleu text-lg font-semibold">roronoazoro.bushi</span>
                                            <span className="text-vert text-lg font-semibold">Active</span>                                                                                        
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full flex items-start jusify-start flex-col gap-4'>
                                    <h4 className="text-white text-2xl font-bold tracking-wide">Information Contact</h4>
                                    <div className="w-full flex items-start justify-between gap-2">                                    
                                        <div className="flex flex-col items-start justify-start gap-2">                                        
                                            <span className="text-gray-500 text-lg font-semibold uppercase">Téléphone</span>
                                            <span className="text-gray-500 text-lg font-semibold uppercase">Email</span>
                                        </div>
                                        <div className="w-[55%] flex flex-col items-start justify-start gap-2">                                        
                                            <span className="text-gray-50 text-lg font-semibold">+226 61500768</span>
                                            <span className="text-gray-50 text-lg font-semibold">narutouzumaki@konoha.jp</span>
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
                            <div className="px-4 py-2.5 bg-fonce-400 rounded-lg w-[35%] flex items-start justify-start flex-col gap-4">                                                                                                                 
                                <div className="w-full flex items-start justify-start flex-col gap-2">
                                    <div className="w-full flex items-center justify-between">
                                        <span className="text-white text-xl font-semibold">Personne à Contacter</span>
                                        <Link href={""} className="cursor-pointer flex items-center justify-center group">
                                            <Plus size={16} strokeWidth={2} className="stroke-vert group-hover:underline" />
                                            <span className="text-vert text-lg font-semibold group-hover:underline">Ajouter</span>
                                        </Link> 
                                    </div>    
                                    <PersonneCard 
                                        id={2}
                                        nom="Nara"
                                        prenom="Shikamaru"
                                        image="/nara.jpeg"
                                        email="shikamaru@konoha.jp"
                                        telephone="+226 61500768"
                                    />                                                                    
                                </div>                                                                               
                                <div className="w-full flex items-start justify-start flex-col gap-2"> 
                                    <div className="w-full flex items-center justify-between">
                                        <span className="text-white text-xl font-semibold">Autre Personne</span>
                                        <div className="flex items-center justify-center gap-3">
                                            <button className="border border-fonce-600 p-2 rounded-xl flex items-center justify-center">
                                                <ArrowLeft size={16} strokeWidth={2} className='stroke-gray-500' />
                                            </button>
                                            <button className="border border-fonce-600 p-2 rounded-xl flex items-center justify-center">
                                                <ArrowRight size={16} strokeWidth={2} className='stroke-gray-500' />
                                            </button>
                                        </div>
                                    </div>                                                                       
                                    <PersonneCard 
                                        id={2}
                                        nom="Uchiha"
                                        prenom="Sasuke"
                                        image="/sasuke.jpg"
                                        email="sasuke@konoha.jp"
                                        telephone="06 00 00 00 00"
                                    />
                                </div>                                                                               
                            </div>                                                        
                        </div>
                    }
                    {
                        tabs === "Produits" &&
                        <div className=" w-full flex items-start justify-start flex-col gap-4">
                            <div className="w-full flex items-center justify-between">
                                <div className="flex items-center justify-center gap-4">
                                    <span className="text-white text-xl font-semibold">Total des produits</span>                                    
                                    <span className="p-2 h-7 flex items-center justify-center rounded-lg bg-fonce-400 text-white text-lg font-semibold">3</span>                                    
                                </div>
                                <button onClick={() => setIsAdd(!isAdd)} className={`cursor-pointer items-center justify-center group ${!isAdd ? "flex" : "hidden"}`}>
                                    <Plus size={16} strokeWidth={2} className="stroke-vert group-hover:underline" />
                                    <span className="text-vert text-lg font-semibold group-hover:underline">Ajouter</span>
                                </button>
                            </div>
                            {   
                                isAdd &&
                                <div className="relative p-4 bg-fonce-400 rounded-lg w-full flex items-end justify-between">
                                    <form onSubmit={(e) => e.preventDefault()} className="w-[94%] flex items-start flex-col gap-2">   
                                        <label htmlFor="faq-search" className="text-white text-xl font-semibold">Lier un Produit</label>
                                        <div className="relative w-full flex items-center justify-center">
                                            <div className="absolute inset-y-0 start-1 flex items-center ps-3 pointer-events-none">
                                                <Search strokeWidth={2} size={28} color="#FFF" />
                                            </div>
                                            <input value={recherche} onChange={(e) => setRecherche(e.target.value)} type="text" className="bg-transparent border-[1.5px] border-gray-600 text-gray-300 text-lg rounded-xl outline-none focus:ring-gray-300 focus:border-gray-300 block w-full ps-14  p-1.5 placeholder:text-gray-400" placeholder="Rechercher un produit..." />
                                        </div>                                
                                    </form>    
                                    <div onClick={() => setIsAdd(!isAdd)} className="cursor-pointer w-11 h-11 rounded-xl bg-fonce-200 flex items-center justify-center">
                                        <X size={24} strokeWidth={2} className="stroke-gray-500" />
                                    </div> 
                                    {   
                                        recherche &&
                                        <div className="absolute left-0 top-full z-40 p-2.5 rounded-lg w-3/5 max-h-[325.6px] border border-gray-600 bg-fonce-200 flex items-center justify-start flex-col gap-2 overflow-auto">
                                            {   
                                                produitFiltered.map((produit,  index) => (
                                                    <ProduitSimpleCard
                                                        key={index}
                                                        produitProps={produit}
                                                        btnAjouter
                                                    />
                                                ))
                                            }                                        
                                        </div> 
                                    }                                                       
                                </div>
                            }
                            {
                                produits.map((produit,  index) => (
                                    <ProduitCard
                                        key={index}
                                        produitProps={produit}
                                        setIsopen={setIsOpen}
                                        isOpen={isOpen}
                                    />
                                ))
                            }                            
                        </div>
                    }                                
                    {
                        tabs === "Transaction" &&
                        <div className="w-full flex items-start justify-start flex-col gap-4">
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
                    }                                
                </div>        
            </div>                                
        </div>        
    )
}

export default FounisseurDesc
