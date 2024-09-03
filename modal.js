// Fonction pour gérer la navigation mobile
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Sélection des éléments DOM
const modalbg = document.querySelector("#formModal"); // Modal de formulaire
const thankYouModal = document.querySelector("#thankYouModal"); // Modal de confirmation
const modalBtn = document.querySelector(".btn-signup"); // Bouton pour ouvrir le formulaire
const closeBtns = document.querySelectorAll(".close"); // Boutons de fermeture dans les modals
const closeThankYouBtn = document.querySelector(".btn-close-thankyou"); // Bouton de fermeture dans le modal de confirmation
const form = document.querySelector("#reserveForm"); // Formulaire

// Ouvrir le modal de formulaire
modalBtn.addEventListener("click", () => {
  modalbg.style.display = "block";
});

// Fermer les modals
closeBtns.forEach((btn) => btn.addEventListener("click", () => {
  modalbg.style.display = "none";
  thankYouModal.style.display = "none";
}));

// Gestion de la soumission du formulaire
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Empêcher l'envoi du formulaire normalement

  let isValid = true;

  // Réinitialiser les messages d'erreur
  document.getElementById('error-first').style.display = 'none';
  document.getElementById('error-last').style.display = 'none';
  document.getElementById('error-birthdate').style.display = 'none';

  // Vérifier le prénom
  const first = document.getElementById('first').value.trim();
  if (first.length < 2) {
    document.getElementById('error-first').style.display = 'block';
    isValid = false;
  }

  // Vérifier le nom
  const last = document.getElementById('last').value.trim();
  if (last.length < 2) {
    document.getElementById('error-last').style.display = 'block';
    isValid = false;
  }

  // Vérifier la date de naissance
  const birthdate = document.getElementById('birthdate').value;
  if (!birthdate) {
    document.getElementById('error-birthdate').style.display = 'block';
    isValid = false;
  }

  // Si le formulaire est valide, afficher le modal de confirmation
  if (isValid) {
    modalbg.style.display = "none"; // Cacher le modal de formulaire
    thankYouModal.style.display = "block"; // Afficher le modal de confirmation
  }
});

// Fermer le modal de confirmation
if (closeThankYouBtn) {
  closeThankYouBtn.addEventListener("click", () => {
    thankYouModal.style.display = "none";
  });
}
