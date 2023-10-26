function toggleDropdown() {
    let dropdown = document.querySelector('#dropdownButton #dropdown');
    let target = document.getElementById('drpTarget');

    dropdown.classList.toggle("hidden");
    target.classList.toggle("rotate-180");  
}

function toggleDropdown1() {
    let dropdown1 = document.querySelector('#dropdownButton1 #dropdown1');
    let target1 = document.getElementById('drpTarget1');
    
    dropdown1.classList.toggle("hidden");
    target1.classList.toggle("rotate-180"); 
}

function toggleOpenBurger() {
    let open = document.querySelector('#OpenBurger #openburger');
    let target2 = document.getElementById('drpTarget2');
    
    target2.classList.toggle("rotate-90");
    open.classList.toggle('hidden');
}