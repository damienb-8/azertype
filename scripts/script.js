function afficherResultat(resultat, nombreTours) {
    let messageResultat = "Votre score est de " + resultat + " sur " + nombreTours;
    console.log(messageResultat);
}

function choisirMotsouPhrases() {
    let motsOuPhrases = prompt("Tu veux écrire des mots ou des phrases ?");
    while (motsOuPhrases !== "mots" && motsOuPhrases !== "phrases") {
        motsOuPhrases = prompt('Entre "mots" ou "phrases".');
    }
    return motsOuPhrases;
}

function lancerBoucleJeu(liste) {
    for (let i = 0; i < liste.length; i++) {
        let motUtilisateur = prompt("Entrez le texte : " + liste[i]);
        if (motUtilisateur === liste[i]) {
            console.log("Bravo, c'est correct.");
            score++;
        } else {
            console.log("Vous avez fait une erreur de frappe.");
        }
        console.log(score);
    }
}

function lancerJeu() {
    let motsOuPhrases = choisirMotsouPhrases();
    if (motsOuPhrases === "mots") {
        lancerBoucleJeu(listeMots)
        afficherResultat(score, listeMots.length)
    } else {
        lancerBoucleJeu(listePhrases)
        afficherResultat(score, listePhrases.length)
    }
}