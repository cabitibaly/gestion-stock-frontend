import { clientData } from '@/data/clientData';
import ClientAddCard from '@/components/clientAddCard';
import { SimpleInformation } from '@/interface/simpleInformation';
import Link from 'next/link';
import { useFormContext } from 'react-hook-form';
import React, { useMemo } from 'react';

interface Props {
  clientSelected: SimpleInformation | null;
  setClientSelected: (client: SimpleInformation | null) => void;
}

const ClientSelector = ({ clientSelected, setClientSelected }: Props) => {
  const { register, setValue, watch } = useFormContext();
  const clientSearch = watch("clientSearch");

  const clientFiltered = useMemo(() => {
    return clientData.filter((client) =>
        `${client.nom} ${client.prenom}`.toLowerCase().includes(clientSearch?.toLowerCase())
    )
  }, [clientSearch])

  const handleClick = (id: number) => {
    const client = clientFiltered.find(e => e.id === id);
    if (client) {
      setClientSelected(client);
      setValue("clientId", client.id);
    }
  };

  return (
    <div className='relative w-3/5 flex flex-col gap-2.5'>
      <span className='text-gray-50 text-lg font-medium'>Client</span>
      <input {...register("clientSearch")}
        className={`border border-fonce-400 w-full py-1.5 px-2 rounded-lg text-gray-50 text-lg font-medium outline-none focus:ring-gray-600 focus:border-gray-600 placeholder:text-gray-400' placeholder='ex: Zoro' ${clientSelected ? "hidden" : ""}`} placeholder='ex: Zoro' />

      {clientSelected && (
        <div className='border border-fonce-400 py-1.5 px-2 rounded-lg'>
          <ClientAddCard client={clientSelected} btnRemove handleRemove={() => setClientSelected(null)} />
        </div>
      )}

      {clientSearch && !clientSelected && (
        <div className='absolute top-full left-0 z-30 bg-fonce-600 p-2.5 rounded-lg w-full max-h-[328px] overflow-auto'>
          {clientFiltered.map((client, index) => (
            <ClientAddCard key={index} client={client} handleClick={handleClick} btnAdd />
          ))}
          {clientFiltered.length === 0 && (
            <span className='text-gray-500 text-lg font-semibold text-center block'>Aucun client trouvé</span>
          )}
          <div className='bg-gray-800 rounded-b-lg mt-2 text-center'>
            <Link href='/client/nouveau' className='text-vert text-lg font-semibold hover:underline'>Ajouter un client</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientSelector;