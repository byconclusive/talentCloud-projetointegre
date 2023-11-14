//VARIÁVEIS
let dados = [
    {
        estado: "Acre",
        uf: "AC",
        acidentes: 224,
        fatalidades: 18,
        via_mais_perigosa: 364,
        principal_causa: "Acessar a via sem observar a presença dos outros veículos"
    },
    {
        estado: "Alagoas",
        uf: "AL",
        acidentes: 595,
        fatalidades: 54,
        via_mais_perigosa: 101,
        principal_causa: "Acessar a via sem observar a presença dos outros veículos"
    },
    {
        estado: "Amapá",
        uf: "AP",
        acidentes: 180,
        fatalidades: 20,
        via_mais_perigosa: 210,
        principal_causa: "Acessar a via sem observar a presença dos outros veículos"
    },
    {
        estado: "Amazonas",
        uf: "AM",
        acidentes: 114,
        fatalidades: 19,
        via_mais_perigosa: 230,
        principal_causa: "Reação tardia ou ineficiente do condutor"
    },
    {
        estado: "Bahia",
        uf: "BA",
        acidentes: 3440,
        fatalidades: 528,
        via_mais_perigosa: 116,
        principal_causa: "Acessar a via sem observar a presença dos outros veículos"
    },
    {
        estado: "Ceará",
        uf: "CE",
        acidentes: 1373,
        fatalidades: 148,
        via_mais_perigosa: 116,
        principal_causa: "Acessar a via sem observar a presença dos outros veículos"
    },
    {
        estado: "Distrito Federal",
        uf: "DF",
        acidentes: 922,
        fatalidades: 44,
        via_mais_perigosa: 251,
        principal_causa: "Acessar a via sem observar a presença dos outros veículos"
    },
    {
        estado: "Espírito Santo",
        uf: "ES",
        acidentes: 2278,
        fatalidades: 154,
        via_mais_perigosa: 262,
        principal_causa: "Acessar a via sem observar a presença dos outros veículos"
    },
    {
        estado: "Goiás",
        uf: "GO",
        acidentes: 3112,
        fatalidades: 291,
        via_mais_perigosa: 20,
        principal_causa: "Reação tardia ou ineficiente do condutor"
    },
    {
        estado: "Maranhão",
        uf: "MA",
        acidentes: 1084,
        fatalidades: 211,
        via_mais_perigosa: 316,
        principal_causa: "Reação tardia ou ineficiente do condutor"
    },
    {
        estado: "Mato Grosso",
        uf: "MT",
        acidentes: 2175,
        fatalidades: 263,
        via_mais_perigosa: 364,
        principal_causa: "Reação tardia ou ineficiente do condutor"
    },
    {
        estado: "Mato Grosso do Sul",
        uf: "MS",
        acidentes: 1638,
        fatalidades: 167,
        via_mais_perigosa: 262,
        principal_causa: "Ausência de reação do condutor"
    },
    {
        estado: "Minas Gerais",
        uf: "MG",
        acidentes: 8290,
        fatalidades: 701,
        via_mais_perigosa: 40,
        principal_causa: "Velocidade Incompatível"
    },
    {
        estado: "Pará",
        uf: "PA",
        acidentes: 831,
        fatalidades: 183,
        via_mais_perigosa: 316,
        principal_causa: "Reação tardia ou ineficiente do condutor"
    },
    {
        estado: "Paraíba",
        uf: "PB",
        acidentes: 1474,
        fatalidades: 129,
        via_mais_perigosa: 361,
        principal_causa: "Ausência de reação do condutor"
    },
    {
        estado: "Paraná",
        uf: "PR",
        acidentes: 7377,
        fatalidades: 571,
        via_mais_perigosa: 376,
        principal_causa: "Reação tardia ou ineficiente do condutor"
    },
    {
        estado: "Pernambuco",
        uf: "PE",
        acidentes: 2746,
        fatalidades: 305,
        via_mais_perigosa: 101,
        principal_causa: "Acessar a via sem observar a presença dos outros veículos"
    },
    {
        estado: "Piauí",
        uf: "PI",
        acidentes: 1114,
        fatalidades: 137,
        via_mais_perigosa: 316,
        principal_causa: "Ausência de reação do condutor"
    },
    {
        estado: "Rio Grande do Norte",
        uf: "RN",
        acidentes: 1287,
        fatalidades: 94,
        via_mais_perigosa: 101,
        principal_causa: "Acessar a via sem observar a presença dos outros veículos"
    },
    {
        estado: "Rio Grande do Sul",
        uf: "RS",
        acidentes: 4929,
        fatalidades: 334,
        via_mais_perigosa: 285,
        principal_causa: "Reação tardia ou ineficiente do condutor"
    },
    {
        estado: "Rio de Janeiro",
        uf: "RJ",
        acidentes: 4704,
        fatalidades: 257,
        via_mais_perigosa: 116,
        principal_causa: "Reação tardia ou ineficiente do condutor"
    },
    {
        estado: "Rondônia",
        uf: "RO",
        acidentes: 1378,
        fatalidades: 86,
        via_mais_perigosa: 435,
        principal_causa: "Reação tardia ou ineficiente do condutor"
    },
    {
        estado: "Roraima",
        uf: "RR",
        acidentes: 229,
        fatalidades: 24,
        via_mais_perigosa: 432,
        principal_causa: "Ingestão de álcool pelo condutor"
    },
    {
        estado: "Santa Catarina",
        uf: "SC",
        acidentes: 7589,
        fatalidades: 350,
        via_mais_perigosa: 282,
        principal_causa: "Reação tardia ou ineficiente do condutor"
    },
    {
        estado: "São Paulo",
        uf: "SP",
        acidentes: 4385,
        fatalidades: 223,
        via_mais_perigosa: 381,
        principal_causa: "Reação tardia ou ineficiente do condutor"
    },
    {
        estado: "Sergipe",
        uf: "SE",
        acidentes: 511,
        fatalidades: 47,
        via_mais_perigosa: 235,
        principal_causa: "Acessar a via sem observar a presença dos outros veículos"
    },
    {
        estado: "Tocantins",
        uf: "TO",
        acidentes: 568,
        fatalidades: 81,
        via_mais_perigosa: 226,
        principal_causa: "Reação tardia ou ineficiente do condutor"
    }
]
let sectionEstado = document.getElementById("resumo-estado")
let sectionMapaInt = document.getElementById("map-inter")

//FUNÇÕES
function geraMessagemInicial(dadoMensagem){
    const resumo = document.createElement('div')
    resumo.className = 'item-resumo'
    
    resumo.id = `${dadoMensagem.estado}`
    resumo.innerHTML = 
    `
        <h4>Estado: <span>${dadoMensagem.estado}</span></h3>
        <h4>UF: <span>${dadoMensagem.uf}</span></h4>
        <h4>Número de Acidentes: <span>${dadoMensagem.acidentes}</span></h4>
        <h4>Número de Fatalidades: <span>${dadoMensagem.fatalidades}</span></h4>
        <h4>Via Mais Perigosa: <span>${dadoMensagem.via_mais_perigosa}</span></h4>
        <h4>Principal Causa de Acidente:
            <br>
            <span>${dadoMensagem.principal_causa}</span>
        </h4>
    `
    return resumo
}

function geraMessagem(dadoMensagem){
    const resumo = document.createElement('div')
    resumo.className = 'item-resumo'
    
    resumo.id = `${dadoMensagem.estado}`
    resumo.innerHTML = 
    `
        <h4>Estado: <span>${dadoMensagem.estado}</span></h3>
        <h4>UF: <span>${dadoMensagem.uf}</span></h4>
        <h4>Número de Acidentes: <span>${dadoMensagem.acidentes}</span></h4>
        <h4>Número de Fatalidades:<span>${dadoMensagem.fatalidades}</span></h4>
        <h4>Via Mais Perigosa: <span>${dadoMensagem.via_mais_perigosa}</span></h4>
        <h4>Principal Causa de Acidente:
            <br>
            <span>${dadoMensagem.principal_causa}</span>
        </h4>
        <img src="asserts/img/grafico_barras/bar_${dadoMensagem.estado}.svg">
    `
    return resumo
}

function carregarInfo(){
    for (let dado of dados){
        divResumoEstado = geraMessagemInicial(dado)
        sectionEstado.appendChild(divResumoEstado)
    }
    
}

function criarTooltip(uf){
    if (sectionMapaInt.childElementCount == 2) {
        sectionMapaInt.removeChild(sectionMapaInt.lastChild)
    }
    for (let dado of dados){
        if (dado.uf == uf) {
            divResumoEstado = geraMessagem(dado)
            sectionMapaInt.appendChild(divResumoEstado)
        }
    }

}

//EVENTOS
document.addEventListener("onload",carregarInfo())