const botao = document.getElementById('container-botao')
const descricao = document.getElementById('descricao-conselho')

async function pegarDados() {
    try {
        const url = "https://api.adviceslip.com/advice"
        const resposta = await fetch(url)
        const json = await resposta.json()
        const gerarConselho = await json.slip.advice;
        descricao.innerText = gerarConselho
    } catch (error) {
        console.log('ocorreu um erro ao buscar os dados');
        
    }
}

botao.addEventListener('click', () => {
    pegarDados();
})









