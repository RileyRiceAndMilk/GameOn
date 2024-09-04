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
const modalbg = document.querySelector("#formModal"); 
const thankYouModal = document.querySelector("#thankYouModal"); 
const modalBtn = document.querySelector(".btn-signup"); 
const closeBtns = document.querySelectorAll(".close"); 
const closeThankYouBtn = document.querySelector(".btn-close-thankyou"); 
const form = document.querySelector("#reserveForm");

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
  event.preventDefault(); 

  let isValid = true;

  // Réinitialiser les messages d'erreur
  document.getElementById('error-first').style.display = 'none';
  document.getElementById('error-last').style.display = 'none';
  document.getElementById('error-birthdate').style.display = 'none';
  document.getElementById('error-location').style.display = 'none';
  document.getElementById('error-checkbox1').style.display = 'none';

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

  // Vérifier la sélection de la localisation
  const locationSelected = document.querySelector('input[name="location"]:checked');
  if (!locationSelected) {
    document.getElementById('error-location').style.display = 'block';
    isValid = false;
  }

  // Vérifier la case à cocher
  const checkbox1 = document.getElementById('checkbox1').checked;
  if (!checkbox1) {
    document.getElementById('error-checkbox1').style.display = 'block';
    isValid = false;
  }

  // Si le formulaire est valide, afficher le modal de confirmation
  if (isValid) {
    modalbg.style.display = "none"; 
    thankYouModal.style.display = "block";
  }
});

// Fermer le modal de confirmation
if (closeThankYouBtn) {
  closeThankYouBtn.addEventListener("click", () => {
    thankYouModal.style.display = "none";
  });
}


