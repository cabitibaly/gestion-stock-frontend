import { X } from 'lucide-react';
import React from 'react';
import { Dropdown } from 'primereact/dropdown';
import { useFormContext } from 'react-hook-form';
import { LigneFactureInterface } from '@/interface/ligneFacture';

interface Props {
  index: number;
  remove: (index: number) => void;
  ligne: LigneFactureInterface;
}

const DesignationInput = ({ index, remove, ligne }: Props) => {
    const { register, setValue } = useFormContext();

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
        <div className='flex items-start justify-between gap-2'>
            <input {...register(`lignesFacture.${index}.designation`, { required: true })} className='border border-fonce-400 w-[90%] py-1.5 px-2 rounded-lg text-gray-50 text-lg font-medium outline-none focus:ring-gray-600 focus:border-gray-600 placeholder:text-gray-400' placeholder='Saisir la désignation...' />
            <button type='button' onClick={() => remove(index)} className='w-10 h-10 bg-fonce-200 rounded-xl flex items-center justify-center'>
                <X size={24} strokeWidth={2} className="stroke-gray-500" />
            </button>
        </div>
        <div className='flex justify-between'>
            <div className='w-[32%] flex flex-col gap-3'>
                <span className='text-gray-50 text-lg font-medium'>Quantité</span>
                <input onKeyDown={handleKeyPress} {...register(`lignesFacture.${index}.quantite`, { valueAsNumber: true })} className='border border-fonce-200 w-full py-1.5 px-2 rounded-lg text-gray-50 text-base font-medium outline-none focus:ring-gray-300 focus:border focus:border-gray-300 placeholder:text-gray-400' placeholder='0' />
            </div>
            <div className='w-[32%] flex flex-col gap-3'>
                <span className='text-gray-50 text-lg font-medium'>Type Quantité</span>
                <Dropdown value={ligne.typeQuantite ?? ""} options={["Piece", "Jour", "Mois", "Annee", "Autres"]} onChange={(e) => setValue(`lignesFacture.${index}.typeQuantite`, e.value)} placeholder='Aucun...' />
            </div>
            <div className='w-[32%] flex flex-col gap-3'>
                <span className='text-gray-50 text-lg font-medium'>Prix Unitaire</span>
                <input onKeyDown={handleKeyPress} {...register(`lignesFacture.${index}.prixUnitaire`, { valueAsNumber: true })} className='border border-fonce-200 w-full py-1.5 px-2 rounded-lg text-gray-50 text-base font-medium outline-none focus:ring-gray-300 focus:border focus:border-gray-300 placeholder:text-gray-400' placeholder='0' />
            </div>
        </div>
        </div>
    );
};

export default DesignationInput;