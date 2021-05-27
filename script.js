let arrBase = ["um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove", "vinte"];
let dezenas = ["vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
let centenas =["cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"]

const btn20 = document.getElementById("btn20");
btn20.addEventListener("click", function () {
  
const respostas = document.getElementById('respostas');
const contagem20 = document.createElement('p');
contagem20.innerText = arrBase.join(', ');
respostas.appendChild(contagem20);


});

const btn100 = document.getElementById("btn100");
btn100.addEventListener("click", function () {
  
const respostas = document.getElementById('respostas');
const contagem100 = document.createElement('p');

let output = [];
    
for(let i = 0; i < dezenas.length; i++){
    output.push(`${dezenas[i]}`);
    for(let j = 0; j < 9; j++){
            output.push(`${dezenas[i]}` + " e " + `${arrBase[j]}`)
            
        }
    }
    
contagem100.innerText = output.join(', ');
respostas.appendChild(contagem100);
});


const btn1000 = document.getElementById("btn1000");
btn1000.addEventListener("click", function () {
  
const respostas = document.getElementById('respostas');
const contagem1000 = document.createElement('p');

// let output = [];
    
// for(let i = 0; i < dezenas.length; i++){
//     output.push(`${dezenas[i]}`);
//     for(let j = 0; j < 9; j++){
//             output.push(`${dezenas[i]}` + " e " + `${arrBase[j]}`)
            
//         }
//     }
    
contagem1000.innerText = "Desculpe ainda estou trabalhando nisso! =(";
respostas.appendChild(contagem1000);
});