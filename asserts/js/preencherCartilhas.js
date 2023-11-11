let cartilhas = [
    {
        nome: "Direção Defensiva",
        pdfLink: "asserts/cartilhas/1-direcao-defensiva.pdf",
        imagemSrc: "asserts/img/direcaodefensiva.jpg"
    },

    {
        nome: "Noções de Mecânica",
        pdfLink: "asserts/cartilhas/2-nocoes-de-mecanica.pdf",
        imagemSrc: "asserts/img/mecanica.jpg"
    },

    {
        nome: "Noções de Primeiros Socorros",
        pdfLink: "asserts/cartilhas/3-primeiros-socorros.pdf",
        imagemSrc: "asserts/img/socorro.jpg"
    },

    {
        nome: "Noções de Navegação",
        pdfLink: "asserts/cartilhas/4-nocoes-de-navegacao.pdf",
        imagemSrc: "asserts/img/navegacao.jpg"
    },

    {
        nome: "Noções de Sobrevivência",
        pdfLink: "asserts/cartilhas/5-nocoes-de-sobrevivencia.pdf",
        imagemSrc: "asserts/img/sobrevivencia.jpg"
    },
    
    {
        nome: "Números Importantes",
        pdfLink: "asserts/cartilhas/6-numeros-emergenciais.pdf",
        imagemSrc: "asserts/img/numeros.jpg"
    }
];

let listaCartilhas = document.querySelector('.cartilha');

for (let cartilha of cartilhas) {

    let listItem = document.createElement('li');

    let link = document.createElement('a');
    link.href = cartilha.pdfLink;
    link.target = "_blank";

    let imagem = document.createElement('img');
    imagem.src = cartilha.imagemSrc;
    imagem.alt = `Imagem da cartilha ${cartilha.nome}`;
    imagem.width = "200px";

    let nomeCartilha = document.createElement('p');
    nomeCartilha.textContent = cartilha.nome;

    link.appendChild(imagem);
    link.appendChild(nomeCartilha);

    listItem.appendChild(link);

    listaCartilhas.appendChild(listItem);
}
