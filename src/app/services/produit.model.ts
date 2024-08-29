
  
 // produit.model.ts
 export interface Produit {
  id: number;
  codeProd: string;
  libelle: string;
  description?: string;
  prixTTC: number;
  prixHT: number;
  tva: number;
  marqueId: number;  // Assurez-vous que cette propriété correspond à ce que vous attendez
}

  