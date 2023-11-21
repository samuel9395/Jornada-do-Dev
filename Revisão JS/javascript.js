    
    // COMO DECLARAR UMA VARIĆVEL
	
    let nomeVariavel = 5;
	let fruta = "maca";

    // TIPOS DE DADOS EM VARIÁVEIS
		
    //String;
    let nome = "Samuel";

    //document.getElementById("fruta").innerHTML = fruta;
    
    //Integers
	
    let idade = 30;

    //floats;
	
    let contaBancaria = 123.90;

    //Boleano;
    //true
    //false
    let samuelCabeloAzul= false;

    //Arrays;
    //Contém diversos valores(Os valores vão dentro dos colchetes"[]")
    //As posições no arrays é contada a partir do 0
    let frutas = ["Maçã", "Banana", "Laranja"];

    //Acessar o itém específico no array
    frutas[0] 

    //Objetos
    let xicara = {cor:"branco", material: "porcelana", peso: 100};
    //Acessando uma prorpiedade de um objeto
    xicara.cor

    //Exercício

    //Criar um objeto que apresente um Fiat Uno
            
    let fiatUno = {nome:"Fiat Uno", ano:"2023", modelo:"ELX", cor:["Branco", "Vermelho", "Prata"]};
                
    document.getElementById("nomeCar").innerHTML = "Nome:"+ fiatUno.nome;
    document.getElementById("anoCar").innerHTML = "Ano:"+ fiatUno.ano;
    document.getElementById("modeloCar").innerHTML = "Modelo:"+ fiatUno.modelo;
    document.getElementById("corCar").innerHTML = "Cor:"+ fiatUno.cor[0];

