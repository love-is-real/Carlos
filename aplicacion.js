//funciones de click y Agregar texto

function AgregaTexto (indicador , texto){

    let titulo = document.querySelector(indicador);
    titulo.innerHTML = texto;
}

AgregaTexto ('h1','Hola Mundo');
AgregaTexto ('h2','Segundo Título');

//Funcion para calcular el indice de masa corporal.

/*function calculaImc(peso,altura){
    let indiceMasa = peso / altura ** 2;
    alert(`Tu indice de masa corporal es ${indiceMasa}`);
    return

}
*/
//practicando con alura funciones y listas

let ListaGenerica = [];
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];


function agregando () {
            
            lenguajesDeProgramacion.push('Java', 'Ruby','GoLang');
            console.log(lenguajesDeProgramacion);

}

agregando();


// crear una funcion que muestre los elementos separadamente

function agregarSeparadamente () {
            for (let i = 0 ; i < lenguajesDeProgramacion.length ; i ++){
                console.log(lenguajesDeProgramacion[i]);
            }
}

agregarSeparadamente();

// ahora lista los elementos de manera inversa

function agregarSentidoInverso() {
            for (let i = lenguajesDeProgramacion.length - 1 ; i >= 0; i--){
                console.log(lenguajesDeProgramacion[i]);
            }

}

agregarSentidoInverso();



   










    



