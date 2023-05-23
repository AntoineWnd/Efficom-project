//On créer la classe Voiture et on passe les propriétées dans le constructeur(marque, modèle, année, couleur)//
class Voiture {
    constructor(marque, modèle, année, couleur) {
      this.marque = marque;
      this.modèle = modèle;
      this.année = année;
      this.couleur = couleur;
    }
  
    //Ajout d'une fonction pour afficher les propriétées de l'objet
    AfficherDetails() {
      console.log(
        `Marque: ${this.marque}, Modèle: ${this.modèle}, Année: ${this.année}, Couleur: ${this.couleur} `
      );
    }
  }
  
  class Garage {
    //le constructeur prends les voitures comme valeurs
    constructor() {
      this.voitures = [];
    }
  
    //on ajoute les voiture dans le tableau du constructeur
    ajouterVoiture(voiture) {
      this.voitures.push(voiture);
    }
  
    // on créer une méthode pour afficher les voitures d'une même année
    afficherVoituresMemeAnnee(annee) {
      //on crée une constante qui recupere les voiture d'une meme année a l'aide d'un filtre
      const voituresMemeAnnee = this.voitures.filter(
        (voiture) => voiture.annee === annee
      );
  
      //Aucune voiture n'a la même année
      if (voituresMemeAnnee.length === 0) {
        console.log(`Aucune voiture de l'année ${annee} dans le garage.`);
      }
  
      //Sinon on liste les voiture qui on la même année
      else {
        console.log(`Voitures de l'année ${annee} dans le garage:`);
        voituresMemeAnnee.forEach((voiture) => {
          console.log(`${voiture} `);
        });
      }
    }
  
    // on créer une méthode pour afficher les voitures d'une même marque
    afficherVoituresMemeAnnee(marque) {
      //on crée une constante qui recupere les voiture d'une meme marque a l'aide d'un filtre
      const voituresMemeAnnee = this.voitures.filter(
        (voiture) => voiture.marque === marque
      );
      //Aucune voiture n'a la même marque
      if (voituresMemeMarque.length === 0) {
        console.log(`Aucune voiture de l'année ${annee} dans le garage.`);
      }
  
      //Sinon on liste les voiture qui on la même marque
      else {
        console.log(`Voitures de la marque ${annee} dans le garage:`);
        voituresMemeMarque.forEach((voiture) => {
          console.log(`${voiture} `);
        });
      }
    }
  
    afficherVoituresParMarque(troisLettres) {
      //on utilise le même procédé qui pour les précédentes méthodes, on récupère les voitures avec une marque contenant 3 lettres
      const voituresMemeMarque = this.voitures.filter((voiture) =>
        voiture.marque.includes(troisLettres)
      );
  
      //Aucune voiture n'a ces 3 lettres
      if (voituresMemeMarque.length === 0) {
        console.log(
          `Aucune voiture avec une marque contenant "${troisLettres}" dans le garage.`
        );
      }
      //Sinon on liste les voiture qui on ces 3 lettres
      else {
        console.log(
          `Voitures avec une marque contenant "${troisLettres}" dans le garage:`
        );
        voituresMemeMarque.forEach((voiture) => {
          console.log(`${voiture}`);
        });
      }
    }
  }
  
  //test
  const garage1 = new Garage();
  
  const voiture1 = new Voiture("ferrari", "f430", 2022, "Noir");
  const voiture2 = new Voiture("porshe", "Cayenne", 2022, "Rouge");
  const voiture3 = new Voiture("audi", "A7", 2021, "Vert");
  const voiture4 = new Voiture("bmw", "Serie4", 2020, "Bleu");
  
  garage1.ajouterVoiture(voiture1);
  garage1.ajouterVoiture(voiture2);
  garage1.ajouterVoiture(voiture3);
  garage1.ajouterVoiture(voiture4);
  
  garage1.afficherVoituresParMarque("por");
  