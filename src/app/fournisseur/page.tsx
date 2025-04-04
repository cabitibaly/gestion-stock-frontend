"use client";
import FournisseurCard from "@/components/fournisseurCard";
import FounisserusDesc from "@/components/founisseurDesc";
import Navbar from "@/components/navbar";
import { Check, ChevronDown, List, RotateCw, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Fournisseur = () => {
    const [recherche, setRecherche] = useState<string>("")
    const [isList, setIsList] = useState<boolean>(true)
    const [prixMin, setPrixMin] = useState<string>("")
    const [prixMax, setPrixMax] = useState<string>("")
    const [nombreMin, setNombreMin] = useState<string>("")
    const [nombreMax, setNombreMax] = useState<string>("")
    const [trierPar, setTrierPar] = useState<string>("")
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleReset = (): void => {
        setPrixMin("");
        setPrixMax("");
        setTrierPar("");
        setNombreMin("");
        setNombreMax("");
    }

    return (
        <section className="relative px-6 pt-6 pb-2 w-full h-auto bg-noir flex items-start justify-start flex-col gap-8">
            <Navbar />
            <div className='mt-2 w-full flex items-end justify-between gap-2'>  
                <div className='flex items-end gap-6'>
                    <h1 className='text-5xl text-white font-bold tracking-wide'>Fournisseurs</h1>
                    <div className='border border-gray-300 h-7 px-2.5 py-0 rounded-lg flex items-center justify-center gap-2'>
                        <span className='text-white text-base font-semibold'>53</span>
                        <span className='text-gray-600 text-base font-semibold'>Founisseurs</span>
                    </div>
                </div>  
                <form onSubmit={(e) => e.preventDefault()} className="w-[40%] flex items-center">   
                    <label htmlFor="faq-search" className="sr-only">Recherche</label>
                    <div className="relative w-full flex items-center justify-center">
                        <div className="absolute inset-y-0 start-1 flex items-center ps-3 pointer-events-none">
                            <Search strokeWidth={2} size={28} color="#FFF" />
                        </div>
                        <input value={recherche} onChange={(e) => setRecherche(e.target.value)} type="text" className="bg-transparent border-2 border-gray-600 text-gray-300 text-lg rounded-xl outline-none focus:ring-gray-300 focus:border-gray-300 block w-full ps-14  p-1.5 placeholder:text-gray-400" placeholder="Rechercher un founisseur..." />
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
                <Link href={"/fournisseur/nouveau"} className='border border-transparent bg-vert px-2.5 py-2 cursor-pointer rounded-xl text-noir text-lg font-semibold transition duration-200 ease-in-out hover:bg-transparent hover:text-vert hover:border-vert'>
                    Nouveau Fournisseur
                </Link>                         
            </div>
            <div className='w-full h-[75.25vh] flex items-center justify-between gap-4'>                                            
                <div className='relative bg-fonce-400 px-4 py-4 rounded-3xl w-1/4 h-full flex items-center justify-start flex-col gap-3'>                                                                                                                        
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-gray-500 text-lg font-semibold'>Trier Par</span>
                        <div className='relative bg-fonce-200 py-2 px-3 cursor-pointer rounded-xl w-full flex items-center justify-between group'>
                            <span className='text-gray-50 text-lg font-semibold'>{trierPar === "" ? "Aucune selection" : trierPar }</span>
                            <ChevronDown size={28} strokeWidth={2.5} className='stroke-gray-500 transition duration-200 ease-linear group-hover:stroke-gray-50 group-hover:rotate-180' />
                            <div className="border border-gray-500 bg-fonce-400 w-full absolute left-0 top-full rounded-xl hidden items-start justify-start flex-col z-20 group-hover:flex">
                                <button onClick={() => setTrierPar('A-Z')} className='bg-fonce-transparent border-b border-gray-500 cursor-pointer px-3 py-1.5 rounded-t-xl w-full text-gray-50 text-lg font-semibold flex items-center justify-between transition duration-200 ease-out hover:bg-fonce-200'>
                                    Alphabétique: A-Z
                                    { trierPar === "A-Z" && <Check size={28} strokeWidth={2.5} className='stroke-vert' /> }
                                </button>                                
                                <button onClick={() => setTrierPar('Z-A')} className='bg-fonce-transparent border-b border-gray-500 cursor-pointer px-3 py-1.5 w-full text-gray-50 text-lg font-semibold flex items-center justify-between transition duration-200 ease-out hover:bg-fonce-200'>
                                    Alphabétique: Z-A
                                    { trierPar === "Z-A" && <Check size={28} strokeWidth={2.5} className='stroke-vert' /> }
                                </button>                              
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-gray-500 text-lg font-semibold'>Dette</span>
                        <div className='border border-gray-500 h- rounded-xl flex'>
                            <div className='bg-fonce-200 rounded-s-xl w-[20%] flex items-center justify-center text-lg text-white font-semibold'>
                                FCFA
                            </div>
                            <input value={prixMin} onChange={e => setPrixMin(e.target.value)} type="text" className='py-2 px-3 rounded-e-xl w-[80%] text-gray-50 text-lg font-semibold outline-none placeholder:text-gray-400' placeholder='Montant Minimum' />                            
                        </div>
                        <div className='border border-gray-500 h- rounded-xl flex'>
                            <div className='bg-fonce-200 rounded-s-xl w-[20%] flex items-center justify-center text-lg text-white font-semibold'>
                                FCFA
                            </div>
                            <input value={prixMax} onChange={e => setPrixMax(e.target.value)} type="text" className='py-2 px-3 rounded-e-xl w-[80%] text-gray-50 text-lg font-semibold outline-none placeholder:text-gray-400' placeholder='Montant Maximun' />                            
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-gray-500 text-lg font-semibold'>Nombre de Produits</span>
                        <div className='border border-gray-500 h- rounded-xl flex'>                            
                            <input value={nombreMin} onChange={e => setNombreMin(e.target.value)} type="text" className='py-2 px-3 rounded-e-xl w-full text-gray-50 text-lg font-semibold outline-none placeholder:text-gray-400' placeholder='Nombre Minimum' />                            
                        </div>
                        <div className='border border-gray-500 h- rounded-xl flex'>
                            <input value={nombreMax} onChange={e => setNombreMax(e.target.value)} type="text" className='py-2 px-3 rounded-e-xl w-full text-gray-50 text-lg font-semibold outline-none placeholder:text-gray-400' placeholder='nombre Maximun' />                            
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
                    <FournisseurCard 
                        fournisseur={
                            {   
                                id: 1,
                                image: "/naruto.jpeg",
                                nom: "Uzumaki",
                                prenom: "Naruto",
                                email: "naruto@konoha.jp",
                                adresse: "Konoha, pays du feu",
                                telephone: "06 00 00 00 00",
                                dette: 1630000,
                                nbProduits: 10,
                                estActive: true
                            }
                        }
                        setIsopen={setIsOpen}
                        isOpen={isOpen}
                    />
                    <FournisseurCard 
                        fournisseur={
                            {   
                                id: 1,
                                image: "/kushina.jpeg",
                                nom: "Uzumaki",
                                prenom: "Kushina",
                                email: "kushina@konoha.jp",
                                adresse: "Konoha, pays du feu",
                                telephone: "06 00 00 00 00",
                                dette: 1630000,
                                nbProduits: 43,
                                estActive: false
                            }
                        }
                        setIsopen={setIsOpen}
                        isOpen={isOpen}
                    />
                    <FournisseurCard 
                        fournisseur={
                            {   
                                id: 1,
                                image: "/jiraya.jpeg",
                                nom: "",
                                prenom: "Jiraya",
                                email: "jiraya@konoha.jp",
                                adresse: "Konoha, pays du feu",
                                telephone: "06 00 00 00 00",
                                dette: 1630000,
                                nbProduits: 11,
                                estActive: false
                            }
                        }
                        setIsopen={setIsOpen}
                        isOpen={isOpen}
                    />
                </div>
            </div>  
            { isOpen && <FounisserusDesc id={1} isOpen={isOpen} setIsOpen={setIsOpen} />}                                                                     
        </section>
    )
}

export default Fournisseur
