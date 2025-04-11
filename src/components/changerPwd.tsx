"use Client";
import { MotDePasseInterface } from "@/interface/motDePasse";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ChangerMotDePasse = () => {
    const { register } = useForm<MotDePasseInterface>()
    const [isVisibleOld, setIsVisibleOld] = useState<boolean>(false)
    const [isVisibleNew, setIsVisibleNew] = useState<boolean>(false)

    return (
        <div className="w-3/4 flex flex-col items-start justify-start gap-3">
            <form className="w-full flex flex-col gap-6">
                <div className='relative w-full flex flex-col gap-2.5'>
                    <label htmlFor="anc" className='text-gray-50 text-xl tracking-wide font-medium'>Ancien Mot de Passe</label>
                    <input id="anc" {...register("ancienMotDePasse")} type={isVisibleOld ? "text" : "password"} className='border border-fonce-400 w-full py-2 px-3 rounded-lg text-gray-50 text-xl font-medium outline-none focus:ring-gray-600 focus:border-gray-600 placeholder:text-gray-400' placeholder='12345678@zoro' />
                    <button type="button" onClick={() => setIsVisibleOld(!isVisibleOld)} className="absolute z-50 right-3 top-[50px] cursor-pointer">
                        {
                            isVisibleOld ? <Eye size={20} strokeWidth={2} className="stroke-gray-400" /> : <EyeOff size={20} strokeWidth={2} className="stroke-gray-600" />
                        }                                
                    </button>
                </div>
                <div className='relative w-full flex flex-col gap-2.5'>
                    <label htmlFor="nouveau" className='text-gray-50 text-xl tracking-wide font-medium'>Nouveau Mot de Passe</label>
                    <input id="nouveau" {...register("nouveauMotDePasse")} type={isVisibleNew ? "text" : "password"} className='border border-fonce-400 w-full py-2 px-3 rounded-lg text-gray-50 text-xl font-medium outline-none focus:ring-gray-600 focus:border-gray-600 placeholder:text-gray-400' placeholder='12345678@zoro' />
                    <button type="button" onClick={() => setIsVisibleNew(!isVisibleNew)} className="absolute z-50 right-3 top-[50px] cursor-pointer">
                        {
                            isVisibleNew ? <Eye size={20} strokeWidth={2} className="stroke-gray-400" /> : <EyeOff size={20} strokeWidth={2} className="stroke-gray-600" />
                        }                                
                    </button>
                </div>                        
                <button className={`self-end border border-transparent bg-bleu px-4 py-2 w-40 cursor-pointer rounded-xl text-noir text-lg font-semibold transition duration-200 ease-in-out hover:bg-transparent hover:text-bleu hover:border-bleu`}>
                    Enregistrer
                </button>
            </form>
        </div>
    )
}

export default ChangerMotDePasse
