"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";

const Page = () => {
    const [etape, setEtape] = useState<number>(1)
    const [categorie, setCategorie] = useState<string>("")

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
                            <span className={`text-lg font-medium transition-all delay-100 duration-200 ease-linear ${etape === 1 ? "text-gray-500" : "text-bleu"}`}>Information de vente</span>
                        </div>                    
                        <hr className={`border w-32 transition-all duration-200 ease-linear ${etape > 2 ? "border-bleu" : "border-gray-500"}`} />
                        <div className="flex items-center justify-center gap-2">
                            <div className={`border-[1.5px] w-10 h-10 rounded-full flex items-center justify-center transition-all delay-100 duration-200 ${etape === 3 ? "border-bleu" : "border-gray-500"}`}>
                                <span className={`text-lg font-medium transition-all delay-100 duration-200 ease-initial ${etape === 3 ? "text-bleu" : "text-gray-500"}`}>3</span>
                            </div>
                            <span className={`text-lg font-medium transition-all delay-100 duration-200 ease-initial ${etape === 3 ? "text-bleu" : "text-gray-500"}`}>Quantité</span>
                        </div>    
                    </div>   
                    <h5 className="text-2xl text-white font-semibold tracking-wide transition-all duration-200 ease-in-out">
                        {
                            etape === 1 ? "Information Générale" :
                            etape === 2 ? "Information de vente" : "Quantité"                            
                        }    
                    </h5>                                 
                </div>  
                {   etape === 1 &&
                    <div className="rounded-xl bg-fonce-600 p-4 w-3/4 max-h-[80%] flex items-center justify-start flex-col gap-6 overflow-auto">
                        <div className='w-full flex items-start justify-center flex-col gap-4'>
                            <span className="text-gray-50 text-lg font-semibold">Nom du produit</span>
                            <input type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 ps-3 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-500 focus:border-gray-500 placeholder:text-gray-400' placeholder='ex: lenovo yoga 729 15-Kib' />
                        </div>
                        <div className="w-full flex items-start justify-center flex-col gap-4">
                            <span className="text-gray-50 text-lg font-semibold">Categorie</span>
                            <div className='w-full'>
                                <Dropdown                   
                                    value={categorie}                               
                                    options={["ordinateur", "tablette", "smartphone", "autres"]}
                                    optionLabel="label"
                                    onChange={(e) => setCategorie(e.value as string)}
                                    placeholder="Selectionner.."
                                    highlightOnSelect={false}
                                    checkmark={false}
                                />
                            </div>
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <div className='w-[45%] flex items-start justify-center flex-col gap-4'>
                                <span className="text-gray-50 text-lg font-semibold">SKU</span>
                                <input type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-300 focus:border-gray-300 placeholder:text-gray-400' placeholder='LNV-YOG-720' />
                            </div>
                            <div className='w-[45%] flex items-start justify-center flex-col gap-4'>
                                <span className="text-gray-50 text-lg font-semibold">Barcode</span>
                                <input type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-300 focus:border-gray-300 placeholder:text-gray-400' placeholder='xxxxxxxx' />
                            </div>
                        </div>
                        <div className='w-full flex items-start justify-center flex-col gap-4'>
                            <span className="text-gray-50 text-lg font-semibold">Description</span>
                            <textarea className='border-[1.5px] border-fonce-400 w-full h-36 py-1.5 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-300 focus:border-gray-300 placeholder:text-gray-400 resize-none' placeholder="Plus de détail sur le prod..." ></textarea>
                        </div>
                        <div className='w-full flex items-start justify-center flex-col gap-4'>
                            <span className="text-gray-50 text-lg font-semibold">Images</span>
                            <div className="flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-fonce-400 rounded-lg cursor-pointer bg-transparent">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-fonce-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg>
                                        <p className="mb-2 text-sm text-fonce-200"><span className="font-semibold">Cliquer pour charger</span></p>
                                        <p className="text-xs text-fonce-200">PNG, JPG, JPEG</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="sr-only" accept="image/png, image/jpeg, image/jpg" />
                                </label>
                            </div>
                        </div>
                    </div>                    
                } 

                {   etape === 2 &&
                    <div className="rounded-xl bg-fonce-600 p-4 w-3/4 max-h-[80%] flex items-center justify-start flex-col gap-6 overflow-auto">
                        <div className="w-full flex items-start justify-center flex-col gap-4">
                            <span className="text-gray-50 text-lg font-semibold">Prix de Vente</span>
                            <div className='w-full rounded-xl flex'>
                                <div className='bg-fonce-200 rounded-s-xl w-[10%] flex items-center justify-center text-lg text-white font-semibold'>
                                    FCFA
                                </div>
                                <input type="text" className='w-full rounded-e-xl py-1.5 px-2 text-gray-50 text-lg font-semibold outline-none border-[1.5px] border-fonce-400  placeholder:text-gray-400' placeholder='0' />                            
                            </div>
                        </div>
                        <div className="w-full flex items-start justify-center flex-col gap-4">
                            <span className="text-gray-50 text-lg font-semibold">Prix d&apos;Achat</span>
                            <div className='w-full rounded-xl flex'>
                                <div className='bg-fonce-200 rounded-s-xl w-[10%] flex items-center justify-center text-lg text-white font-semibold'>
                                    FCFA
                                </div>
                                <input type="text" className='w-full rounded-e-xl py-1.5 px-2 text-gray-50 text-lg font-semibold outline-none border-[1.5px] border-fonce-400  placeholder:text-gray-400' placeholder='0' />                            
                            </div>
                        </div>
                    </div>  
                }

                {   etape === 3 &&
                    <div className="rounded-xl bg-fonce-600 p-4 w-3/4 max-h-[80%] flex items-center justify-start flex-col gap-6 overflow-auto">
                        <div className="w-full flex items-start justify-center flex-col gap-4">
                            <span className="text-gray-50 text-lg font-semibold">Quantité</span>                            
                            <input type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 ps-3 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-500 focus:border-gray-500 placeholder:text-gray-400' placeholder='0' />                            
                        </div>                        
                        <div className="w-full flex items-start justify-center flex-col gap-4">
                            <span className="text-gray-50 text-lg font-semibold">Seuil</span>                            
                            <input type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 ps-3 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-500 focus:border-gray-500 placeholder:text-gray-400' placeholder='0' />                            
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

export default Page
