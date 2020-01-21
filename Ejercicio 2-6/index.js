function superHeroe() {
    const titulos_masculino = ["Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor",
        "El", "Professor", "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.",
        "General"];
    const adjetivos = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic",
        "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega",
        "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden",
        "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"];
    const sustantivos = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger",
        "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame",
        "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon",
        "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night",
        "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino",
        "Mole", "Sloth"];
    let a = titulos_masculino[Math.floor(Math.random() * titulos_masculino.length)].toUpperCase();
    let b = adjetivos[Math.floor(Math.random() * adjetivos.length)].toUpperCase();
    let c = sustantivos[Math.floor(Math.random() * sustantivos.length)].toUpperCase();

    let result = `Tu nombre de super héroe es ${a} ${c} ${b}`;
    return result;
}
document.write(superHeroe());