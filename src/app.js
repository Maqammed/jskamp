console.log("Birincisi salam qaqa")
console.log("Qaqa sensen !")
let dolarDun = 9.20
let dolarBugun = 9.30
console.log(dolarDun)

const euroDun = 11 //const sabitdi, yebiki 11 olaraq qalir 12 olmur
//euroDun = 12 

let konutKredileri = ["Konut","Emlak", "Kamu", "Ozel"]
//console.log(konutKredileri)


console.log("<ul>")
for (let i=0;i<konutKredileri.length;  i++) {
    console.log("<li>"+ konutKredileri[i]+ "</li>")
}
console.log("</ul>")