

function insert(){
    let text = document.getElementById("text");
    let unos = document.getElementById("unos");
    let p = document.createElement("li");

    let inserted = unos.value;

    
    p.textContent = inserted;
    
    
    let importance = document.getElementById('importance').value;
    

    let most = document.getElementById('most');
    let medium = document.getElementById('medium');
    let least = document.getElementById('least');

    important = most.value;
    medium = medium.value;
    least = least.value;

    console.log(importance);

    p.classList.add("important");
 

    switch(importance){
        case 'important':
            
            p.className="important";
            break;
        case 'medium':
            
            p.className="medium";
            break;
        case 'least':
            
            p.className="least";
            break;

}
p.onclick = function(){
    text.removeChild(p);
}
        text.appendChild(p);

        unos.value = '';
    
}