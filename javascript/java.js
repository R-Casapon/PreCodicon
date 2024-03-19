let contenedor = document.getElementById("contenedor-principal");
let body = document.querySelector("body");
let parrafo = document.getElementById("p");
let contenedorMonedas = document.getElementById("contenedor-monedas");
let contador = 0;
let parrafoDesbloqueado = document.getElementById("parrafo-desbloqueado");
let parrafoDesbloqueado2 = document.getElementById("parrafo-desbloqueado2");
let audioFondo = new Audio();

document.getElementById("boton").addEventListener("click", ()=>{
    set();
    document.getElementById("boton").style.display = "none";
    
    audioFondo.src = "img/audioFondo.mp3";
    audioFondo.play();
    audioFondo.loop = true;


    contenedorMonedas.classList.remove("hidden");
    contenedorMonedas.classList.add("flex");
    // Se muestra los planetas
    document.getElementById("contenedor-planetas").classList.remove("hidden");
    document.getElementById("contenedor-planetas").classList.add("flex");

    // Se muestra el nivel
    document.getElementById("Nivel").classList.remove("hidden");
    document.getElementById("Nivel").classList.add("block");
    

});

function set(){ 
    setInterval(()=>{
        let divEstrella = document.createElement("div");
        divEstrella.id = `estrella${contador}`;
        divEstrella.innerHTML = `
        <div id='conten-imagen-${contador}' class='flex'>
            <img id='estrellita' class='flex w-[65px] cursor-pointer hover:scale-125' src='img/estrella.png' alt=''>
        </div>`;
        divEstrella.style.position = "absolute";
        // Se le da una posicion aleatoria a las estrellas
        divEstrella.style.top = Math.random() * 90 + "vh";
        divEstrella.style.left = Math.random() * 90 + "vw";
            contenedor.appendChild(divEstrella);
        
        // Se crea el escucha para darle click a las estrellas que aparezcan
        document.getElementById(`estrella${contador}`).addEventListener("click", ()=>{
            divEstrella.style.display = "none";
            let contadorMonedas = 0;
            contadorMonedas = parrafo.innerHTML.split(" ")[1];
            parrafo.innerHTML = `Monedas: ${++contadorMonedas}`;

            document.getElementById("contenedor-monedas").classList.remove("border-red-500");
            document.getElementById("contenedor-monedas").classList.add("border-green-500");
            // aparece la flecha
            document.getElementById("flecha").classList.remove("hidden");
            document.getElementById("flecha").classList.add("flex");

            // se crea el audio para las estrellas
            let audio = new Audio();
            audio.src = "img/bum.mp3";
            audio.play();

            // Selecciona nivel
            let level = document.getElementById("level");

            if(contadorMonedas > 225){
                document.getElementById("flecha").classList.remove("flex");
                document.getElementById("flecha").classList.add("hidden")
            }

            if(contadorMonedas == 5){
                // Se mueve la fleha hacia el siguiente planeta
                document.getElementById("flecha").classList.remove("left-[37%]");
                document.getElementById("flecha").classList.add("left-[41%]");
                // Se cambia la imagen
                document.getElementById("planeta1").src = "img/universo1/planeta1.png";
                document.getElementById("planeta1").classList.remove("opacity-20");

                aparecerParrafo();
                
            } else if (contadorMonedas == 10){
                // Se mueve la fleha hacia el siguiente planeta
                document.getElementById("flecha").classList.remove("left-[41%]");
                document.getElementById("flecha").classList.add("left-[44.8%]");

                document.getElementById("planeta2").src = "img/universo1/planeta2.png";
                document.getElementById("planeta2").classList.remove("opacity-20");

                aparecerParrafo();

            } else if(contadorMonedas == 15){
                document.getElementById("flecha").classList.remove("left-[44.8%]");
                document.getElementById("flecha").classList.add("left-[48.6%]");

                document.getElementById("planeta3").src = "img/universo1/planeta3.png";
                document.getElementById("planeta3").classList.remove("opacity-20");

                aparecerParrafo();

            } else if(contadorMonedas == 20){
                document.getElementById("flecha").classList.remove("left-[48.6%]");
                document.getElementById("flecha").classList.add("left-[52.5%]");

                document.getElementById("planeta4").src = "img/universo1/planeta4.png";
                document.getElementById("planeta4").classList.remove("opacity-20");

                aparecerParrafo();
                
            } else if(contadorMonedas == 25){
                document.getElementById("flecha").classList.remove("left-[52.5%]");
                document.getElementById("flecha").classList.add("left-[56.4%]");

                document.getElementById("planeta5").src = "img/universo1/planeta5.png";
                document.getElementById("planeta5").classList.remove("opacity-20");

                aparecerParrafo();

            } else if(contadorMonedas == 30){
                document.getElementById("flecha").classList.remove("left-[56.4%]");
                document.getElementById("flecha").classList.add("left-[60.3%]");

                document.getElementById("planeta6").src = "img/universo1/planeta6.png";
                document.getElementById("planeta6").classList.remove("opacity-20");

                aparecerParrafo();

            } else if(contadorMonedas == 35){
                document.getElementById("flecha").classList.remove("left-[60.3%]");
                document.getElementById("flecha").classList.add("left-[64.2%]");

                document.getElementById("planeta7").src = "img/universo1/planeta7.png";
                document.getElementById("planeta7").classList.remove("opacity-20");

                aparecerParrafo();

            } else if(contadorMonedas == 40){
                document.getElementById("planeta8").src = "img/universo1/planeta8.png";
                document.getElementById("planeta8").classList.remove("opacity-20");

                document.getElementById("flecha").classList.remove("flex");
                document.getElementById("flecha").classList.add("hidden");

                aparecerParrafo();
            } else if(contadorMonedas == 50){
                document.getElementById("flecha").classList.remove("top-[90%]","left-[64.2%]");
                document.getElementById("flecha").classList.add("top-[17%]","left-[7%]");

                document.getElementById("p2").classList.remove("hidden");
                document.getElementById("p2").classList.add("block");

                aparecerParrafo2()

            } else if(contadorMonedas == 60){
                document.getElementById("flecha").classList.remove("top-[17%]");
                document.getElementById("flecha").classList.add("top-[29.6%]");

                document.getElementById("p3").classList.remove("hidden");
                document.getElementById("p3").classList.add("block");

                aparecerParrafo2();

            } else if(contadorMonedas == 70){
                document.getElementById("flecha").classList.remove("top-[29.6%]");
                document.getElementById("flecha").classList.add("top-[42.2%]");

                document.getElementById("p4").classList.remove("hidden");
                document.getElementById("p4").classList.add("block");

                aparecerParrafo2();

            } else if(contadorMonedas == 80){
                document.getElementById("flecha").classList.remove("top-[42.2%]");
                document.getElementById("flecha").classList.add("top-[55%]");

                document.getElementById("p5").classList.remove("hidden");
                document.getElementById("p5").classList.add("block");

                aparecerParrafo2();

            } else if(contadorMonedas == 100){
                body.classList.remove("bg-[url('../img/fondo-espacio.png')]");
                body.classList.add("bg-[url('../img/fondo-espacio2.png')]");
                body.classList.add("bg-cover");

                document.getElementById("contenedor-planetas").classList.remove("flex");
                document.getElementById("contenedor-planetas").classList.add("hidden");

                document.getElementById("contenedor-planetas2").classList.remove("hidden");
                document.getElementById("contenedor-planetas2").classList.add("flex");

                document.getElementById("flecha").classList.remove("top-[55%]","left-[7%]");
                document.getElementById("flecha").classList.add("top-[91%]", "left-[42%]");
                audioFondo.pause();
                let audioFondo2 = new Audio();
                audioFondo2.src = "img/audioFondo2.mp3";
                audioFondo2.play();
                audioFondo2.loop = true;

                // sube a nivel 2 y se agrega boton de siguiente nivel
                level.innerHTML = "2";
            } else if(contadorMonedas == 110){
                document.getElementById("planetaU1").src = "img/universo2/planetaU2.1.png";
                document.getElementById("planetaU1").classList.remove("opacity-20");

                document.getElementById("flecha").classList.remove("left-[42%]");
                document.getElementById("flecha").classList.add("left-[46.5%]");

                aparecerParrafo();

            } else if(contadorMonedas == 120){
                document.getElementById("planetaU2").src = "img/universo2/planetaU2.2.png";
                document.getElementById("planetaU2").classList.remove("opacity-20");

                document.getElementById("flecha").classList.remove("left-[46.5%]");
                document.getElementById("flecha").classList.add("left-[51%]");

                aparecerParrafo();

            } else if(contadorMonedas == 130){
                document.getElementById("planetaU3").src = "img/universo2/planetaU2.3.png";
                document.getElementById("planetaU3").classList.remove("opacity-20");

                document.getElementById("flecha").classList.remove("left-[51%]");
                document.getElementById("flecha").classList.add("left-[55.2%]");

                aparecerParrafo();

            } else if(contadorMonedas == 140){
                document.getElementById("planetaU4").src = "img/universo2/planetaU2.4.png";
                document.getElementById("planetaU4").classList.remove("opacity-20");

                document.getElementById("flecha").classList.remove("left-[55.2%]");
                document.getElementById("flecha").classList.add("left-[59.7%]");

                aparecerParrafo();

            } else if(contadorMonedas == 150){
                document.getElementById("planetaU5").src = "img/universo2/planetaU2.5.png";
                document.getElementById("planetaU5").classList.remove("opacity-20");
                
            } else if(contadorMonedas == 180){
                    body.classList.remove("bg-[url('../img/fondo-espacio2.png')]");
                    body.classList.add("bg-[url('../img/fondo-espacio3.png')]");
                    
                    audioFondo.src = "img/audioFondo3.mp3";
                    audioFondo.play();

                    document.getElementById("level").innerHTML = `<p id="level" class="text-white font-mono text-[50px]">3</p>`;

                    document.getElementById("contenedor-planetas2").classList.remove("flex");
                    document.getElementById("contenedor-planetas2").classList.add("hidden");

                    document.getElementById("contenedor-planetas3").classList.remove("hidden");
                    document.getElementById("contenedor-planetas3").classList.add("flex");

                    document.getElementById("flecha").classList.remove("left-[59.7%]");
                    document.getElementById("flecha").classList.add("left-[40.7%]");


            } else if(contadorMonedas == 185){
                document.getElementById("planetaU3.1").src = "img/universo3/planetaU3.1.png";
                document.getElementById("planetaU3.1").classList.remove("opacity-20");

                document.getElementById("flecha").classList.remove("left-[40.7%]");
                document.getElementById("flecha").classList.add("left-[45%]");

                aparecerParrafo();

            } else if(contadorMonedas == 195){
                document.getElementById("planetaU3.2").src = "img/universo3/planetaU3.2.png";
                document.getElementById("planetaU3.2").classList.remove("opacity-20");

                document.getElementById("flecha").classList.remove("left-[45%]");
                document.getElementById("flecha").classList.add("left-[49.4%]");

                aparecerParrafo();

            } else if(contadorMonedas == 200){
                document.getElementById("planetaU3.3").src = "img/universo3/planetaU3.3.png";
                document.getElementById("planetaU3.3").classList.remove("opacity-20");

                document.getElementById("flecha").classList.remove("left-[49.4%]");
                document.getElementById("flecha").classList.add("left-[53.8%]");

                aparecerParrafo();

            } else if(contadorMonedas == 210){
                document.getElementById("planetaU3.4").src = "img/universo3/planetaU3.4.png";
                document.getElementById("planetaU3.4").classList.remove("opacity-20");

                document.getElementById("flecha").classList.remove("left-[53.8%]");
                document.getElementById("flecha").classList.add("left-[58.3%]");

                aparecerParrafo();

            } else if(contadorMonedas == 225){
                document.getElementById("planetaU3.5").src = "img/universo3/planetaU3.5.png";
                document.getElementById("planetaU3.5").classList.remove("opacity-20");

                document.getElementById("flecha").classList.remove("flex");
                document.getElementById("flecha").classList.add("hidden");

            } else if(contadorMonedas == 226){
                document.getElementById("siguienteNivel").classList.remove("hidden");
                document.getElementById("siguienteNivel").classList.add("flex");

                document.getElementById("flecha").classList.remove("flex");
                document.getElementById("flecha").classList.add("hidden");
            }
        });
    contador++;
}, 800)}

function aparecerParrafo(){
        parrafoDesbloqueado.classList.remove("hidden");
        parrafoDesbloqueado.classList.add("flex");

        let audio = new Audio();
        audio.src = "img/universo1/planeta.mp3";
        audio.play()
        //despues de un 1sg se agrega la clase hidden a parrafodesbloqueado
        setTimeout(()=>{
            parrafoDesbloqueado.classList.remove("flex");
            parrafoDesbloqueado.classList.add("hidden");
        }, 2000);
}

function aparecerParrafo2(){
    parrafoDesbloqueado2.classList.remove("hidden");
    parrafoDesbloqueado2.classList.add("flex");

    let audioLogro = new Audio();
    audioLogro.src = "img/logros.mp3"
    audioLogro.play();
    //despues de un 1sg se agrega la clase hidden a parrafodesbloqueado
    setTimeout(()=>{
        parrafoDesbloqueado2.classList.remove("flex");
        parrafoDesbloqueado2.classList.add("hidden");
    }, 1500);
}

function cambiarDeNivel(){
    document.getElementById("siguienteNivel").addEventListener("click", ()=>{
        body.classList.remove(`bg-[url('../img/fondo-espacio3.png')]`);
        body.classList.add(`bg-[url('../img/fondo-espacio5.jpg')]`);

        audioFondo.src = "img/audioFondo4.mp3";
        audioFondo.play();
        audioFondo.loop = true;

        document.getElementById("level").innerHTML = `<p id="level" class="text-white font-mono text-[50px]">4</p>`;
        document.getElementById("siguienteNivel").classList.remove("flex");
        document.getElementById("siguienteNivel").classList.add("hidden");

        setTimeout(()=>{
            document.getElementById("siguienteNivel2").classList.remove("hidden");
            document.getElementById("siguienteNivel2").classList.add("flex");
        }, 15000);

        document.getElementById("flecha").classList.remove("flex");
        document.getElementById("flecha").classList.add("hidden");

        document.getElementById("contenedor-planetas3").classList.remove("flex");
        document.getElementById("contenedor-planetas3").classList.add("hidden");


    })
}
cambiarDeNivel();

function cambiarDeNivel2(){
    document.getElementById("siguienteNivel2").addEventListener("click", ()=>{
        body.classList.remove(`bg-[url('../img/fondo-espacio5.jpg')]`);
        body.classList.add(`bg-[url('../img/fondo-espacio4.jpg')]`);
        setTimeout(()=>{
            document.getElementById("level").innerHTML = `<p id="level" class="text-white font-mono text-[50px]">5</p>`;
        }, 100)

        audioFondo.src = "img/audioFondo5.mp3";
        audioFondo.play();
        audioFondo.loop = true;

        document.getElementById("level").innerHTML = `<p id="level" class="text-white font-mono text-[50px]">4</p>`;
        document.getElementById("siguienteNivel2").classList.remove("flex");
        document.getElementById("siguienteNivel2").classList.add("hidden");

        document.getElementById("contenedor-planetas3").classList.remove("flex");
        document.getElementById("contenedor-planetas3").classList.add("hidden")
    })
};

cambiarDeNivel2();