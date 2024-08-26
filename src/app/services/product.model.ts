export interface Marque {
    id: number;
    nom: string;
  }
  
  export interface Produit {
    id: number; // Ensure this is included
    codeProd: string;
    libelle: string;
    description: string;
    prixTTC: number;
    prixHT: number;
    tva: number;
    marque: Marque | null;
  }
  