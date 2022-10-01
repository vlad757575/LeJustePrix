// Etape 1 - Sélectionner nos éléments
let input = document.getElementById("prix");
let error = document.querySelector("small");
let body = document.querySelector("body");
let formulaire = document.getElementById("formulaire");
// let instruction = document.getElementById("instructions");



// Etape 2 - Cacher l'erreur

error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire

function entier(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let nombreAleatoire = entier(0, 999);
let coup = 0;
let nombreChoisi;

console.log(nombreAleatoire);

// Etape 6 - Créer la fonction vérifier

function verifier(nombre) {
    nombreChoisi = input.value;
    let instruction = document.createElement("div");
    // body.append(instruction);

    if (nombre > nombreAleatoire) {
        console.log("moins");
        instruction.classList.add("moins");
        instruction.style.marginBottom = "40px";
        instruction.textContent = "Tentative n° " + coup + "  (" + nombre + ") C'est moins";
    }
    else if (nombre < nombreAleatoire) {
        console.log("plus");

        instruction.classList.remove("moins");
        instruction.style.marginBottom = "40px";
        instruction.classList.add("plus");
        instruction.textContent = "Tentative n° " + coup + "  (" + nombre + ") C'est plus";
    }
    else {
        instruction.classList.add("fini");
        instruction.style.marginBottom = "40px";
        instruction.textContent = "Bravo, vous avez gagné !";
        input.disabled = true;
        confetti();

    }


    document.querySelector('#instructions').prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre



input.addEventListener('keyup', () => {

    if (isNaN(input.value)) {
        error.style.display = "block";
        error.style.color = "red";
        error.innerText = "Vous devez rentrer un nombre";
        console.log("red");
    } else {
        error.style.display = "none";
    }

})

// Etape 5 - Agir à l'envoi du formulaire

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    if (isNaN(input.value) || input.value.length == 0) {
        prix.style.borderColor = "red";

    } else {
        coup++;
        prix.style.borderColor = "silver";
        nombreChoisi = input.value;
        input.value = "";
        verifier(nombreChoisi)



    }
})

