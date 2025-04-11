"use client"
import FacturePreview from "@/components/facturePreview"
import LignesFactureManager from "@/components/ligneFactureManager"
import ObjetEtDoitInputs from "@/components/objetEtDateInputs"
import ClientSelector from "@/components/selecteurClient"
import { FormData } from "@/interface/formData"
import { SimpleInformation } from "@/interface/simpleInformation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { FormProvider, useFieldArray, useForm } from "react-hook-form"


const NouvelleFacture = () => {
    const methods = useForm<FormData>({defaultValues: {lignesFacture: []}})
    const {fields, append, remove} = useFieldArray({control: methods.control, name: "lignesFacture"})
    const [estDefinitive, setEstDefinitive] = useState(false)    
    const [clientSelected, setClientSelected] = useState<SimpleInformation | null>(null)

    const submit = (data: FormData) => {
        console.log(data)
    }

    const lignesFactureChange = methods.watch("lignesFacture")

    return (
        <section className="relative bg-noir w-full h-screen flex items-center justify-start flex-col gap-4">
            <div className='border-b border-gray-600 w-full flex items-center justify-between'>
                <Link href="/factures" className="border-r border-gray-600 w-64 px-6 py-2 self-start cursor-pointer flex items-start justify-start gap-2 group">
                    <ArrowLeft size={28} strokeWidth={2} className="stroke-gray-500 transition duration-200 ease-in group-hover:stroke-bleu" />
                    <span className="text-gray-500 text-xl font-semibold transition duration-200 ease-in group-hover:text-bleu">Retour</span>
                </Link>
                <span onClick={methods.handleSubmit(submit)} className='text-2xl text-white font-semibold'>Nouvelle facture</span>
                <div className='border-l border-gray-600 py-2 px-6 flex items-center justify-center gap-3'>
                    <label htmlFor='switch' className={`flex relative cursor-pointer w-10 h-5 rounded-full transition-all duration-300 ${estDefinitive ? "bg-vert": "bg-fonce-400"}`}>
                        <input id='switch' checked={estDefinitive} onChange={(e) => setEstDefinitive(e.target.checked)} type="checkbox" className='sr-only peer' />
                        <span className='w-[15px] h-[15px] bg-white rounded-full absolute left-1 top-[2.5px] peer-checked:left-[22px] transition-all duration-300'></span>
                    </label>
                    <span className='text-white text-xl font-semibold'>Facrure Définitive</span>
                </div>
            </div>
            <div className='w-[80%] h-[90%] flex items-start justify-center gap-4 overflow-hidden'>
                <div className='border border-fonce-400 p-4 rounded-xl bg-transparent w-1/2 h-[92%] flex items-start justify-start flex-col gap-4'>
                    <span className='text-white text-2xl font-semibold'>Détails de la Facture</span>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(submit)} className='px-2 py-1 w-full h-[96%] flex items-start justify-start flex-col gap-4 overflow-auto'>
                            <ClientSelector clientSelected={clientSelected} setClientSelected={setClientSelected} />
                            <ObjetEtDoitInputs />
                            <LignesFactureManager
                                fields={fields}
                                append={append}
                                remove={remove}
                            />
                        </form>
                    </FormProvider>
                </div>
                <div className='bg-fonce-800 p-4 rounded-xl w-1/2 h-[92%] flex items-center justify-center'>
                    <FacturePreview estDefinitive={estDefinitive} fields={lignesFactureChange} taxe={0} />
                </div>
            </div>
            <div className="absolute bottom-0 left-0 bg-fonce-400 p-2.5 w-full flex items-center justify-end gap-4">
                <button className={`border border-bleu bg-transparent px-4 py-2 cursor-pointer rounded-xl text-bleu text-sm  tracking-wide font-semibold transition-all duration-200 ease-in-out hover:bg-bleu hover:text-fonce-600 hover:border-transparent}`}>
                    Annuler
                </button>
                <button  className={`border border-bleu bg-bleu px-4 py-2 cursor-pointer rounded-xl text-noir text-sm font-semibold transition duration-200 ease-in-out hover:bg-transparent hover:text-bleu hover:border}`}>
                    Enregistrer
                </button> 
            </div>
        </section>
    )
}

export default NouvelleFacture
