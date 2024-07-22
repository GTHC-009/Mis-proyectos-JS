let número = document.getElementById("número");
let numVal = undefined;
let respuesta = document.getElementById("respuesta");

let aviso = document.getElementById("aviso");
let sugBtn = document.getElementById("suger");

let numPares;
let numImpares;
let numCeros;

const avisos = {
  inicial: "Escribe un número",
  soloNum: "Escribe sólo números",
  sinNum: "No hay números para borrar",
  sinRev: "No hay nada para revisar",
  sinRes: "No hay nada para copiar",
  numRevisado: "Número siendo revisado",
  numBorrado: "Número borrado",
  numCopiado: "Número copiado",
  resCopiado: "Copiado al portapapeles",
  consLimp: () => {
    console.clear();
    aviso.innerHTML = "Consola limpiada"
  }
};

aviso.innerHTML = avisos.inicial;


let revisar = () => {
  // Recopilar el número
  let numValor = número.value;  

  let numString = numValor.toString();
  let caracteres = numString.split('');
  let encontrar = caracteres.map(caracter => parseInt(caracter, 10));
  console.log(encontrar);
  
  let filtrarNums = encontrar.filter(e => 
  e == 0 || e == 1 || e == 2 || e == 3 || 
  e == 4 || e == 5 || e == 6 || e == 7 || 
  e == 8 || e == 9);
  
  if (numValor === "") {
    aviso.innerHTML = avisos.sinRev;
    número.focus();
    return;
  }
  
  let filtrarPar = filtrarNums.filter(element => element % 2 == 0 && element != 0);
  numPares = filtrarPar.length;
  
  let filtrarImpar = filtrarNums.filter(element => element % 2 != 0 && element != 0);
  numImpares = filtrarImpar.length;

  let filtrarCero = filtrarNums.filter(element => element == 0);
  numCeros = filtrarCero.length;
  
  respuesta.innerHTML = 
  `Pares: ${numPares}<br>
  Impares: ${numImpares}<br>
  Ceros: ${numCeros}`;
  
  console.log(respuesta.innerHTML);
}


let copiar = () => {
  if (numPares === undefined || numImpares === undefined || numCeros === undefined || número.value === "") {
    aviso.innerHTML = avisos.sinRes;
    return;
  }
  navigator.clipboard.writeText(`Pares: ${numPares} Impares: ${numImpares} Ceros: ${numCeros}`);
  aviso.innerHTML = avisos.resCopiado;
}


let borrar = () => {
  if (número.value === undefined || número.value === null || número.value === "") {
    aviso.innerHTML = avisos.sinNum;
    return;
  }
  número.value = "";
  aviso.innerHTML = avisos.numBorrado;
  respuesta.innerHTML = 
  "Pares: <br> Impares: <br> Ceros:";
}

let suger = () => {
  if (aviso.innerHTML === avisos.inicial) {
    número.focus();
    aviso.innerHTML = avisos.soloNum;
    } else if (aviso.innerHTML = avisos.soloNum) {
      número.focus();
    }
}
