function janKenPon(string1, string2) {
    if (string1 === string2) {
        result = "Empate!";
    } else {
        if (string1 === "Piedra" && string2 === "Tijera" || string1 === "Tijera" && string2 === "Papel" || string1 === "Papel" && string2 === "Piedra") {
            result = "Gana el jugador 1!";
        } else {
            if (string2 === "Piedra" && string1 === "Tijera" || string2 === "Tijera" && string1 === "Papel" || string2 === "Papel" && string1 === "Piedra") {
                result = "Gana el jugador 2!";
            } else {
                result = "Aprended a escribir joder!";
            }
        }
    }
    return result;
}
    let jugador1 = prompt("Jugador 1: Elige Pierda Papel o Tijera");
    let jugador2 = prompt("Jugador 2: Elige Pierda Papel o Tijera");
document.write(janKenPon(jugador1, jugador2));
