const formulario = document.querySelector("form");

formulario.addEventListener("submit", (event) => {

    const nome = document.getElementById("name").value.trim();

    const partes = nome.split(/\s+/);

    if (partes.length < 2) {
        event.preventDefault();
        alert("Digite nome e sobrenome.");
        return;
    }

    const nomeValido = partes.every(parte => parte.length >= 2);

    if (!nomeValido) {
        event.preventDefault();
        alert("Nome e sobrenome devem ter pelo menos 2 letras.");
        return;
    }

});