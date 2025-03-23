"use client";
import Navbar from "@/components/navbar";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import { niveauxStock } from "@/data/agents";
import { stats,labels } from "@/data/stats";
import Link from "next/link";
import ProduitSimpleCard from "@/components/produitSimpleCard";
import CommandeActiveCard from "@/components/commandeActiveCard";

export default function Dashboard() {
  return (
    <section className="p-6 w-full h-auto bg-noir flex items-start justify-start flex-col gap-8">
      <Navbar />
      <h1 className="text-white text-4xl font-bold tracking-wide">Tableau de bord</h1>
      <div className="w-full grid grid-cols-4 items-center justify-between gap-8">
        <div className="p-4 bg-fonce-600 rounded-2xl flex items-start justify-center gap-2 flex-col">
          <div className="w-full flex items-center justify-between gap-4">
            <div className="bg-fonce-400 p-2 rounded-2xl flex items-center justify-center">
              <Image src={"/produit-dispo.png"} width={36} height={20} alt="produit dispo" />
            </div>
            <div className="border border-vert px-2 rounded-full flex items-center justify-between gap-1">
              <ArrowUp size={20} strokeWidth={2} className="stroke-vert" />
              <span className="text-lg font-semibold text-vert">23%</span>
            </div>
          </div>
          <span className="text-xl text-gray-600 font-semibold">Produits en stock</span>
          <span className="text-4xl text-gray-50 font-semibold">5500</span>
        </div>
        <div className="p-4 bg-fonce-600 rounded-2xl flex items-start justify-center gap-2 flex-col">
          <div className="w-full flex items-center justify-between gap-4">
            <div className="bg-fonce-400 p-2 rounded-2xl flex items-center justify-center">
              <Image src={"/quantite-dispo.png"} width={36} height={20} alt="produit dispo" />
            </div>
            <div className="border border-vert px-2 rounded-full flex items-center justify-between gap-1">
              <ArrowUp size={20} strokeWidth={2} className="stroke-vert" />
              <span className="text-lg font-semibold text-vert">06%</span>
            </div>
          </div>
          <span className="text-xl text-gray-600 font-semibold">Quantité disponible</span>
          <span className="text-4xl text-gray-50 font-semibold">10200</span>
        </div>
        <div className="p-4 bg-fonce-600 rounded-2xl flex items-start justify-center gap-2 flex-col">
          <div className="w-full flex items-center justify-between gap-4">
            <div className="bg-fonce-400 p-2 rounded-2xl flex items-center justify-center">
              <Image src={"/truck-tick.png"} width={36} height={20} alt="produit dispo" />
            </div>
            <div className="border border-vert px-2 rounded-full flex items-center justify-between gap-1">
              <ArrowUp size={20} strokeWidth={2} className="stroke-vert" />
              <span className="text-lg font-semibold text-vert">38%</span>
            </div>
          </div>
          <span className="text-xl text-gray-600 font-semibold">Produits à recevoir</span>
          <span className="text-4xl text-gray-50 font-semibold">2763</span>
        </div>
        <div className="p-4 bg-fonce-600 rounded-2xl flex items-start justify-center gap-2 flex-col">
          <div className="w-full flex items-center justify-between gap-4">
            <div className="bg-fonce-400 p-2 rounded-2xl flex items-center justify-center">
              <Image src={"/box-time.png"} width={36} height={20} alt="produit dispo" />
            </div>
            <div className="border border-vert px-2 rounded-full flex items-center justify-between gap-1">
              <ArrowUp size={20} strokeWidth={2} className="stroke-vert" />
              <span className="text-lg font-semibold text-vert">38%</span>
            </div>
          </div>
          <span className="text-xl text-gray-600 font-semibold">Produits emballer</span>
          <span className="text-4xl text-gray-50 font-semibold">353</span>
        </div>
      </div>
      <div className="w-full flex items-center justify-between gap-6">
        <div className="w-3/5 h-[430px] bg-fonce-600 py-4 px-6 rounded-xl flex items-start justify-start flex-col gap-4">
          <span className="text-2xl text-gray-50 font-semibold">Niveaux de stock</span>
          <div className="w-full flex items-start justify-center gap-8">
            <div className="w-2/5 h-full">
              <Pie 
                data={{
                  labels: niveauxStock.map(e => e.label),
                  datasets: [{
                    label: "Niveaux de stock",
                    data: niveauxStock.map(e => e.valeur),
                    backgroundColor: [
                      "#39DB7D",
                      "#BBEF20",
                      "#FFEA00",
                      "#F95454"
                    ],
                    borderWidth: 0               
                  }]
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false
                    }
                  }
                }}
              />
            </div>
            <div className="w-3/5 h-full flex items-center justify-start flex-col gap-4">
              <div className="p-2 w-full flex items-center justify-start flex-col gap-2">
                <div className="w-full flex items-center justify-between">
                  <span className="text-gray-400 text-xl font-semibold uppercase">Stock élévé</span>
                  <span className="text-white text-xl font-semibold">1714</span>
                </div>
                <div className="bg-gray-700 w-full h-4 rounded-full">
                  <div className="bg-vert h-full rounded-full" style={{ width: `${niveauxStock[0].valeur / 3666 * 100}%` }} />
                </div>
              </div>
              <div className="p-2 w-full flex items-center justify-start flex-col gap-2">
                <div className="w-full flex items-center justify-between">
                  <span className="text-gray-400 text-xl font-semibold uppercase">Stock presque faible</span>
                  <span className="text-white text-xl font-semibold">858</span>
                </div>
                <div className="bg-gray-700 w-full h-4 rounded-full">
                  <div className="bg-vert-citron h-full rounded-full" style={{ width: `${niveauxStock[1].valeur / 3666 * 100}%` }} />
                </div>
              </div>
              <div className="p-2 w-full flex items-center justify-start flex-col gap-2">
                <div className="w-full flex items-center justify-between">
                  <span className="text-gray-400 text-xl font-semibold uppercase">Stock faible</span>
                  <span className="text-white text-xl font-semibold">493</span>
                </div>
                <div className="bg-gray-700 w-full h-4 rounded-full">
                  <div className="bg-jaune h-full rounded-full" style={{ width: `${niveauxStock[2].valeur / 3666 * 100}%` }} />
                </div>
              </div>
              <div className="p-2 w-full flex items-center justify-start flex-col gap-2">
                <div className="w-full flex items-center justify-between">
                  <span className="text-gray-400 text-xl font-semibold uppercase">Stock épuisé</span>
                  <span className="text-white text-xl font-semibold">601</span>
                </div>
                <div className="bg-gray-700 w-full h-4 rounded-full">
                  <div className="bg-rouge h-full rounded-full" style={{ width: `${niveauxStock[3].valeur / 3666 * 100}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-fonce-600 py-4 px-4 w-2/5 h-[430px] rounded-xl flex items-center justify-start flex-col gap-4">
          <div className="w-full flex items-center justify-between">
            <span className="text-2xl text-gray-50 font-semibold">Produit le plus vendu</span>
            <Link href={""} className="flex items-center justify-center gap-2 group">
              <span className="text-lg text-vert font-semibold uppercase group-hover:underline">Voir plus</span>
              <Image src={"/triangle.png"} height={10} width={20} alt="triangle" />
            </Link>
          </div>  
          <div className="w-full flex items-center justify-start flex-col gap-4 overflow-auto">
            <ProduitSimpleCard
              image="/mac.jpg"
              nomProduit="Macbook pro 16&quot; puce M3 Max 1TB/36GB"
              categorie="Ordinateur"
              quantite={37}
              stockFaible={false}            
            />          
            <ProduitSimpleCard
              image="/ultra.jpg"
              nomProduit="Galaxy Book 4 ultra 16&quot; core i9 1TB/32GB"
              categorie="Ordinateur"
              quantite={14}
              stockFaible={false}            
            />          
            <ProduitSimpleCard
              image="/asus.jpg"
              nomProduit="Asus Rog Zephirus G14 14&quot; AMD Ryzen 9 1TB/32GB"
              categorie="Ordinateur"
              quantite={2}
              stockFaible={true}            
            />  
            <ProduitSimpleCard
              image="/asus.jpg"
              nomProduit="Asus Rog Zephirus G14 14&quot; AMD Ryzen 9 1TB/32GB"
              categorie="Ordinateur"
              quantite={2}
              stockFaible={true}            
            />  
          </div>                
        </div>
      </div>
      <div className="w-full flex items-center justify-between gap-6">
        <div className="w-1/2 h-[430px] bg-fonce-600 py-4 px-6 rounded-xl flex items-start justify-start flex-col gap-4">
          <div className="w-full flex items-center justify-between">
            <span className="text-2xl text-gray-50 font-semibold">Commande en cours</span>
            <Link href={""} className="flex items-center justify-center gap-2 group">
              <span className="text-lg text-vert font-semibold uppercase group-hover:underline">Voir plus</span>
              <Image src={"/triangle.png"} height={10} width={20} alt="triangle" />
            </Link>
          </div>  
          <div className="w-full flex items-center justify-start flex-col gap-4 overflow-auto">            
            <CommandeActiveCard
              id={328}
              nomClinet="DAILA"
              prenomClinet="Félix"
              adresseClinet="Secteur 29, Bobo-Dioulasso"
              montantCommande={630000}
              statutCommande="CREE"
              statutPayement="Payé"              
            />
            <CommandeActiveCard
              id={330}
              nomClinet="Monkey"
              prenomClinet="D. Luffy"
              adresseClinet="East Blue, One Piece"
              montantCommande={1260000}
              statutCommande="EXPEDIE"
              statutPayement="Impayé"
            />
            <CommandeActiveCard
              id={328}
              nomClinet="Nami"
              prenomClinet=""
              adresseClinet="East Blue, One Piece"
              montantCommande={630000}
              statutCommande="EMBALLE"
              statutPayement="Impayé"              
            />
            <CommandeActiveCard
              id={328}
              nomClinet="Vinsmoke"
              prenomClinet="Sanji"
              adresseClinet="North Blue, One Piece"
              montantCommande={200000}
              statutCommande="CREE"
              statutPayement="Payé"              
            />
          </div>   
        </div>
        <div className="w-1/2 h-[430px] bg-fonce-600 py-4 px-6 rounded-xl flex items-start justify-start flex-col gap-4">
          <div className="w-full flex items-center justify-between">
            <span className="text-2xl text-gray-50 font-semibold">Total des ventes</span>
            <div className="border border-vert px-2 rounded-full flex items-center justify-between gap-1">
              <ArrowUp size={20} strokeWidth={2} className="stroke-vert" />
              <span className="text-lg font-semibold text-vert">61%</span>
            </div>            
          </div>
          <div className="w-full h-3/4">
            <Bar 
              data={{
                labels: labels,
                datasets: [{
                  label: stats[0].label,
                  data: stats[0].data,
                  backgroundColor: [
                    "#39DB7D",
                  ],                    
                }]
              }}
              options={{                                
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }}
            />
          </div>
          <p className="self-center text-xl text-green-400 font-semibold">5750000 FCFA <span className="text-gray-500 text-xl font-semiboold"> ce mois</span> </p>
        </div>
      </div>
    </section>
  );
}