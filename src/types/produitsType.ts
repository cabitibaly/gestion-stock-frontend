export type ProduitType = {
    id: number
    image: string,
    nomProduit: string,
    categorie: string,
    quantite: number,
    stockFaible: boolean,
    ajouter?: boolean,
    prixVente?: number,
    prixAchat?: number,    
}