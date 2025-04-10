"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NouveauFournisseur = () => {
    const [etape, setEtape] = useState<number>(1)

    return (
        <section className="relative p-6 bg-noir w-full h-screen flex items-center justify-start flex-col gap-4">
            <Link href="/inventaire" className="self-start cursor-pointer flex items-center justify-center gap-2 group">
                <ArrowLeft size={28} strokeWidth={2} className="stroke-gray-500 transition duration-200 ease-in group-hover:stroke-bleu" />
                <span className="text-gray-500 text-xl font-semibold transition duration-200 ease-in group-hover:text-bleu">Retour</span>
            </Link>
            <div className="h-[87%] flex items-center justify-start flex-col gap-4">
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
                        <hr className={`border w-32 transition-all duration-200 ease-linear ${etape > 2 ? "border-bleu" : "border-gray-500"}`} />
                        <div className="flex items-center justify-center gap-2">
                            <div className={`border-[1.5px] w-10 h-10 rounded-full flex items-center justify-center transition-all delay-100 duration-200 ${etape === 3 ? "border-bleu" : "border-gray-500"}`}>
                                <span className={`text-lg font-medium transition-all delay-100 duration-200 ease-initial ${etape === 3 ? "text-bleu" : "text-gray-500"}`}>3</span>
                            </div>
                            <span className={`text-lg font-medium transition-all delay-100 duration-200 ease-initial ${etape === 3 ? "text-bleu" : "text-gray-500"}`}>Personne à Contacter</span>
                        </div>    
                    </div>   
                    <h5 className="text-2xl text-white font-semibold tracking-wide transition-all duration-200 ease-in-out">
                        {
                            etape === 1 ? "Information Générale" :
                            etape === 2 ? "Information Contact" : "Personne à Contacter"                            
                        }    
                    </h5>                                 
                </div>
                {   etape === 1 &&
                    <div className="rounded-xl bg-fonce-600 p-4 w-[70%] max-h-[80%] flex items-center justify-start flex-col gap-6 overflow-auto">                        
                        <div className='w-full flex items-center justify-between'>
                            <div className='w-[45%] flex items-start justify-center flex-col gap-4'>
                                <span className="text-gray-50 text-lg font-semibold">Nom</span>
                                <input type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-300 focus:border-gray-300 placeholder:text-gray-400' placeholder='ex: Uzumaki' />
                            </div>
                            <div className='w-[45%] flex items-start justify-center flex-col gap-4'>
                                <span className="text-gray-50 text-lg font-semibold">Prenom</span>
                                <input type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-300 focus:border-gray-300 placeholder:text-gray-400' placeholder='ex: Naruto' />
                            </div>
                        </div>                            
                        <div className='w-full flex items-center justify-between'>
                            <div className='w-[45%] flex items-start justify-center flex-col gap-4'>
                                <span className="text-gray-50 text-lg font-semibold">Entreprise</span>
                                <input type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-300 focus:border-gray-300 placeholder:text-gray-400' placeholder='ex: Hokage Inc.' />
                            </div>
                            <div className='w-[45%] flex items-start justify-center flex-col gap-4'>
                                <span className="text-gray-50 text-lg font-semibold">Adresse</span>
                                <input type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-300 focus:border-gray-300 placeholder:text-gray-400' placeholder='ex: pays du feu, konoha' />
                            </div>
                        </div>                                                                                 
                    </div>                    
                }
                {   etape === 2 &&
                    <div className="rounded-xl bg-fonce-600 p-4 w-[70%] max-h-[80%] flex items-center justify-start flex-col gap-6 overflow-auto">                        
                        <div className='w-full flex items-start justify-center flex-col gap-4'>
                            <span className="text-gray-50 text-lg font-semibold">Téléphone</span>
                            <input type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 ps-3 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-500 focus:border-gray-500 placeholder:text-gray-400' placeholder='ex: +000 00 00 00 00' />
                        </div>                            
                        <div className='w-full flex items-start justify-center flex-col gap-4'>
                            <span className="text-gray-50 text-lg font-semibold">Email</span>
                            <input type="email" className='border-[1.5px] border-fonce-400 w-full py-1.5 ps-3 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-500 focus:border-gray-500 placeholder:text-gray-400' placeholder='ex: shikamaru@konoha.jp' />
                        </div>                                                                                
                        <div className='w-full flex items-start justify-center flex-col gap-4'>
                            <span className="text-gray-50 text-lg font-semibold">Site Web</span>
                            <input type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 ps-3 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-500 focus:border-gray-500 placeholder:text-gray-400' placeholder='ex: example.com' />
                        </div>                                                                                
                    </div>                    
                }
                {   etape === 3 &&                    
                    <div className="rounded-xl bg-fonce-600 p-4 w-[70%] max-h-[80%] flex items-center justify-start flex-col gap-6 overflow-auto">
                        <div className='w-full flex items-center justify-between'>
                            <div className='w-[45%] flex items-start justify-center flex-col gap-4'>
                                <span className="text-gray-50 text-lg font-semibold">Nom</span>
                                <input type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-300 focus:border-gray-300 placeholder:text-gray-400' placeholder='ex: Nara' />
                            </div>
                            <div className='w-[45%] flex items-start justify-center flex-col gap-4'>
                                <span className="text-gray-50 text-lg font-semibold">Prenom</span>
                                <input type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-300 focus:border-gray-300 placeholder:text-gray-400' placeholder='ex: Shikamaru' />
                            </div>
                        </div>                        
                        <div className='w-full flex items-start justify-center flex-col gap-4'>
                            <span className="text-gray-50 text-lg font-semibold">Téléphone</span>
                            <input type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 ps-3 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-500 focus:border-gray-500 placeholder:text-gray-400' placeholder='ex: +000 00 00 00 00' />
                        </div>                            
                        <div className='w-full flex items-start justify-center flex-col gap-4'>
                            <span className="text-gray-50 text-lg font-semibold">Email</span>
                            <input type="email" className='border-[1.5px] border-fonce-400 w-full py-1.5 ps-3 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-500 focus:border-gray-500 placeholder:text-gray-400' placeholder='ex: shikamaru@konoha.jp' />
                        </div>                     
                    </div>  
                }
            </div>
            <div className="absolute bottom-0 left-0 bg-fonce-400 p-4 w-full flex items-center justify-end gap-4">
                <button onClick={() => setEtape(etape - 1)} className={`border border-bleu bg-transparent px-4 py-2 cursor-pointer rounded-xl text-bleu text-lg  tracking-wide font-semibold transition-all duration-200 ease-in-out hover:bg-bleu hover:text-fonce-600 hover:border-transparent ${etape === 1 ? "hidden" : ""}`}>
                    Précédent
                </button>
                <button onClick={() => setEtape(etape + 1)} className={`border border-transparent bg-bleu px-[31px] py-2 cursor-pointer rounded-xl text-noir text-lg font-semibold transition duration-200 ease-in-out hover:bg-transparent hover:text-bleu hover:border-bleu ${etape === 3 ? "hidden" : ""}`}>
                    Suivant
                </button> 
                <button  className={`border border-transparent bg-bleu px-4 py-2 cursor-pointer rounded-xl text-noir text-lg font-semibold transition duration-200 ease-in-out hover:bg-transparent hover:text-bleu hover:border-bleu ${etape === 3 ? "block" : "hidden"}`}>
                    Enregistrer
                </button> 
            </div>
        </section>
    )
}

export default NouveauFournisseur;
