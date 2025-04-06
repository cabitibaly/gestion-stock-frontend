export type FournisseurType = {
    id: number,
    image: string,
    nom: string,
    prenom: string,
    email: string,
    telephone: string,
    dette: number,
    adresse: string,
    nbProduits: number,
    estActive?: boolean,
}