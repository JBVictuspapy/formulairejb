const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const nom = formData.get("nom");
  const prenom = formData.get("prenom");
  const age = formData.get("age");

  // Validation des réponses

  // Si toutes les informations sont valides, envoyez le formulaire
  form.submit();
});


document.querySelector("form").addEventListener("submit", function (event) {
  var username = document.getElementById("username");
  if (!username.checkValidity()) {
    username.classList.add("invalid");
    event.preventDefault();
  }
});
