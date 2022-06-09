const nome = document.getElementsByName("name"); // selecionamos o elemento html com o class name "name"
const sobrenome = document.getElementsByName("sobrenome"); // selecionamos o elemento html com o class name "sobrenome"
const form = document.getElementById("form"); // selecionamos o elemento html com o id "form"

// Diferença entre id e class, quando usamos 'id', queremos dizer que só existe um elemento com aquela indentificação
// em todo nosso código. Quando usamos class, quer dizer que temos ou vamos ter varios elementos com a mesma classe
// isso nos da reaproveitamento e ou indentificação única de elementos

form.onsubmit = submit; // aqui pegamos o elemento previamente selecionado pelo id
// esse elemento e o nosso form, que é 'pai' do nosso cadastro, e por padrão
// esse form ele vem com alguns metodos (funções) integradas nele, e uma delas
// é o submit, que conseguimos invocar utilizando a função onsubmit

// todas as funções estão entregando o que pede na mesa

function submit(event) {
  // criamos essa função para podermos tratar os nossos dados de acordo com o pedido na mesa
  event.preventDefault(); // toda função evento no JS, recebe como padrão o parametro evento, ele pode ser apresentado ou não na função (mas ele sempre vai estar lá ;) )
  // utilizando o preventDefault, eu evito que a tela recarregue, assim não podendo ver os logs.
  console.log("Trim method : " + nome[0].value.trim()); // esse cara, o trim, ele remove os espaços no inicio e fim de cada string
  // Ex: (espaço hipotético) teste (espaço hipotético). com o trim, removeria os espaços nas 'laterais' da string e ficaria. Ex:teste
  console.log("toUpperCase method : " + nome[0].value.toUpperCase()); // esse cara, deixa todas as letras da string em maisculo 0_0.
  // Ex: eu amo pudim. aplicando o string.toUpperCase() ficaria. Ex: EU AMO PUDIM.
  console.log("toLowerCase method : " + nome[0].value.toLowerCase()); // já esse cara, faz ao contrario, torna tudo minusculo LOL.
  // Ex: EU AMO PUDIM. aplicando o string.toLowerCase() ficaria. Ex: eu amo pudim.
  let juncao = nome[0].value.concat(sobrenome[0].value); // essec ara, o concat, ele uni duas string que estão separadas. (famoso trago seu amor em 7 dias rsrs).
  // Ex: tenho esas duas string: amo, e em outra variavel tenho essa string, pudim, com concat() amo.concat(pudim), temos amopudim.
  console.log("Concat method:" + juncao);
  console.log("Replace method on 'a' to '@':" + replaceAll(juncao, "a", "@"));
  console.log("Replace method on 'e' to '3' :" + replaceAll(juncao, "e", "3"));
}

function replaceAll(str, find, replace) {
  // criamos essa função para podermos substituir todas as letras que repetem por uma outra, e elas podem ser variaveis.
  // o parametro str, referencia a string que quero fazer as modificações,
  // o parametro find, referencia a letra que quero alterar.
  // o parametro replace, referencia no que eu quero substituir.
  return str.replace(new RegExp(find, "g"), replace); // o RegExp, em termos bem simples, é utilizado como filtro para podermos tratar nossos dados
  // exemplo, utilizamos RegExp para achar a letra ou palavra que queremos, representado por find, e substituimos pelo replace que.
}
