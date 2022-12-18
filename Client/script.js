let btnTraerCicloBasico = document.getElementById("btnCiclo_Basico");
let btnTraerInformatica = document.getElementById("btnInformatica");
let btnTraerConstruccion = document.getElementById("btnConstruccion");
let btnTraerElectromecanica = document.getElementById("btnElectromecanica");
let titleCursos = document.getElementById("titulo--cursos");
let btnsCursos = document.getElementById("botonera-cursos");

btnTraerCicloBasico.addEventListener("click", function(){
    btnsCursos.innerHTML = "";
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function(){
        
        const response = JSON.parse(xhr.responseText);
        console.log(response);
        for (let i = 0; i < response.length; i++){
            const cursos = response[i];
            const nuevoli = document.createElement("li");
            const nuevobtn = document.createElement("a");
            nuevoli.append(nuevobtn);
            nuevoli.classList.add("botones-de-cursos");
            nuevobtn.href = `/lista?division=${cursos.Division}`;
            nuevobtn.textContent = cursos.Division;
            btnsCursos.append(nuevoli);
        };
        titleCursos.textContent = response[0].Especialidad;
    });
    xhr.open("GET", "/curso?especialidad=Ciclo_Basico", true)
    xhr.send();
});
btnTraerInformatica.addEventListener("click", function(){
    btnsCursos.innerHTML = "";
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function(){
        const response = JSON.parse(xhr.responseText);
        console.log(response);
        for (let i = 0; i < response.length; i++) {
            const cursos = response[i];
            const nuevoli = document.createElement("li");
            const nuevobtn = document.createElement("a");
            nuevoli.append(nuevobtn);
            nuevoli.classList.add("botones-de-cursos");
            nuevobtn.href = `/lista?division=${cursos.Division}`;
            nuevobtn.textContent = cursos.Division;
            btnsCursos.append(nuevoli);
        };
        titleCursos.textContent = response[0].Especialidad;
    });
    xhr.open("GET", "/curso?especialidad=Informatica", true)
    xhr.send();
});
btnTraerConstruccion.addEventListener("click", function(){
    btnsCursos.innerHTML = "";
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function(){
        const response = JSON.parse(xhr.responseText);
        console.log(response);
        for (let i = 0; i < response.length; i++) {
            const cursos = response[i];
            const nuevoli = document.createElement("li");
            const nuevobtn = document.createElement("a");
            nuevoli.append(nuevobtn);
            nuevoli.classList.add("botones-de-cursos");
            nuevobtn.href = `/lista?division=${cursos.Division}`;
            nuevobtn.textContent = cursos.Division;
            btnsCursos.append(nuevoli);
        };
        titleCursos.textContent = response[0].Especialidad;
    });
    xhr.open("GET", "/curso?especialidad=Construccion", true)
    xhr.send();
});
btnTraerElectromecanica.addEventListener("click", function(){
    btnsCursos.innerHTML = "";
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function(){
        const response = JSON.parse(xhr.responseText);
        console.log(response);
        for (let i = 0; i < response.length; i++) {
            const cursos = response[i];
            const nuevoli = document.createElement("li");
            const nuevobtn = document.createElement("a");
            nuevoli.append(nuevobtn);
            nuevoli.classList.add("botones-de-cursos");
            nuevobtn.href = `/lista?division=${cursos.Division}`;
            nuevobtn.textContent = cursos.Division;
            btnsCursos.append(nuevoli);
        };
        titleCursos.textContent = response[0].Especialidad;
    });
    xhr.open("GET", "/curso?especialidad=Electromecanica", true)
    xhr.send();
});