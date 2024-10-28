const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/trabalho/trabalho-dados-gerais.json';

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    //console.log(dados)

    const pessoasNoMundo = (dados.total_pessoas_mundo/ 1e9)
    const pessoasConectadas = (dados.total_pessoas_empregadas/1e9) 
    const horas = parseInt(dados.tempo_medio_trabalho_por_semana)
    const minutos = Math.round ((dados.tempo_medio_trabalho_por_semana - horas)* 60)
    
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span> ${dados.total_pessoas_mundo} </span> de pessoas e que aproximadamente <span> ${dados.total_pessoas_empregadas} </span> estão empregadas em serviços registrados. Eles trabalham <span> ${dados.tempo_medio_trabalho_por_semana} </span> horas por semana.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais()