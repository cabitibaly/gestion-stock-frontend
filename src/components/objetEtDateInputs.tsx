import { Calendar } from "primereact/calendar";
import { useFormContext } from "react-hook-form";
import { addLocale } from "primereact/api";
import fr from "../constants/fr.json";
import { useState } from "react";

addLocale("fr", fr.fr)

const ObjetEtDoitInputs = () => {
    const { register, setValue } = useFormContext();
    const [date, setDate] = useState<Date | null>(null)

    const handleChange = (e: Date) => {
      setDate(e)
      setValue("date", e)
    }
  
    return (
      <>
        <div className='w-3/5 flex flex-col gap-2.5'>
          <span className='text-gray-50 text-lg font-medium'>Objet</span>
          <input {...register("objet")} className='border border-fonce-400 w-full py-1.5 px-2 rounded-lg text-gray-50 text-lg font-medium outline-none focus:ring-gray-600 focus:border-gray-600 placeholder:text-gray-400' placeholder='ex: Facture de paiement' />
        </div>
        <div className='w-3/5 flex flex-col gap-2.5'>
          <span className='text-gray-50 text-lg font-medium'>Date</span>          
          <div className='w-full'>
            <Calendar 
              id='nouveau-facture'
              className="w-full"                   
              onChange={(e) => handleChange(e.value as Date)} 
              value={date}                                         
              locale="fr" 
              placeholder="Choisir une date"
              showIcon={false}
            /> 
          </div>
        </div>
      </>
    );
};
  
 export default ObjetEtDoitInputs;