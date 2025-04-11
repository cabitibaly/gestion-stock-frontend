"use client"
import { ProduitType } from '@/types/produitsType'
import { Dot, Plus, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface ProduitSimpleCardProps {
  produitProps: ProduitType,
  btnAjouter?: boolean, 
  btnSupprimer?: boolean,
  handleAjouter?: (produitId: number, indexLigne: number) => void,
  handleSupprimer?: (id: number) => void,
  indexLigne: number
}

const ProduitAddCard = ({produitProps, btnAjouter, btnSupprimer, handleAjouter, handleSupprimer, indexLigne}: ProduitSimpleCardProps) => {    

    return (
        <div className="relative p-2 rounded-xl bg-fonce-400 w-full flex items-center justify-start gap-4">            
            <div className="w-auto flex items-start justify-start flex-col gap-1">
              <div className='cursor-default max-w-[350px] relative group'>
                <p className="text-lg text-white font-semibold line-clamp-1">{produitProps.nomProduit}</p>
                <div className='absolute top-0 left-0 z-[100] text-white border border-gray-600 p-1 rounded-lg bg-fonce-600 max-w-[360px] hidden group-hover:block'>                  
                  {produitProps.nomProduit}                                         
                </div>
              </div>              
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm text-gray-500 font-semibold">{produitProps.categorie}</span>
                <Dot size={25} strokeWidth={2} className="stroke-gray-500" />
                <div className="flex items-center justify-between gap-2">
                  <Image src={"/product-service.png"} height={10} width={20} alt="produit-service" />
                  <div className="text-sm text-gray-500 font-semibold">
                    <span className="text-sm text-gray-500 font-semibold mr-2">Stock : </span>
                    <span className="text-sm text-gray-50 font-semibold">{produitProps.quantite} en stock</span>
                  </div>
                </div>                
              </div>
            </div>
            {   
                btnAjouter &&
                <div onClick={() => handleAjouter?.(produitProps.id, indexLigne)} className="absolute right-2 cursor-pointer w-10 h-10 rounded-xl bg-fonce-200 flex items-center justify-center">
                    <Plus size={24} strokeWidth={2} className="stroke-vert" />
                </div>
            }
            {   
                btnSupprimer &&
                <div onClick={() => handleSupprimer?.(indexLigne)} className="absolute right-2 cursor-pointer w-10 h-10 rounded-xl bg-fonce-200 flex items-center justify-center">
                  <X size={24} strokeWidth={2} className="stroke-gray-500" />
                </div>
            }
        </div>
    )
}

export default ProduitAddCard
