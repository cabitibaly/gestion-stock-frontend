"use client";
import { ArrowLeft, Plus, Search } from "lucide-react";
import Link from "next/link";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { ChangeEvent, useEffect, useState } from "react";
import { addLocale } from "primereact/api";
import fr from "../../../constants/fr.json";
import ProduitSimpleCard from "@/components/produitSimpleCard";
import { produits } from "@/data/produit";
import { LigneVente } from "@/interface/ligneVente";

addLocale("fr", fr.fr)

const NouvelleVente = () => {
    const [etape, setEtape] = useState<number>(1)
    const [client, setClient] = useState<string>("")
    const [date, setDate] = useState<Date | null>(null)
    const [methodePaiement, setMethodePaiement] = useState<string>("")
    const [pays, setPays] = useState<string>("")
    const [ville, setVille] = useState<string>("")
    const [secteur, setSecteur] = useState<string>("")
    const [rue, setRue] = useState<string>("")
    const [recherche, setRecherche] = useState<string>("")
    const [lignesVente, setLignesVente] = useState<LigneVente[]>([])
    const [reduction, setReduction] = useState<string>("")
    const [total, setTotal] = useState<number>(0)
    const [totalSansReduction, setTotalSansReduction] = useState<number>(0)

    const ajouterUneLigne = (id: number) => {        
        setLignesVente(prev => {
            const existe = prev.some((ligne) => ligne.produitId === id);        
                            
            if (existe) {                  
              return prev;
            }       
            
            const produit = produits.find(e => e.id === id)
            if (!produit) return prev;

            return [
                ...prev, 
                {
                    produitId: id,
                    quantite: 0,
                    prixUnitaire: produit.prixVente,
                    prixTotal: 0
                }
            ];            
        })        
    }

    const supprimerUneLigne = (id: number) => {        
        setLignesVente(prev => {
            const existe = prev.some((ligne) => ligne.produitId === id);
                            
            if (!existe) {                  
              return prev;
            } 

            return prev.filter(ligne => ligne.produitId !== id);
        })        
    }

    const modifierQuantite = (e: ChangeEvent<HTMLInputElement>, id: number) => {
        const nouvelleQuantite = Number(e.target.value) || 0;

        setLignesVente((prev) =>
          prev.map((ligne) =>
            ligne.produitId === id ? { ...ligne, quantite: nouvelleQuantite, prixTotal: nouvelleQuantite * ligne.prixUnitaire,  } : ligne
          )
        );
    };

    useEffect(() => {

        const totalSansReduction = lignesVente.reduce((acc, ligne) => acc + ligne.prixTotal, 0)
        const total = totalSansReduction - Number(reduction)
        setTotalSansReduction(totalSansReduction)
        setTotal(total)

        if (lignesVente.length === 0) {
            setReduction("")
            setTotalSansReduction(0)
            setTotal(0)
        }

    }, [lignesVente, reduction])

    console.log(lignesVente)
    
    const produitFiltered = produits.filter((produit) => (
        produit.nomProduit.toLowerCase().includes(recherche.toLowerCase())
    ))

    return (
        <section className="relative p-6 bg-noir w-full h-screen flex items-center justify-start flex-col gap-4">
            <Link href="/vente" className="self-start cursor-pointer flex items-center justify-center gap-2 group">
                <ArrowLeft size={28} strokeWidth={2} className="stroke-gray-500 transition duration-200 ease-in group-hover:stroke-bleu" />
                <span className="text-gray-500 text-xl font-semibold transition duration-200 ease-in group-hover:text-bleu">Retour</span>
            </Link>
            <div className="h-[87%] flex items-center justify-start flex-col gap-4">
                <div className="flex items-center justify-between flex-col gap-6">
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center justify-center gap-2">
                            <div className={`border-[1.5px] border-bleu w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ease-linear ${etape > 1 ? "bg-bleu" : "bg-transparent"}`}>
                                <span className={`text-lg font-medium ${etape > 1 ? "text-fonce-600" : "text-bleu"}`}>1</span>
                            </div>
                            <span className="text-lg text-bleu font-semibold">Information Générale</span>
                        </div>                    
                        <hr className={`border w-32 transition-all duration-200 ease-linear ${etape > 1 ? "border-bleu" : "border-gray-500"}`} />
                        <div className="flex items-center justify-center gap-2">
                            <div className={`border-[1.5px] w-10 h-10 rounded-full flex items-center justify-center transition-all delay-100 duration-200 ease-linear ${etape === 1 ? "border-gray-500" : etape === 2 ? "border-bleu" : "bg-bleu border-transparent"}`}>
                                <span className={`text-lg font-medium transition-all delay-100 duration-200 ease-in-out ${etape === 1 ? "text-gray-500" : etape === 2 ? "text-bleu" : "text-fonce-600"}`}>2</span>
                            </div>
                            <span className={`text-lg font-medium transition-all delay-100 duration-200 ease-linear ${etape === 1 ? "text-gray-500" : "text-bleu"}`}>Détails Livraison</span>
                        </div>                    
                        <hr className={`border w-32 transition-all duration-200 ease-linear ${etape > 2 ? "border-bleu" : "border-gray-500"}`} />
                        <div className="flex items-center justify-center gap-2">
                            <div className={`border-[1.5px] w-10 h-10 rounded-full flex items-center justify-center transition-all delay-100 duration-200 ${etape === 3 ? "border-bleu" : "border-gray-500"}`}>
                                <span className={`text-lg font-medium transition-all delay-100 duration-200 ease-initial ${etape === 3 ? "text-bleu" : "text-gray-500"}`}>3</span>
                            </div>
                            <span className={`text-lg font-medium transition-all delay-100 duration-200 ease-initial ${etape === 3 ? "text-bleu" : "text-gray-500"}`}>Produits</span>
                        </div>    
                    </div>   
                    <h5 className="text-2xl text-white font-semibold tracking-wide transition-all duration-200 ease-in-out">
                        {
                            etape === 1 ? "Information Générale" :
                            etape === 2 ? "Détails Livraison" : "Produits"                            
                        }    
                    </h5>                                 
                </div>  
                {   etape === 1 &&
                    <div className="rounded-xl bg-fonce-600 p-4 w-3/4 max-h-[80%] flex items-center justify-start flex-col gap-6 overflow-auto">
                        <div className="w-full flex items-start justify-center flex-col gap-4">
                            <span className="text-gray-50 text-lg font-semibold">Client</span>
                            <div className='w-full'>
                                <Dropdown                   
                                    value={client}                               
                                    options={["Roronoa Zoro", "Vinsmoke Sanji", "Nami", "Monkey D Luffy"]}
                                    optionLabel="label"
                                    onChange={(e) => setClient(e.value as string)}
                                    placeholder="Selectionner.."
                                    highlightOnSelect={false}
                                    checkmark={false}
                                />
                            </div>
                        </div>
                        <div className="w-full flex items-start justify-center flex-col gap-4">
                            <span className="text-gray-50 text-lg font-semibold">Date de Livraison</span>
                            <div className='w-full'>
                                <Calendar 
                                    id='datepicker'
                                    className="w-full"                   
                                    onChange={(e) => setDate(e.value as Date | null)}
                                    value={date}                               
                                    locale="fr" 
                                    placeholder="Choisir une date"
                                    showIcon={false}
                                /> 
                            </div>
                        </div>
                        <div className="w-full flex items-start justify-center flex-col gap-4">
                            <span className="text-gray-50 text-lg font-semibold">Méthode de paiement</span>
                            <div className='w-full'>
                                <Dropdown
                                    value={methodePaiement}                               
                                    options={["Cash", "Mobile Money", "Check", "Autres"]}
                                    optionLabel="label"
                                    onChange={(e) => setMethodePaiement(e.value as string)}
                                    placeholder="Selectionner une méthode.."
                                    highlightOnSelect={false}
                                    checkmark={false}
                                />
                            </div>
                        </div>
                        <div className='w-full flex items-start justify-center flex-col gap-4'>
                            <span className="text-gray-50 text-lg font-semibold">Condition de paiement</span>
                            <textarea className='border-[1.5px] border-fonce-400 w-full h-36 py-1.5 px-2 rounded-lg text-gray-50 text-lg outline-none focus:ring-gray-300 focus:border-gray-300 placeholder:text-gray-400 resize-none' placeholder="Saisir les conditions..." ></textarea>
                        </div>
                        <div className='w-full flex items-start justify-center flex-col gap-4'>
                            <span className="text-gray-50 text-lg font-semibold">Note</span>
                            <textarea className='border-[1.5px] border-fonce-400 w-full h-36 py-1.5 px-2 rounded-lg text-gray-50 text-lg outline-none focus:ring-gray-300 focus:border-gray-300 placeholder:text-gray-400 resize-none' placeholder="Une note..." ></textarea>
                        </div>
                    </div>                    
                } 

                {   etape === 2 &&
                    <div className="rounded-xl bg-fonce-600 p-4 w-3/4 max-h-[80%] flex items-center justify-start flex-col gap-6 overflow-auto">                        
                        <div className='w-full flex items-center justify-between'>
                            <div className='w-[45%] flex items-start justify-center flex-col gap-4'>
                                <span className="text-gray-50 text-lg font-semibold">Pays</span>
                                <div className='w-full'>
                                    <Dropdown
                                        value={pays}                               
                                        options={["Burkina Faso", "Côte d'Ivoire", "Mali", "Niger", "Nigeria"]}
                                        optionLabel="label"
                                        editable={true}
                                        onChange={(e) => setPays(e.value as string)}
                                        placeholder="Selectionner un pays.."
                                        highlightOnSelect={false}
                                        checkmark={false}
                                    />
                                </div>
                            </div>
                            <div className='w-[45%] flex items-start justify-center flex-col gap-4'>
                                <span className="text-gray-50 text-lg font-semibold">Ville</span>
                                <div className='w-full'>
                                    <Dropdown
                                        value={ville}                               
                                        options={["Bobo-Dioulasso", "Ouagadougou", "Abidjan", "Bamako", "Niamey", "Lagos"]}
                                        optionLabel="label"
                                        editable
                                        onChange={(e) => setVille(e.value as string)}
                                        placeholder="Selectionner une ville.."
                                        highlightOnSelect={false}
                                        checkmark={false}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <div className='w-[45%] flex items-start justify-center flex-col gap-4'>
                                <span className="text-gray-50 text-lg font-semibold">Secteur</span>
                                <input value={secteur} onChange={e => setSecteur(e.target.value)} type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-300 focus:border-gray-300 placeholder:text-gray-400' placeholder='ex: Secteur 09' />
                            </div>
                            <div className='w-[45%] flex items-start justify-center flex-col gap-4'>
                                <span className="text-gray-50 text-lg font-semibold">Rue</span>
                                <input value={rue} onChange={e => setRue(e.target.value)} type="text" className='border-[1.5px] border-fonce-400 w-full py-1.5 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-300 focus:border-gray-300 placeholder:text-gray-400' placeholder='ex: Rue 9.23' />
                            </div>
                        </div>
                    </div>  
                }

                {   etape === 3 &&
                    <div className="rounded-xl bg-fonce-600 p-4 w-3/4 max-h-[80%] flex items-center justify-start flex-col gap-6 overflow-auto">
                        <div className="bg-fonce-200 p-4 rounded-lg w-full flex items-start justify-start flex-col gap-2">
                            <form onSubmit={(e) => e.preventDefault()} className="w-full flex items-center">   
                                <label htmlFor="faq-search" className="sr-only">Recherche</label>
                                <div className="relative w-full flex items-center justify-center">
                                    <div className="absolute inset-y-0 start-1 flex items-center ps-3 pointer-events-none">
                                        <Search strokeWidth={2} size={28} color="#FFF" />
                                    </div>
                                    <input value={recherche} onChange={(e) => setRecherche(e.target.value)} type="text" className="bg-transparent border-[1.5px] border-gray-600 text-gray-300 text-lg rounded-xl outline-none focus:ring-gray-300 focus:border-gray-300 block w-full ps-14  p-1.5 placeholder:text-gray-400" placeholder="Rechercher un produit..." />
                                </div>
                            </form> 
                            <Link href={"/inventaire/nouveau"} className="self-start cursor-pointer flex items-center justify-center group">
                                <Plus size={20} strokeWidth={2} className="stroke-vert group-hover:underline" />
                                <span className="text-vert text-base font-semibold group-hover:underline">Ajouter un produit</span>
                            </Link>
                            {
                                produitFiltered.map((produit, index) => (
                                    <ProduitSimpleCard
                                        key={index}
                                        produitProps={produit}
                                        btnAjouter={true}  
                                        handleAjouter={ajouterUneLigne}                                      
                                    />
                                ))
                            }                           
                        </div>  
                        {
                            lignesVente.length > 0 &&
                            <div className="bg-fonce-200 p-4 rounded-lg w-full flex items-start justify-start flex-col gap-3">
                                <span className="text-white text-xl font-semibold">Liste des produits</span> 
                                {
                                    lignesVente.map((ligne, index) => {
                                        const produit = produits.find(e => e.id === ligne.produitId)
                                        if (!produit) {
                                            return
                                        }
                                        return (
                                            <div key={index} className="w-full border-b border-gray-600 pb-3 flex items-center justify-start flex-col gap-1">
                                                <ProduitSimpleCard                                                
                                                    produitProps={produit}
                                                    btnSupprimer={true}  
                                                    handleSupprimer={supprimerUneLigne}                                      
                                                />
                                                <div className='w-full flex items-center justify-between'>
                                                    <div className='w-[45%] flex items-start justify-center flex-col gap-3'>
                                                        <span className="text-gray-50 text-lg font-semibold">Quantité</span>
                                                        <input value={ligne.quantite} onChange={e => modifierQuantite(e, produit.id)} type="text" className='bg-fonce-400 w-full py-1.5 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-300 focus:border focus:border-gray-300 placeholder:text-gray-400' placeholder='0' />
                                                    </div>
                                                    <div className='w-[45%] flex items-start justify-center flex-col gap-3'>
                                                        <span className="text-gray-50 text-lg font-semibold">Prix Unitaire</span>
                                                        <input value={produit.prixVente} disabled={true} type="text" className='cursor-not-allowed bg-fonce-400 w-full py-1.5 px-2 rounded-lg text-gray-50 text-lg font-semibold outline-none focus:ring-gray-300 focus:border focus:border-gray-300 placeholder:text-gray-400' placeholder='0' />
                                                    </div>
                                                </div>
                                            </div>                                            
                                        )
                                    })
                                }
                            </div>
                        }   

                        {
                            lignesVente.length > 0 &&
                            <div className='self-end w-3/4 flex items-center justify-end flex-col gap-4'>
                                <div className="w-full flex items-center justify-between">
                                    <div className="w-1/2 flex items-center justify-start">
                                        <span className="text-gray-50 text-sm font-semibold uppercase">Total sans réduction</span>
                                    </div>
                                    <div className="w-1/2 flex items-center justify-end">
                                        <span className="text-gray-50 text-sm font-semibold uppercase">{totalSansReduction} FCFA</span>
                                    </div>
                                </div>
                                <div className="w-full flex items-center justify-between">
                                    <div className="w-1/2 flex items-center justify-start">
                                        <span className="text-gray-50 text-sm font-semibold uppercase">Réduction</span>
                                    </div>
                                    <div className="w-1/2 flex items-center justify-end">
                                        <input value={reduction} onChange={e => setReduction(e.target.value)} type="text" className='border-b-[1.5px] border-fonce-400 w-1/2 py-1.5 px-2 text-gray-50 text-sm text-right font-semibold outline-none focus:ring-gray-300 focus:border-b-gray-300 placeholder:text-gray-400' placeholder='0' />
                                    </div>
                                </div>
                                <hr className="border-b border-gray-600 w-full" />
                                <div className="w-full flex items-center justify-between">
                                    <div className="w-1/2 flex items-center justify-start">
                                        <span className="text-gray-50 text-base font-semibold uppercase">Total</span>
                                    </div>
                                    <div className="w-1/2 flex items-center justify-end">
                                        <span className="text-gray-50 text-base font-semibold uppercase">{total} FCFA</span>
                                    </div>
                                </div>
                            </div>
                        }                  
                    </div>  
                }          
            </div>
            <div className="absolute bottom-0 left-0 bg-fonce-400 p-4 w-full flex items-center justify-end gap-4">
                <button onClick={() => setEtape(etape - 1)} className={`border border-bleu bg-transparent px-4 py-2 cursor-pointer rounded-xl text-bleu text-lg  tracking-wide font-semibold transition-all duration-200 ease-in-out hover:bg-bleu hover:text-fonce-600 hover:border-transparent ${etape === 1 ? "hidden" : ""}`}>
                    Précédent
                </button>
                <button onClick={() => setEtape(etape + 1)} className={`border border-transparent bg-bleu px-[31px] py-2 cursor-pointer rounded-xl text-noir text-lg font-semibold transition duration-200 ease-in-out hover:bg-transparent hover:text-bleu hover:border-bleu ${etape === 3 ? "hidden" : ""}`}>
                    Suivant
                </button> 
                <button  className={`border border-transparent bg-bleu px-4 py-2 cursor-pointer rounded-xl text-noir text-lg font-semibold transition duration-200 ease-in-out hover:bg-transparent hover:text-bleu hover:border-bleu ${etape === 3 ? "block" : "hidden"}`}>
                    Enregistrer
                </button> 
            </div>
            <div className="absolute bottom-0 left-0 bg-fonce-400 p-4 w-full flex items-center justify-end gap-4">
                <button onClick={() => setEtape(etape - 1)} className={`border border-bleu bg-transparent px-4 py-2 cursor-pointer rounded-xl text-bleu text-lg  tracking-wide font-semibold transition-all duration-200 ease-in-out hover:bg-bleu hover:text-fonce-600 hover:border-transparent ${etape === 1 ? "hidden" : ""}`}>
                    Précédent
                </button>
                <button onClick={() => setEtape(etape + 1)} className={`border border-transparent bg-bleu px-[31px] py-2 cursor-pointer rounded-xl text-noir text-lg font-semibold transition duration-200 ease-in-out hover:bg-transparent hover:text-bleu hover:border-bleu ${etape === 3 ? "hidden" : ""}`}>
                    Suivant
                </button> 
                <button  className={`border border-transparent bg-bleu px-4 py-2 cursor-pointer rounded-xl text-noir text-lg font-semibold transition duration-200 ease-in-out hover:bg-transparent hover:text-bleu hover:border-bleu ${etape === 3 ? "block" : "hidden"}`}>
                    Enregistrer
                </button> 
            </div>
        </section>
    )
}

export default NouvelleVente