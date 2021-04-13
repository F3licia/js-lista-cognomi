
var primaLista = ["Bianchi", "Neri" , "Rossi" , "Verdi" , "Gialli"]

var secondaLista = [ ]

var cognUtente = prompt ("Inserisci il tuo cognome")

while (!isNaN(cognUtente)) {
  alert("Non valido")
  var cognUtente = prompt ("Inserisci il tuo cognome")
  isNaN(cognUtente)
}

primaLista.push(cognUtente)

console.log(primaLista)

for (var i = 0; i < primaLista.length; i++) {

  secondaLista.push(primaLista[i].toLowerCase()) 
}
console.log(secondaLista)
console.log(secondaLista.sort())
console.log("Il tuo cognome si trova nella posizione n. " +  (secondaLista.indexOf(cognUtente) + 1))   /*Non funziona con toUpperCase*/


/*----Alternativa-trovata-con-function-------------------------*/

/*
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var cognomi = ["Bianchi", "Neri" , "Rossi" , "Verdi" , "Gialli"]

var cognUtente = prompt ("Inserisci il tuo cognome")

while (!isNaN(cognUtente)) {
    alert("Non valido")
    var cognUtente = prompt ("Inserisci il tuo cognome")
    isNaN(cognUtente)
}

var cognomeUtente = capitalizeFirstLetter(cognUtente)

cognomi.push(cognomeUtente)
console.log(cognomi.sort());
console.log("Il tuo cognome si trova alla posizione n. " + (cognomi.indexOf(cognomeUtente) + 1)); */
