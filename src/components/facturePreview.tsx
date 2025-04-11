"use client";
import { produits } from "@/data/produit";
import { LigneFactureInterface } from "@/interface/ligneFacture";

interface Props {
    estDefinitive: boolean,
    fields: LigneFactureInterface[],
    taxe?: number 
}

const FacturePreview = ( { estDefinitive, fields, taxe }: Props) => {

    const prixTotal = fields.reduce((acc, curr) => acc + (curr.quantite * curr.prixUnitaire), 0)

    return (
        <div className="p-4 bg-white w-4/5 h-full flex items-start justify-start flex-col gap-4 overflow-auto">
            <div className="flex items-start justify-center flex-col ">
                <span className="text-xl text-bleu font-black uppercase">{ estDefinitive ? "Facture Définitive" : "Facture Proforma" }</span>
                <p className="text-sm text-gray-500 font-semibold">Facture numero <span className="ml-2 text-gray-900">2025-10</span></p>
            </div>
            <div className="border border-gray-300 rounded-xl w-full h-[20%] flex items-center justify-center">
                <div className="border-r border-gray-300 pl-4 pt-6 rounded-s-xl w-1/2 h-full flex items-start justify-start flex-col gap-1">
                    <span className="text-xs text-gray-400 font-semibold">Addressé à</span>
                    <span className="text-sm text-gray-600 font-bold">Roronoa Zoro</span>
                    <span className="text-sm text-gray-600 font-bold">+226 61500768</span>
                </div>
                <div className="pl-4 pt-6 rounded-e-xl w-1/2 h-full flex items-start justify-start flex-col gap-1">
                    <span className="text-xs text-gray-400 font-semibold">Date d&apos;échéance</span>
                    <span className="text-sm text-gray-600 font-bold">{new Date().toLocaleDateString('fr-FR')}</span>
                </div>                            
            </div>
            <div className="mt-2 w-full relative">
                <table className="w-full text-xs text-left text-gray-500">
                    <thead className="text-white uppercase bg-blue-500">
                        <tr>
                            <th scope="col" className="px-2 py-1.5 w-[40%]">
                                Désignation
                            </th>
                            <th scope="col" className="px-2 py-1.5 w-[10%]">
                                Quantité
                            </th>
                            <th scope="col" className="px-2 py-1.5 w-[25%]">
                                Prix unitaire
                            </th>
                            <th scope="col" className="px-2 py-1.5 w-[25%]">
                                Prix Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            fields.length === 0 &&
                            <tr className="border-b border-dotted border-black bg-white">
                                <th scope="row" className="px-2 py-3 font-medium text-gray-900">                                
                                    -
                                </th>
                                <td className="px-2 py-3">
                                    -
                                </td>
                                <td className="px-2 py-3">
                                    -
                                </td>
                                <td className="px-2 py-3">
                                    -
                                </td>
                            </tr>
                        }

                        {
                            fields.map((ligne) => (
                                <tr key={ligne.id} className="border-b border-dotted border-black bg-white">
                                    <th scope="row" className="px-2 py-3 font-medium text-gray-900">                                
                                        {ligne.estDesignation ? ligne.designation : ligne.produitId ? produits.find(e => e.id === ligne.produitId)?.nomProduit : ""}
                                    </th>
                                    <td className="px-2 py-3">
                                        {isNaN(ligne.quantite) ? 0 : ligne.quantite}
                                    </td>
                                    <td className="px-2 py-3">
                                        {isNaN(ligne.prixUnitaire) ? 0 : new Intl.NumberFormat('fr-FR').format(ligne.prixUnitaire)}
                                    </td>
                                    <td className="px-2 py-3">
                                        {isNaN(ligne.quantite * ligne.prixUnitaire) ? 0 : new Intl.NumberFormat('fr-FR').format(ligne.quantite * ligne.prixUnitaire)}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr className=" border-black font-semibold text-black">
                            <th scope="row" className="px-2 py-1.5 text-base"></th>
                            <td className="px-2 py-1.5"></td>
                            <td className="px-2 py-1.5 ">Prix HTVA</td>
                            <td className="px-2 py-1.5 ">{isNaN(prixTotal) ? 0 : new Intl.NumberFormat('fr-FR').format(prixTotal)}</td>
                        </tr>
                        <tr className=" border-black font-semibold text-black">
                            <th scope="row" className="px-2 py-1.5 text-base"></th>
                            <td className="px-2 py-1.5"></td>
                            <td className="px-2 py-1.5 ">TVA</td>
                            <td className="px-2 py-1.5 ">{taxe ?? "-"}</td>
                        </tr>
                        <tr className=" border-black font-semibold text-white">
                            <th scope="row" className="px-2 py-1.5 text-base"></th>
                            <td className="px-2 py-1.5"></td>
                            <td className="px-2 py-1.5 bg-blue-500">Total</td>
                            <td className="px-2 py-1.5 bg-blue-500">
                                {
                                    isNaN(prixTotal + (prixTotal * (taxe ?? 0))) ? 0 :
                                    new Intl.NumberFormat('fr-FR').format(prixTotal + (prixTotal * (taxe ?? 0)))
                                }
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default FacturePreview
