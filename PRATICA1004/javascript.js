function cambiaColorePrezzi() {
    const colori = ["red", "green", "blue", "orange", "purple"];
    const prezzi = document.querySelectorAll('table tr:nth-child(4) td'); // 4a riga = prezzi
    
    prezzi.forEach((td, index) => {
        td.style.color = colori[index % colori.length]; // Cicla tra i colori
    });
}

function cambiaTitolo() {
    document.querySelector('h1').textContent = "Nuovo Titolo SmartphoneWorld";
}