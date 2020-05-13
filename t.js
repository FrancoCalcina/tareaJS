let inputNombre = document.getElementById("inputNombre");
let inputFecha = document.getElementById("inputFecha");
let inputRuc = document.getElementById("inputRuc");
let inputnmr = document.getElementById("inputnmro");

let input__1 = document.getElementById("input__1");
let input__2 = document.getElementById("input__2");
let input__3 = document.getElementById("input__3");
let input__4 = document.getElementById("input__4");

let carpetita = document.getElementById("carpetita");
let dinamico = document.getElementById("dinamico");
let guardar__todo = document.getElementById("guardar__todo");
let form = document.getElementById("form");

let arreglo = [];
let arreglo2 = [];
let suma__total = document.getElementById("suma__total");





const funcionTablo = () => {
    dinamico.innerHTML = "";
    arreglo.forEach((e) => {

        let fila = document.createElement("tr")
        let cant = document.createElement("td");
        cant.setAttribute("class", "inpùt__1");
        cant.innerText = e.cantidad;

        let des = document.createElement("td");
        des.setAttribute("class", "inpùt__2");
        des.innerText = e.descripcion;

        let precU = document.createElement("td");

        precU.setAttribute("class", "inpùt__3");
        precU.innerText = e.unitario;


        let precT = document.createElement("td");
        precT.innerHTML = e.total;

        fila.appendChild(cant);
        fila.appendChild(des);
        fila.appendChild(precU);
        fila.appendChild(precT);

        dinamico.appendChild(fila);

    })


}

const borrarFilas = () => {
    inputNombre.value = "";
    inputRuc.value = "";
    inputFecha.value = "";
    inputnmr.value = "";
    suma__total.innerHTML = "";

    for (let i = 0; i <arreglo.length+1; i++) {
        let fila = document.querySelector("tr");
        fila.remove();
    }



}

//    //////////////////////////////////////////////////////////

input__3.onchange = () => {
    input__4.value = input__1.value * input__3.value;
}

input__3.onkeyup = () => {
    input__4.value = input__1.value * input__3.value;
}

input__1.onchange = () => {
    input__4.value = input__1.value * input__3.value;
}

input__1.onkeyup = () => {
    input__4.value = input__1.value * input__3.value;
}


let ntotal = 0;
form.onsubmit = (e) => {
    e.preventDefault();
    let objFila = {
        cantidad: input__1.value,
        descripcion: input__2.value,
        unitario: input__3.value,
        total: input__1.value * input__3.value
    }


    arreglo.push(objFila);
    input__1.value = "";
    input__2.value = "";
    input__3.value = "";
    input__4.value = "";


    ntotal += objFila.total;

  
    funcionTablo();

    suma__total.innerText = ntotal;
}
// /////////////////////////////////////////////////
guardar__todo.onclick = () => {

    let facturilla = {
        nombre: inputNombre.value,
        ruc: inputRuc.value,
        fecha: inputFecha.value,
        nro: inputnmr.value,
        ntotal,
        dinamico
    }

    arreglo2.push(facturilla)
    let factura = JSON.stringify(arreglo2);
    localStorage.setItem("arreglo2", factura);

    borrarFilas();
    arreglo=[];
    ntotal=0;
}


