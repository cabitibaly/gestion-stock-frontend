"use client";
import Navbar from '@/components/navbar';
import ProduitCard from '@/components/produitCard';
import { ArrowRight, Check, ChevronDown, List, RotateCw, Search } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const Page = () => {
    const [recherche, setRecherche] = useState<string>("")
    const [statut, setStatut] = useState<string>("Tout")
    const [trier, setTrier] = useState<string>("")
    const [niveauStock, setNiveauStock] = useState<string>("")
    const [prixMin, setPrixMin] = useState<string>("")
    const [prixMax, setPrixMax] = useState<string>("")
    const [isList, setIsList] = useState<boolean>(true)
    const [isActive, setIsActive] = useState<boolean>(false)

    const handleClick = (): void => {
        setIsList(!isList)
    }

    const handleReset = (): void => {
        setStatut("Tout")
        setTrier("")
        setNiveauStock("")
        setPrixMin("")
        setPrixMax("")
    }

    return (
        <section className="relative px-6 pt-6 pb-2 w-full h-auto bg-noir flex items-start justify-start flex-col gap-8">            
            <Navbar />
            <div className='mt-2 w-full flex items-end justify-between gap-4'>  
                <div className='flex items-end gap-6'>
                    <h1 className='text-5xl text-white font-bold tracking-wide'>Produits</h1>
                    <div className='border border-gray-300 h-7 px-2.5 py-0 rounded-lg flex items-center justify-center gap-2'>
                        <span className='text-white text-base font-semibold'>3489</span>
                        <span className='text-gray-600 text-base font-semibold'>produits</span>
                    </div>
                </div>  
                <form onSubmit={(e) => e.preventDefault()} className="w-[47%] flex items-center">   
                    <label htmlFor="faq-search" className="sr-only">Recherche</label>
                    <div className="relative w-full flex items-center justify-center">
                        <div className="absolute inset-y-0 start-1 flex items-center ps-3 pointer-events-none">
                            <Search strokeWidth={2} size={28} color="#FFF" />
                        </div>
                        <input value={recherche} onChange={(e) => setRecherche(e.target.value)} type="text" className="bg-transparent border-2 border-gray-600 text-gray-300 text-lg rounded-xl outline-none focus:ring-gray-300 focus:border-gray-300 block w-full ps-14  p-1.5 placeholder:text-gray-400" placeholder="Rechercher un produit..." />
                    </div>
                </form> 
                <div className='rounded-xl h-11 bg-fonce-200 flex'>
                    <div onClick={() => handleClick() } className={`${ isList ? "border border-vert" : "border border-transparent" } cursor-pointer rounded-xl p-2 h-full flex items-center justify-center`}>
                        <List size={28} strokeWidth={2} className={`${ isList ? "stroke-vert" : "stroke-gray-400" }`} />
                    </div>
                    <div onClick={() => handleClick() } className={`${ !isList ? "border border-vert" : "border border-transparent" } cursor-pointer rounded-xl p-2 h-full flex items-center justify-center`}>
                        {
                            isList ? <Image src="/grid-gris.png" alt="grid-gris" width={30} height={10} /> :<Image src="/grid-vert.png" alt="grid-gris" width={30} height={10} />                            
                        }                        
                    </div>
                </div>
                <hr className='border border-gray-600 h-11' />
                <button className='border border-transparent bg-vert px-2.5 py-2 cursor-pointer rounded-xl text-noir text-lg font-semibold transition duration-200 ease-in-out hover:bg-transparent hover:text-vert hover:border-vert'>
                    Nouveau Produit
                </button>                         
            </div>
            <div className='w-full h-[75.25vh] flex items-center justify-between gap-4'>
                <div className='relative bg-fonce-400 px-4 py-4 rounded-3xl w-1/4 h-full flex items-center justify-start flex-col gap-3'>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-gray-500 text-lg font-semibold'>Statut Produit</span>
                        <div className='w-full grid grid-cols-2 gap-4'>
                            <div onClick={() => setStatut("Tout")} className={`${statut === "Tout" ? "border-2 border-vert" : "border-2 border-gray-500"}  p-2 cursor-pointer rounded-xl flex items-center justify-between group transition duration-200 ease-in-out hover:border-vert`}>
                                <span className='text-gray-50 text-lg font-semibold'>Tout</span>
                                <span className={`${statut === "Tout" ? "bg-vert/30 text-vert" : "bg-gray-500/30 text-gray-50" } text-sm font-semibold px-2.5 py-0.5 rounded-lg transition duration-200 ease-linear group-hover:bg-vert/30 group-hover:text-vert`}>3489</span>
                            </div>
                            <div onClick={() => setStatut("Active")} className={`${statut === "Active" ? "border-2 border-vert" : "border-2 border-gray-500"}  p-2 cursor-pointer rounded-xl flex items-center justify-between group transition duration-200 ease-in-out hover:border-vert`}>
                                <span className='text-gray-50 text-lg font-semibold'>Active</span>
                                <span className={`${statut === "Active" ? "bg-vert/30 text-vert" : "bg-gray-500/30 text-gray-50" } text-sm font-semibold px-2.5 py-0.5 rounded-lg transition duration-200 ease-linear group-hover:bg-vert/30 group-hover:text-vert`}>1376</span>
                            </div>
                            <div onClick={() => setStatut("Inactive")} className={`${statut === "Inactive" ? "border-2 border-vert" : "border-2 border-gray-500"}  p-2 cursor-pointer rounded-xl flex items-center justify-between group transition duration-200 ease-in-out hover:border-vert`}>
                                <span className='text-gray-50 text-lg font-semibold'>Inactive</span>
                                <span className={`${statut === "Inactive" ? "bg-vert/30 text-vert" : "bg-gray-500/30 text-gray-50" } text-sm font-semibold px-2.5 py-0.5 rounded-lg transition duration-200 ease-linear group-hover:bg-vert/30 group-hover:text-vert`}>743</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-gray-500 text-lg font-semibold'>Trier Par</span>
                        <div className='relative bg-fonce-200 py-2 px-3 cursor-pointer rounded-xl w-full flex items-center justify-between group'>
                            <span className='text-gray-50 text-lg font-semibold'>{trier === "" ? "Aucune selection" : trier }</span>
                            <ChevronDown size={28} strokeWidth={2.5} className='stroke-gray-500 transition duration-200 ease-linear group-hover:stroke-gray-50 group-hover:rotate-180' />
                            <div className="border border-gray-500 bg-fonce-400 w-full absolute left-0 top-full rounded-xl hidden items-start justify-start flex-col z-20 group-hover:flex">
                                <button onClick={() => setTrier('Alphabétique: A-Z')} className='bg-fonce-transparent border-b border-gray-500 cursor-pointer px-3 py-1.5 rounded-t-xl w-full text-gray-50 text-lg font-semibold flex items-center justify-between transition duration-200 ease-out hover:bg-fonce-200'>
                                    Alphabétique: A-Z
                                    { trier === "Alphabétique: A-Z" && <Check size={28} strokeWidth={2.5} className='stroke-vert' /> }
                                </button>                                
                                <button onClick={() => setTrier('Alphabétique: Z-A')} className='bg-fonce-transparent border-b border-gray-500 cursor-pointer px-3 py-1.5 w-full text-gray-50 text-lg font-semibold flex items-center justify-between transition duration-200 ease-out hover:bg-fonce-200'>
                                    Alphabétique: Z-A
                                    { trier === "Alphabétique: Z-A" && <Check size={28} strokeWidth={2.5} className='stroke-vert' /> }
                                </button>                                
                                <button onClick={() => setTrier('Date création')} className='bg-fonce-transparent cursor-pointer px-3 py-1.5 rounded-b-xl w-full text-gray-50 text-lg font-semibold flex items-center justify-between transition duration-200 ease-out hover:bg-fonce-200'>
                                    Date création
                                    { trier === "Date création" && <Check size={28} strokeWidth={2.5} className='stroke-vert' /> }
                                </button>                                
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-gray-500 text-lg font-semibold'>Niveau Stock</span>
                        <div className='relative bg-fonce-200 py-2 px-3 cursor-pointer rounded-xl w-full flex items-center justify-between group'>
                            <span className='text-gray-50 text-lg font-semibold'>{niveauStock === "" ? "Aucune selection" : niveauStock }</span>
                            <ChevronDown size={28} strokeWidth={2.5} className='stroke-gray-500 transition duration-200 ease-linear group-hover:stroke-gray-50 group-hover:rotate-180' />
                            <div className="border border-gray-500 bg-fonce-400 w-full absolute left-0 top-full rounded-xl hidden items-start justify-start flex-col z-20 group-hover:flex">
                                <button onClick={() => setNiveauStock('Elevé')} className='bg-fonce-transparent border-b border-gray-500 cursor-pointer px-3 py-1.5 rounded-t-xl w-full text-gray-50 text-lg font-semibold flex items-center justify-between transition duration-200 ease-out hover:bg-fonce-200'>
                                    Elevé
                                    { niveauStock === "Elevé" && <Check size={28} strokeWidth={2.5} className='stroke-vert' /> }
                                </button>                                
                                <button onClick={() => setNiveauStock('Faible')} className='bg-fonce-transparent border-b border-gray-500 cursor-pointer px-3 py-1.5 w-full text-gray-50 text-lg font-semibold flex items-center justify-between transition duration-200 ease-out hover:bg-fonce-200'>
                                    Faible
                                    { niveauStock === "Faible" && <Check size={28} strokeWidth={2.5} className='stroke-vert' /> }
                                </button>                                
                                <button onClick={() => setNiveauStock('Epuisé')} className='bg-fonce-transparent cursor-pointer px-3 py-1.5 rounded-b-xl w-full text-gray-50 text-lg font-semibold flex items-center justify-between transition duration-200 ease-out hover:bg-fonce-200'>
                                    Epuisé
                                    { niveauStock === "Epuisé" && <Check size={28} strokeWidth={2.5} className='stroke-vert' /> }
                                </button>                                
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-gray-500 text-lg font-semibold'>Prix</span>
                        <div className='border border-gray-500 h- rounded-xl flex'>
                            <div className='bg-fonce-200 rounded-s-xl w-[20%] flex items-center justify-center text-lg text-white font-semibold'>
                                FCFA
                            </div>
                            <input value={prixMin} onChange={e => setPrixMin(e.target.value)} type="text" className='py-2 px-3 rounded-e-xl w-[80%] text-gray-50 text-lg outline-none placeholder:text-gray-400' placeholder='Prix Minimum' />                            
                        </div>
                        <div className='border border-gray-500 h- rounded-xl flex'>
                            <div className='bg-fonce-200 rounded-s-xl w-[20%] flex items-center justify-center text-lg text-white font-semibold'>
                                FCFA
                            </div>
                            <input value={prixMax} onChange={e => setPrixMax(e.target.value)} type="text" className='py-2 px-3 rounded-e-xl w-[80%] text-gray-50 text-lg outline-none placeholder:text-gray-400' placeholder='Prix Maximun' />                            
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
                    <ProduitCard 
                        id={1}
                        image="/mac.jpg"
                        nomProduit="Macbook pro 16&quot; puce M3 Max 1TB/36GB"
                        categorie="Ordinateur"
                        quantite={37}
                        stockFaible={false}  
                        prixAchat={1580000}
                        prixVente={1630000}
                    />                    
                    <ProduitCard 
                        id={2}
                        image="/ultra.jpg"
                        nomProduit="Galaxy Book 4 ultra 16&quot; core i9 1TB/32GB"
                        categorie="Ordinateur"
                        quantite={14}
                        stockFaible={false}  
                        prixAchat={1100000}
                        prixVente={1800000}
                    />                    
                    <ProduitCard 
                        id={3}
                        image="/asus.jpg"
                        nomProduit="Asus Rog Zephirus G14 14&quot; AMD Ryzen 9 1TB/32GB"
                        categorie="Ordinateur"
                        quantite={2}
                        stockFaible={true} 
                        prixAchat={780000}
                        prixVente={830000}  
                    />                                                          
                    <ProduitCard 
                        id={1}
                        image="/mac.jpg"
                        nomProduit="Macbook pro 16&quot; puce M3 Max 1TB/36GB"
                        categorie="Ordinateur"
                        quantite={37}
                        stockFaible={false}  
                        prixAchat={1580000}
                        prixVente={1630000}
                    />                    
                    <ProduitCard 
                        id={2}
                        image="/ultra.jpg"
                        nomProduit="Galaxy Book 4 ultra 16&quot; core i9 1TB/32GB"
                        categorie="Ordinateur"
                        quantite={14}
                        stockFaible={false}  
                        prixAchat={1100000}
                        prixVente={1800000}
                    />                    
                    <ProduitCard 
                        id={3}
                        image="/asus.jpg"
                        nomProduit="Asus Rog Zephirus G14 14&quot; AMD Ryzen 9 1TB/32GB"
                        categorie="Ordinateur"
                        quantite={2}
                        stockFaible={true} 
                        prixAchat={780000}
                        prixVente={830000}  
                    />                                                          
                </div>
            </div>
            <div className='absolute top-0 left-0 p-4 bg-noir/70 w-full h-full flex items-start justify-end'>
                <div className='border border-fonce-400 p-4 bg-fonce-600 rounded-2xl w-2/3 h-full flex items-center justify-start flex-col gap-4'>
                    <div className='w-full flex items-center justify-between'>
                        <div className='bg-fonce-400 p-2 rounded-xl flex items-center justify-center'>
                            <ArrowRight size={28} strokeWidth={2} className='stroke-gray-500' />
                        </div>
                        <div className='flex items-center justify-center gap-20'>
                            <div className='flex items-center justify-center gap-3'>
                                <label htmlFor='switch' className={`flex relative cursor-pointer w-20 h-9 rounded-full transition-all duration-300 ${isActive ? "bg-vert": "bg-fonce-400"}`}>
                                    <input id='switch' checked={isActive} onChange={(e) => setIsActive(e.target.checked)} type="checkbox" className='sr-only peer' />
                                    <span className='w-2/5 h-[85%] bg-white rounded-full absolute left-1 top-[3px] peer-checked:left-11 transition-all duration-300'></span>
                                </label>
                                <span className='text-white text-base font-semibold'>Activer</span>
                            </div>    
                            <button className='border border-vert bg-transparent px-4 py-2 cursor-pointer rounded-xl text-vert text-lg  tracking-wide font-semibold transition duration-200 ease-in-out hover:bg-vert hover:text-fonce-600 hover:border-transparent'>
                                Modifier
                            </button>                   
                        </div>
                    </div>
                    <div className='border border-gray-200 p-2 w-full flex items-center justify-start flex-col gap-4 overflow-auto'>
                        <div className='w-full flex items-center justify-between'>
                            <span className='text-white text-2xl font-bold tracking-wide'>Macbook pro 16&quot; puce M3 Max 1TB/36GB</span>
                            <button className='border border-transparent bg-vert px-4 py-2 cursor-pointer rounded-xl text-noir text-lg font-semibold transition duration-200 ease-in-out hover:bg-transparent hover:text-vert hover:border-vert'>
                                Ajuster
                            </button>
                        </div>
                    </div>
                </div>                
            </div>
        </section>
    )
}

export default Page
