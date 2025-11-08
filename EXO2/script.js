"use strict";

// Exercice 2 :

// Fonction F1 : Affiche un tableau d'étudiants simples
function f1() {
    // Tableau simple d'étudiants 
    const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
    
    // Parcours du tableau avec for...of 
    for (const etudiant of etudiants) {
        console.log(etudiant);
    }
}

//Fonction F2 : Affiche un objet étudiant
function f2() {
    
    // Création d'un objet étudiant 
    const etudiant = {
        nom: "John",
        prenom: "DOE", 
        age: 30
    };
    
    // Affichage de l'objet entier 
    console.log(etudiant);
}

//Fonction F3 : Affiche un tableau d'objets étudiants formatés
// Combinaison tableaux et objets
function f3() {
    
    // Tableau d'objets étudiants 
    const etudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];
    
    // Parcours et affichage formaté 
    for (const etudiant of etudiants) {
        console.log(etudiant.nom + "-" + etudiant.prenom + "-" + etudiant.age);
    }
}