// // Fonction qui vérifier si les règles du Sudoku sont respectées
// const verifier = () => {
//     // Vérifier que les nombres saisis sont bien des nombres de 1 à 9

//     // Récupérer tous les inputs de la page
//     const listInput = document.querySelectorAll('input')
   
//     for (let index = 0; index < listInput.length; index++) {
//         const element = listInput[index].value;

//         if(element >= 1 && element <= 9){
//             console.log("Tout est ok")
//         }
//         else{
//             console.log("Erreur")
//             return 
//         }
        
//     }

//     // Pour chacun des inputs, je vérifie que le champs est valide

//     // Si c'est pas valide, on arrête le programme
// }
const verifier = () => {
    const listInput = document.querySelectorAll('input[type="text"]');

    for (let index = 0; index < listInput.length; index++) {
        const element = parseInt(listInput[index].value.trim());

        if (!isNaN(element) && element >= 1 && element <= 9) {
            console.log("Tout est ok");
        } else {
            console.log("Erreur");
            return; // Arrêter le programme si une erreur est rencontrée
        }
    }
}






// Récupérer le bouton
const button = document.getElementById('button-verifier')

// Assigner l'événement click à la function vérifier
button.addEventListener('click', verifier)