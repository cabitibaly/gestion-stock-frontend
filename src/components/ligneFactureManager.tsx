import React from 'react'
import { Plus } from 'lucide-react'
import { UseFieldArrayAppend, UseFieldArrayRemove, useFormContext } from 'react-hook-form'
import DesignationInput from './designationInput'
import ProduitInput from './produitInput'
import { LigneFactureInterface } from '@/interface/ligneFacture'
import { produits } from '@/data/produit'
import { FormData } from '@/interface/formData'

interface Props {
  fields: LigneFactureInterface[]
  append: UseFieldArrayAppend<FormData, "lignesFacture">
  remove: UseFieldArrayRemove
}

const LignesFactureManager = ({ fields, append, remove } : Props) => {
  const { setValue, watch } = useFormContext()
  const lignesFacture = watch("lignesFacture")

  const ajouterLigne = (estDesignation: boolean) => {
    append({
      id: fields.length === 0 ? 1 : fields[fields.length - 1].id + 1,
      designation: "",
      estDesignation,
      typeQuantite: "",
      quantite: 0,
      prixUnitaire: 0,
    })
  }

  const ajouterProduit = (produitId: number, indexLigne: number) => {
    setValue(`lignesFacture.${indexLigne}.produitId`, produitId)
    const produit = produits.find(p => p.id === produitId)
    if (produit) {
      setValue(`lignesFacture.${indexLigne}.prixUnitaire`, produit.prixVente)
    }
  }

    return (
        <div className='w-full flex items-start justify-start flex-col gap-4'>
            <span className='text-white text-2xl font-semibold'>Produits</span>

            {fields.map((ligne, index) =>
                ligne.estDesignation ? (
                <DesignationInput
                    key={ligne.id}
                    index={index}            
                    remove={remove}
                    ligne={lignesFacture?.[index]}
                />
                ) : (
                <ProduitInput
                    key={ligne.id}
                    index={index}
                    ligne={lignesFacture?.[index]}
                    remove={remove}                        
                    ajouterProduit={ajouterProduit}
                    produits={produits}
                />
                )
            )}

            <div className='flex items-center justify-center gap-4'>
                <button type='button' onClick={() => ajouterLigne(false)} className={`cursor-pointer flex items-center justify-center group`}>
                    <Plus size={16} strokeWidth={2} className="stroke-vert group-hover:underline" />
                    <span className="text-vert text-lg font-semibold group-hover:underline">Produit</span>
                </button>
                <button type='button' onClick={() => ajouterLigne(true)} className={`cursor-pointer flex items-center justify-center group`}>
                    <Plus size={16} strokeWidth={2} className="stroke-vert group-hover:underline" />
                    <span className="text-vert text-lg font-semibold group-hover:underline">Designation</span>
                </button>
            </div>
        </div>
    )
}

export default LignesFactureManager
