

function insert(){
    let text = document.getElementById('text');
    let unos = document.getElementById('unos');

    let uneseno = unos.value;
    let p = document.createElement("li");
    p.textContent = uneseno;
    text.appendChild(p);
    
}