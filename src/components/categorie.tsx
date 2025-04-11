"use client";
import { Search, Trash2 } from "lucide-react";

const Categorie = () => {
    return (
        <div className='w-3/4 h-full flex items-center justify-start flex-col gap-4'>  
            <div className="w-full flex items-center justify-between">
                <div className="w-[40%] flex items-center">   
                    <label htmlFor="cat-search" className="sr-only">Recherche</label>
                    <div className="relative w-full flex items-center justify-center">
                        <div className="absolute inset-y-0 start-1 flex items-center ps-1 pointer-events-none">
                            <Search strokeWidth={2} size={20} color="#FFF" />
                        </div>
                        <input id="cat-search" type="text" className="bg-transparent border border-gray-600 text-gray-300 text-lg rounded-xl outline-none focus:ring-gray-300 focus:border-gray-300 block w-full ps-9  p-1.5 placeholder:text-gray-400" placeholder="Recherchers..." />
                    </div>
                </div>
                <button className={`self-end border border-transparent bg-bleu px-4 py-1.5 w-40 cursor-pointer rounded-xl text-noir text-lg font-semibold transition duration-200 ease-in-out hover:bg-transparent hover:text-bleu hover:border-bleu`}>
                    Ajouter
                </button>
            </div>
            <div className='rounded-xl w-full h-full flex items-center justify-start flex-col gap-4 overflow-auto'>                        
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="rounded-xltext-xs text-gray-700 uppercase bg-fonce-600">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                N° Catégorie
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Intitulé
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>                             
                        <tr className="bg-fonce-800 border-b border-gray-700 transition duration-300 ease-in hover:bg-fonce-400">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-50 whitespace-nowrap">
                                01
                            </th>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-50 whitespace-nowrap">
                                Ordinateur
                            </td>
                            <td className="px-6 py-4 text-gray-50 font-medium whitespace-nowrap">
                                <button className="cursor-pointer flex items-center justify-center">
                                    <Trash2 size={20} strokeWidth={2} className="stroke-red-400 transition-all duration-200 ease-linear hover:stroke-red-500" />
                                </button>
                            </td>
                        </tr>                                
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Categorie
