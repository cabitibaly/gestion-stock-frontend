"use client";

import { ModifierProfilInterface } from "@/interface/modifierProfil";
import { Upload } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";

const ModifierProfil = () => {
    const { register } = useForm<ModifierProfilInterface>()

    return (
        <div className="w-3/4 flex flex-col items-start justify-start gap-3">
            <div className="flex items-center justify-start gap-6">
                <Image src={"/zoro.jpg"} height={100} width={80} alt="zoro" className="rounded-full" />
                <label htmlFor="uploadFile" className=" flex gap-2 bg-fonce-600 text-white text-base px-4 py-2 w-auto items-center justify-center outline-none rounded-lg cursor-pointer mx-auto transition duration-200 ease-in-out hover:bg-fonce-400">  
                    <Upload size={20} />                                      
                    Modifier
                    <input accept="image/*" type="file" id='uploadFile' className="sr-only" />
                </label>
            </div>
            <form className="w-full flex flex-col gap-4">
                <div className='w-full flex flex-col gap-2.5'>
                    <label htmlFor="nom" className='text-gray-50 text-xl tracking-wide font-medium'>Nom</label>
                    <input id="nom" {...register("nom")} className='border border-fonce-400 w-full py-2 px-3 rounded-lg text-gray-50 text-xl font-medium outline-none focus:ring-gray-600 focus:border-gray-600 placeholder:text-gray-400' placeholder='ex: Roronoa' />
                </div>
                <div className='w-full flex flex-col gap-2.5'>
                    <label htmlFor="prenom" className='text-gray-50 text-xl tracking-wide font-medium'>Prénom</label>
                    <input id="prenom" {...register("prenom")} className='border border-fonce-400 w-full py-2 px-3 rounded-lg text-gray-50 text-xl font-medium outline-none focus:ring-gray-600 focus:border-gray-600 placeholder:text-gray-400' placeholder='ex: Zoro' />
                </div>
                <div className='w-full flex flex-col gap-2.5'>
                    <label htmlFor="email" className='text-gray-50 text-xl tracking-wide font-medium'>Email</label>
                    <input id="email" {...register("email")} type="email" className='border border-fonce-400 w-full py-2 px-3 rounded-lg text-gray-50 text-xl font-medium outline-none focus:ring-gray-600 focus:border-gray-600 placeholder:text-gray-400' placeholder='ex: zoro@mugiwara.op' />
                </div>
                <div className='w-full flex flex-col gap-2.5'>
                    <label htmlFor="telephone" className='text-gray-50 text-xl tracking-wide font-medium'>Téléphone</label>
                    <input id="telephone" {...register("telephone")} className='border border-fonce-400 w-full py-2 px-3 rounded-lg text-gray-50 text-xl font-medium outline-none focus:ring-gray-600 focus:border-gray-600 placeholder:text-gray-400' placeholder='ex: +000 00 00 00 00' />
                </div>
                <button  className={`self-end border border-transparent bg-bleu px-4 py-2 w-40 cursor-pointer rounded-xl text-noir text-lg font-semibold transition duration-200 ease-in-out hover:bg-transparent hover:text-bleu hover:border-bleu`}>
                    Enregistrer
                </button>
            </form>
        </div>
    )
}

export default ModifierProfil
