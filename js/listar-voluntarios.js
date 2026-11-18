var voluntarios = [
    {
        id: 1,
        nome: 'Ana Carolina Souza',
        cpf: '123.456.789-10',
        crp: 'CRP-06/123456',
        email: 'ana.souza@email.com',
        telefone: '(18) 99999-1111',
        possuiEspecializacao: 'sim',
        especializacoes: ['Psicologia Clínica', 'Neuropsicologia'],
        outraEspecializacao: '',
        interesse: 'Psicologia',
        descricao: 'Tenho interesse em atuar na área clínica e contribuir com projetos sociais.',
        disponibilidade: {
            dias: ['Segunda-feira', 'Quarta-feira'],
            inicio: '08:00',
            fim: '12:00'
        },
        aceitouTermos: true
    },
    {
        id: 2,
        nome: 'Mariana Oliveira Santos',
        cpf: '234.567.890-12',
        crp: 'CRP-06/234567',
        email: 'mariana.santos@email.com',
        telefone: '(18) 98888-2222',
        possuiEspecializacao: 'sim',
        especializacoes: ['Psicologia Escolar e Educacional'],
        outraEspecializacao: '',
        interesse: 'Psicologia',
        descricao: 'Desejo ampliar minha experiência profissional e contribuir com o desenvolvimento de crianças e adolescentes.',
        disponibilidade: {
            dias: ['Terça-feira', 'Quinta-feira'],
            inicio: '13:00',
            fim: '17:00'
        },
        aceitouTermos: true
    },
    {
        id: 3,
        nome: 'Gabriel Henrique Lima',
        cpf: '345.678.901-23',
        crp: 'CRP-06/345678',
        email: 'gabriel.lima@email.com',
        telefone: '(18) 97777-3333',
        possuiEspecializacao: 'nao',
        especializacoes: [],
        outraEspecializacao: '',
        interesse: 'Assistência Social',
        descricao: 'Quero participar de iniciativas que promovam inclusão social e apoio às famílias.',
        disponibilidade: {
            dias: ['Sábado'],
            inicio: '09:00',
            fim: '13:00'
        },
        aceitouTermos: true
    },
    {
        id: 4,
        nome: 'Carla Fernanda Costa',
        cpf: '456.789.012-34',
        crp: 'CRP-06/456789',
        email: 'carla.costa@email.com',
        telefone: '(18) 96666-4444',
        possuiEspecializacao: 'sim',
        especializacoes: ['Psicologia Hospitalar', 'Psicologia Social'],
        outraEspecializacao: '',
        interesse: 'Terapia Ocupacional',
        descricao: 'Tenho interesse em colaborar com ações voltadas à saúde e ao bem-estar da comunidade.',
        disponibilidade: {
            dias: ['Segunda-feira', 'Sexta-feira'],
            inicio: '14:00',
            fim: '18:00'
        },
        aceitouTermos: true
    },
    {
        id: 5,
        nome: 'Lucas Eduardo Martins',
        cpf: '567.890.123-45',
        crp: 'CRP-06/567890',
        email: 'lucas.martins@email.com',
        telefone: '(18) 95555-5555',
        possuiEspecializacao: 'sim',
        especializacoes: ['Outra'],
        outraEspecializacao: 'Psicologia Comunitária',
        interesse: 'Outra',
        descricao: 'Busco oportunidades para aplicar meus conhecimentos e adquirir experiência em projetos voluntários.',
        disponibilidade: {
            dias: ['Quarta-feira', 'Sábado'],
            inicio: '10:00',
            fim: '14:00'
        },
        aceitouTermos: true
    }
];

function montarTabela(voluntarios) {
    let tbody = document.querySelector('#tb-body');
    let html = '';

    for (let voluntario of voluntarios) {
        let disponibilidade = voluntario.disponibilidade;
        let diasDisponiveis = disponibilidade && disponibilidade.dias.length
            ? disponibilidade.dias.join(', ')
            : 'Não informado';
        let horarioDisponivel = disponibilidade && disponibilidade.inicio && disponibilidade.fim
            ? `${disponibilidade.inicio} às ${disponibilidade.fim}`
            : 'Não informado';

        html += `

            <tr>
                <td class="coluna volunteer-select-column">
                    <input type="checkbox" data-id="${voluntario.id}" aria-label="Selecionar ${voluntario.nome}">
                </td>
                <td class="coluna">
                    ${voluntario.nome}
                </td>
                <td class="coluna">
                    ${voluntario.crp}
                </td>
                <td class="coluna">
                    ${voluntario.interesse}
                </td>
                <td class="coluna">
                    ${diasDisponiveis}
                </td>
                <td class="coluna">
                    ${horarioDisponivel}
                </td>

                <td class="coluna volunteer-action-column">
                    <button type="button" class="volunteer-view-btn" aria-label="Visualizar cadastro de ${voluntario.nome}" onclick="abrirDetalhes(${voluntario.id})">
                        <i class="bi bi-eye" aria-hidden="true"></i>
                    </button>
                    <button type="button" class="volunteer-delete-btn" aria-label="Excluir ${voluntario.nome}" onclick="delItem(${voluntario.id})">
                        <i class="bi bi-trash3" aria-hidden="true"></i>
                    </button>
                </td>
            </tr>
        
        `
    }

    tbody.innerHTML = html;
    atualizaBotaoExcluirSelecionados();
}

function abrirDetalhes(id) {
    let voluntario = voluntarios.find(function (item) {
        return item.id === id;
    });

    if (!voluntario) {
        return;
    }

    sessionStorage.setItem('voluntarioDetalhes', JSON.stringify(voluntario));
    window.location.href = 'voluntario-detalhes.html';
}

function addItem() {
    //associar o objeto <input> a uma variável
    let nomeInput = document.querySelector('#fullName');
    let cpfInput = document.querySelector('#workcpf');
    let crpInput = document.querySelector('#volunteerCfp');
    let emailInput = document.querySelector('#workEmail');
    let telefoneInput = document.querySelector('#workTel');
    let possuiEspecInput = document.querySelector('#esp');
    let areaInterInput = document.querySelector('#budget');
    let motivosInput = document.querySelector('#message');

    let novoRegistro = {
        id: new Date().getTime(), // para gerar um código de forma automática
        nome: nomeInput.value,
        cpf: cpfInput.value,
        crp: crpInput.value,
        email: emailInput.value,
        telefone: telefoneInput.value,
        possuiEspecializacao: possuiEspecInput.value,
        especializacoes: Array.from(
            document.querySelectorAll('#specializationAreas input[name="specializationArea"]:checked')
        ).map(function (checkbox) {
            return checkbox.value;
        }),
        outraEspecializacao: document.querySelector('#otherArea').value,
        interesse: areaInterInput.value,
        descricao: motivosInput.value,
        aceitouTermos: document.querySelector('#agreeTerms').checked,
        disponibilidade: {
            dias: Array.from(document.querySelectorAll('.availability-day:checked')).map(function (checkbox) {
                return checkbox.value;
            }),
            inicio: document.querySelector('#availabilityStart').value,
            fim: document.querySelector('#availabilityEnd').value
        }
    }

    // adicionar o novoItem no vetor
    voluntarios.push(novoRegistro);
    montarTabela(voluntarios);

    let volunteerForm = document.querySelector('#volunteerForm');
    volunteerForm.reset();
    volunteerForm.classList.remove('was-validated');
    volunteerForm.querySelectorAll('.is-valid, .is-invalid').forEach(function (campo) {
        campo.classList.remove('is-valid', 'is-invalid');
    });
    document.querySelector('#esp').dispatchEvent(new Event('change'));
    nomeInput.focus();

    let successModal = document.querySelector('#volunteerSuccessModal');
    successModal.addEventListener('hidden.bs.modal', function () {
        document.querySelector('#volunteerListSection').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, { once: true });
    bootstrap.Modal.getOrCreateInstance(successModal).show();
}

function delItem(id) {
    voluntarios = voluntarios.filter(function (voluntario) {
        return voluntario.id !== id;
    });

    montarTabela(voluntarios);
    atualizaSelecionarTodos();
}

function atualizaSelecionarTodos() {
    let listaCK = document.querySelectorAll('#tb-body input[type="checkbox"][data-id]');
    let ckPai = document.querySelector('#ckTodos');

    if (!ckPai) {
        return;
    }

    if (listaCK.length === 0) {
        ckPai.checked = false;
        ckPai.indeterminate = false;
        return;
    }

    let selecionados = Array.from(listaCK).filter(function (checkbox) {
        return checkbox.checked;
    }).length;

    ckPai.checked = selecionados === listaCK.length;
    ckPai.indeterminate = selecionados > 0 && selecionados < listaCK.length;
    atualizaBotaoExcluirSelecionados();
}

function atualizaBotaoExcluirSelecionados() {
    let btnExSel = document.querySelector('#btnExcluirSelecionados');
    if (!btnExSel) {
        return;
    }

    btnExSel.disabled = !document.querySelector('#tb-body input[type="checkbox"][data-id]:checked');
}

function selecionaTodos() {
    let listaCK = document.querySelectorAll('#tb-body input[type="checkbox"][data-id]');
    let ckPai = document.querySelector('#ckTodos');

    if (!ckPai) {
        return;
    }

    for (let ck of listaCK) {
        ck.checked = ckPai.checked;
    }

    ckPai.indeterminate = false;
    atualizaBotaoExcluirSelecionados();
}

function excluirSelecionados() {
    let idsSelecionados = Array.from(
        document.querySelectorAll('#tb-body input[type="checkbox"][data-id]:checked')
    ).map(function (checkbox) {
        return Number(checkbox.dataset.id);
    });

    if (idsSelecionados.length === 0) {
        return;
    }

    voluntarios = voluntarios.filter(function (voluntario) {
        return !idsSelecionados.includes(voluntario.id);
    });

    montarTabela(voluntarios);
    atualizaSelecionarTodos();
}

document.addEventListener('DOMContentLoaded',
    function () {
        montarTabela(voluntarios);

        let btnExSel = document.querySelector('#btnExcluirSelecionados');
        btnExSel.addEventListener('click', excluirSelecionados, false);

        let btnNovoVoluntario = document.querySelector('#btnNovoVoluntario');
        btnNovoVoluntario.addEventListener('click', function () {
            let primeiroCampo = document.querySelector('#fullName');
            primeiroCampo.scrollIntoView({ behavior: 'smooth', block: 'center' });
            primeiroCampo.focus({ preventScroll: true });
        }, false);

        let ckPai = document.querySelector('#ckTodos');
        if (ckPai) {
            ckPai.addEventListener('change', selecionaTodos, false);
        }

        let tbody = document.querySelector('#tb-body');
        if (tbody) {
            tbody.addEventListener('change', function (event) {
                if (event.target.matches('input[type="checkbox"][data-id]')) {
                    atualizaSelecionarTodos();
                }
            });
        }

        let volunteerForm = document.querySelector('#volunteerForm');
        if (volunteerForm) {
            volunteerForm.addEventListener('submit', function (event) {
                let possuiEspecializacao = document.querySelector('#esp').value;
                let especializacoesSelecionadas = document.querySelectorAll(
                    '#specializationAreas input[type="checkbox"]:checked'
                );

                if (!volunteerForm.checkValidity() ||
                    (possuiEspecializacao === 'sim' && especializacoesSelecionadas.length === 0)) {
                    return;
                }

                event.preventDefault();
                addItem();
                event.stopImmediatePropagation();
            });
        }

    }, false);
