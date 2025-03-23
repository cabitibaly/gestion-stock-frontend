"use client"

import { commandeActiveType } from "@/types/commandeActive"
import { Dot, MapPin, User2 } from "lucide-react"

const CommandeActiveCard = (commandeProps: commandeActiveType) => {
    return (
        <div className="p-2 rounded-xl bg-fonce-400 w-full flex items-center justify-start flex-col gap-4">
            <div className="w-full flex items-center justify-between">
                <span className="text-xl text-gray-50 font-semibold">SO-{commandeProps.id}</span>
                <div className="flex items-center justify-between gap-8">
                  <span className="text-xl text-gray-50 font-semibold">{commandeProps.montantCommande} FCFA</span>
                  <span className={`${commandeProps.statutPayement === "Payé" ? "bg-vert-citron" : "bg-rouge"} text-noir text-sm font-semibold me-2 px-4 py-0.5 rounded-sm`}>{commandeProps.statutPayement}</span>
                </div>
            </div>
            <div className="bg-gray-700 w-full h-4 rounded-full">
                <div 
                    className="bg-vert h-full rounded-full" 
                    style={{ width: `${commandeProps.statutCommande === "CREE" ? 25 : commandeProps.statutCommande === "EMBALLE" ? 50 : 75}%` }}
                />
            </div>
            <div className="self-start w-auto flex items-center justify-between">
                <div className="flex items-center justify-between gap-2">
                  <User2 size={20} strokeWidth={2} className="stroke-gray-500" />
                  <span className="text-sm text-gray-500 font-medium">{commandeProps.nomClinet} {commandeProps.prenomClinet}</span>
                </div>
                <Dot size={25} strokeWidth={2} className="stroke-gray-500" />
                <div className="flex items-center justify-between gap-2">
                  <MapPin size={20} strokeWidth={2} className="stroke-gray-500" />
                  <span className="text-sm text-gray-500 font-medium">{commandeProps.adresseClinet}</span>
                </div>
            </div>
        </div>
    )
}

export default CommandeActiveCard
