let motoristas = [
    {   nome: 'Alison José Alves da Silva',
        cargo: 'Motorista',
        cpf: '080.830.484-45',
        matricula: '521',
        endereço: undefined,
        telefone: undefined,
        email: undefined,
        banco: 'Banco do Brasil',
        agencia: '0879-6',
        conta: '20561-3'},
    {   nome: 'Antonio Pereira Nobre',
        cargo: 'Motorista',
        cpf: '214.716.221-34',
        matricula: undefined,
        endereço: undefined,
        telefone: undefined,
        email: undefined,
        banco: 'Banco do Brasil',
        agencia: '1109-6',
        conta: '1043-X'},
    {   nome: 'Antonio Sobrinho',
        cargo: 'Motorista',
        cpf: '297.274.134-04',
        matricula: '662',
        endereço: undefined,
        telefone: '(84) 99981755',
        email: undefined,
        banco: 'Banco do Brasil',
        agencia: '1038-3',
        conta: '27108-X'},
    {   nome: 'Francisco Alexandre Nobre Cavalcante',
        cargo: 'Motorista',
        cpf: '010.756.794-60',
        matricula: '160',
        endereço: undefined,
        telefone: undefined,
        email: undefined,
        banco: 'Banco do Brasil',
        agencia: '1109-6',
        conta: '53647-4'},
    {   nome: 'Francisco Charles de Sousa Oliveira',
        cargo: 'Motorista',
        cpf: '077.343.184-52',
        matricula: '408',
        endereço: undefined,
        telefone: '(84) 996664530',
        email: undefined,
        banco: 'Banco do Brasil',
        agencia: '1038-3',
        conta: '26198-X'},
    {   nome: 'Francisco Cleudes Cardoso',
        cargo: 'Motorista',
        cpf: '053.533.974-79',
        matricula: '703',
        endereço: undefined,
        telefone: undefined,
        email: undefined,
        banco: 'Caixa Econômica Federal',
        agencia: '0763 op 013',
        conta: '0026318-5'},
    {   nome: 'Francisco Fabiano Turíbio Rocha',
        carago: 'Motorista',
        cpf: '289.540.838-62',
        matricula: '413',
        endereço: undefined,
        telefone: '(84) 996463906',
        email: undefined,
        banco: 'Banco do Brasil',
        agencia: '1140-1',
        conta: '32101-X'},
    {   nome: 'Marcio Marcolino Pinto',
        cargo: 'Motorista',
        cpf: '806.704.744-87',
        matricula: '343',
        endereço: undefined,
        telefone: undefined,
        email: undefined,
        banco: 'Banco do Brasil',
        agencia: '1109-6',
        conta: '12590-3'}
];

//Recupero o Input de seleção de Motoristas (preciso recuperar o objeto!)
let _inputMotorista = document.getElementById('motorista')

//Criando opções no select De Motoristas
    for (let index = 0; index < motoristas.length; index++) {
        let opcao = document.createElement('option');
        opcao.textContent = motoristas[index].nome;
        
        _inputMotorista.appendChild(opcao);
    }

let _button = document.getElementById('gerar');

_button.addEventListener('click', gerarDocumento)


function gerarDocumento() {
//Pegando e Adicionando Data Atualizada 
    let dataAtual = new Date()

    let _diaAtual = document.getElementsByClassName('diaAtual');
    for (let index = 0; index < _diaAtual.length; index++) {
        _diaAtual[index].innerHTML = dataAtual.getDate();
    }

    let _mesAtual = document.getElementsByClassName('mesAtual');
    for (let index = 0; index < _mesAtual.length; index++) {
        let mes = dataAtual.getMonth()
        let meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
        _mesAtual[index].innerHTML = meses[mes]
    }


    let _anoAtual = document.getElementsByClassName('anoAtual');
    for (let index = 0; index < _anoAtual.length; index++) {
        _anoAtual[index].innerHTML = dataAtual.getFullYear();
    }

//Numeração de Memorando e Portaria
    let _numeracao = document.getElementsByClassName('numeracao');
    let _numInput = document.getElementById('numeroPortaria').value;
    for (let index = 0; index < _numeracao.length; index++) {
        _numeracao[index].innerHTML = _numInput;
    }

//Preenchendo Formulario
    let _nomesMotorista = document.getElementsByClassName('nomeMotorista')
    for (let index = 0; index < _nomesMotorista.length; index++) {
        _nomesMotorista[index].innerHTML = _inputMotorista.value
    }

    //-------

    let _cpfsMotorista = document.getElementsByClassName('cpfMotorista')
    for (let index = 0; index < _cpfsMotorista.length; index++) { 
    }

    //---------

    let _matriculaMotoristas = document.getElementsByClassName('matriculaMotorista')
    for (let index = 0; index < _matriculaMotoristas.length; index++){
        _matriculaMotoristas[index].innerHTML = motoristas[index].matricula
    }

    //---------

    let _enderecoMotorista = document.getElementById('enderecoMotorista');
        _enderecoMotorista.innerHTML = motoristas[index].endereço
    

    //--------

}



