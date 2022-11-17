const inputNome = document.getElementById('nome')

const inputAtracoes = document.getElementById('atracoes')
const inputDescricao = document.getElementById('descricao')
const inputData = document.getElementById('data')
const inputLotacao = document.getElementById('lotacao')
const form = document.querySelector('form');
form.addEventListener('submit', cadastrar)

async function cadastrar(event){
    event.preventDefault()
    const dados = {
    
        "name": inputNome.value,
        "poster": "link da imagem",
        "attractions": [
            inputAtracoes.value.split(',')
        ],
        "description": inputDescricao.value,
       "scheduled": inputData.value,
        "number_tickets": inputLotacao.value
   
}

console.log(dados)
await fetch('https://xp41-soundgarden-api.herokuapp.com/events', {
  method: 'POST', // or 'PUT'
  headers: {
     'Content-Type': 'application/json',
   },
  body: JSON.stringify(dados),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
   console.error('Error:', error);
  });

window.location.assign('cadastro-evento.html')

}