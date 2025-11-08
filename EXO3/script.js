"use strict";

// Exercice 3 

//Tableau d'étudiants slide 40
const students = [
    [1000, "JOHN", "DOE", 14, 12],     // Note 12 → ADMIS
    [2000, "BOB", "CARLTON", 7, 8],    // Note 8 → AJOURNÉ  
    [3000, "RAVANE", "SMITH", 13, 11]  // Note 11 → ADMIS
];

/**
 * Fonction B : Vérifie si un étudiant est admis  (slide 45)
 * @param {number} note - La note de l'étudiant (type float)
 * @returns {boolean} - TRUE si admis, FALSE si ajourné
 */
function fonctionB(note) {
    // Condition pour l'admission : note >= 10 slide 41/42
    return note >= 10;
}

//Fonction A : Gère la délibération de tous les étudiants
//Appelle la fonction B pour chaque étudiant slide 45
function fonctionA() {
    //loop for slide 44
    //tab d'objets 40
    for (let i = 0; i < students.length; i++) {
        const etudiant = students[i];
        const id = etudiant[0];    // ID de l'étudiant
        const note = etudiant[4];  // Note de l'étudiant
        
        // Appel de la fonction B avec la note
        const estAdmis = fonctionB(note);
        
        // Affichage du résultat
        //slide 42 if else 
        if (estAdmis) {
            console.log(id + ": ADMIS");
        } else {
            console.log(id + ": AJOURNÉ");
        }
    }
}

//Fonction principale de délibération
function deliberation() {
    fonctionA();
}