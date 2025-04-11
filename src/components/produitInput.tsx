import { Dropdown } from 'primereact/dropdown';
import ProduitAddCard from '@/components/produitAddCard';
import SelecteurProduitLigneFacture from './selecteurProduit';
import { useFormContext } from 'react-hook-form';
import React from 'react';
import { ProduitType } from '@/types/produitsType';
import { LigneFactureInterface } from '@/interface/ligneFacture';

interface Props {
  ligne: LigneFactureInterface;
  index: number;
  produits: ProduitType[];
  ajouterProduit: (produitId: number, ligneId: number) => void;
  remove: (index: number) => void;
}

const ProduitInput = ({ ligne, index, produits, ajouterProduit, remove }: Props) => {
    const { register, setValue } = useFormContext();
    const produit = produits.find(p => p.id === ligne.produitId);

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {    
        const allowedKeys = [
          'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Tab'
        ];
  
        const isCtrlKey = e.ctrlKey && ['a', 'r', 'c', 'v', 'x'].includes(e.key.toLowerCase());
        
        if (!/^[0-9]$/.test(e.key) && !allowedKeys.includes(e.key) && !isCtrlKey) {
          e.preventDefault();
        }
    };

    return (
        <div className="w-[80%] border-b border-gray-600 pb-4 flex flex-col gap-4">
            <SelecteurProduitLigneFacture index={index} ligne={ligne} ajouterProduit={ajouterProduit} supprimerLigne={() => remove(index)} />
            {
                produit &&
                <ProduitAddCard produitProps={produit} btnSupprimer handleSupprimer={() => remove(index)} indexLigne={index} />
            }
            <div className='flex justify-between'>
                <div className='w-[32%] flex flex-col gap-3'>
                    <span className='text-gray-50 text-lg font-semibold'>Quantité</span>
                    <input onKeyDown={handleKeyPress} {...register(`lignesFacture.${index}.quantite`, { valueAsNumber: true })} defaultValue={0} className='border border-fonce-200 w-full py-1.5 px-2 rounded-lg text-gray-50 text-base font-medium outline-none focus:ring-gray-300 focus:border focus:border-gray-300 placeholder:text-gray-400' placeholder='0' />
                </div>
                <div className='w-[32%] flex flex-col gap-3'>
                    <span className='text-gray-50 text-lg font-medium'>Type Quantité</span>
                    <Dropdown value={ligne.typeQuantite ?? ""} options={["Piece", "Jour", "Mois", "Annee", "Autres"]} onChange={(e) => setValue(`lignesFacture.${index}.typeQuantite`, e.value)} placeholder='Aucun...' />
                </div>
                <div className='w-[32%] flex flex-col gap-3'>
                    <span className='text-gray-50 text-lg font-semibold'>Prix Unitaire</span>
                    <input onKeyDown={handleKeyPress} value={isNaN(ligne.prixUnitaire) ? 0 : ligne.prixUnitaire} {...register(`lignesFacture.${index}.prixUnitaire`, { valueAsNumber: true })} className='border border-fonce-200 w-full py-1.5 px-2 rounded-lg text-gray-50 text-base font-medium outline-none focus:ring-gray-300 focus:border focus:border-gray-300 placeholder:text-gray-400' placeholder='0' />
                </div>
            </div>
        </div>
    );
};

export default ProduitInput;