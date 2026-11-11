function validarCPF(input) {
    const cpf = input.value.replace(/\D/g, "");
    const feedback = document.getElementById("cpfFeedback");

    input.classList.remove("is-invalid", "is-valid");

    if (cpf.length === 0) {
        feedback.textContent = "Por favor, digite seu CPF.";
        input.classList.add("is-invalid");
        return false;
    }

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        feedback.textContent = "CPF inválido. Verifique os números digitados.";
        input.classList.add("is-invalid");
        return false;
    }

    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += Number(cpf[i]) * (10 - i);
    }

    let digito1 = (soma * 10) % 11;
    if (digito1 === 10) digito1 = 0;

    if (digito1 !== Number(cpf[9])) {
        feedback.textContent = "CPF inválido. Verifique os números digitados.";
        input.classList.add("is-invalid");
        return false;
    }

    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += Number(cpf[i]) * (11 - i);
    }

    let digito2 = (soma * 10) % 11;
    if (digito2 === 10) digito2 = 0;

    if (digito2 !== Number(cpf[10])) {
        feedback.textContent = "CPF inválido. Verifique os números digitados.";
        input.classList.add("is-invalid");
        return false;
    }

    input.classList.add("is-valid");
    return true;
}


function validarNome(input) {
    const nome = input.value.trim();
    const feedback = document.getElementById("nomeFeedback");

    input.classList.remove("is-invalid", "is-valid");

    if (nome === "") {
        feedback.textContent = "Por favor, insira seu nome completo.";
        input.classList.add("is-invalid");
        return false;
    }

    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {
        feedback.textContent = "O nome não pode conter números ou caracteres especiais.";
        input.classList.add("is-invalid");
        return false;
    }

    feedback.textContent = "";
    input.classList.add("is-valid");
    return true;
}

//validação do documento do profissional de psicologia
function validarCRP(input) {
    const crp = input.value.trim();
    const feedback = document.getElementById("crpFeedback");

    input.classList.remove("is-invalid", "is-valid");

    if (crp === "") {
        feedback.textContent = "Por favor, informe seu número de CRP.";
        input.classList.add("is-invalid");
        return false;
    }

    if (!/^CRP-\d{2}\/\d+$/.test(crp)) {
        feedback.textContent = "Número de CRP inválido. Utilize o formato CRP-XX/XXXXX.";
        input.classList.add("is-invalid");
        return false;
    }

    feedback.textContent = "";
    input.classList.add("is-valid");
    return true;
}
