function cambiaColorePrezzi() {
    const colori = ["red", "green", "blue", "orange", "purple"];
    const prezzi = document.querySelectorAll('table tr:nth-child(4) td'); 
    
    prezzi.forEach((td, index) => {
        td.style.color = colori[index % colori.length]; 
    });
}

function cambiaTitolo() {
    document.querySelector('h1').textContent = "Nuovo Titolo SmartphoneWorld";
}