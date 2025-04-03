"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";

const NouveauClient = () => {
    const [etape, setEtape] = useState<number>(1)
    const [typeClient, setTypeClient] = useState<string>("Physique");
    const [source, setSource] = useState<string>("Ajout Manuel");

    return (
        <section className="relative p-6 bg-noir w-full h-screen flex items-center justify-start flex-col gap-4">
            <Link href="/client" className="self-start cursor-pointer flex items-center justify-center gap-2 group">
                <ArrowLeft size={28} strokeWidth={2} className="stroke-gray-500 transition duration-200 ease-in group-hover:stroke-bleu" />
                <span className="text-gray-500 text-xl font-semibold transition duration-200 ease-in group-hover:text-bleu">Retour</span>
            </Link>
            <div className="h-[87%] w-[55%] flex items-center justify-start flex-col gap-4">
                <div className="flex items-center justify-between flex-col gap-6">
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center justify-center gap-2">
                            <div className={`border-[1.5px] border-bleu w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ease-linear ${etape > 1 ? "bg-bleu" : "bg-transparent"}`}>
                                <span className={`text-lg font-medium ${etape > 1 ? "text-fonce-600" : "text-bleu"}`}>1</span>
                            </div>
                            <span className="text-lg text-bleu font-semibold">Information Générale</span>
                        </div>                    
                        <hr className={`border w-32 transition-all duration-200 ease-linear ${etape > 1 ? "border-bleu" : "border-gray-500"}`} />
                        <div className="flex items-center justify-center gap-2">
                            <div className={`border-[1.5px] w-10 h-10 rounded-full flex items-center justify-center transition-all delay-100 duration-200 ease-linear ${etape === 1 ? "border-gray-500" : etape === 2 ? "border-bleu" : "bg-bleu border-transparent"}`}>
                                <span className={`text-lg font-medium transition-all delay-100 duration-200 ease-in-out ${etape === 1 ? "text-gray-500" : etape === 2 ? "text-bleu" : "text-fonce-600"}`}>2</span>
                            </div>
                            <span className={`text-lg font-medium transition-all delay-100 duration-200 ease-linear ${etape === 1 ? "text-gray-500" : "text-bleu"}`}>Information Contact</span>
                        </div>                                              
                    </div>   
                    <h5 className="text-2xl text-white font-semibold tracking-wide transition-all duration-200 ease-in-out">
                        {
                            etape === 1 ? "Information Générale" : "Information Contact"    
                        }    
                    </h5>                                 
                </div>  
                {   etape === 1 &&
                    <div className="rounded-xl bg-fonce-600 p-4 w-3/4 max-h-[80%] flex items-center justify-start flex-col gap-6 overflow-auto">                        
                        <div className='w-full flex items-center justify-between'>
                            <div className='w-[45%] flex items-start justify-center flex-col gap-4'>
                                <span className="text-gray-50 text-lg font-semibold">Type Client</span>
                                <div className='w-full'>
                                    <Dropdown                   
                                        value={typeClient}                               
                                        options={["Physique", "Moral"]}
                                        optionLabel="label"
                                        onChange={(e) => setTypeClient(e.value as string)}
                                        placeholder="Selectionner.."
                                        highlightOnSelect={false}
                                        checkmark={false}
                                    />
                                </div>
                            </div>
                            <div className='w-[45%] flex items-start justify-center flex-col gap-4'>
                                <span className="text-gray-50 text-lg font-semibold">Source</span>
                                <div className='w-full'>
                                    <Dropdown                   
                                        value={source}                               
                                        options={["Ajout Manuel", "Autre"]}
                                        optionLabel="label"
                                        onChange={(e) => setSource(e.value as string)}
                                        placeholder="Selectionner.."
                                        highlightOnSelect={false}
                                        checkmark={false}
                                    />
                                </div>
                            </div>                            
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <div className='w-[45%] flex items-start justify-center flex-col gap-4'>
                                <span className="text-gray-50 text-lg font-semibold">Nom</span>
                                <input type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-300 focus:border-gray-300 placeholder:text-gray-400' placeholder='ex: Roronoa' />
                            </div>
                            <div className='w-[45%] flex items-start justify-center flex-col gap-4'>
                                <span className="text-gray-50 text-lg font-semibold">Prenom</span>
                                <input type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-300 focus:border-gray-300 placeholder:text-gray-400' placeholder='ex: Zoro' />
                            </div>
                        </div>
                        {   typeClient === "Moral" &&
                            <div className="w-full flex flex-col gap-6 transition-all duration-200 ease-linear">
                                <div className='w-full flex items-center justify-between'>
                                    <div className='w-[45%] flex items-start justify-center flex-col gap-4'>
                                        <span className="text-gray-50 text-lg font-semibold">N° IFU</span>
                                        <input type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-300 focus:border-gray-300 placeholder:text-gray-400' placeholder='XXXXXXXXX' />
                                    </div>
                                    <div className='w-[45%] flex items-start justify-center flex-col gap-4'>
                                        <span className="text-gray-50 text-lg font-semibold">RCCM</span>
                                        <input type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-300 focus:border-gray-300 placeholder:text-gray-400' placeholder='XX-XXX-00-0000-X-00000' />
                                    </div>
                                </div>
                                <div className='w-full flex items-center justify-between'>
                                    <div className='w-[45%] flex items-start justify-center flex-col gap-4'>
                                        <span className="text-gray-50 text-lg font-semibold">Régime Fiscal</span>
                                        <input type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-300 focus:border-gray-300 placeholder:text-gray-400' placeholder='XXX' />
                                    </div>
                                    <div className='w-[45%] flex items-start justify-center flex-col gap-4'>
                                        <span className="text-gray-50 text-lg font-semibold">Division Fiscale</span>
                                        <input type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-300 focus:border-gray-300 placeholder:text-gray-400' placeholder='XXX/XXXX' />
                                    </div>
                                </div> 
                            </div>                            
                        }                       
                    </div>                    
                } 

                {   etape === 2 &&
                    <div className="rounded-xl bg-fonce-600 p-4 w-3/4 max-h-[80%] flex items-center justify-start flex-col gap-6 overflow-auto">
                        <div className='w-full flex items-start justify-center flex-col gap-4'>
                            <span className="text-gray-50 text-lg font-semibold">Téléphone</span>
                            <input type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 ps-3 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-500 focus:border-gray-500 placeholder:text-gray-400' placeholder='ex: +000 00 00 00 00' />
                        </div>                        
                        <div className='w-full flex items-start justify-center flex-col gap-4'>
                            <span className="text-gray-50 text-lg font-semibold">Email</span>
                            <input type="email" className='border-[1.5px] border-fonce-400 w-full py-1.5 ps-3 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-500 focus:border-gray-500 placeholder:text-gray-400' placeholder='ex: example@example.com' />
                        </div>                        
                        <div className='w-full flex items-start justify-center flex-col gap-4'>
                            <span className="text-gray-50 text-lg font-semibold">Site Web</span>
                            <input type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 ps-3 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-500 focus:border-gray-500 placeholder:text-gray-400' placeholder='ex: example.com' />
                        </div>                        
                    </div>  
                }
            </div>
            <div className="absolute bottom-0 left-0 bg-fonce-400 p-4 w-full flex items-center justify-end gap-4">
                <button onClick={() => setEtape(etape - 1)} className={`border border-bleu bg-transparent px-4 py-2 cursor-pointer rounded-xl text-bleu text-lg  tracking-wide font-semibold transition-all duration-200 ease-in-out hover:bg-bleu hover:text-fonce-600 hover:border-transparent ${etape === 1 ? "hidden" : ""}`}>
                    Précédent
                </button>
                <button onClick={() => setEtape(etape + 1)} className={`border border-transparent bg-bleu px-[31px] py-2 cursor-pointer rounded-xl text-noir text-lg font-semibold transition duration-200 ease-in-out hover:bg-transparent hover:text-bleu hover:border-bleu ${etape === 2 ? "hidden" : ""}`}>
                    Suivant
                </button> 
                <button  className={`border border-transparent bg-bleu px-4 py-2 cursor-pointer rounded-xl text-noir text-lg font-semibold transition duration-200 ease-in-out hover:bg-transparent hover:text-bleu hover:border-bleu ${etape === 2 ? "block" : "hidden"}`}>
                    Enregistrer
                </button> 
            </div> 
        </section>             
    )
}

export default NouveauClient
