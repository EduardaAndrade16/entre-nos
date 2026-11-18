function mascaraCpf(input) {
  var cpf = input.value.replace(/\D/g, "").slice(0, 11);

  input.value = cpf
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}


function mascaraTelefone() {
   var tel = event.target.value;
   tel = tel.replace(/\D/g, "")
   tel = tel.replace(/^(\d)/, "($1")
   tel = tel.replace(/(.{3})(\d)/, "$1)$2")
   if (tel.length == 9) {
      tel = tel.replace(/(.{1})$/, "-$1")
   } else if (tel.length == 10) {
      tel = tel.replace(/(.{2})$/, "-$1")
   } else if (tel.length == 11) {
      tel = tel.replace(/(.{3})$/, "-$1")
   } else if (tel.length == 12) {
      tel = tel.replace(/(.{4})$/, "-$1")
   } else if (tel.length > 12) {
      tel = tel.replace(/(.{4})$/, "-$1")
   }
   event.target.value = tel;
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
