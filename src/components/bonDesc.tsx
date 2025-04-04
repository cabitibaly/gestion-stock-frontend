"use client";
import { Props } from "@/interface/simpleProps";
import { ArrowLeft, ArrowRight, Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import StatutCommande from "./statutCommande";

const BonDesc = ({ id, setIsOpen, isOpen }: Props) => {
    const [statut, setStatut] = useState<string>("Créée")

    return (
        <div onClick={() => setIsOpen(!isOpen)} key={id} className='absolute top-0 left-0 z-40 p-4 bg-noir/70 w-full h-full flex items-start justify-end'>
            <div onClick={(e) => e.stopPropagation()} className='relative border border-fonce-400 p-4 bg-fonce-600 rounded-2xl w-[70%] h-full flex items-center justify-start flex-col gap-6'>
                <div className='w-full flex items-center justify-between'>
                    <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer bg-fonce-400 p-2 rounded-xl flex items-center justify-center'>
                        <ArrowRight size={28} strokeWidth={2} className='stroke-gray-500' />
                    </div>
                    <div className='flex items-center justify-center gap-10'>
                        <div className='relative bg-fonce-200 py-2 px-4 cursor-pointer rounded-xl w-40 h-[45.6px] flex items-center justify-between gap-4 group'>
                            <span className='text-gray-50 text-lg font-semibold'>{statut}</span>
                            <hr className="absolute right-14 border border-gray-500 h-11" />
                            <ChevronDown size={28} strokeWidth={2.5} className='stroke-gray-500 transition duration-200 ease-linear group-hover:stroke-gray-50 group-hover:rotate-180' />
                            <div className="border border-gray-500 bg-fonce-400 w-full absolute left-0 top-full rounded-xl hidden items-start justify-start flex-col z-20 group-hover:flex">                                                               
                                <button onClick={() => setStatut('Créée')} className='bg-fonce-transparent border-b border-gray-500 rounded-t-xl cursor-pointer px-3 py-1.5 w-full text-gray-50 text-lg font-semibold flex items-center justify-between transition duration-200 ease-out hover:bg-fonce-200'>
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
                        <button className='border border-vert bg-transparent px-4 py-2 cursor-pointer rounded-xl text-vert text-lg  tracking-wide font-semibold transition duration-200 ease-in-out hover:bg-vert hover:text-fonce-600 hover:border-transparent'>
                            Modifier
                        </button>                   
                    </div>
                </div>
                <div className='w-full flex items-center justify-start flex-col gap-4 overflow-auto'>
                    <div className='w-full flex items-center justify-between'>
                        <div className="flex items-center justify-center gap-6">
                            <h2 className='text-white text-3xl font-black tracking-wide'>Bon de Commande N°: BC-215</h2>
                            <div className={`px-2.5 py-0 rounded-lg flex items-center justify-center gap-2 ${"Payé" === "Payé" ? "bg-vert" : "bg-rouge"}`}>                        
                                {
                                    "Payé" === "Payé" ?
                                        <Image src={"/wallet-check.png"} width={22} height={10} alt="wallet-check" /> :
                                        <Image src={"/wallet-remove.png"} width={22} height={10} alt="wallet-remove" />
                                }
                                <span className='text-lg text-black font-semibold'>
                                    {"Payé" === "Payé" ? "Payé" : "Impayé"}
                                </span>
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
                    <div className="w-full flex items-start justify-center gap-8">
                        <div className="w-2/3 flex items-start justify-start flex-col gap-6">
                            <div className='bg-fonce-400 w-full py-3 px-4 rounded-lg flex items-start justify-start flex-col gap-2'>
                                <span className='text-xl text-white font-bold tracking-wide'>Commande créée, <span className='text-gray-500'>{new Date().toLocaleDateString("fr-FR")}</span></span>
                                <StatutCommande statutCommande={statut} />
                            </div>
                            <div className='w-full flex items-start jusify-start flex-col gap-4'>
                                <h4 className="text-white text-2xl font-bold tracking-wide">Détails du Bon</h4>
                                <div className="w-full flex items-start justify-between gap-2">                                    
                                    <div className="flex flex-col items-start justify-start gap-2">
                                        <span className="text-gray-500 text-lg font-semibold uppercase">Date Création</span>
                                        <span className="text-gray-500 text-lg font-semibold uppercase">Date d&apos;échéance</span>
                                        <span className="text-gray-500 text-lg font-semibold uppercase">Condition de paiement</span>
                                    </div>
                                    <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                                        <span className="text-gray-50 text-lg font-semibold">{new Date().toLocaleDateString("fr-FR")}</span>
                                        <span className="text-gray-50 text-lg font-semibold">{new Date().toLocaleDateString("fr-FR")}</span>
                                        <span className="text-gray-50 text-lg font-semibold">Payé à la livraison</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex items-start jusify-start flex-col gap-4'>
                                <h4 className="text-white text-2xl font-bold tracking-wide">Produits commandés</h4>
                                <div className="w-full relative">
                                    <table className=" w-full text-sm text-left text-gray-500">
                                        <thead className="border-t border-fonce-400 text-xs text-gray-500 uppercase bg-transparent">
                                            <tr>
                                                <th scope="col" className="pr-6 py-3 w-[45%] rounded-s-lg">
                                                    Désignation
                                                </th>
                                                <th scope="col" className="pr-6 py-2 w-[15%]">
                                                    Quantité
                                                </th>
                                                <th scope="col" className="pr-6 py-2 w-[15%]">
                                                    Prix unitaire
                                                </th>
                                                <th scope="col" className="pr-6 py-2 w-[15%] rounded-e-lg">
                                                    Prix Total
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-y border-fonce-400 bg-transparent">
                                                <th scope="row" className="pr-3 py-2 font-semibold text-gray-50 flex items-center justify-start gap-2">                                
                                                    <Image src={"/mac.jpg"} height={10} width={45} alt="mac" className="rounded-xl" />
                                                    <div className="w-full">
                                                        <p className="line-clamp-1">Macbook pro 16&quot; puce M3 Max 1TB/36GB</p>
                                                        <p className="text-gray-500 font-semibold line-clamp-1">SKU: MBK-PM4-16</p>
                                                    </div>                                                    
                                                </th>
                                                <td className="px-0 py-3 text-gray-50 font-semibold">
                                                    1
                                                </td>
                                                <td className="px-0 py-3 text-gray-50 font-semibold">
                                                    1580000
                                                </td>
                                                <td className="px-0 py-3 text-gray-50 font-semibold">
                                                    1580000
                                                </td>
                                            </tr>                                            
                                        </tbody>
                                        <tfoot>
                                            <tr className="font-semibold">
                                                <th scope="row" className="px-2 py-2 text-base"></th>
                                                <td className="px-0 py-2"></td>
                                                <td className="px-0 py-2  text-gray-500">Total sans réduction</td>
                                                <td className="px-0 py-2  text-gray-50">1580000</td>
                                            </tr>
                                            <tr className="font-semibold">
                                                <th scope="row" className="px-2 py-2 text-base"></th>
                                                <td className="px-0 py-2"></td>
                                                <td className="px-0 py-2  text-gray-500">Reduction</td>
                                                <td className="px-0 py-2  text-gray-50">-</td>
                                            </tr>
                                            <tr className="font-semibold text-white">
                                                <th scope="row" className="px-2 py-2 text-base"></th>
                                                <td className="px-0 py-2"></td>
                                                <td className="border-t border-fonce-400 px-0 py-2 text-gray-500">Total</td>
                                                <td className="border-t border-fonce-400 px-0 py-2 text-gray-50">1580000</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            <div className='w-full flex items-start jusify-start flex-col gap-2'>
                                <h4 className="text-white text-2xl font-bold tracking-wide">Terme et Conditions de commande</h4>
                                <p className="w-full text-gray-400 text-lg font-semibold">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, totam recusandae dolor quia sed facere 
                                    suscipit unde cumque eaque, quasi magni incidunt. Maiores qui, recusandae eius sint quos ipsam earum.
                                </p>
                            </div>
                            <div className='w-full flex items-start jusify-start flex-col gap-2'>
                                <h4 className="text-white text-2xl font-bold tracking-wide">Note de la commande</h4>
                                <p className="w-full text-gray-400 text-lg font-semibold">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div className="px-4 py-2.5 bg-fonce-400 rounded-lg w-1/3 flex items-start justify-start flex-col gap-4"> 
                            <div className="w-full flex items-start justify-start flex-col gap-2">
                                <span className="text-white text-xl font-semibold">Fournisseur</span>   
                                <div className="px-2 py-3 bg-fonce-200 w-full rounded-lg flex items-center justify-start flex-col gap-2">                                       
                                    <div className="w-full flex items-center justify-start gap-3">
                                        <Image src="/naruto.jpeg" height={10} width={50} alt="naruto" className="rounded-2xl" />
                                        <div className="flex items-start justify-center flex-col">
                                            <span className="text-white text-sm font-semibold">Uzumaki Naruto</span>
                                            <span className="text-bleu text-sm font-semibold">https://www.narutouzumaki.jp</span>
                                        </div>                                        
                                    </div> 
                                    <div className="w-full flex items-center justify-between">
                                        <span className="text-gray-500 text-sm font-semibold uppercase">Telephone</span>
                                        <span className="text-white text-sm font-semibold">+226 61500768</span>
                                    </div>                              
                                    <div className="w-full flex items-center justify-between">
                                        <span className="text-gray-500 text-sm font-semibold uppercase">Email</span>
                                        <span className="text-white text-sm font-semibold">roronoazoro@mugiwara.op</span>
                                    </div>
                                    <button className='mt-1 border border-vert bg-transparent w-full py-2 cursor-pointer rounded-xl text-vert text-sm  tracking-wide font-semibold transition duration-200 ease-in-out hover:bg-vert hover:text-fonce-600 hover:border-transparent'>
                                        Envoyer un Email
                                    </button>                             
                                </div>
                            </div>                                                                                
                            <div className="w-full flex items-start justify-start flex-col gap-2">
                                <span className="text-white text-xl font-semibold">Personne à Contacter</span>   
                                <div className="px-2 py-3 bg-fonce-200 w-full rounded-lg flex items-center justify-start flex-col gap-2">                                       
                                    <div className="w-full flex items-center justify-start gap-3">
                                        <Image src="/nara.jpeg" height={10} width={50} alt="shikamaru" className="rounded-2xl" />
                                        <span className="text-white text-lg font-semibold">Nara Shikamaru</span>
                                    </div> 
                                    <div className="w-full flex items-center justify-between">
                                        <span className="text-gray-500 text-sm font-semibold uppercase">Telephone</span>
                                        <span className="text-white text-sm font-semibold">+226 61500768</span>
                                    </div>                              
                                    <div className="w-full flex items-center justify-between">
                                        <span className="text-gray-500 text-sm font-semibold uppercase">Email</span>
                                        <span className="text-white text-sm font-semibold">roronoazoro@mugiwara.op</span>
                                    </div>
                                    <button className='mt-1 border border-vert bg-transparent w-full py-2 cursor-pointer rounded-xl text-vert text-sm  tracking-wide font-semibold transition duration-200 ease-in-out hover:bg-vert hover:text-fonce-600 hover:border-transparent'>
                                        Envoyer un Email
                                    </button>                             
                                </div>
                            </div>                                                                               
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BonDesc;
