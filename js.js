// // Zad 1
// console.log("Zad_1")
//
// let numberOfUsers = 5
//
// let result = Math.floor(numberOfUsers/2)
//
// console.log(numberOfUsers)
// console.log(result)
//
// // Zad 2
// console.log("Zad_2")
//
// let max = 100
// let min = 5
// let random = Math.floor(Math.random()*((max-min+1)+min))
//
// console.log(random)
//
// //Zad 3
// console.log("Zad_3")
//
// let mail = "agonyseeker2000@gmail.com"
//
// if (mail.indexOf("@") != -1) {
//         console.log("True, it is a mail!")
// } else {
//     console.log("Flase, not a mail!")
// }
// //
// // //Zad 4
// // console.log("Zad_4")
// //
// // let number = 1
// //
// // console.log(number)
// //
// // console.log("Wpisz liczbe od 1 do 10 i sprobuj zgadnac")
// // let guess = Number(prompt())
// //
// // console.log(guess)
// //
// // if (guess === number) {
// //     console.log("Brawo!")
// // } else {
// //     console.log("Sprobuj jeszcze raz!")
// // }
//
// // //Zad 5
// // console.log("Zad_5")
// //
// // let player1 = prompt()
// // let player2 = prompt()
// //
// // console.log("gracz 1 -", player1)
// // console.log("gracz 2 -", player2)
// //
// // function rockPaperScissors(player1, player2) {
// //     if ((player1 === "K" || player1 === "P" || player1 === "N") && (player2 === "K" || player2 === "P" || player2 === "N")) {
// //         if (player1 === player2) {
// //             console.log("Remis")
// //         } else if (player1 === "K") {
// //             if (player2 === "P") {
// //                 console.log("gracz 2 wygrywa")
// //             } else {
// //                 console.log("gracz 1 wygrywa")
// //             }
// //         } else if (player1 === "P") {
// //             if (player2 === "N") {
// //                 console.log("gracz 2 wygrywa")
// //             } else {
// //                 console.log("gracz 1 wygrywa")
// //             }
// //         } else if (player1 === "N") {
// //             if (player2 === "K") {
// //                 console.log("gracz 2 wygrywa")
// //             } else {
// //                 console.log("gracz 1 wygrywa")
// //             }
// //         }
// //     } else
// //             console.log("Bledne dane!")
// // }
// //
// // rockPaperScissors(player1, player2)
// //
// // console.log("TABLICE")
// // console.log("Zad 1")
// //
// // const numbers = [4,4,1,2,5,40];
// //
// // let wynik = function(array) {
// //     let suma = 0
// //     for (let i=0; i < array.length; i++) {
// //         suma = suma + array[i]
// //     }
// //     let wyniczek = (suma/array.length)
// //     console.log(wyniczek)
// // }
// //
// // wynik(numbers)
// //
// // console.log("Zad 2")
// //
// // const cities = ["Krakow", "Olsztyn", "Szczecin", "Ostrow Wielkopolski"]
// //
// // let ileSlow = function(array) {
// //     const ileSlowTablica = []
// //     for (let i=0; i < array.length; i++) {
// //         ileSlowTablica.push([...array[i]].length)
// //     }
// //     console.log(ileSlowTablica)
// // }
// //
// // ileSlow(cities)
//

console.log("Zadanie 3")

const numbers = [4,-5,0,2,-67,8,10,-34]




function getNegativeNumbers(element) {
        return element < 0
    }

const result = numbers.filter(getNegativeNumbers)

console.log(result)

console.log("Zad 4")

const years = [1995, 1856]

function mapuj(element) {
    years2 = Number(2022 - element)
    return [element, years2]


}

const wynig = years.map(mapuj)

console.log(wynig)

// Zad 5

console.log("Zad 5")

const numbers5 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9];

function getSecondMaxNumber(array) {
    let max = Math.max.apply(null, array)
    array.splice(array.indexOf(max), 1)
    return Math.max.apply(null, array)

}

console.log(getSecondMaxNumber(numbers5))

// Zad 6 - tablice z imionami

let names1 = ["Jan", "Maria", "Kasia", "Wojtek", "Zosia"]

console.log(names1)
console.log(names1[0])
console.log(names1[4])
console.log(names1.length)

const names2 = []

names2.push("Jan")
names2.push("Maria")
names2.push("Kasia")
names2.push("Wojtek")
names2.push("Zosia")
names2.push("Grzesiek")

console.log(names2[0])
console.log(names2[2])
console.log(names2.length)

// Zad 7 - tablice 2d

const arrayOfNumbers = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]

console.log("Tablica 2D")
console.log(arrayOfNumbers[0][1])
console.log(arrayOfNumbers[1])
console.log([...arrayOfNumbers[2]].length)

const mixedArray = [
    ["Maria", "Jan", "Piotr"],
    [1, 2, 3, 4, 5, 6],
]

console.log("mixedArray")
console.log(mixedArray[0][2])
console.log(mixedArray[0][4])
console.log(mixedArray[1].length)
