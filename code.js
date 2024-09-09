let interval=null
let comida = document.getElementById("food"), sleep = document.getElementById("sleep") , joy=document.getElementById("joy");
let i = 100,f=100,x=100;
let para =document.getElementById("stop");
let sigue = document.getElementById("start");
let darcomida = document.getElementById("plusfood");
let dormir = document.getElementById("sueno")
let jugar = document.getElementById("play")
const display = document.getElementById("display")
const toggle = document.querySelector(".toggle")
const body = document.getElementById("bd")
const botond = document.getElementById("botonday")

let normal2 = new SpeechSynthesisUtterance("Meow Meow, Bitch")
let normal = new SpeechSynthesisUtterance("Miau")
let hambre = new SpeechSynthesisUtterance("Feed me");
let hambre2 = new SpeechSynthesisUtterance("Feed me bitch I'm dying!");
let triste = new SpeechSynthesisUtterance("Play with me");
let triste2 = new SpeechSynthesisUtterance("Touch me unproperly");
let sleepy = new SpeechSynthesisUtterance("I'm about to watch one piece");
let eepy = new SpeechSynthesisUtterance("Zzzz");
let ded = new SpeechSynthesisUtterance("fuck you I'm dead");



function contador(){




    if(i>100){
        i=100
    }
    if(x>100){
        x=100
    }
    if(f>100){
        f=100
    }
comida.innerHTML = `${i=i-3}`;
sleep.innerHTML = `${x--}`
joy.innerHTML=`${f=f-2}`

if(f <= 0 || x <= 0 || i <= 0){
    i = "R";
    f = "I";
    x = "P";
    comida.innerHTML = i;
    sleep.innerHTML = x;
    joy.innerHTML = f;
    
    clearInterval(interval); // Detiene el intervalo
    display.setAttribute("src", "./expresiones/muerto.png");
    speechSynthesis.speak(ded)
    return; // Termina la ejecución de la función para evitar que continúe
}




display.setAttribute("src", "./expresiones/normal2.png");
setTimeout(() => {

    display.setAttribute("src", "./expresiones/normal.png");


      

 
}, 600);

if(i<=80){
    display.setAttribute("src","./expresiones/hambriao.png");
    speechSynthesis.speak(hambre);
    if(i>=80){
speechSynthesis.cancel()
    }
}

if(i<=40){
    display.setAttribute("src","./expresiones/hambre 2.png");
    speechSynthesis.speak(hambre2)
    if(i>=40){
        speechSynthesis.cancel()
            }
}

if(x<=80){
    display.setAttribute("src","./expresiones/sueno.png")
    speechSynthesis.speak(sleepy)
    if(x>=80){
        speechSynthesis.cancel()
            }
}

if(x<=40){
    display.setAttribute("src","./expresiones/mucho sueño.png")
    speechSynthesis.speak(eepy)
    if(x>=40){
        speechSynthesis.cancel()
            }
}



if(f<=80){
    display.setAttribute("src","./expresiones/triste.png")
    speechSynthesis.speak(triste)
    if(f>=80){
        speechSynthesis.cancel()
            }
}

if(f<=40){
    display.setAttribute("src","./expresiones/muytriste.png")
    speechSynthesis.speak(triste2)
    if(f>=40){
        speechSynthesis.cancel()
            }
}

let randomNumber = Math.floor(Math.random() * 10) + 1; // Número aleatorio entre 1 y 7
if (randomNumber === 7) {
    display.setAttribute("src", "./expresiones/random.png");
    setTimeout(() => {
        // Regresar a la imagen normal después de un breve tiempo
        display.setAttribute("src", "./expresiones/normal.png");
    }, 1000);
}

let randomNumber2 = Math.floor(Math.random() * 10) + 1; // Número aleatorio entre 1 y 7
if (randomNumber2 === 2) {
    display.setAttribute("src", "./expresiones/random2.png");
    setTimeout(() => {
        // Regresar a la imagen normal después de un breve tiempo
        display.setAttribute("src", "./expresiones/normal.png");
    }, 1000);
}


}

play.addEventListener("click",()=>{
    f=f+10
})
sueno.addEventListener("click",()=>{
    x=x+10
})
darcomida.addEventListener("click",()=>{
i=i+10
})


para.addEventListener("click",()=>{
clearInterval(interval)
interval=null


})

sigue.addEventListener("click",()=>{

    if(interval===null){
        interval= setInterval(contador,1000);
    }

   


})


toggle.addEventListener("click",()=>{

body.classList.toggle("darkmode")
toggle.classList.toggle("shine")
const icon = document.getElementById("botonday");
if (icon.classList.contains("fa-moon")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
} else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
}

})







