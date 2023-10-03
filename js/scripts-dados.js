const data = JSON.parse("js/dados.json");
console.log(data);

let teste = `
<div class="item-resumo" id="estado-01">
    <div class="capa"></div>
    <h3>Dom Casmurro</h3>
    <h4>Machado de Assis</h4>
    <p>Valor: R$11.66</p>
    <button id="btn-subtrair-produto-01">-</button>
    <input id="quantidade-produto-01" type="number" value="1" min="0">
    <button id="btn-adicionar-produto-01">+</button>
</div>
`