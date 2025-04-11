"use client";
import { produits } from "@/data/produit";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import ProduitAddCard from "./produitAddCard";
import { LigneFactureInterface } from "@/interface/ligneFacture";

interface SelecteurProduitLigneFactureProps {
    index?: number,
    ligne: LigneFactureInterface,
    ajouterProduit: (produitId: number, indexLigne: number) => void,
    supprimerLigne: (id: number) => void,
}

const SelecteurProduitLigneFacture = ({ ligne, ajouterProduit, supprimerLigne, index }: SelecteurProduitLigneFactureProps) => {
    const [produitSearch, setProduitSearch] = useState<string>("")    

    const produitFiltered = useMemo(() => {
        return produits.filter((produit) =>
          produit.nomProduit.toLowerCase().includes(produitSearch.toLowerCase())
        )
    }, [produitSearch])

    return (
        <div className={`relative w-full flex items-start justify-between gap-2 ${ligne.produitId ? "hidden" : ""}`}>
            <input value={produitSearch} onChange={e => setProduitSearch(e.target.value)} type="text" className='border border-fonce-400 w-[90%] py-1.5 px-2 rounded-lg text-gray-50 text-lg font-medium outline-none focus:ring-gray-600 focus:border-gray-600 placeholder:text-gray-400' placeholder='Rechercher un produit...' />
            <div onClick={() => supprimerLigne(ligne.id)} className="cursor-pointer w-10 h-10 rounded-xl bg-fonce-200 flex items-center justify-center">
                <X size={24} strokeWidth={2} className="stroke-gray-500" />
            </div>
            {
                produitSearch &&
                <div className='absolute top-full left-0 z-30 px-2.5 pt-2.5 pb-8 rounded-lg bg-fonce-600 w-full max-h-[328.833px] flex items-center justify-start flex-col gap-4'> 
                    <div className='w-full flex items-start justify-start flex-col gap-4 overflow-auto'>
                        {
                            produitFiltered.map((produit, i) => (
                                <ProduitAddCard
                                    key={i}
                                    indexLigne={index as number}
                                    produitProps={produit}   
                                    btnAjouter 
                                    handleAjouter={ajouterProduit}                                                                       
                                />
                            ))
                        }                                                                             
                    </div>
                    {
                        produitFiltered.length === 0 &&
                        <div className='relative -top-3 w-full flex items-center justify-center'>
                            <span className='text-gray-500 text-lg font-semibold'>Aucun produit trouvé</span>
                        </div>
                    }                                     
                    <div className='absolute bottom-0 bg-gray-800 rounded-b-lg w-full'>
                        <Link href={"/inventaire/nouveau"} className={`cursor-pointer flex items-center justify-center group`}>
                            <Plus size={16} strokeWidth={2} className="stroke-vert group-hover:underline" />
                            <span className="text-vert text-lg font-semibold group-hover:underline">Ajouter un Produit</span>
                        </Link>
                    </div>                                 
                </div>
            }
        </div>
    )
}

export default SelecteurProduitLigneFacture
