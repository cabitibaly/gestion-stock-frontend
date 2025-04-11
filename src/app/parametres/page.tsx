"use client";
import Categorie from "@/components/categorie";
import ChangerMotDePasse from "@/components/changerPwd";
import Entrepots from "@/components/entrepots";
import ModifierProfil from "@/components/modifierProfil";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";

interface Tab {
    id: string,
    label: string
}

const tabs = [
    { id: "modifier-le-profil", label: "Modifier le Profil" },
    { id: "mot-de-passe", label: "Mot de Passe" },
    { id: "catégories", label: "Catégories" },
    { id: "entrepôts", label: "Entrepôts" },
];

const Parametres = () => {
    const [tab, setTab] = useState<Tab>(tabs[0])

    return (
        <section className="relative px-6 pt-6 pb-2 w-full h-screen bg-noir flex items-start justify-start flex-col gap-6 overflow-hidden">
            <Navbar />
            <div className="border-b border-fonce-200 pb-6 self-center mt-4 w-3/5 flex items-center justify-start gap-4">
                <Image src={"/zoro.jpg"} height={100} width={80} alt="zoro" className="rounded-full" />
                <div className="flex items-start justify-center flex-col">
                    <span className="text-white text-3xl tracking-wide font-semibold">Roronoa Zoro<span className="text-gray-700 ml-2 mr-2">/</span>{tab.label}</span>
                    <span className="text-gray-600 text-lg tracking-wide font-semibold">Administrateur</span>
                </div>
            </div>
            <div className="self-center mt-4 w-3/5 flex items-start justify-start gap-4 overflow-auto">
                <div className="w-1/4 flex items-start justify-center flex-col gap-2">
                    {tabs.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => setTab({id, label})}
                            className={`text-lg font-medium cursor-pointer transition duration-200 ease-linear hover:text-gray-200 ${
                                tab.id === id ? "text-gray-200 font-semibold" : "text-gray-600"
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                { tab.id === "modifier-le-profil" && <ModifierProfil /> }

                { tab.id === "mot-de-passe" && <ChangerMotDePasse /> }

                { tab.id === "catégories" && <Categorie /> }

                { tab.id === "entrepôts" && <Entrepots /> }

            </div>
        </section>
    )
}

export default Parametres
