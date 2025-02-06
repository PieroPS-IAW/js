function lanzarDados() {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let suma = dado1 + dado2;

    document.getElementById("dado1").src = `../img/dado${dado1}.png`;
    document.getElementById("dado2").src = `../img/dado${dado2}.png`;
    document.getElementById("resultado").textContent = `Resultado: ${suma}`;
}
