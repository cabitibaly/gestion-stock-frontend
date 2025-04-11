export interface LigneFactureInterface {    
    id: number,
    estDesignation?: boolean,
    produitId?: number,
    designation?: string,
    quantite: number,
    typeQuantite?: string,
    prixUnitaire: number,
}