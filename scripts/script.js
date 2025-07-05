function afficherResultat(resultat, nombreTours) {
    let messageResultat = `${resultat} / ${nombreTours}`;
    zoneScore.textContent = messageResultat;
}

function afficherProposition(mot) {
    motPropose.textContent = mot;
}

function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`;
    location.href = mailto;
}

function validerNom(nom) {
    if (nom.length < 2) {
        throw new Error("Nom incorrect.");
    }
}

function validerEmail(email) {
    let expressionReguliere = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
    if (expressionReguliere.test(email) === false) {
        throw new Error("Email incorrect.");
    }
}

function gererFormulaire(score) {
        let zoneNom = document.getElementById("nom");
        let nom = zoneNom.value;
        let zoneEmail = document.getElementById("email");
        let email = zoneEmail.value;

        try {
            validerNom(nom);
            validerEmail(email);
            afficherEmail(nom, email, score);
            afficherMessageErreur();
        } catch (erreur) {
            afficherMessageErreur(erreur.message);
        }
}

function afficherMessageErreur(messageErreur) {
    try {
        let baliseErreur = document.querySelector(".popup span");
        baliseErreur.textContent = messageErreur;
    } catch {
        let balisePopup = document.querySelector(".popup");
        let baliseErreur = document.createElement("span");
        baliseErreur.textContent = messageErreur;
        balisePopup.appendChild(baliseErreur);
    }
}

function lancerJeu() {
    initAddEventListenerPopup();
    let i = 0;
    let listeProposition = listeMots;
    afficherProposition(listeProposition[i]);

    boutonValidation.addEventListener("click", () => {
        if (zoneTexte.value === listeProposition[i]) {
            score++;
        }
        i++;
        afficherResultat(score, i);
        if (listeProposition[i] === undefined) {
            afficherProposition("Le jeu est fini");
            boutonValidation.disabled = true;
        } else {
            afficherProposition(listeProposition[i]);
        }
        zoneTexte.value = "";
    })

    for(let k = 0; k < 2; k++) {
        btnRadio[k].addEventListener("change", () => {
            if (btnRadio[0].checked === true) {
                listeProposition = listeMots;
            } else {
                listeProposition = listePhrases;
            }
            afficherProposition(listeProposition[i]);
        })
    }

    let formPartager = document.querySelector("form");
    formPartager.addEventListener("submit", (event) => {
        event.preventDefault();
        gererFormulaire(`${score} / ${i}`);
    })
}