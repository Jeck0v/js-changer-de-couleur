const div = document.querySelector('div')
const name = document.querySelector('input')


const color={
    "rouge": "red",
    "bleu": "blue",
    "jaune": "yellow",
    "noir": "black",
    "blanc": "white",
    "vert": "green",
    "red": "red",
    "blue": "blue",
    "yellow": "yellow",
    "black": "black",
    "white": "white",
    "green": "green",
}


addEventListener('input',
function(){

div.style.backgroundColor = color[name.value]
})