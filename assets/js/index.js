 const todos = document.getElementById("todos")
 const reinoTierra = document.getElementById("reinoTierra")
 const nacionFuego = document.getElementById("nacionFuego")
 const nomadasAire = document.getElementById("nomadasAire")
 const tribuAgua = document.getElementById("tribuAgua")
 const paginaActual = document.getElementById("pagActual")
 const paginaTotal = document.getElementById("pagTotal") 
 const avatar = document.getElementById("avatar")

 let url ="https://last-airbender-api.fly.dev/api/v1/characters"

 function renderizado (primero, segundo, pagActual, nacion, pagTotal) {
    fetch(url + "?perPage=" + nacion)
    .then((res) => res.json())
    .then((data) =>{
        console.log(data)
        let element = document.querySelector("#tarjetas")
        let html = ""
        for (let i = primero; i < segundo; i++) {
         console.log(data[i]);
         html +=
         `
         <div class="card">
          <img class="imagen" src=${data[i].photoUrl === "https://vignette.wikia.nocookie.net/avatar/images/b/b3/Unnamed_fire_Avatar_close-up.png/revision/latest?cb=20131022002330"? "./assets/image/avatar.gif" : data[i].photoUrl} alt="">
           <div class="caracter"> 
            <h2 class="name">${data[i].name}</h2>
             <p class="enemies" id="enemies">Enemigos: ${data[i].enemies} </p>
             <p class="house">Afiliado a:</p> ${data[i].affiliation} </p>
             <a class="btn" href="#">Leer más</a>
            </div>
         </div>
         `
     }
        element.innerHTML = html
        paginaTotal.textContent = `Total de pag: ${pagTotal}`
        paginaActual.textContent = `pagina actual: ${pagActual}`
    })
 }

 let pagActual = 1
 let nacion = ""
 var pagTotal = 42
 aant.disabled = true;
 ant.disabled = true;
 var numeroInicial = 0
 var numeroFinal = 12

 renderizado(numeroInicial, numeroFinal, pagActual,nacion, pagTotal)


 
 const fetchTodos = () => {
   numeroInicial = 0
   numeroFinal = 12
   pagActual = 1
   nacion = ""
    pagTotal = 42
    renderizado(numeroInicial,numeroFinal, pagActual, nacion, pagTotal)
 }

 const fetchFuego = () => {
   numeroInicial = 0
   numeroFinal = 12
   pagActual = 1
    pagTotal = 31
    nacion = "&affiliation=Fire+Nation"
    renderizado(numeroInicial,numeroFinal, pagActual, nacion, pagTotal)

 }
 const fetchTribuAgua = () => {
   numeroInicial = 0
   numeroFinal = 12
   pagActual = 1
   pagTotal = 3
    nacion = "&affiliation=water+tribe"
    renderizado(numeroInicial,numeroFinal, pagActual, nacion, pagTotal)
 }
 const fetchNomadasAire = () => {
   numeroInicial = 0
   numeroFinal = 12
   pagActual = 1
   pagTotal = 31
    nacion = "&affiliation=air+nomads"
    renderizado(numeroInicial,numeroFinal, pagActual, nacion, pagTotal)
 }
  const fetchReinoTierra = () => {
   numeroInicial = 0
   numeroFinal = 12
   pagActual = 1
   pagTotal = 6
    nacion = "&affiliation=Earth+Kingdom"
    renderizado(numeroInicial,numeroFinal, pagActual, nacion, pagTotal)
 }
 
 todos.onclick = fetchTodos
 nomadasAire.onclick = fetchNomadasAire
 reinoTierra.onclick = fetchReinoTierra
 tribuAgua.onclick = fetchTribuAgua
 nacionFuego.onclick = fetchFuego

 function aanterior() {
   numeroInicial = 0
   numeroFinal = 12
   poost.disabled = false;
   post.disabled = false;
   aant.disabled = true;
   ant.disabled = true;
    pagActual = 1
    renderizado (numeroInicial, numeroFinal, pagActual, nacion, pagTotal)
 }
 function anterior() {
   numeroInicial = numeroInicial - 12
   numeroFinal = numeroFinal - 12
   if (pagActual === 2) {
      aant.disabled = true;
      ant.disabled = true;
   }
   poost.disabled = false;
   post.disabled = false;
    pagActual = pagActual - 1
    renderizado(numeroInicial, numeroFinal, pagActual, nacion, pagTotal)
 }

 function posterior() {
   numeroInicial = numeroInicial + 12
   numeroFinal = numeroFinal + 12
   if (pagActual === pagTotal -1) {
   post.disabled = true
   poost.disabled = true   
   }
   aant.disabled = false;
   ant.disabled = false;  
    pagActual = pagActual + 1
    renderizado(numeroInicial, numeroFinal, pagActual, nacion, pagTotal)
 }
 function poosterior() {
   numeroInicial = pagTotal * 12 - 12
   numeroFinal = pagTotal * 12
   aant.disabled = false;
   ant.disabled = false;
   poost.disabled = true;
   post.disabled = true;
    pagActual = pagTotal
    renderizado(numeroInicial, numeroFinal, pagActual, nacion, pagTotal)
 }

 aant.onclick = aanterior
 post.onclick = posterior
 poost.onclick = poosterior
 ant.onclick = anterior

avatar.addEventListener("click",()=>{
        fetch("https://last-airbender-api.fly.dev/api/v1/characters/avatar")
        .then((res) => res.json())
        .then((data) =>{
            console.log(data)
            let element = document.querySelector("#tarjetas")
            let html = ""
            for (const iterator of data) {
            html += 
            `
            <div class="card">
             <img class="imagen" src=${iterator.photoUrl === "https://vignette.wikia.nocookie.net/avatar/images/b/b3/Unnamed_fire_Avatar_close-up.png/revision/latest?cb=20131022002330"? "./assets/image/avatar.gif" : iterator.photoUrl} alt"">
              <div class="caracter"> 
               <h2 class="name">${iterator.name}</h2>
                <p class="enemies" id="enemies">Enemigos: ${iterator.enemies} </p>
                <p class="house">Afiliado a: ${iterator.affiliation} </p>
                <a class="btn" href="#">Leer más</a>
               </div>
            </div>
            `        
            }
       element.innerHTML = html
       paginaTotal.textcontent = `<p>Total de paginas:${data.info.page}`;
        })
    })

