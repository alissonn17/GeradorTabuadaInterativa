const calcular = document.getElementById("calcular");
const digito = document.getElementById("digito");
const resultados = document.getElementById("resultados");

calcular.addEventListener("click", function () {
    const numero = Number(digito.value);
    resultados.replaceChildren();

    for (let i = 1; i <= 10; i++) {
        const item = document.createElement("li");
        item.textContent = `${numero} x ${i} = ${numero * i}`;
        resultados.appendChild(item);
    }
});