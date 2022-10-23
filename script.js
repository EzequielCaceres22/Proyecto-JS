let res = (prompt("Ingrese su nombre y apellido"))
console.log (res)

alert("Bienvenido " + res)

let edad = parseInt(prompt("Ingrese su edad"))

if (edad <= 18) {
    alert("No podes continuar con el juego")
}

else{
    let deporte = (prompt("Cual es tu deporte favorito 1-Futbol 2-Basquetball"))

    if (deporte == 1) {
        let array =[]
        alert("Ingrese 5 equipos de futbol que conozca")
        for (let i = 1; i <= 5; i++){
            let cantidad = i
            let equipo = prompt("Equipo " + cantidad)
            array.push(equipo)
            console.log(equipo)
        }
        alert("Estos son los equipos de futbol que conoces" + array)
    }

    else if (deporte == 2) {
        let array =[]
        alert("Ingrese 5 equipos de Basquetball que conozca")
        for (let i = 1; i <= 5; i++){
            let cantidad = i
            let equipo = prompt("Equipo " + cantidad)
            array.push(equipo)
            console.log(equipo)
        }
        alert("Estos son los equipos de Basquetball que conoces" + array)
    }

}