let listaCarros = [
    {
        "nome": "Brasília",
        "img": "img/bras.jpeg",
        "descricao": "O Volkswagen Brasília é um automóvel produzido desde 1973 até 1982 pela Volkswagen do Brasil. Definido internamente como modelo/tipo 102, foi projetado para aliar a robustez do Volkswagen Fusca, um carro consagrado no mercado, com o conforto de um automóvel com maior espaço interno e desenho mais contemporâneo."
    },
    {
        "nome": "Chevette",
        "img": "img/chevett.jpg",
        "descricao": "O Chevette foi um automóvel lançado pela General Motors no ano de 1973, sendo fabricado pela montadora Chevrolet no Brasil. É a 3 geração do Opel Kadett lançado na Europa em 1973."
    },
    {
        "nome": "Monza",
        "img": "img/monza.jpg",
        "descricao": "A história do nosso querido Chevrolet Monza não se iniciou aqui no Brasil em março de 1982, quando foi lançado no mercado nacional pela General Motors (GM). O projeto original do carro foi criado e desenvolvido pela alemã Opel, lá no início dos anos 70, quando surgiu sua primeira geração."
    },
    {
        "nome": "Fusca",
        "img": "img/fusca.jpg",
        "descricao": "O Volkswagen Fusca começou a ser produzido na Alemanha, em 1938, como Type 1. No Brasil, ele começou a ser vendido em 1950 como Volkswagen Sedan. O formato do carro, entretanto, lhe rendeu apelidos no mundo inteiro. O apelido mais famoso é Beetle, que significa Besouro. Na Alemanha, o Fusca passou a ser conhecido como Käfer, que também significa Besouro. Mas outras associações. Dependendo do país, o Fusca foi conhecido como Ovinho, Bolha, Inseto, Sapo, Baratinha e etc."
    },
    {
        "nome": "Uno",
        "img": "img/uno.webp",
        "descricao": "A história do Fiat Uno começa em 1983 e chegou ao Brasil em agosto de 1984 e representou um marco para a montadora italiana. O conceito de carro Hatch para a marca continha apenas o pequeno 147 e seus derivados.<br/>O primeiro modelo foi o Fiat Uno S, que utilizava motor Fiasa 1.050 cm³ do Fiat 147 (52CV), Seu motor era isento de vibrações e podia-se explorar mais as marchas. Sua principal vantagem era a economia de combustível."
    },
    {
        "nome": "Santana",
        "img": "img/sant.jpg",
        "descricao": "O Volkswagen Santana teve um começo de história bem curioso aqui no Brasil. Apresentado na Europa no final de 1981, ele era a versão sedan da nova geração do Passat, e Santana era o nome de um vento que soprava na Califórnia, seguindo a tradição de vários outros modelos da marca na época."
    }
]
// cardCarro.innerHTML += i sinal aritmético '+' antes do sinal de igualdade, trás todos os objetos de dentro do array.
listaCarros.map((carro, posicao) => {
    let cardCarro = document.getElementById("cards");
    cardCarro.innerHTML += `
    <div class="col-md-4">
        <div class="card">
            <img src="${carro.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${carro.nome}</h5>
                <a href="#" class="btn btn-secondary" onClick= "zoomImg('${posicao}')"><i class= "bi-zoom-in"></i></a>
            </div>
        </div>
    </div>
    `
//    console.log(posicao);
//    console.log(carro.nome);
})


    function zoomImg(posicao){
        let carroSelecionado = listaCarros[posicao];
        document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
        document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
        document.getElementById("imgModal").src = carroSelecionado.img;

        new bootstrap.Modal('#zoomImg').show();
    }

    function alterarTemaSite() {
        let tema = document.querySelector("html").getAttribute("data-bs-theme");// se for um elemento por id usamos o '#' se for por classe usamos o '.' e se for uma tag usamos o nome dela 
        if (tema === "dark"){
            document.querySelector("html").setAttribute("data-bs-theme", "light");
            document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`;
        }else {
            document.querySelector("html").setAttribute("data-bs-theme", "dark");
            document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
        }
    }