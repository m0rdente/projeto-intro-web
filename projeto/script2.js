const series = [
    {      
        nomeSerie: "game of thrones",
        link: "https://www.adorocinema.com/series/serie-7157/",
        img: "./Imagens/GOT.jpg",
        quantidadeTemporadas: 8,
        anoLancamento: "2011",
        generoSerie: "Drama, Fantasia, Ação",
        duracao: "45-50 minutos",
        jaFinalizou: true,
        elenco: ["Sean Bean","Mark Addy", "Nikolaj Coster-Waldau", "Michelle Fairley", "Lena Headey", "Emilia Clarke", "Kit Harington", "Sophie Turner", "Maisie Williams", "Peter Dinklage"]
    },
    {
        nomeSerie: "the witcher",
        link:"https://www.adorocinema.com/series/serie-22146",
        img: "./Imagens/the-witcher.jpg",
        quantidadeTemporadas: 2,
        anoLancamento: "2019",
        generoSerie: "Drama, Fantasia, Ação",
        duracao: "50 minutos a 1 hora",
        jaFinalizou: true,
        elenco: ["Henry Cavill", "Freya Allan", "Anya Chalotra", "Joey Batey", "Anna Shaffer", "Kim Bodnia"]
    },
    {
        nomeSerie: "vikings",
        link:"https://www.adorocinema.com/series/serie-10214/",
        img: "./Imagens/vikings.jpg",
        quantidadeTemporadas: 6,
        anoLancamento: "2013",
        generoSerie: "Drama, Ação, Épico",
        duracao: "45-50 minutos",
        jaFinalizou: true,
        elenco: ["Travis Fimmel", "Katheryn Winnick", "Clive Standen", "Alexander Ludwig", "Gustaf Skarsgard", "Alex Hogh Andersen"]
    }
]

const mediaLancamentos = (series[0].quantidadeTemporadas + series[1].quantidadeTemporadas + series[2].quantidadeTemporadas) / 3
console.log(Math.round(mediaLancamentos))

const seriesFinalizadas = series[0].jaFinalizou && series[1].jaFinalizou && series[2].jaFinalizou
console.log(seriesFinalizadas)

 //Semana 4
const arraySeries = []
for(let i = 0; i < series.length; i++){
    if(series[i].jaFinalizou === true){
        arraySeries.push(series)
    }else{
        alert("Item não encontrado")
    }
}
console.log(arraySeries)

//Semana 5


for(let j = 0; j < arraySeries.length; j++){

console.log (`Série: ${series[j].nomeSerie.toUpperCase()} \nQuantidade de temporadas: ${series[j].quantidadeTemporadas} \nAno Lançamento: ${series[j].anoLancamento} \nGênero: ${series[j].generoSerie} \nDuração: ${series[j].duracao} \nElenco: ${series[j].elenco.join()}`)

}


//Semana 6

 function stringObjeto(objetos){
    for(let string of objetos){
        console.log(string)       
}
}
stringObjeto(series)



function pesquisar(event){
    event.preventDefault()
    const input = document.getElementById("pesquisa").value
    if(input === ""){
        alert("Série não encontrada")
    }else{
        const divListas = document.getElementById("div-listas")
        if(divListas){
            divListas.remove()
        }
        pesquisa(series, input)
    }
}

function pesquisa(arrayObj, input){
    for(let serie in arrayObj){
        let nome = arrayObj[serie].nomeSerie;
        if(nome.toUpperCase() === input.toUpperCase()){

                const main = document.getElementById("resultado")
                const busca = document.createElement("div")
                const criarSection = document.createElement("section")
                const img = document.createElement("img")
                const ul = document.createElement("ul")
                const liNomeSerie = document.createElement("li")
                const liQuantidade = document.createElement("li")
                const liAnoLan = document.createElement("li")
                const liGenero = document.createElement("li")
                const liDuracao = document.createElement("li")
                const liFinalizada = document.createElement("li")
                const liElenco = document.createElement("li")
                const link = document.createElement("a")
                busca.setAttribute("id", "div-listas")
                criarSection.setAttribute("class","section1")
                img.src = series[serie].img
                liNomeSerie.innerHTML = `Nome: ${series[serie].nomeSerie.toUpperCase()}`
                liQuantidade.innerHTML = `Quantidade de temporadas: ${series[serie].quantidadeTemporadas}`
                liAnoLan.innerHTML = `Ano Lançamento: ${series[serie].anoLancamento}`
                liGenero.innerHTML = ` Gênero: ${series[serie].generoSerie}`
                liDuracao.innerHTML = `Duração: ${series[serie].duracao}`
                liFinalizada.innerHTML = `Finalizada: ${series[serie].jaFinalizou}`
                liElenco.innerHTML= `Elenco: ${series[serie].elenco}`
                busca.appendChild(criarSection)
                criarSection.appendChild(img)
                criarSection.appendChild(ul)
                ul.appendChild(liNomeSerie)
                ul.appendChild(liQuantidade)
                ul.appendChild(liAnoLan)
                ul.appendChild(liGenero)
                ul.appendChild(liDuracao)
                ul.appendChild(liFinalizada)
                ul.appendChild(liElenco)
                main.appendChild(busca)
        }
    }
}

    for(let i in series){
        const busca = document.getElementById("div-listas")
        const criarSection = document.createElement("section")
        const img = document.createElement("img")
        const ul = document.createElement("ul")
        const liNomeSerie = document.createElement("li")
        const liQuantidade = document.createElement("li")
        const liAnoLan = document.createElement("li")
        const liGenero = document.createElement("li")
        const liDuracao = document.createElement("li")
        const liFinalizada = document.createElement("li")
        const liElenco = document.createElement("li")
        const link = document.createElement("a")
        criarSection.setAttribute("class","section1")
        img.src = series[i].img
        liNomeSerie.innerHTML = `Nome: ${series[i].nomeSerie.toUpperCase()}`
        liQuantidade.innerHTML = `Quantidade de temporadas: ${series[i].quantidadeTemporadas}`
        liAnoLan.innerHTML = `Ano Lançamento: ${series[i].anoLancamento}`
        liGenero.innerHTML = ` Gênero: ${series[i].generoSerie}`
        liDuracao.innerHTML = `Duração: ${series[i].duracao}`
        liFinalizada.innerHTML = `Finalizada: ${series[i].jaFinalizou}`
        liElenco.innerHTML= `Elenco: ${series[i].elenco}`
        busca.appendChild(criarSection)
        criarSection.appendChild(img)
        criarSection.appendChild(ul)
        ul.appendChild(liNomeSerie)
        ul.appendChild(liQuantidade)
        ul.appendChild(liAnoLan)
        ul.appendChild(liGenero)
        ul.appendChild(liDuracao)
        ul.appendChild(liFinalizada)
        ul.appendChild(liElenco)
    
    }