function JanKenPon() {
    let a = ["piedra", "papel", "tijera"];
    let result = a[Math.floor(Math.random() * a.length)];
    return result;
}
document.write(JanKenPon())
