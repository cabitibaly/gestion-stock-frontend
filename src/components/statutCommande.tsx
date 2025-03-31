"use client";

import { CircleCheckBig } from "lucide-react";
import Image from "next/image";

const StatutCommande = ({ statutCommande } : { statutCommande: string }) => {
        return (
            <ol className="flex items-center w-full">
                <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-300 after:border-4 after:inline-block">
                    <span className="flex items-center justify-center w-10 h-10 bg-blue-300 rounded-full shrink-0">
                        <CircleCheckBig size={20} strokeWidth={2} className="stroke-bleu" />
                    </span>
                </li>
                <li className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block ${["EMBALLEE", "EXPEDIEE", "LIVREE"].includes(statutCommande) ? "after:border-blue-300" : "after:border-gray-400"}`}>
                    <span className={`flex items-center justify-center w-10 h-10 rounded-full shrink-0 ${["EMBALLEE", "EXPEDIEE", "LIVREE"].includes(statutCommande) ? "bg-blue-300" : "bg-gray-400"}`}>
                        {   
                            ["EMBALLEE", "EXPEDIEE", "LIVREE"].includes(statutCommande) ?
                                <Image src={"/emballe-bleu.png"} width={20} height={16} alt="emballe-bleu" />
                            :   <Image src={"/emballe-gris.png"} width={20} height={16} alt="emballe-gris" />
                        }                                       
                    </span>
                </li>
                <li className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block ${["EXPEDIEE", "LIVREE"].includes(statutCommande) ? "after:border-blue-300" : "after:border-gray-400"}`}>
                    <span className={`flex items-center justify-center w-10 h-10 rounded-full shrink-0 ${["EXPEDIEE", "LIVREE"].includes(statutCommande) ? "bg-blue-300" : "bg-gray-400"}`}>                            
                        {   
                            ["EXPEDIEE", "LIVREE"].includes(statutCommande) ?
                                <Image src={"/expedie-blue.png"} width={20} height={16} alt="expedie-bleu" />
                            :   <Image src={"/expedie-gris.png"} width={20} height={16} alt="expedie-gris" />
                        }                                    
                    </span>
                </li>
                <li className="flex items-center w-full">
                    <span className={`flex items-center justify-center w-10 h-10 rounded-full shrink-0 ${statutCommande === "LIVREE" ? "bg-blue-300" : "bg-gray-400"}`}>                                                                  
                        {
                            statutCommande === "LIVREE" ?
                                <Image src={"/livre-bleu.png"} width={20} height={16} alt="livre-bleu" />
                            :   <Image src={"/livre-gris.png"} width={20} height={16} alt="livre-gris" />
                        }
                    </span>
                </li>
            </ol>
        )
}

export default StatutCommande
