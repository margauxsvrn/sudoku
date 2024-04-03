// Fonction qui vérifier si les règles du Sudoku sont respectées
const verifier = () => {
    // Vérifier que les nombres saisis sont bien des nombres de 1 à 9

    // Récupérer tous les inputs de la page
    const listInput = document.querySelectorAll('input')

    for (let index = 0; index < listInput.length; index++) {
        // Pour chacun des inputs, je vérifie que le champs est valide
        const input = listInput[index].checkValidity()

        if (input === true) {
            console.log("Tout est ok")
        }
        // Si c'est pas valide, on arrête le programme
        else {
            console.log("Erreur")
            return
        }

    }



    
}

// Récupérer le bouton
const button = document.getElementById('button-verifier')

// Assigner l'événement click à la function vérifier
button.addEventListener('click', verifier)