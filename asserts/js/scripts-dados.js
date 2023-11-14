//VARIÁVEIS
let dados = [{estado: 'AC',
acidentes: 224,
fatalidades: 18,
via_mais_perigosa: 317.0,
principal_causa: 'Transitar na contramão'},
{estado: 'AL',
acidentes: 595,
fatalidades: 54,
via_mais_perigosa: 316.0,
principal_causa: 'Reação tardia ou ineficiente do condutor'},
{estado: 'AP',
acidentes: 114,
fatalidades: 19,
via_mais_perigosa: 156.0,
principal_causa: 'Reação tardia ou ineficiente do condutor'},
{estado: 'AM',
acidentes: 180,
fatalidades: 20,
via_mais_perigosa: 319.0,
principal_causa: 'Demais falhas na via'},
{estado: 'BA',
acidentes: 3440,
fatalidades: 528,
via_mais_perigosa: 101.0,
principal_causa: 'Transitar na contramão'},
{estado: 'CE',
acidentes: 1373,
fatalidades: 148,
via_mais_perigosa: 222.0,
principal_causa: 'Acessar a via sem observar a presença dos outros veículos'},
{estado: 'DF',
acidentes: 922,
fatalidades: 44,
via_mais_perigosa: 20.0,
principal_causa: 'Reação tardia ou ineficiente do condutor'},
{estado: 'ES',
acidentes: 2278,
fatalidades: 154,
via_mais_perigosa: 101.0,
principal_causa: 'Transitar na contramão'},
{estado: 'GO',
acidentes: 3112,
fatalidades: 291,
via_mais_perigosa: 153.0,
principal_causa: 'Transitar na contramão'},
{estado: 'MA',
acidentes: 1084,
fatalidades: 211,
via_mais_perigosa: 135.0,
principal_causa: 'Transitar na contramão'},
{estado: 'MT',
acidentes: 8290,
fatalidades: 701,
via_mais_perigosa: 163.0,
principal_causa: 'Transitar na contramão'},
{estado: 'MS',
acidentes: 1638,
fatalidades: 167,
via_mais_perigosa: 163.0,
principal_causa: 'Transitar na contramão'},
{estado: 'MG',
acidentes: 2175,
fatalidades: 263,
via_mais_perigosa: 381.0,
principal_causa: 'Velocidade Incompatível'},
{estado: 'PA',
acidentes: 831,
fatalidades: 183,
via_mais_perigosa: 10.0,
principal_causa: 'Ausência de reação do condutor'},
{estado: 'PB',
acidentes: 1474,
fatalidades: 129,
via_mais_perigosa: 230.0,
principal_causa: 'Ausência de reação do condutor'},
{estado: 'PR',
acidentes: 2746,
fatalidades: 305,
via_mais_perigosa: 277.0,
principal_causa: 'Reação tardia ou ineficiente do condutor'},
{estado: 'PE',
acidentes: 1114,
fatalidades: 137,
via_mais_perigosa: 232.0,
principal_causa: 'Transitar na contramão'},
{estado: 'PI',
acidentes: 7377,
fatalidades: 571,
via_mais_perigosa: 343.0,
principal_causa: 'Transitar na contramão'},
{estado: 'RN',
acidentes: 4704,
fatalidades: 257,
via_mais_perigosa: 304.0,
principal_causa: 'Manobra de mudança de faixa'},
{estado: 'RS',
acidentes: 1287,
fatalidades: 94,
via_mais_perigosa: 386.0,
principal_causa: 'Transitar na contramão'},
{estado: 'RJ',
acidentes: 1378,
fatalidades: 86,
via_mais_perigosa: 101.0,
principal_causa: 'Ausência de reação do condutor'},
{estado: 'RO',
acidentes: 229,
fatalidades: 24,
via_mais_perigosa: 364.0,
principal_causa: 'Transitar na contramão'},
{estado: 'RR',
acidentes: 4929,
fatalidades: 334,
via_mais_perigosa: 174.0,
principal_causa: 'Ausência de reação do condutor'},
{estado: 'SC',
acidentes: 7589,
fatalidades: 350,
via_mais_perigosa: 101.0,
principal_causa: 'Transitar na contramão'},
{estado: 'SP',
acidentes: 511,
fatalidades: 47,
via_mais_perigosa: 116.0,
principal_causa: 'Ausência de reação do condutor'},
{estado: 'SE',
acidentes: 4385,
fatalidades: 223,
via_mais_perigosa: 101.0,
principal_causa: 'Transitar na contramão'},
{estado: 'TO',
acidentes: 568,
fatalidades: 81,
via_mais_perigosa: 153.0,
principal_causa: 'Transitar na contramão'}]

let sectionEstado = document.getElementById("resumo-estado")
let sectionMapaInt = document.getElementById("map-inter")

//FUNÇÕES
function geraMessagem(dadoMensagem){
    const resumo = document.createElement('div')
    resumo.className = 'item-resumo'
    
    resumo.id = `${dadoMensagem.estado}`
    resumo.innerHTML = 
    `
        <h3>UF: <span>${dadoMensagem.estado}</span></h3>
        <h4>Número de Acidentes: <span>${dadoMensagem.acidentes}</span></h4>
        <h4>Número de Fatalidades: <span>${dadoMensagem.fatalidades}</span></h4>
        <h4>Via Mais Perigosa: <span>${dadoMensagem.via_mais_perigosa}</span></h4>
        <h4>Principal Causa de Acidente: <span>${dadoMensagem.principal_causa}</span></h4>
    `
    return resumo
}

function carregarInfo(){
    for (let dado of dados){
        divResumoEstado = geraMessagem(dado)
        sectionEstado.appendChild(divResumoEstado)
    }
    
}

function criarTooltip(uf){
    if (sectionMapaInt.childElementCount == 2) {
        sectionMapaInt.removeChild(sectionMapaInt.lastChild)
    }
    for (let dado of dados){
        if (dado.estado == uf) {
            divResumoEstado = geraMessagem(dado)
            sectionMapaInt.appendChild(divResumoEstado)
        }
    }

    /*
    dado = dados.filter((elemento) => elemento.estado == uf)
    divResumoEstado = geraMessagem(dado)
    sectionMapaInt.appendChild(divResumoEstado)
    */
}

//EVENTOS
document.addEventListener("onload",carregarInfo())