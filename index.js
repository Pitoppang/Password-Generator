/* 
Tomar nota do ! e do unwanted commas (.join("") KKKKKK). Esse desafio tá sendo maravilhoso porque eu tô pesquisando as coisas e achando pra superar as dúvidas/dificuldades relativas aos requisitos pro mesmo.
*/

// document.getElementById("nome").value = ""      => https://www.w3schools.com/howto/howto_html_clear_input.asp

// Integrate HTML to JS:
let passwordsElOne = document.getElementById("passwords-elone")
let passwordsElTwo = document.getElementById("passwords-eltwo")
let sliderNumber = document.getElementById("slidernumber")
let getSymbols = document.getElementById("symbols")
let getNumbers = document.getElementById("numbers")
const slider = document.getElementById("myRange") 
// A gente usa o "myRange" e não a classe "slider" para as definições.

// Variables for toggle options.
let numEnabled = false
let symEnabled = false
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|",":",";","<",">",".","?","/"];
let passwordlength = 5

function enableNumbers () {
//  characters = letters + numbers.
    numEnabled = !numEnabled
    return numEnabled
}

function enableSymbols () {
//  characters = letters + numbers.
    symEnabled = !symEnabled
    return symEnabled
}

// Function that will randomize EACH character:
function randomizeChars () {
    let characters = []
    if (numEnabled === true && symEnabled === false) {
        characters = letters.join("") + numbers.join("")
    } else if (numEnabled === false && symEnabled === true) {
        characters = letters.join("") + symbols.join("")
    } else if (numEnabled === true && symEnabled === true) {
        characters = letters.join("") + numbers.join("") + symbols.join("")
    } else {characters = letters}
    let randomChars = Math.floor(Math.random()*characters.length)
    return characters[randomChars]
}

// Function to generate a random key with 15 characters:
function generateKeys () {
    let password = ""
    for (let count = 0; count < passwordlength; count++) {
        password += randomizeChars()
    }
    return password
}

// Function to render each key separately:
function renderKeys () {
    passwordsElOne.textContent = generateKeys()
    passwordsElTwo.textContent = generateKeys()
}

/* 
Aqui eu settei a função do slider tanto pra definir para a senha, quanto pra numeração.
Não precisei de interpolação. Basicamente, o HTML é quem dessa vez vai fazer todo o trabalho.
*/
slider.addEventListener("input", function() {
    sliderNumber.textContent = slider.value
    passwordlength = slider.value
})


/* 
    Antes: Função para copiar para a clipboard abaixo. Porém, a função precisa de APIs e eu não aprendi a importá-las ainda. Fiz só de um dos campos, depois aprendo do outro, para não levar mais tempo nesse challenge.
    
    Depois: Rapaz, procurei "quebrar a cabeça" e valeu a pena... Aprendi algumas coisinhas a mais e consegui fazer dar certo, usando a lógica, depois que peguei o básico pesquisando na net, por quase um dia. Sim, demorei porque precisei trabalhar em paralelo. Mais detalhes está no arquivo de texto, em meio as pastas.
*/

function copyToClipboard (textocopiado) {
    navigator.clipboard.writeText(textocopiado)
    alert("Copied the text: " + textocopiado)
}

passwordsElOne.addEventListener("click", function(){copyToClipboard(passwordsElOne.textContent)})
passwordsElTwo.addEventListener("click", function(){copyToClipboard(passwordsElTwo.textContent)})

function clearFields () {
    numEnabled = false
    symEnabled = false
    slider.value = 6
    sliderNumber.textContent = slider.value
    passwordsElOne.textContent = ""
    passwordsElTwo.textContent = ""
}






