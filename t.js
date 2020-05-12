let inputNombre=document.getElementById("inputNombre"); 
let inputFecha=document.getElementById("inputFecha");
let inputRuc=document.getElementById("inputRu");
let inputnmr=document.getElementById("inputnmr");
let input__1=document.getElementById("input__1");
let input__2=document.getElementById("input__2");
let input__3=document.getElementById("input__3");
let input__4=document.getElementById("input__4");
let carpetita=document.getElementById("carpetita");
let dinamico=document.getElementById("dinamico");
let arreglo=[];
let suma__total=document.getElementById("suma__total");





const funcionTablo = () => {
    dinamico.innerHTML = "";
    arreglo.forEach((t) => {
 
        let fila = document.createElement("tr")
        let cant = document.createElement("td");
        cant.setAttribute("class", "inpùt__1");
         cant.innerText = t.dato;
       
        let des = document.createElement("td");
        des.setAttribute("class", "inpùt__2");
         des.innerText = t.dato2;
       
        let precU= document.createElement("td");
        
        precU.setAttribute("class", "inpùt__3");
        precU.innerText = t.dato3;
        
       
        let precT = document.createElement("td");
        precT.innerHTML= t.dato4; 
       
        fila.appendChild(cant);
        fila.appendChild(des);
        fila.appendChild(precU);
        fila.appendChild(precT);
       
        dinamico.appendChild(fila);

     
        
        
    })

   

   }
   const sumita=()=>{
    suma__total.innerHTML = "";
    let sum=0;
    let div;
    let numero;

    arreglo.forEach((e) => {
        
        sum+=e.dato4;
        div = document.createElement("div");
        numero = document.createElement("p");
        numero.innerHTML= sum; 
        
        div.appendChild(numero);
        
        suma__total.appendChild(numero);
        
    })
   }

   input__1.onkeyup = e => {
    if (e.keyCode === 13) {
     carpetita.click();
    }
   }
   input__2.onkeyup = e => {
    if (e.keyCode === 13) {
     carpetita.click();
    }
   }
   input__3.onkeyup = e => {
    if (e.keyCode === 13) {
     carpetita.click();
    }
   }

   let num=0;
   carpetita.onclick = () => {
       
    let obj = {
     dato: input__1.value,
     dato2: input__2.value,
     dato3: input__3.value,
     dato4: (input__1.value*input__3.value)
    }
    arreglo.push(obj);
    

    console.log(obj);
    

    input__1.value ="";
    input__2.value ="";
    input__3.value="";

    funcionTablo();

    sumita();

   }
   
  

