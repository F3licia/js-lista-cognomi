
var cognomi = ["Bianchi", "Neri" , "Rossi" , "Verdi" , "Gialli"]

var utente = prompt ("Inserisci il tuo cognome")

while (!isNaN(utente)) {
    alert("Non valido")
    var utente = prompt ("Inserisci il tuo cognome")
    isNaN(utente)
}

var primaLettera = utente.slice(0, 1).toUpperCase()
var restoParola = utente.slice(1).toLowerCase()

var cognomeUser = primaLettera + restoParola

cognomi.push(cognomeUser)
console.log(cognomi.sort());
console.log("Il tuo cognome si trova alla posizione n. " + (cognomi.indexOf(cognomeUser) + 1)); 
