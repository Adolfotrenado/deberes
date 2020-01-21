function janKenPon(string1) {
    let a = ["Piedra", "Papel", "Tijera"];
    let b = a[Math.floor(Math.random() * a.length)];
    if (string1 === b) {
        result = "Empate!";
    } else {
        if (string1 === "Piedra" && b === "Tijera" || string1 === "Tijera" && b === "Papel" || string1 === "Papel" && b === "Piedra") {
            result = "Gana la máquina!";
        } else {
            if  (b === "Piedra" && string1 === "Tijera" || b === "Tijera" && string1 === "Papel" || b === "Papel" && string1 === "Piedra") {
                result = "Has ganado!";
            } else {
                result = "Aprende a escribir joder!";
            }
        }
    }
    let c = `La máquina ha escogido ${b}: `
    return c + result;
}
let jugador = prompt("Elige Piedra, Papel o Tijera");
document.write(janKenPon(jugador));
