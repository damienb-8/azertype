function afficherResultat(resultat, nombreTours) {
    let messageResultat = `${resultat} / ${nombreTours}`;
    zoneScore.textContent = messageResultat;
}

function afficherProposition(mot) {
    motPropose.textContent = mot;
}

function lancerJeu() {
    let i = 0;
    afficherProposition(listeMots[i]);

    boutonValidation.addEventListener("click", () => {
        if (zoneTexte.value === listeMots[i]) {
            score++;
        }
        i++;
        afficherResultat(score, i);
        if (listeMots[i] === undefined) {
            afficherProposition("Le jeu est fini");
            boutonValidation.disabled = true;
        } else {
            afficherProposition(listeMots[i]);
        }
        zoneTexte.value = "";
    })

}