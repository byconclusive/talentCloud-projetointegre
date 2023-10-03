let dados = [
    {
        estado: "AC",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "AL",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "AM",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "AP",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "BA",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "CE",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "DF",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "ES",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "GO",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "MA",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "MG",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "MS",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "MT",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "PA",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "PB",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "PE",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "PI",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "PR",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "RJ",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "RN",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "RO",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "RR",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "RS",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "SC",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "SE",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "SP",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    },
    {
        estado: "TO",
        acidentes: 0,
        fatalidades: 0,
        viaMaisPerigosa: "****",
        principalCausa: "****"
    }
]

let sectionEstado = document.getElementById("resumo-estado")


let cont = 1
for (let dado of dados){
    const divResumoEstado = document.createElement('div')
    divResumoEstado.className = 'item-resumo'

    divResumoEstado.id = `id-${cont}`
    divResumoEstado.innerHTML = 
    `
        <h3>Estado: <span>${dado.estado}</span></h3>
        <h4>Número de Acidentes: <span>${dado.acidentes}</span></h4>
        <h4>Número de Fatalidades: <span>${dado.fatalidades}</span></h4>
        <h4>Via Mais Perigosa: <span>${dado.viaMaisPerigosa}</span></h4>
        <h4>Principal Causa de Acidente: <span>${dado.principalCausa}</span></h4>
    `
    sectionEstado.appendChild(divResumoEstado)
    cont++
}

