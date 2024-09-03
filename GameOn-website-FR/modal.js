function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const formModal = document.getElementById('formModal');
  const thankYouModal = document.getElementById('thankYouModal');
  const formClose = document.getElementById('formClose');
  const thankYouClose = document.querySelector('.btn-close-thankyou');
  const modalBtns = document.querySelectorAll('.modal-btn');
  const reserveForm = document.getElementById('reserveForm');

  // Error messages
  const errorFirst = document.getElementById('error-first');
  const errorLast = document.getElementById('error-last');
  const errorBirthdate = document.getElementById('error-birthdate');

  modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      formModal.style.display = 'block';
    });
  });

  formClose.addEventListener('click', () => {
    formModal.style.display = 'none';
  });

  thankYouClose.addEventListener('click', () => {
    thankYouModal.style.display = 'none';
  });

  reserveForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting by default

    const first = document.getElementById('first').value.trim();
    const last = document.getElementById('last').value.trim();
    const birthdate = document.getElementById('birthdate').value;

    // Validate fields
    let isValid = true;

    // Validate first name
    if (!first) {
      errorFirst.style.display = 'block';
      isValid = false;
    } else {
      errorFirst.style.display = 'none';
    }

    // Validate last name
    if (!last) {
      errorLast.style.display = 'block';
      isValid = false;
    } else {
      errorLast.style.display = 'none';
    }

    // Validate birthdate
    if (!birthdate) {
      errorBirthdate.style.display = 'block';
      isValid = false;
    } else {
      errorBirthdate.style.display = 'none';
    }

    // If all fields are valid, submit the form
    if (isValid) {
      formModal.style.display = 'none';
      thankYouModal.style.display = 'block';
    }
  });
});