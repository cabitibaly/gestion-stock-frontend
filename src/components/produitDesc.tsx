"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Ajustement from "./ajustement";
import { Props } from "@/interface/simpleProps";

const ProduitDesc = ({id, setIsOpen, isOpen}: Props) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const [ajustementOpen, setAjustementOpen] = useState<boolean>(false)

    return (
        <div onClick={() => setIsOpen(!isOpen)} key={id} className='absolute top-0 left-0 z-40 p-4 bg-noir/70 w-full h-full flex items-start justify-end'>
            <div onClick={(e) => e.stopPropagation()} className='relative border border-fonce-400 p-4 bg-fonce-600 rounded-2xl w-2/3 h-full flex items-center justify-start flex-col gap-4'>
                <div className='w-full flex items-center justify-between'>
                    <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer bg-fonce-400 p-2 rounded-xl flex items-center justify-center'>
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
                <div className='w-full flex items-center justify-start flex-col gap-4 overflow-auto'>
                    <div className='w-full flex items-center justify-between'>
                        <h2 className='text-white text-3xl font-black tracking-wide'>Macbook pro 16&quot; puce M3 Max 1TB/36GB</h2>
                        <button onClick={() => setAjustementOpen(!ajustementOpen)} className='border border-transparent bg-vert px-4 py-2 cursor-pointer rounded-xl text-noir text-lg font-semibold transition duration-200 ease-in-out hover:bg-transparent hover:text-vert hover:border-vert'>
                            Ajuster
                        </button>
                    </div>
                    <div className="w-full flex items-start justify-center gap-4">
                        <div className='w-1/2 flex items-start jusify-start flex-col gap-4'>
                            <h4 className="text-white text-2xl font-bold tracking-wide">Information Générale</h4>
                            <div className="w-full flex items-start justify-between gap-2">                                    
                                <div className="flex flex-col items-start justify-start gap-2">
                                    <span className="text-gray-500 text-lg font-semibold uppercase">Catégorie</span>
                                    <span className="text-gray-500 text-lg font-semibold uppercase">Code bar</span>
                                    <span className="text-gray-500 text-lg font-semibold uppercase">SKU</span>
                                    <span className="text-gray-500 text-lg font-semibold uppercase">Description</span>
                                </div>
                                <div className="w-2/3 flex flex-col items-start justify-start gap-2">
                                    <span className="text-gray-50 text-lg font-semibold">Ordinateur</span>
                                    <span className="text-gray-50 text-lg font-semibold">65783298</span>
                                    <span className="text-gray-50 text-lg font-semibold">MBK-PM4-16</span>
                                    <p className="text-gray-50 text-lg text-left font-semibold">
                                        Écran: 3024 x 1964 <br />
                                        RAM: 24GB <br />
                                        Stockage: 1TB <br />
                                        Processeur: Apple M4 <br />
                                        Poids: 1,55kg <br />
                                        Port: 3 x USB-C, 1x HDMI <br />
                                        1 x Carte SD,1 x port MagSafe
                                    </p>
                                </div>
                            </div>
                            <div className='w-full flex items-start jusify-start flex-col gap-4'>
                                <h4 className="text-white text-2xl font-bold tracking-wide">Information Vente</h4>
                                <div className="w-full flex items-start justify-between gap-2">                                    
                                    <div className="flex flex-col items-start justify-start gap-2">
                                        <span className="text-gray-500 text-lg font-semibold uppercase">Prix Vente</span>
                                        <span className="text-gray-500 text-lg font-semibold uppercase">Prix Achat</span>
                                    </div>
                                    <div className="w-2/3 flex flex-col items-start justify-start gap-2">
                                        <span className="text-gray-50 text-lg font-semibold">1630000 FCFA</span>
                                        <span className="text-gray-50 text-lg font-semibold">1580000 FCFA</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex items-start jusify-start flex-col gap-4'>
                                <h4 className="text-white text-2xl font-bold tracking-wide">Autre Information</h4>
                                <div className="w-full flex items-start justify-between gap-2">                                    
                                    <div className="flex flex-col items-start justify-start gap-2">
                                        <span className="text-gray-500 text-lg font-semibold uppercase">Founisseur</span>
                                    </div>
                                    <div className="w-2/3 flex flex-col items-start justify-start gap-2">
                                        <span className="text-gray-50 text-lg font-semibold">Apple Inc.</span>
                                    </div>
                                </div>
                            </div>
                        </div>                            
                        <div className='p-4 bg-fonce-400 rounded-xl w-1/2 flex items-center justify-start flex-col gap-4'>
                            <div className='flex items-center justify-between gap-4'>
                                <span className="text-gray-300 text-2xl font-semibold">Quantité</span>
                                <span className="text-vert text-2xl font-semibold">37</span>
                            </div>
                            <div className='w-full flex items-center justify-start flex-col gap-4'>
                                <Image src={"/mac.jpg"} alt="mac" width={400} height={100} className='rounded-xl' />
                                <div className='w-[92%] flex items-center justify-between gap-2'>
                                    <Image src={"/mac.jpg"} alt="mac" width={80} height={100} className='cursor-pointer rounded-xl' />
                                    <Image src={"/mac.jpg"} alt="mac" width={80} height={100} className='cursor-pointer rounded-xl' />
                                    <Image src={"/mac.jpg"} alt="mac" width={80} height={100} className='cursor-pointer rounded-xl' />
                                    <Image src={"/mac.jpg"} alt="mac" width={80} height={100} className='cursor-pointer rounded-xl' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
                { ajustementOpen && <Ajustement ajustementOpen={ajustementOpen} setAjustementOpen={setAjustementOpen} /> }
            </div>                           
        </div>
    )
}

export default ProduitDesc
