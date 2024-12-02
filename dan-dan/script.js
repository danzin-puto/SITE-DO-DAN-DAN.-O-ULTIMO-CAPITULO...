function calcularCalorias() {
    const idade = parseInt(document.querySelector(".idade").value);
    const peso = parseFloat(document.querySelector(".peso").value);
    const altura = parseFloat(document.querySelector(".altura").value);
    const genero = document.querySelector(".genero").value;
    const atividade = parseFloat(document.querySelector(".atividade").value);

    if (isNaN(idade) || isNaN(peso) || isNaN(altura)) {
        document.querySelector(".resultado").innerText = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    // Fórmulas de Harris-Benedict
    let bmr;
    if (genero === "masculino") {
        bmr = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade);
    } else {
        bmr = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade);
    }

    const tdee = bmr * atividade;

    // Exibir o resultado
    document.querySelector(".resultado").innerText = `Você precisa de aproximadamente ${tdee.toFixed(2)} calorias por dia.`;
}
