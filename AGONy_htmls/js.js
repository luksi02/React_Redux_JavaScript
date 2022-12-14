// Zad 1
console.log("Zad_1")

let numberOfUsers = 5

let result = Math.floor(numberOfUsers/2)

console.log(numberOfUsers)
console.log(result)

// Zad 2
console.log("Zad_2")

let max = 100
let min = 5
let random = Math.floor(Math.random()*((max-min+1)+min))

console.log(random)

//Zad 3
console.log("Zad_3")

let mail = "agonyseeker2000@gmail.com"

if (mail.indexOf("@") != -1) {
        console.log("True, it is a mail!")
} else {
    console.log("Flase, not a mail!")
}
//
// //Zad 4
// console.log("Zad_4")
//
// let number = 1
//
// console.log(number)
//
// console.log("Wpisz liczbe od 1 do 10 i sprobuj zgadnac")
// let guess = Number(prompt())
//
// console.log(guess)
//
// if (guess === number) {
//     console.log("Brawo!")
// } else {
//     console.log("Sprobuj jeszcze raz!")
// }

//Zad 5
console.log("Zad_5")

let player1 = prompt()
let player2 = prompt()

console.log("gracz 1 -", player1)
console.log("gracz 2 -", player2)

function rockPaperScissors(player1, player2) {
    if ((player1 === "K" || player1 === "P" || player1 === "N") && (player2 === "K" || player2 === "P" || player2 === "N")) {
        if (player1 === player2) {
            console.log("Remis")
        } else if (player1 === "K") {
            if (player2 === "P") {
                console.log("gracz 2 wygrywa")
            } else {
                console.log("gracz 1 wygrywa")
            }
        } else if (player1 === "P") {
            if (player2 === "N") {
                console.log("gracz 2 wygrywa")
            } else {
                console.log("gracz 1 wygrywa")
            }
        } else if (player1 === "N") {
            if (player2 === "K") {
                console.log("gracz 2 wygrywa")
            } else {
                console.log("gracz 1 wygrywa")
            }
        }
    } else
            console.log("Bledne dane!")
}

rockPaperScissors(player1, player2)
