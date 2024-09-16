
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


function openModal() {
 
  resetErrorMessages();
  modalbg.style.display = "block";
}


function closeModals() {
  modalbg.style.display = "none";
  thankYouModal.style.display = "none";
  form.reset(); 
}


function resetErrorMessages() {
  document.getElementById('error-first').style.display = 'none';
  document.getElementById('error-last').style.display = 'none';
  document.getElementById('error-email').style.display = 'none';
  document.getElementById('error-birthdate').style.display = 'none';
  document.getElementById('error-quantity').style.display = 'none';
  document.getElementById('error-location').style.display = 'none';
  document.getElementById('error-checkbox1').style.display = 'none';
}

function validateForm() {
  let isValid = true;


  resetErrorMessages();

 
  const first = document.getElementById('first').value.trim();
  if (first.length < 2) {
    document.getElementById('error-first').style.display = 'block';
    isValid = false;
  }


  const last = document.getElementById('last').value.trim();
  if (last.length < 2) {
    document.getElementById('error-last').style.display = 'block';
    isValid = false;
  }


  const email = document.getElementById('email').value.trim();
  if (email === '') {
    document.getElementById('error-email').style.display = 'block';
    isValid = false;
  }

 
  const birthdate = document.getElementById('birthdate').value;
  if (!birthdate) {
    document.getElementById('error-birthdate').style.display = 'block';
    isValid = false;
  }


  const quantity = document.getElementById('quantity').value.trim();
  if (quantity === '' || isNaN(quantity)) {
    document.getElementById('error-quantity').style.display = 'block';
    isValid = false;
  }


  const locationSelected = document.querySelector('input[name="location"]:checked');
  if (!locationSelected) {
    document.getElementById('error-location').style.display = 'block';
    isValid = false;
  }

  
  const checkbox1 = document.getElementById('checkbox1').checked;
  if (!checkbox1) {
    document.getElementById('error-checkbox1').style.display = 'block';
    isValid = false;
  }

  if (isValid) {
    document.getElementById("formModal").style.display = "none";
    document.getElementById("thankYouModal").style.display = "block";

  
    form.reset();
  }
}

const modalbg = document.querySelector("#formModal"); 
const thankYouModal = document.querySelector("#thankYouModal"); 
const modalBtns = document.querySelectorAll(".btn-signup"); 
const closeBtns = document.querySelectorAll(".close"); 
const closeThankYouBtn = document.querySelector(".btn-close-thankyou"); 
const form = document.querySelector("#reserveForm");


modalBtns.forEach(btn => {
  btn.addEventListener("click", openModal);
});


closeBtns.forEach((btn) => btn.addEventListener("click", closeModals));


form.addEventListener("submit", (event) => {
  event.preventDefault(); 
  validateForm();
});


if (closeThankYouBtn) {
  closeThankYouBtn.addEventListener("click", () => {
    thankYouModal.style.display = "none";
    form.reset(); 
  });
}



