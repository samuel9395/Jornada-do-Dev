//[] significa colchetes

let cargos = [' administrador', ' médico ', ' advogado ', ' analista de sistemas'];
cargos[1];//Selecionar um dos arrays
cargos[1] = ' contador';//Trocando o valor do array
cargos.push(' médico');  //Método push() utilizado no javascript para adicionar um ou mais elementos a um arrays
cargos.pop(); //Método pop() é usado para remover o último elemento de um array

console.log(cargos);
document.getElementById("cargos").innerHTML = "Cargos: " + cargos;
