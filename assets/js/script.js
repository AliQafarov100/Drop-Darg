let first = document.querySelector(".first");
let second = document.querySelector(".second");
let zone = document.querySelector(".b_circle");

let colorSecond = second.style.backgroundColor = "blue";
let firstColor = first.style.backgroundColor = "violet";

    second.addEventListener('dragend',()=>{
        zone.style.backgroundColor = colorSecond;
    })

    first.addEventListener('dragend',()=>{
        zone.style.backgroundColor = firstColor;
    })