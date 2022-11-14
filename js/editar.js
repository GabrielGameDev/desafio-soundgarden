const inputNome = document.getElementById('nome')
const inputBanner = document.getElementById('banner')
const inputAtracoes = document.getElementById('atracoes')
const inputDescricao = document.getElementById('descricao')
const inputData = document.getElementById('data')
const inputLotacao = document.getElementById('lotacao')

async function getEvento(){
    const response = await fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${localStorage.getItem('id')}`)
    const data = await response.json()
    console.log(data)

    inputNome.value = data.name
    inputBanner.value = data.poster
    inputAtracoes.value = data.attractions
    inputDescricao.value = data.description
    inputData.value = data.scheduled
    inputLotacao.value = data.number_tickets
}

getEvento()

async function editarEvento(){
    
    var raw = {
        
        "name": inputNome.value,
        "poster": inputBanner.value,
        "attractions": inputAtracoes.value.split(','),
        "description": inputDescricao.value,
        "scheduled": inputData.value,
        "number_tickets": inputLotacao.value
    }
   


await fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${localStorage.getItem('id')}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
      },
    body: JSON.stringify(raw),
    
})
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))
  
  window.location.assign("admin.html")

}