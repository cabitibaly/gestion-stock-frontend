import { LigneFactureInterface } from "./ligneFacture";

export interface FormData {
    clientSearch: string,
    clientId: number,
    objet: string,
    date: Date,
    lignesFacture: LigneFactureInterface[]
}