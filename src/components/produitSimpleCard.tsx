"use client"
import { ProduitType } from '@/types/produits'
import { Dot, Plus, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface ProduitSimpleCardProps {
  produitProps: ProduitType,
  btnAjouter?: boolean, 
  btnSupprimer?: boolean,
  handleAjouter?: (id: number) => void,
  handleSupprimer?: (id: number) => void
}

const ProduitSimpleCard = ({produitProps, btnAjouter, btnSupprimer, handleAjouter, handleSupprimer}: ProduitSimpleCardProps) => {    

    return (
        <div className="relative p-2 rounded-xl bg-fonce-400 w-full flex items-center justify-start gap-4">
            <Image src={produitProps.image} height={10} width={80} alt="mac" className="rounded-xl" />
            <div className="w-auto flex items-start justify-start flex-col gap-1">
              <div className='max-w-[390px]'>
                <p className="text-lg text-white font-semibold line-clamp-1">{produitProps.nomProduit}</p>
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
                {   
                    produitProps.stockFaible &&  
                    <div className='flex'>
                        <Dot size={25} strokeWidth={2} className="stroke-gray-500" />
                        <div className="flex items-center justify-between gap-2">
                            <Image src={"/low.png"} height={10} width={20} alt="Faible" />                  
                            <span className="text-sm text-rouge font-semibold mr-2">Faible </span>                  
                        </div>
                    </div>
                }
              </div>
            </div>
            {   
                btnAjouter &&
                <div onClick={() => handleAjouter?.(produitProps.id)} className="absolute right-2 cursor-pointer w-10 h-10 rounded-xl bg-fonce-200 flex items-center justify-center">
                    <Plus size={24} strokeWidth={2} className="stroke-vert" />
                </div>
            }
            {   
                btnSupprimer &&
                <div onClick={() => handleSupprimer?.(produitProps.id)} className="absolute right-2 cursor-pointer w-10 h-10 rounded-xl bg-fonce-200 flex items-center justify-center">
                  <X size={24} strokeWidth={2} className="stroke-gray-500" />
                </div>
            }
        </div>
    )
}

export default ProduitSimpleCard
