let motoristas = [
    {   nome: "Alison José Alves da Silva",
        cargo: "Motorista",
        cpf: "080.830.484-45",
        matricula: "521",
        endereco: " ",
        telefone: " ",
        email: " ",
        banco: "Banco do Brasil",
        agencia: "0879-6",
        conta: "20561-3"},
    {   nome: "Antonio Pereira Nobre",
        cargo: "Motorista",
        cpf: "214.716.221-34",
        matricula: " ",
        endereco: " ",
        telefone: " ",
        email: " ",
        banco: "Banco do Brasil",
        agencia: "1109-6",
        conta: "1043-X"},
    {   nome: "Antonio Sobrinho",
        cargo: "Motorista",
        cpf: "297.274.134-04",
        matricula: "662",
        endereco: " ",
        telefone: "(84) 99981755",
        email: " ",
        banco: "Banco do Brasil",
        agencia: "1038-3",
        conta: "27108-X"},
    {   nome: "Francisco Alexandre Nobre Cavalcante",
        cargo: "Motorista",
        cpf: "010.756.794-60",
        matricula: "160",
        endereco: " ",
        telefone: " ",
        email: " ",
        banco: "Banco do Brasil",
        agencia: "1109-6",
        conta: "53647-4"},
    {   nome: "Francisco Charles de Sousa Oliveira",
        cargo: "Motorista",
        cpf: "077.343.184-52",
        matricula: "408",
        endereco: " ",
        telefone: "(84) 996664530",
        email: " ",
        banco: "Banco do Brasil",
        agencia: "1038-3",
        conta: "26198-X"},
    {   nome: "Francisco Cleudes Cardoso",
        cargo: "Motorista",
        cpf: "053.533.974-79",
        matricula: "703",
        endereco: " ",
        telefone: " ",
        email: " ",
        banco: "Caixa Econômica Federal",
        agencia: "0763 op 013",
        conta: "0026318-5"},
    {   nome: "Francisco Fabiano Turíbio Rocha",
        carago: "Motorista",
        cpf: "289.540.838-62",
        matricula: "413",
        endereco: " ",
        telefone: "(84) 996463906",
        email: " ",
        banco: "Banco do Brasil",
        agencia: "1140-1",
        conta: "32101-X"},
    {   nome: "Marcio Marcolino Pinto",
        cargo: "Motorista",
        cpf: "806.704.744-87",
        matricula: "343",
        endereco: " ",
        telefone: " ",
        email: " ",
        banco: "Banco do Brasil",
        agencia: "1109-6",
        conta: "12590-3"}
];

let motoristaSelecionado = "";
//Recupero os Inputs 
let _inputMotorista = document.getElementById("motorista")
let _inputDestino = document.getElementById("inputDestino")
let _inputDataDaViagem = document.getElementById("viagem")
let _inputQtdDiarias = document.getElementById("diarias")

//Criando opções no select De Motoristas
    for (let index = 0; index < motoristas.length; index++) {
        let opcao = document.createElement("option");
        opcao.textContent = motoristas[index].nome;
        
        _inputMotorista.appendChild(opcao);
    }

let _button = document.getElementById("gerar");
let _documentoCompleto = document.getElementById("documento-completo")

_button.addEventListener("click", gerarDocumento)
_button.addEventListener("click", function(){
    _documentoCompleto.classList.remove("hidden")
})




function gerarDocumento() {
//Pegando e Adicionando Data Atualizada 
    let dataAtual = new Date()

    let _diaAtual = document.getElementsByClassName("diaAtual");
    for (let index = 0; index < _diaAtual.length; index++) {
        _diaAtual[index].innerHTML = dataAtual.getDate();
    }

    let _mesAtual = document.getElementsByClassName("mesAtual");
    for (let index = 0; index < _mesAtual.length; index++) {
        let mes = dataAtual.getMonth()
        let meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
        _mesAtual[index].innerHTML = meses[mes]
    }


    let _anoAtual = document.getElementsByClassName("anoAtual");
    for (let index = 0; index < _anoAtual.length; index++) {
        _anoAtual[index].innerHTML = dataAtual.getFullYear();
    }

//Numeração de Memorando e Portaria
    let _numeracao = document.getElementsByClassName("numeracao");
    let _numInput = document.getElementById("numeroPortaria").value;
    for (let index = 0; index < _numeracao.length; index++) {
        _numeracao[index].innerHTML = _numInput;
    }

//Pegando Objeto do motorista selecionado e colocando na variavel
     for(i = 0; i < motoristas.length; i++){
        let valores = Object.values(motoristas[i])
      if(valores[0] == _inputMotorista.value){
      motoristaSelecionado = motoristas[i];
      break
      }
    }
    

    let _nomesMotorista = document.getElementsByClassName("nomeMotorista")
    for (let index = 0; index < _nomesMotorista.length; index++) {
        _nomesMotorista[index].innerHTML = motoristaSelecionado.nome
    }

    //Preenchendo CPF

    let _cpfsMotorista = document.getElementsByClassName("cpfMotorista")
    for (let index = 0; index < _cpfsMotorista.length; index++) { 
        _cpfsMotorista[index].innerHTML = motoristaSelecionado.cpf
    }

    //Preenchendo matricula

    let _matriculaMotoristas = document.getElementsByClassName("matriculaMotorista")
    for (let index = 0; index < _matriculaMotoristas.length; index++){
        _matriculaMotoristas[index].innerHTML = motoristaSelecionado.matricula
    }

    //Preenchendo Endereço

    let _enderecoMotorista = document.getElementById("enderecoMotorista");
    if(motoristaSelecionado.endereco !== " "){
        _enderecoMotorista.innerHTML = motoristaSelecionado.endereco
    }else{
        _enderecoMotorista = " ";
    }
    
    //Preenchendo Telefone

    let _telefoneMotorista = document.getElementById("telefoneMotorista");
    if(motoristaSelecionado.telefone !== " "){
        _telefoneMotorista.innerHTML = motoristaSelecionado.telefone
    }else{
        _telefoneMotorista = " ";
    }

    //Preenchendo E-mail
    let _emailMotorista = document.getElementById("emailMotorista");
    if(motoristaSelecionado.email !== " "){
        _emailMotorista.innerHTML = motoristaSelecionado.email
    }else{
        _emailMotorista = " ";
    }

    //Preenchendo Banco

    let _bancoMotorista = document.getElementById("bancoMotorista");
    if(motoristaSelecionado.banco !== " "){
        _bancoMotorista.innerHTML = motoristaSelecionado.banco
    }else{
        _bancoMotorista = " ";
    }

    //Preenchendo Agencia

    let _agenciaMotorista = document.getElementById("agenciaMotorista");
    if(motoristaSelecionado.agencia !== " "){
        _agenciaMotorista.innerHTML = motoristaSelecionado.agencia
    }else{
        _agenciaMotorista = " ";
    }    

    //Preenchendo Conta

    let _contaMotorista = document.getElementById("contaMotorista");
    if(motoristaSelecionado.conta !== " "){
        _contaMotorista.innerHTML = motoristaSelecionado.conta
    }else{
        _contaMotorista = " ";
    }

//Preenchendo o Destino da Viagem
    let _destinosViagem = document.getElementsByClassName("destino");
    for (let index = 0; index < _destinosViagem.length; index++) {
        _destinosViagem[index].innerHTML = _inputDestino.value
    }

//Preenchendo a Duração da Diaria
    let  _duracaoDiaria = document.getElementById("duracaoDiaria")
    
    switch (_inputQtdDiarias.value) {
        case "0.5":   
        _duracaoDiaria.innerHTML = _inputQtdDiarias.value + " (meia)"
            break;
        case "1":   
        _duracaoDiaria.innerHTML = _inputQtdDiarias.value + " (uma)"
            break;
        case "2":   
        _duracaoDiaria.innerHTML = _inputQtdDiarias.value + " (duas)"
            break;
        case "3":   
        _duracaoDiaria.innerHTML = _inputQtdDiarias.value + " (três)"
            break;
        default:
            break;
    }
    

//Preenchendo o Valor da Diaria
    let _valoresDaDiaria = document.getElementsByClassName("valorDiaria")
    if(_inputQtdDiarias.value == "0.5"){
        for (let index = 0; index < _valoresDaDiaria.length; index++) {
            _valoresDaDiaria[index].innerHTML = "60,00"
        } 
    }else{
        for (let index = 0; index < _valoresDaDiaria.length; index++) {
            _valoresDaDiaria[index].innerHTML = "120,00"
        }
    }

//Preenchendo o valor por extenso
    let _valorPorExtenso = document.getElementById("valorPorExtenso")
    if(_inputQtdDiarias.value == "0.5"){
        _valorPorExtenso.innerHTML = "sessenta reais"
    }else{
        _valorPorExtenso.innerHTML = "cento e vinte reais"
    }

//Preenchendo Data da Viagem
    let _dataDaViagem = document.getElementById("dataViagem")
    let stringInputToDate = new Date(_inputDataDaViagem.value)
    let dia = stringInputToDate.getDate()+1 
    let mes = " "
    if(stringInputToDate.getMonth() < 10){
         mes = `0${stringInputToDate.getMonth()+1}`
        }else{
          mes = stringInputToDate.getMonth()+1
        }

    if(_inputQtdDiarias.value == "0.5" || _inputQtdDiarias.value == "1"){
        _dataDaViagem.innerHTML = `${dia}/${mes}`
    }else if(_inputQtdDiarias.value == "2"){
        _dataDaViagem.innerHTML = `${dia} e ${dia+1}/${mes}`
    }else if(_inputQtdDiarias.value == "3"){
        _dataDaViagem.innerHTML = `${dia}, ${dia+1} e ${dia+2}/${mes}`
    }

    // if(stringInputToDate.getMonth() < 10){
    //      dataFormatada = (stringInputToDate.getDate() + 1) + "/0" + (stringInputToDate.getMonth() + 1)
    //     }else{
    //       dataFormatada = (stringInputToDate.getDate() + 1) + "/" + (stringInputToDate.getMonth())
    //     }

    // if(_inputQtdDiarias.value == "0.5" || _inputQtdDiarias.value == "1"){
    //     _dataDaViagem.innerHTML = dataFormatada
    // }else if(_inputQtdDiarias.value == "2"){
    //     _dataDaViagem.innerHTML = `${stringInputToDate.getDate()}`
    // }

}



