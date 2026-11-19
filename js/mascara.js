 function mascaraCpf(input) {
  var cpf = input.value.replace(/\D/g, "").slice(0, 11);

  input.value = cpf
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}


function mascaraTelefone(input) {
   const numeros = input.value.replace(/\D/g, "").slice(0, 11);
   let telefone = numeros;

   if (numeros.length > 2) {
      telefone = "(" + numeros.slice(0, 2) + ") " + numeros.slice(2, 7);
      if (numeros.length > 7) {
         telefone += "-" + numeros.slice(7);
      }
   } else if (numeros.length > 0) {
      telefone = "(" + numeros;
   }

   input.value = telefone;
   input.setCustomValidity(
      numeros.length > 0 && numeros.length < 11
   );
   input.classList.remove("is-invalid", "is-valid");
   if (numeros.length > 0) {
      input.classList.add(numeros.length === 11 ? "is-valid" : "is-invalid");
   }
}


function mascaraCRP(input) {
    let numeros = input.value.replace(/\D/g, "").slice(0, 8);

    if (numeros.length === 0) {
        input.value = "";
    } else if (numeros.length > 2) {
        input.value = "CRP-" + numeros.slice(0, 2) + "/" + numeros.slice(2);
    } else {
        input.value = "CRP-" + numeros;
    }
}

function mascaraCEP(input) {
    let cep = input.value.replace(/\D/g, "").slice(0, 8);

    if (cep.length > 5) {
        cep = cep.replace(/^(\d{5})(\d)/, "$1-$2");
    }

    input.value = cep;
    input.setCustomValidity(
      cep.length > 0 && cep.length < 9
   );
   input.classList.remove("is-invalid", "is-valid");
   if (cep.length > 0) {
      input.classList.add(cep.length === 9 ? "is-valid" : "is-invalid");
   }
}