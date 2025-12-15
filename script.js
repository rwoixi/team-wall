fetch('membres.json')
  .then(response => response.json())
  .then(membres => {
    let div = document.getElementById('noms');

    membres.forEach(m => {
      div.innerHTML += m.prenom + " " + m.nom + " - " + m.role + "<br>";
    });
  });