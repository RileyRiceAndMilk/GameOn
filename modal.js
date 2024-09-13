// Fonction pour gérer la navigation mobile
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("reserveForm");
  const firstName = document.getElementById("first");
  const lastName = document.getElementById("last");
  const email = document.getElementById("email");
  const birthdate = document.getElementById("birthdate");
  const quantity = document.getElementById("quantity");
  const locationInputs = document.querySelectorAll("input[name='location']");
  const checkbox1 = document.getElementById("checkbox1");
  
  const errorFirst = document.getElementById("error-first");
  const errorLast = document.getElementById("error-last");
  const errorEmail = document.getElementById("error-email");
  const errorBirthdate = document.getElementById("error-birthdate");
  const errorLocation = document.getElementById("error-location");
  const errorCheckbox1 = document.getElementById("error-checkbox1");

  // Validation on form submit
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Validate first name
    if (firstName.value.trim().length < 2) {
      errorFirst.style.display = "block";
      isValid = false;
    } else {
      errorFirst.style.display = "none";
    }

    // Validate last name
    if (lastName.value.trim().length < 2) {
      errorLast.style.display = "block";
      isValid = false;
    } else {
      errorLast.style.display = "none";
    }

    // Validate email
    if (!email.value.includes("@") || !email.value.includes(".")) {
      errorEmail.style.display = "block";
      isValid = false;
    } else {
      errorEmail.style.display = "none";
    }

      // Vérifier la quantité (nombre de tournois)
  const quantity = document.getElementById('quantity').value.trim();
  if (quantity === '' || isNaN(quantity)) {
    document.getElementById('error-quantity').style.display = 'block';
    isValid = false;
  }


    // Validate birthdate
    if (!birthdate.value) {
      errorBirthdate.style.display = "block";
      isValid = false;
    } else {
      errorBirthdate.style.display = "none";
    }

    // Validate location selection
    let locationSelected = false;
    locationInputs.forEach((input) => {
      if (input.checked) {
        locationSelected = true;
      }
    });
    if (!locationSelected) {
      errorLocation.style.display = "block";
      isValid = false;
    } else {
      errorLocation.style.display = "none";
    }

    // Validate checkbox1
    if (!checkbox1.checked) {
      errorCheckbox1.style.display = "block";
      isValid = false;
    } else {
      errorCheckbox1.style.display = "none";
    }

    // If the form is valid, show thank you modal
    if (isValid) {
      document.getElementById("formModal").style.display = "none";
      document.getElementById("thankYouModal").style.display = "block";
    }
  });

  // Close modals
  const closeButtons = document.querySelectorAll(".close, .btn-close-thankyou");
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      document.getElementById("formModal").style.display = "none";
      document.getElementById("thankYouModal").style.display = "none";
    });
  });

  // Open form modal
  const openButtons = document.querySelectorAll(".modal-btn, .modal-btnmobile");
  openButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      document.getElementById("formModal").style.display = "block";
    });
  });
});


