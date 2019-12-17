//Creación de Array de Objetos
var Alimentos = [
    {nombre: "Aceite de girasol", vegetariana: true, vegana: true, fitness: true, cetogenica: true, macrobiotica: true, diabetes: true},
    {nombre: "Aceite de Oliva", vegetariana: true, vegana: true, mediterranea: true, paleo: true, fitness: true, alcalina: true, cetogenica: true, macrobiotica: true, diabetes: true, region: ["AND", "EXT", "CLM"]},
    {nombre: "Acelga", vegetariana: true, vegana: true, mediterranea: true, paleo: true, alcalina: true, cetogenica: true, macrobiotica: true, diabetes: true, region: ["AND", "NAV", "VLC"], temp: [1,2,3,4,5,6,7,8,9,10,11,12]},
    {nombre: "Aguacate", vegetariana: true, vegana: true, mediterranea: true, paleo: true, rica_en_fibra: true, fitness: true,  alcalina: true, cetogenica: true, macrobiotica: true, proteica: true, diabetes: true, region: ["AND"], temp: [1,2,3,4,5,10,11,12]},
    {nombre: "Ajo", vegetariana: true, vegana: true, mediterranea: true, paleo: true,  alcalina: true, macrobiotica: true, diabetes: true, region: ["CLM"], temp: [,5, 6, 7]},
    {nombre: "Albaricoque", vegetariana: true, vegana: true, mediterranea: true,  alcalina: true, macrobiotica: true, region: ["MUR", "VLC", "ARG"], temp: [5, 6, 7, 8]},
    {nombre: "Alcachofa", vegetariana: true, vegana: true, mediterranea: true, paleo: true, rica_en_fibra: true, alcalina: true, cetogenica: true, macrobiotica: true, diabetes: true, region: ["MUR", "VLC", "NAV"], temp: [3,4,5, 6, 10,11,12]},
    {nombre: "Algas", vegetariana: true, vegana: true, mediterranea: true, paleo: true,  alcalina: true, cetogenica: true, macrobiotica: true, diabetes: true},
    {nombre: "Almendras", vegetariana: true, vegana: true, mediterranea: true, paleo: true, rica_en_fibra: true, fitness: true,  alcalina: true, macrobiotica: true, proteica: true, diabetes: true, frutos_secos: false},
    {nombre: "Anacardo", vegetariana: true, vegana: true, mediterranea: true, paleo: true, fitness: true,  alcalina: true, macrobiotica: true, proteica: true, frutos_secos: false},
    {nombre: "Apio", vegetariana: true, vegana: true, mediterranea: true,  alcalina: true, cetogenica: true, macrobiotica: true, diabetes: true, region: ["MUR", "VLC", "CA"], temp: [1,2,3,4,5,6,7,8,910,11,12]},
    {nombre: "Arándano", vegetariana: true, vegana: true, mediterranea: true, alcalina: true, macrobiotica: true},
    {nombre: "Arroz blanco", vegetariana: true, vegana: true, mediterranea: true, paleo: true, fitness: true},
    {nombre: "Arroz integral", vegetariana: true, vegana: true, mediterranea: true, paleo: true, fitness: true, macrobiotica: true, proteica: true, diabetes: true},
    {nombre: "Atún", mediterranea: true, paleo: true, cetogenica: true, proteica: true, diabetes: true, pescado: false},
    {nombre: "Avellana", vegetariana: true, vegana: true, mediterranea: true, paleo: true, rica_en_fibra: true, fitness: true, cetogenica: true, macrobiotica: true, proteica: true, diabetes: true, frutos_secos: false},
    {nombre: "Avena", vegetariana: true, vegana: true, mediterranea: true, rica_en_fibra: true, fitness: true,  alcalina: true, macrobiotica: true, proteica: true, diabetes: true},
    {nombre: "Berenjena", vegetariana: true, vegana: true, mediterranea: true, alcalina: true, cetogenica: true, diabetes: true, region: ["AND", "NAV"], temp: [7, 8, 9, 10]},
    {nombre: "Boniato", vegetariana: true, vegana: true, mediterranea: true,  alcalina: true, diabetes: true, region: ["AND"], temp: [10,11]},
    {nombre: "Brócoli", vegetariana: true, vegana: true, mediterranea: true, paleo: true, alcalina: true, cetogenica: true, macrobiotica: true, diabetes: true, region: ["AND", "MUR", "NAV"], temp: [1,2,5,6,10,11,12]},
    {nombre: "Cacahuete", vegetariana: true, vegana: true, mediterranea: true, paleo: true, rica_en_fibra: true, fitness: true,  alcalina: true, cetogenica: true, macrobiotica: true, proteica: true, diabetes: true, cacahuete: false, frutos_secos: false, region: ["AND"], temp: [1,2,3,4,5,10,11,12]},
    {nombre: "Cacao", vegetariana: true, vegana: true, paleo: true, rica_en_fibra: true, fitness: true,  alcalina: true, macrobiotica: true, proteica: true, diabetes: true},
    {nombre: "Calabacín", vegetariana: true, vegana: true, mediterranea: true, alcalina: true, cetogenica: true, macrobiotica: true, diabetes: true, region: ["AND"], temp: [6,7,8,9]},
    {nombre: "Calabaza", vegetariana: true, vegana: true, mediterranea: true, alcalina: true, cetogenica: true, macrobiotica: true, diabetes: true, region: ["VLC", "CYL"], temp: [7,8,9,10]},
    {nombre: "Calamar", mediterranea: true, paleo: true, proteica: true, diabetes: true, marisco: false},
    {nombre: "Cangrejo", mediterranea: true, paleo: true, proteica: true, diabetes: true, marisco: false},
    {nombre: "Caqui", vegetariana: true, vegana: true, mediterranea: true, alcalina: true, diabetes: true, region: ["AND", "VLC", "CA"], temp: [10,11,12]},
    {nombre: "Cardo", vegetariana: true, vegana: true, mediterranea: true, alcalina: true, cetogenica: true, macrobiotica: true, diabetes: true, region: ["NAV", "VLC", "LR"], temp: [1,2,3,11,12]},
    {nombre: "Cebolla", vegetariana: true, vegana: true, mediterranea: true, alcalina: true, cetogenica: true, macrobiotica: true, diabetes: true, region: ["CLM"], temp: [3,4,5,6,7,8,910,11,12]},
    {nombre: "Cerdo", mediterranea: true, paleo: true, fitness: true,  cetogenica: true, proteica: true, diabetes: true},
    {nombre: "Cereza", vegetariana: true, vegana: true, mediterranea: true, alcalina: true, macrobiotica: true, region: ["EXT", "ARG", "CA"], temp: [5, 6]},
    {nombre: "Champiñón", vegetariana: true, vegana: true, mediterranea: true, paleo: true, alcalina: true, cetogenica: true, macrobiotica: true, diabetes: true, region: ["CLM", "LR"], temp: [5,9, 10,11]},
    {nombre: "Coco", vegetariana: true, vegana: true, paleo: true, rica_en_fibra: true, fitness: true, cetogenica: true, macrobiotica: true, region: ["CI"], temp: [1,3,4,6,7,8,10,12]},
    {nombre: "Col", vegetariana: true, vegana: true, mediterranea: true, paleo: true, rica_en_fibra: true, alcalina: true, cetogenica: true, macrobiotica: true, diabetes: true, region: ["VLC", "GAL", "AND"], temp: [1,2,3,4,8,9,10,11,12]},
    {nombre: "Coliflor", vegetariana: true, vegana: true, mediterranea: true, paleo: true, alcalina: true, cetogenica: true, macrobiotica: true, diabetes: true, region: ["AND", "NAV", "MUR"], temp: [1,2,3,4,10,11,12]},
    {nombre: "Conejo", mediterranea: true, paleo: true, cetogenica: true, proteica: true, diabetes: true},
    {nombre: "Cordero", mediterranea: true, paleo: true, fitness: true,  cetogenica: true, proteica: true, diabetes: true},
    {nombre: "Cuscús", vegetariana: true, vegana: true, mediterranea: true, rica_en_fibra: true, fitness: true,  alcalina: true, macrobiotica: true, proteica: true, diabetes: true},
    {nombre: "Dátiles", vegetariana: true, vegana: true, mediterranea: true, paleo: true, rica_en_fibra: true, fitness: true, region: ["VLC"]},
    {nombre: "Embutido (Jamón serrano, chorizo, jamón york, morcilla)", mediterranea: true, paleo: true, fitness: true, proteica: true, diabetes: true,},
    {nombre: "Endivia", vegetariana: true, vegana: true, mediterranea: true, rica_en_fibra: true, cetogenica: true, macrobiotica: true, diabetes: true, region: ["CYL", "NAV"], temp: [1,2,3,4,5,6, 9,10,11,12]},
    {nombre: "Espárrago", vegetariana: true, vegana: true, mediterranea: true, paleo: true, alcalina: true, cetogenica: true, macrobiotica: true, diabetes: true, region: ["AND", "NAV", "CLM", "MAD"], temp: [3,4,5]},
    {nombre: "Espinacas", vegetariana: true, vegana: true, mediterranea: true, paleo: true, alcalina: true, cetogenica: true, macrobiotica: true, diabetes: true, region: ["NAV", "VLC", "CLM"], temp: [1,2,3,4,5,6,8,9,10,11,12]},
    {nombre: "Frambuesa", vegetariana: true, vegana: true, mediterranea: true, rica_en_fibra: true, alcalina: true, macrobiotica: true, region: ["AND", "EXT", "CYL"], temp: [,5,6,7,8,9]},
    {nombre: "Fresa", vegetariana: true, vegana: true, mediterranea: true,  alcalina: true, cetogenica: true, macrobiotica: true, diabetes: true, region: ["AND", "MA"], temp: [4,5,6,7,8,9,10]},
    {nombre: "Gambas", mediterranea: true, paleo: true, proteica: true, diabetes: true, marisco: false},
    {nombre: "Garbanzo", vegetariana: true, vegana: true, mediterranea: true, rica_en_fibra: true, fitness: true, macrobiotica: true, proteica: true},
    {nombre: "Granada", vegetariana: true, vegana: true, mediterranea: true, rica_en_fibra: true, macrobiotica: true, region: ["MUR", "VLC"], temp: [9,10]},
    {nombre: "Guisante", vegetariana: true, vegana: true, mediterranea: true, paleo: true, rica_en_fibra: true, cetogenica: true, macrobiotica: true, region: ["ARG", "NAV", "LR"], temp: [3,4,5,6]},
    {nombre: "Haba", vegetariana: true, vegana: true, mediterranea: true, rica_en_fibra: true, fitness: true, macrobiotica: true, proteica: true, region: ["MUR", "VLC", "AND"], temp: [4,5]},
    {nombre: "Higo", vegetariana: true, vegana: true, mediterranea: true, paleo: true, region: ["AND", "VLC", "EXT", "CA"], temp: [7,8,9]},
    {nombre: "Huevo de gallina", vegetariana: true, mediterranea: true, paleo: true, fitness: true, cetogenica: true, proteica: true, diabetes: true, huevo: false},
    {nombre: "Jengibre", vegetariana: true, vegana: true, mediterranea: true, paleo: true, alcalina: true, macrobiotica: true, diabetes: true},
    {nombre: "Judía verde", vegetariana: true, vegana: true, mediterranea: true, paleo: true, cetogenica: true, macrobiotica: true, diabetes: true, region: ["AND", "GAL"], temp: [5,6,7,8,9,10]},
    {nombre: "Kiwi", vegetariana: true, vegana: true, mediterranea: true,  alcalina: true, macrobiotica: true, proteica: true, diabetes: true, region: ["GAL", "VLC"], temp: [1,2,3,10,11,12]},
    {nombre: "Langosta", mediterranea: true, paleo: true, cetogenica: true, macrobiotica: true, proteica: true, diabetes: true, marisco: false},
    {nombre: "Leche de vaca", vegetariana: true, mediterranea: true,  cetogenica: true, diabetes: true, lacteos: false, region: ["AST"]},
    {nombre: "Lechuga", vegetariana: true, vegana: true, mediterranea: true, alcalina: true, cetogenica: true, macrobiotica: true, diabetes: true, region: ["AND", "MUR"], temp: [1,2,3,4,5,10,11,12]},
    {nombre: "Lentejas", vegetariana: true, vegana: true, mediterranea: true, rica_en_fibra: true, fitness: true, macrobiotica: true, proteica: true, diabetes: true},
    {nombre: "Limón", vegetariana: true, vegana: true, mediterranea: true,  alcalina: true, cetogenica: true, macrobiotica: true, diabetes: true, region: ["AND", "VLC", "MUR"], temp: [1,2,3,4,5,6,10,11,12]},
    {nombre: "Lino", vegetariana: true, vegana: true, mediterranea: true, paleo: true, rica_en_fibra: true, fitness: true,  alcalina: true, macrobiotica: true, proteica: true, diabetes: true},
    {nombre: "Maíz", vegetariana: true, vegana: true, mediterranea: true, paleo: true, rica_en_fibra: true, fitness: true, macrobiotica: true, proteica: true, diabetes: true, region: ["CYL", "EXT", "ARG"], temp: [8,9,10]},
    {nombre: "Mandarina", vegetariana: true, vegana: true, mediterranea: true, alcalina: true, macrobiotica: true, region: ["AND", "VLC"], temp: [1,2,3,10,11,12]},
    {nombre: "Manzana", vegetariana: true, vegana: true, mediterranea: true,  alcalina: true, macrobiotica: true, region: ["CA", "ARG"], temp: [7,8,9,10,11,12]},
    {nombre: "Melocotón", vegetariana: true, vegana: true, mediterranea: true, alcalina: true, region: ["MUR", "CA", "ARG"], temp: [6,7,8,9]},
    {nombre: "Melón", vegetariana: true, vegana: true, mediterranea: true,  alcalina: true, cetogenica: true, region: ["MUR", "CLM", "MA"], temp: [7,8,9]},
    {nombre: "Miel", vegetariana: true, mediterranea: true, fitness: true},
    {nombre: "Mijo", vegetariana: true, vegana: true, paleo: true, rica_en_fibra: true, fitness: true, macrobiotica: true, proteica: true, diabetes: true},
    {nombre: "Mora", vegetariana: true, vegana: true, mediterranea: true, rica_en_fibra: true, alcalina: true, macrobiotica: true, diabetes: true, region: ["AND"], temp: [6,7,8,9]},
    {nombre: "Nabo", vegetariana: true, vegana: true, mediterranea: true,  alcalina: true, cetogenica: true, macrobiotica: true, diabetes: true, region: ["CYL", "VLC", "AND"], temp: [1,2,9,10,11,12]},
    {nombre: "Naranja", vegetariana: true, vegana: true, mediterranea: true, alcalina: true, macrobiotica: true, region: ["AND", "VLC"], temp: [1,2,3,4,5,11,12]},
    {nombre: "Nectarina", vegetariana: true, vegana: true, mediterranea: true, alcalina: true, macrobiotica: true, region: ["ARG", "CA", "MUR"], temp: [5,6,7,8,9]},
    {nombre: "Nuez", vegetariana: true, vegana: true, mediterranea: true, paleo: true, rica_en_fibra: true, fitness: true, cetogenica: true, macrobiotica: true, proteica: true, diabetes: true, frutos_secos : false},
    {nombre: "Ostras", paleo: true, proteica: true, diabetes: true, marisco: false},
    {nombre: "Patata", vegetariana: true, vegana: true, mediterranea: true, paleo: true, alcalina: true, diabetes: true, region: ["CYL", "AST"], temp: [5,6,7,8,9,10]},
    {nombre: "Pavo", mediterranea: true, paleo: true, proteica: true, diabetes: true},
    {nombre: "Pepino", vegetariana: true, vegana: true, mediterranea: true,  alcalina: true, cetogenica: true, macrobiotica: true, diabetes: true, region: ["AND"], temp: [6,7,8,9]},
    {nombre: "Pera", vegetariana: true, vegana: true, mediterranea: true, alcalina: true, macrobiotica: true, region: ["CA", "LR"], temp: [7,8,9,10]},
    {nombre: "Pescado azul", mediterranea: true, paleo: true, cetogenica: true, proteica: true, diabetes: true, pescado: false},
    {nombre: "Pescado blanco", mediterranea: true, paleo: true, cetogenica: true, proteica: true, diabetes: true, pescado: false},
    {nombre: "Pimiento", vegetariana: true, vegana: true, mediterranea: true,  alcalina: true, cetogenica: true, macrobiotica: true, diabetes: true, region: ["AND", "MUR"], temp: [6,7,8,9,10,11]},
    {nombre: "Piñones", vegetariana: true, vegana: true, mediterranea: true, paleo: true, fitness: true,  alcalina: true, cetogenica: true, macrobiotica: true, proteica: true, diabetes: true, region: ["CYL"]},
    {nombre: "Pistacho", vegetariana: true, vegana: true, mediterranea: true, rica_en_fibra: true, fitness: true, macrobiotica: true, proteica: true, frutos_secos: false},
    {nombre: "Plátano", vegetariana: true, vegana: true, mediterranea: true,  alcalina: true, macrobiotica: true, region: ["CI"], temp: [1,2,3,4,5,6,7,8,910,11,12]},
    {nombre: "Pollo", mediterranea: true, paleo: true, cetogenica: true, proteica: true, diabetes: true},
    {nombre: "Pomelo", vegetariana: true, vegana: true, mediterranea: true, alcalina: true, macrobiotica: true, region: ["AND", "MUR", "VLC"], temp: [1,2,3,4,12]},
    {nombre: "Puerro", vegetariana: true, vegana: true, mediterranea: true, alcalina: true, cetogenica: true, macrobiotica: true, diabetes: true, region: ["AND", "CYL"], temp: [1,2,3,8,9,10,11,12]},
    {nombre: "Queso de cabra", vegetariana: true, mediterranea: true, fitness: true, cetogenica: true, proteica: true, diabetes: true, lacteos: false},
    {nombre: "Queso de oveja", vegetariana: true, mediterranea: true, fitness: true, cetogenica: true, proteica: true, diabetes: true, lacteos: false},
    {nombre: "Queso de vaca", vegetariana: true, mediterranea: true, fitness: true, cetogenica: true, proteica: true, diabetes: true, lacteos: false},
    {nombre: "Quinoa", vegetariana: true, vegana: true, rica_en_fibra: true, fitness: true,  alcalina: true, macrobiotica: true, proteica: true, diabetes: true},
    {nombre: "Rábano", vegetariana: true, vegana: true, mediterranea: true, alcalina: true, cetogenica: true, macrobiotica: true, diabetes: true, region: ["VLC", "CYL"], temp: [3,5,6,7,9,10,11]},
    {nombre: "Remolacha", vegetariana: true, vegana: true, mediterranea: true, alcalina: true, macrobiotica: true, region: ["AND", "CYL"], temp: [1,2,3,4,5,6,7,8,9,10,11,12]},
    {nombre: "Salmón", mediterranea: true, paleo: true, cetogenica: true, proteica: true, diabetes: true, pescado: false},
    {nombre: "Sandía", vegetariana: true, vegana: true, mediterranea: true,  alcalina: true, cetogenica: true, region: ["AND", "MUR", "CLM"], temp: [6,7,8,9]},
    {nombre: "Semillas de girasol", vegetariana: true, vegana: true, mediterranea: true, paleo: true, rica_en_fibra: true, fitness: true,  macrobiotica: true, proteica: true, diabetes: true, frutos_secos: false},
    {nombre: "Sésamo", vegetariana: true, vegana: true, mediterranea: true, paleo: true, rica_en_fibra: true, fitness: true,  alcalina: true, macrobiotica: true, proteica: true, diabetes: true},
    {nombre: "Ternera", mediterranea: true, paleo: true, fitness: true,  diabetes: true},
    {nombre: "Tofu", vegetariana: true, vegana: true, cetogenica: true, macrobiotica: true, proteica: true, diabetes: true},
    {nombre: "Tomate", vegetariana: true, vegana: true, mediterranea: true, cetogenica: true, diabetes: true, region: ["AND", "EXT"], temp: [6,7,8,9,10]},
    {nombre: "Trigo (no harina)", vegetariana: true, vegana: true, mediterranea: true, rica_en_fibra: true, fitness: true, proteica: true, diabetes: true},
    {nombre: "Trigo sarraceno", vegetariana: true, vegana: true, mediterranea: true, rica_en_fibra: true, fitness: true,  alcalina: true, macrobiotica: true, proteica: true, diabetes: true},
    {nombre: "Uva", vegetariana: true, vegana: true, mediterranea: true, macrobiotica: true, region: ["CLM", "LR", "EXT", "MA"], temp: [8,9,10]},
    {nombre: "Zanahoria", vegetariana: true, vegana: true, mediterranea: true, macrobiotica: true, diabetes: true, region: ["AND", "CYL"], temp: [1,2,3,4,5,6,7,8,9,10,11,12]},
];
//console.log(Alimentos[x].nombre); - Pruebas de consola que muestra el valor de las propiedades del objeto de posicion "x" del array

//Array de regiones de la api
const Regions = {MA:"Madrid", CA:"Catalonia", CLM:"Castille-La Mancha",  VLC:"Valencia", BL:"Balearic Islands", CI:"Canary Islands",  EXT:"Extremadura", MUR:"Murcia",  AND:"Andalusia", CYL:"Castille and León", AST:"Principality of Asturias",  GAL:"Galicia",  CAN:"Cantabria", PV:"Basque Country",  LR:"La Rioja",  ARG:"Aragon",  NAV:"Navarre", CEU:"Ceuta",  MEL:"Melilla"}


//Declaración de las variables que usaremos en distintas funciones.
var eleccion = [];
var resultadosAOrdenar = [];
var listaResultados = document.querySelector("#listaResultados");
var listaResultadosRegion = document.querySelector("#listaResultadosRegion");
var listaResultadosTemporada = document.querySelector("#listaResultadosTemporada");
var currentTime;
var currentMonth;
var region;
var finalRegion;

//Busca en una API la región donde está ubicado tu IP
window.addEventListener("load", () => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://ipinfo.io/geo`;
    fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data => {
            region = data.region;
            console.log(data.region);
            whichRegion(data.region);
            console.log(finalRegion)
        });
    currentTime = new Date();
    currentMonth = currentTime.getMonth() + 1;
    console.log(currentMonth);
});

function whichRegion(region) {
    let regionsKeys = Object.keys(Regions);
    let regionsValues = Object.values(Regions);
    for (let i in regionsKeys){
        if(regionsValues[i] === region){
        finalRegion = regionsKeys[i];
        console.log(finalRegion);
        }
        else continue;       
    }

}

//Usamos esta función para almacenar en un array las propiedades seleccionadas de nuestro formulario.
//ATENCIÓN: Usar entrecomillado para declarar la parte del formulario.
function cogerOpciones(parteFormulario){
    //Guarda el número de opciones en un array
    var opciones = document.formulario.getElementsByClassName(parteFormulario);

    //COMPROBACIÓN console.log(opciones);
    //Recorremos las opciones para encontrar la/s seleccionadas
    for (var i = 0; i < opciones.length; i++) {
        if(opciones[i].checked == true){
            //Las guardamos en eleccion
            eleccion.push(opciones[i].value);
        }
        else continue; //{COMPROBACIÓN console.log(opciones[i].value + " no está seleccionada");}
    } 
   return eleccion;
}
//Añadimos un nuevo <li> a nuestro documento HTML en la <lu> id="listaResultados".
function addLi(alimento, idUl){
    var newLi = document.createElement('li');
    newLi.innerHTML += alimento;
    idUl.appendChild(newLi);
}

function filtroExtra(propiedadEnAlimentos, datoExtraido, ulObjetivo){
    for(let i in resultadosAOrdenar){
        for(let k in Alimentos){
            if(resultadosAOrdenar[i] === Alimentos[k].nombre){
                for(let l in Alimentos[k].propiedadEnAlimentos){
                    if(Alimentos[k].propiedadEnAlimentos[l] == datoExtraido){
                        console.log("El/la " + Alimentos[k].nombre + " se debería priorizar por zona");
                        addLi(Alimentos[k].nombre, ulObjetivo);
                    }
                }            
            }
        }
    }
}


//Función del botón busqueda
function MostrarAlimentos2(){
    //Declaramos la elección vacía de nuevo para que no se sume a anteriores búsquedas
    eleccion = [];
    resultadosAOrdenar = [];
    
    cogerOpciones("validartip");
    cogerOpciones("alergeForm");
    console.log("Las opciones seleccionadas son: " + eleccion + " ");

    //Vaciamos nuestro <ul> para filtrar de nuevo.
    listaResultados.innerHTML="";
    listaResultadosRegion.innerHTML="";
    listaResultadosTemporada.innerHTML="";
    //Recorremos todos los alimentos comprobando si tienen las dietas elegidas como true y alérgenos como false.
    //En el primero de los casos el nombre del alimento se imprime como <li>, en el segundo o no se imprime o se borra.
    for (var k = 0; k < Alimentos.length; k++) {
        for (var j = 0; j < eleccion.length; j++) {
            if(Alimentos[k][eleccion[j]] === true || eleccion[j] === "todas"){
                addLi(Alimentos[k].nombre, listaResultados);
                resultadosAOrdenar.push(Alimentos[k].nombre);
                
            }
            else if(Alimentos[k][eleccion[j]] == false && listaResultados.lastChild !== null){
                if (listaResultados.lastChild.textContent == Alimentos[k].nombre){
                    listaResultados.removeChild(listaResultados.lastChild);
                    resultadosAOrdenar.pop(Alimentos[k].nombre);
                }
                else continue;                    
            }
            else continue;
        }
    }
    console.log(eleccion.length);
    console.log(listaResultados.innerText);
    console.log(resultadosAOrdenar);

    //filtroExtra(region, finalRegion, listaResultadosRegion);
    //filtroExtra(temp, currentMonth, listaResultadosTemporada);
    for(let i in resultadosAOrdenar){
        for(let k in Alimentos){
            if(resultadosAOrdenar[i] === Alimentos[k].nombre){
                for(let l in Alimentos[k].region ){
                    if(Alimentos[k].region[l] == finalRegion){
                        console.log("El/la " + Alimentos[k].nombre + " se debería priorizar por zona");
                        addLi(Alimentos[k].nombre, listaResultadosRegion);
                    }
                }
                        
            }
        }
    }
    
    for(let i in resultadosAOrdenar){
        for(let k in Alimentos){
            if(resultadosAOrdenar[i] === Alimentos[k].nombre){
               for(let l in Alimentos[k].temp ){
                    if(Alimentos[k].temp[l] == currentMonth){
                        console.log("El/la " + Alimentos[k].nombre + " se debería priorizar por temporada");
                        addLi(Alimentos[k].nombre, listaResultadosTemporada);
                    }
                }
                    
            }
        }
    }
}


  $('.tile')
    // tile mouse actions
    .on('mouseover', function(){
      $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
    })
    .on('mouseout', function(){
      $(this).children('.photo').css({'transform': 'scale(1)'});
    })
    .on('mousemove', function(e){
      $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    // tiles set up
    .each(function(){
      $(this)
        // add a photo container
        .append('<div class="photo"></div>')
        // some text just to show zoom level on current item in this example
        .append('<div class="txt"><div class="x">'+ $(this).attr('data-scale') +'x</div>ZOOM ON<br>HOVER</div>')
        // set up a background image for each tile based on data-image attribute
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    })
var snowStorm = (function(window, document) {

  // --- common properties ---

  this.autoStart = true;          // Whether the snow should start automatically or not.
  this.excludeMobile = true;      // Snow is likely to be bad news for mobile phones' CPUs (and batteries.) Enable at your own risk.
  this.flakesMax = 128;           // Limit total amount of snow made (falling + sticking)
  this.flakesMaxActive = 64;      // Limit amount of snow falling at once (less = lower CPU use)
  this.animationInterval = 33;    // Theoretical "miliseconds per frame" measurement. 20 = fast + smooth, but high CPU use. 50 = more conservative, but slower
  this.useGPU = true;             // Enable transform-based hardware acceleration, reduce CPU load.
  this.className = null;          // CSS class name for further customization on snow elements
  this.excludeMobile = true;      // Snow is likely to be bad news for mobile phones' CPUs (and batteries.) By default, be nice.
  this.flakeBottom = null;        // Integer for Y axis snow limit, 0 or null for "full-screen" snow effect
  this.followMouse = true;        // Snow movement can respond to the user's mouse
  this.snowColor = '#fff';        // Don't eat (or use?) yellow snow.
  this.snowCharacter = '&bull;';  // &bull; = bullet, &middot; is square on some systems etc.
  this.snowStick = true;          // Whether or not snow should "stick" at the bottom. When off, will never collect.
  this.targetElement = null;      // element which snow will be appended to (null = document.body) - can be an element ID eg. 'myDiv', or a DOM node reference
  this.useMeltEffect = true;      // When recycling fallen snow (or rarely, when falling), have it "melt" and fade out if browser supports it
  this.useTwinkleEffect = false;  // Allow snow to randomly "flicker" in and out of view while falling
  this.usePositionFixed = false;  // true = snow does not shift vertically when scrolling. May increase CPU load, disabled by default - if enabled, used only where supported
  this.usePixelPosition = false;  // Whether to use pixel values for snow top/left vs. percentages. Auto-enabled if body is position:relative or targetElement is specified.

  // --- less-used bits ---

  this.freezeOnBlur = true;       // Only snow when the window is in focus (foreground.) Saves CPU.
  this.flakeLeftOffset = 0;       // Left margin/gutter space on edge of container (eg. browser window.) Bump up these values if seeing horizontal scrollbars.
  this.flakeRightOffset = 0;      // Right margin/gutter space on edge of container
  this.flakeWidth = 8;            // Max pixel width reserved for snow element
  this.flakeHeight = 8;           // Max pixel height reserved for snow element
  this.vMaxX = 5;                 // Maximum X velocity range for snow
  this.vMaxY = 4;                 // Maximum Y velocity range for snow
  this.zIndex = 0;                // CSS stacking order applied to each snowflake

  // --- "No user-serviceable parts inside" past this point, yadda yadda ---

  var storm = this,
  features,
  // UA sniffing and backCompat rendering mode checks for fixed position, etc.
  isIE = navigator.userAgent.match(/msie/i),
  isIE6 = navigator.userAgent.match(/msie 6/i),
  isMobile = navigator.userAgent.match(/mobile|opera m(ob|in)/i),
  isBackCompatIE = (isIE && document.compatMode === 'BackCompat'),
  noFixed = (isBackCompatIE || isIE6),
  screenX = null, screenX2 = null, screenY = null, scrollY = null, docHeight = null, vRndX = null, vRndY = null,
  windOffset = 1,
  windMultiplier = 2,
  flakeTypes = 6,
  fixedForEverything = false,
  targetElementIsRelative = false,
  opacitySupported = (function(){
    try {
      document.createElement('div').style.opacity = '0.5';
    } catch(e) {
      return false;
    }
    return true;
  }()),
  didInit = false,
  docFrag = document.createDocumentFragment();

  features = (function() {

    var getAnimationFrame;

    /**
     * hat tip: paul irish
     * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
     * https://gist.github.com/838785
     */

    function timeoutShim(callback) {
      window.setTimeout(callback, 1000/(storm.animationInterval || 20));
    }

    var _animationFrame = (window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        timeoutShim);

    // apply to window, avoid "illegal invocation" errors in Chrome
    getAnimationFrame = _animationFrame ? function() {
      return _animationFrame.apply(window, arguments);
    } : null;

    var testDiv;

    testDiv = document.createElement('div');

    function has(prop) {

      // test for feature support
      var result = testDiv.style[prop];
      return (result !== undefined ? prop : null);

    }

    // note local scope.
    var localFeatures = {

      transform: {
        ie:  has('-ms-transform'),
        moz: has('MozTransform'),
        opera: has('OTransform'),
        webkit: has('webkitTransform'),
        w3: has('transform'),
        prop: null // the normalized property value
      },

      getAnimationFrame: getAnimationFrame

    };

    localFeatures.transform.prop = (
      localFeatures.transform.w3 || 
      localFeatures.transform.moz ||
      localFeatures.transform.webkit ||
      localFeatures.transform.ie ||
      localFeatures.transform.opera
    );

    testDiv = null;

    return localFeatures;

  }());

  this.timer = null;
  this.flakes = [];
  this.disabled = false;
  this.active = false;
  this.meltFrameCount = 20;
  this.meltFrames = [];

  this.setXY = function(o, x, y) {

    if (!o) {
      return false;
    }

    if (storm.usePixelPosition || targetElementIsRelative) {

      o.style.left = (x - storm.flakeWidth) + 'px';
      o.style.top = (y - storm.flakeHeight) + 'px';

    } else if (noFixed) {

      o.style.right = (100-(x/screenX*100)) + '%';
      // avoid creating vertical scrollbars
      o.style.top = (Math.min(y, docHeight-storm.flakeHeight)) + 'px';

    } else {

      if (!storm.flakeBottom) {

        // if not using a fixed bottom coordinate...
        o.style.right = (100-(x/screenX*100)) + '%';
        o.style.bottom = (100-(y/screenY*100)) + '%';

      } else {

        // absolute top.
        o.style.right = (100-(x/screenX*100)) + '%';
        o.style.top = (Math.min(y, docHeight-storm.flakeHeight)) + 'px';

      }

    }

  };

  this.events = (function() {

    var old = (!window.addEventListener && window.attachEvent), slice = Array.prototype.slice,
    evt = {
      add: (old?'attachEvent':'addEventListener'),
      remove: (old?'detachEvent':'removeEventListener')
    };

    function getArgs(oArgs) {
      var args = slice.call(oArgs), len = args.length;
      if (old) {
        args[1] = 'on' + args[1]; // prefix
        if (len > 3) {
          args.pop(); // no capture
        }
      } else if (len === 3) {
        args.push(false);
      }
      return args;
    }

    function apply(args, sType) {
      var element = args.shift(),
          method = [evt[sType]];
      if (old) {
        element[method](args[0], args[1]);
      } else {
        element[method].apply(element, args);
      }
    }

    function addEvent() {
      apply(getArgs(arguments), 'add');
    }

    function removeEvent() {
      apply(getArgs(arguments), 'remove');
    }

    return {
      add: addEvent,
      remove: removeEvent
    };

  }());

  function rnd(n,min) {
    if (isNaN(min)) {
      min = 0;
    }
    return (Math.random()*n)+min;
  }

  function plusMinus(n) {
    return (parseInt(rnd(2),10)===1?n*-1:n);
  }

  this.randomizeWind = function() {
    var i;
    vRndX = plusMinus(rnd(storm.vMaxX,0.2));
    vRndY = rnd(storm.vMaxY,0.2);
    if (this.flakes) {
      for (i=0; i<this.flakes.length; i++) {
        if (this.flakes[i].active) {
          this.flakes[i].setVelocities();
        }
      }
    }
  };

  this.scrollHandler = function() {
    var i;
    // "attach" snowflakes to bottom of window if no absolute bottom value was given
    scrollY = (storm.flakeBottom ? 0 : parseInt(window.scrollY || document.documentElement.scrollTop || (noFixed ? document.body.scrollTop : 0), 10));
    if (isNaN(scrollY)) {
      scrollY = 0; // Netscape 6 scroll fix
    }
    if (!fixedForEverything && !storm.flakeBottom && storm.flakes) {
      for (i=0; i<storm.flakes.length; i++) {
        if (storm.flakes[i].active === 0) {
          storm.flakes[i].stick();
        }
      }
    }
  };

  this.resizeHandler = function() {
    if (window.innerWidth || window.innerHeight) {
      screenX = window.innerWidth - 16 - storm.flakeRightOffset;
      screenY = (storm.flakeBottom || window.innerHeight);
    } else {
      screenX = (document.documentElement.clientWidth || document.body.clientWidth || document.body.scrollWidth) - (!isIE ? 8 : 0) - storm.flakeRightOffset;
      screenY = storm.flakeBottom || document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight;
    }
    docHeight = document.body.offsetHeight;
    screenX2 = parseInt(screenX/2,10);
  };

  this.resizeHandlerAlt = function() {
    screenX = storm.targetElement.offsetWidth - storm.flakeRightOffset;
    screenY = storm.flakeBottom || storm.targetElement.offsetHeight;
    screenX2 = parseInt(screenX/2,10);
    docHeight = document.body.offsetHeight;
  };

  this.freeze = function() {
    // pause animation
    if (!storm.disabled) {
      storm.disabled = 1;
    } else {
      return false;
    }
    storm.timer = null;
  };

  this.resume = function() {
    if (storm.disabled) {
       storm.disabled = 0;
    } else {
      return false;
    }
    storm.timerInit();
  };

  this.toggleSnow = function() {
    if (!storm.flakes.length) {
      // first run
      storm.start();
    } else {
      storm.active = !storm.active;
      if (storm.active) {
        storm.show();
        storm.resume();
      } else {
        storm.stop();
        storm.freeze();
      }
    }
  };

  this.stop = function() {
    var i;
    this.freeze();
    for (i=0; i<this.flakes.length; i++) {
      this.flakes[i].o.style.display = 'none';
    }
    storm.events.remove(window,'scroll',storm.scrollHandler);
    storm.events.remove(window,'resize',storm.resizeHandler);
    if (storm.freezeOnBlur) {
      if (isIE) {
        storm.events.remove(document,'focusout',storm.freeze);
        storm.events.remove(document,'focusin',storm.resume);
      } else {
        storm.events.remove(window,'blur',storm.freeze);
        storm.events.remove(window,'focus',storm.resume);
      }
    }
  };

  this.show = function() {
    var i;
    for (i=0; i<this.flakes.length; i++) {
      this.flakes[i].o.style.display = 'block';
    }
  };

  this.SnowFlake = function(type,x,y) {
    var s = this;
    this.type = type;
    this.x = x||parseInt(rnd(screenX-20),10);
    this.y = (!isNaN(y)?y:-rnd(screenY)-12);
    this.vX = null;
    this.vY = null;
    this.vAmpTypes = [1,1.2,1.4,1.6,1.8]; // "amplification" for vX/vY (based on flake size/type)
    this.vAmp = this.vAmpTypes[this.type] || 1;
    this.melting = false;
    this.meltFrameCount = storm.meltFrameCount;
    this.meltFrames = storm.meltFrames;
    this.meltFrame = 0;
    this.twinkleFrame = 0;
    this.active = 1;
    this.fontSize = (10+(this.type/5)*10);
    this.o = document.createElement('div');
    this.o.innerHTML = storm.snowCharacter;
    if (storm.className) {
      this.o.setAttribute('class', storm.className);
    }
    this.o.style.color = storm.snowColor;
    this.o.style.position = (fixedForEverything?'fixed':'absolute');
    if (storm.useGPU && features.transform.prop) {
      // GPU-accelerated snow.
      this.o.style[features.transform.prop] = 'translate3d(0px, 0px, 0px)';
    }
    this.o.style.width = storm.flakeWidth+'px';
    this.o.style.height = storm.flakeHeight+'px';
    this.o.style.fontFamily = 'arial,verdana';
    this.o.style.cursor = 'default';
    this.o.style.overflow = 'hidden';
    this.o.style.fontWeight = 'normal';
    this.o.style.zIndex = storm.zIndex;
    docFrag.appendChild(this.o);

    this.refresh = function() {
      if (isNaN(s.x) || isNaN(s.y)) {
        // safety check
        return false;
      }
      storm.setXY(s.o, s.x, s.y);
    };

    this.stick = function() {
      if (noFixed || (storm.targetElement !== document.documentElement && storm.targetElement !== document.body)) {
        s.o.style.top = (screenY+scrollY-storm.flakeHeight)+'px';
      } else if (storm.flakeBottom) {
        s.o.style.top = storm.flakeBottom+'px';
      } else {
        s.o.style.display = 'none';
        s.o.style.bottom = '0%';
        s.o.style.position = 'fixed';
        s.o.style.display = 'block';
      }
    };

    this.vCheck = function() {
      if (s.vX>=0 && s.vX<0.2) {
        s.vX = 0.2;
      } else if (s.vX<0 && s.vX>-0.2) {
        s.vX = -0.2;
      }
      if (s.vY>=0 && s.vY<0.2) {
        s.vY = 0.2;
      }
    };

    this.move = function() {
      var vX = s.vX*windOffset, yDiff;
      s.x += vX;
      s.y += (s.vY*s.vAmp);
      if (s.x >= screenX || screenX-s.x < storm.flakeWidth) { // X-axis scroll check
        s.x = 0;
      } else if (vX < 0 && s.x-storm.flakeLeftOffset < -storm.flakeWidth) {
        s.x = screenX-storm.flakeWidth-1; // flakeWidth;
      }
      s.refresh();
      yDiff = screenY+scrollY-s.y+storm.flakeHeight;
      if (yDiff<storm.flakeHeight) {
        s.active = 0;
        if (storm.snowStick) {
          s.stick();
        } else {
          s.recycle();
        }
      } else {
        if (storm.useMeltEffect && s.active && s.type < 3 && !s.melting && Math.random()>0.998) {
          // ~1/1000 chance of melting mid-air, with each frame
          s.melting = true;
          s.melt();
          // only incrementally melt one frame
          // s.melting = false;
        }
        if (storm.useTwinkleEffect) {
          if (s.twinkleFrame < 0) {
            if (Math.random() > 0.97) {
              s.twinkleFrame = parseInt(Math.random() * 8, 10);
            }
          } else {
            s.twinkleFrame--;
            if (!opacitySupported) {
              s.o.style.visibility = (s.twinkleFrame && s.twinkleFrame % 2 === 0 ? 'hidden' : 'visible');
            } else {
              s.o.style.opacity = (s.twinkleFrame && s.twinkleFrame % 2 === 0 ? 0 : 1);
            }
          }
        }
      }
    };

    this.animate = function() {
      // main animation loop
      // move, check status, die etc.
      s.move();
    };

    this.setVelocities = function() {
      s.vX = vRndX+rnd(storm.vMaxX*0.12,0.1);
      s.vY = vRndY+rnd(storm.vMaxY*0.12,0.1);
    };

    this.setOpacity = function(o,opacity) {
      if (!opacitySupported) {
        return false;
      }
      o.style.opacity = opacity;
    };

    this.melt = function() {
      if (!storm.useMeltEffect || !s.melting) {
        s.recycle();
      } else {
        if (s.meltFrame < s.meltFrameCount) {
          s.setOpacity(s.o,s.meltFrames[s.meltFrame]);
          s.o.style.fontSize = s.fontSize-(s.fontSize*(s.meltFrame/s.meltFrameCount))+'px';
          s.o.style.lineHeight = storm.flakeHeight+2+(storm.flakeHeight*0.75*(s.meltFrame/s.meltFrameCount))+'px';
          s.meltFrame++;
        } else {
          s.recycle();
        }
      }
    };

    this.recycle = function() {
      s.o.style.display = 'none';
      s.o.style.position = (fixedForEverything?'fixed':'absolute');
      s.o.style.bottom = 'auto';
      s.setVelocities();
      s.vCheck();
      s.meltFrame = 0;
      s.melting = false;
      s.setOpacity(s.o,1);
      s.o.style.padding = '0px';
      s.o.style.margin = '0px';
      s.o.style.fontSize = s.fontSize+'px';
      s.o.style.lineHeight = (storm.flakeHeight+2)+'px';
      s.o.style.textAlign = 'center';
      s.o.style.verticalAlign = 'baseline';
      s.x = parseInt(rnd(screenX-storm.flakeWidth-20),10);
      s.y = parseInt(rnd(screenY)*-1,10)-storm.flakeHeight;
      s.refresh();
      s.o.style.display = 'block';
      s.active = 1;
    };

    this.recycle(); // set up x/y coords etc.
    this.refresh();

  };

  this.snow = function() {
    var active = 0, flake = null, i, j;
    for (i=0, j=storm.flakes.length; i<j; i++) {
      if (storm.flakes[i].active === 1) {
        storm.flakes[i].move();
        active++;
      }
      if (storm.flakes[i].melting) {
        storm.flakes[i].melt();
      }
    }
    if (active<storm.flakesMaxActive) {
      flake = storm.flakes[parseInt(rnd(storm.flakes.length),10)];
      if (flake.active === 0) {
        flake.melting = true;
      }
    }
    if (storm.timer) {
      features.getAnimationFrame(storm.snow);
    }
  };

  this.mouseMove = function(e) {
    if (!storm.followMouse) {
      return true;
    }
    var x = parseInt(e.clientX,10);
    if (x<screenX2) {
      windOffset = -windMultiplier+(x/screenX2*windMultiplier);
    } else {
      x -= screenX2;
      windOffset = (x/screenX2)*windMultiplier;
    }
  };

  this.createSnow = function(limit,allowInactive) {
    var i;
    for (i=0; i<limit; i++) {
      storm.flakes[storm.flakes.length] = new storm.SnowFlake(parseInt(rnd(flakeTypes),10));
      if (allowInactive || i>storm.flakesMaxActive) {
        storm.flakes[storm.flakes.length-1].active = -1;
      }
    }
    storm.targetElement.appendChild(docFrag);
  };

  this.timerInit = function() {
    storm.timer = true;
    storm.snow();
  };

  this.init = function() {
    var i;
    for (i=0; i<storm.meltFrameCount; i++) {
      storm.meltFrames.push(1-(i/storm.meltFrameCount));
    }
    storm.randomizeWind();
    storm.createSnow(storm.flakesMax); // create initial batch
    storm.events.add(window,'resize',storm.resizeHandler);
    storm.events.add(window,'scroll',storm.scrollHandler);
    if (storm.freezeOnBlur) {
      if (isIE) {
        storm.events.add(document,'focusout',storm.freeze);
        storm.events.add(document,'focusin',storm.resume);
      } else {
        storm.events.add(window,'blur',storm.freeze);
        storm.events.add(window,'focus',storm.resume);
      }
    }
    storm.resizeHandler();
    storm.scrollHandler();
    if (storm.followMouse) {
      storm.events.add(isIE?document:window,'mousemove',storm.mouseMove);
    }
    storm.animationInterval = Math.max(20,storm.animationInterval);
    storm.timerInit();
  };

  this.start = function(bFromOnLoad) {
    if (!didInit) {
      didInit = true;
    } else if (bFromOnLoad) {
      // already loaded and running
      return true;
    }
    if (typeof storm.targetElement === 'string') {
      var targetID = storm.targetElement;
      storm.targetElement = document.getElementById(targetID);
      if (!storm.targetElement) {
        throw new Error('Snowstorm: Unable to get targetElement "'+targetID+'"');
      }
    }
    if (!storm.targetElement) {
      storm.targetElement = (document.body || document.documentElement);
    }
    if (storm.targetElement !== document.documentElement && storm.targetElement !== document.body) {
      // re-map handler to get element instead of screen dimensions
      storm.resizeHandler = storm.resizeHandlerAlt;
      //and force-enable pixel positioning
      storm.usePixelPosition = true;
    }
    storm.resizeHandler(); // get bounding box elements
    storm.usePositionFixed = (storm.usePositionFixed && !noFixed && !storm.flakeBottom); // whether or not position:fixed is to be used
    if (window.getComputedStyle) {
      // attempt to determine if body or user-specified snow parent element is relatlively-positioned.
      try {
        targetElementIsRelative = (window.getComputedStyle(storm.targetElement, null).getPropertyValue('position') === 'relative');
      } catch(e) {
        // oh well
        targetElementIsRelative = false;
      }
    }
    fixedForEverything = storm.usePositionFixed;
    if (screenX && screenY && !storm.disabled) {
      storm.init();
      storm.active = true;
    }
  };

  function doDelayedStart() {
    window.setTimeout(function() {
      storm.start(true);
    }, 20);
    // event cleanup
    storm.events.remove(isIE?document:window,'mousemove',doDelayedStart);
  }

  function doStart() {
    if (!storm.excludeMobile || !isMobile) {
      doDelayedStart();
    }
    // event cleanup
    storm.events.remove(window, 'load', doStart);
  }

  // hooks for starting the snow
  if (storm.autoStart) {
    storm.events.add(window, 'load', doStart, false);
  }

  return this;

}(window, document));


function toggleClass(obj, cls){
  var currentClass = obj.className,
      reg = new RegExp(cls, 'gi');
  if(reg.test(currentClass)){
   obj.className = currentClass.replace(cls, '');
  } else {
    obj.className += cls;
  }
}

var block = document.querySelectorAll('._block');
var content =  document.querySelector('.content');
var aud = document.querySelector('audio');
var playing = false;

for(var i=0; i<block.length; i++){
  block[i].onclick = function(){
    for(var it=0; it<block.length; it++){
      block[it].className = '_block';
    };
    
    content.className = 'content  __open';
    toggleClass(this, ' __active');
    aud.play();
    playing = true;
    
    document.querySelector('._block.__active').onclick = function(){
      toggleClass(this, ' __active');
      toggleClass(content, ' __open');
      if(playing){
        aud.pause();
        playing = false;
      } else {
        aud.play();
        playing = true;
      }
    }
  }
}

jQuery(document).ready(function($){
    //set your google maps parameters
    var $latitude = 51.5255069,
        $longitude = -0.0836207,
        $map_zoom = 14;

    //google map custom marker icon - .png fallback for IE11
    var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
    var $marker_url = ( is_internetExplorer11 ) ? 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.png' : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location_1.svg';
        
    //define the basic color of your map, plus a value for saturation and brightness
    var $main_color = '#2d313f',
        $saturation= -20,
        $brightness= 5;

    //we define here the style of the map
    var style= [ 
        {
            //set saturation for the labels on the map
            elementType: "labels",
            stylers: [
                {saturation: $saturation}
            ]
        },  
        {   //poi stands for point of interest - don't show these lables on the map 
            featureType: "poi",
            elementType: "labels",
            stylers: [
                {visibility: "off"}
            ]
        },
        {
            //don't show highways lables on the map
            featureType: 'road.highway',
            elementType: 'labels',
            stylers: [
                {visibility: "off"}
            ]
        }, 
        {   
            //don't show local road lables on the map
            featureType: "road.local", 
            elementType: "labels.icon", 
            stylers: [
                {visibility: "off"} 
            ] 
        },
        { 
            //don't show arterial road lables on the map
            featureType: "road.arterial", 
            elementType: "labels.icon", 
            stylers: [
                {visibility: "off"}
            ] 
        },
        {
            //don't show road lables on the map
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [
                {visibility: "off"}
            ]
        }, 
        //style different elements on the map
        { 
            featureType: "transit", 
            elementType: "geometry.fill", 
            stylers: [
                { hue: $main_color },
                { visibility: "on" }, 
                { lightness: $brightness }, 
                { saturation: $saturation }
            ]
        }, 
        {
            featureType: "poi",
            elementType: "geometry.fill",
            stylers: [
                { hue: $main_color },
                { visibility: "on" }, 
                { lightness: $brightness }, 
                { saturation: $saturation }
            ]
        },
        {
            featureType: "poi.government",
            elementType: "geometry.fill",
            stylers: [
                { hue: $main_color },
                { visibility: "on" }, 
                { lightness: $brightness }, 
                { saturation: $saturation }
            ]
        },
        {
            featureType: "poi.sport_complex",
            elementType: "geometry.fill",
            stylers: [
                { hue: $main_color },
                { visibility: "on" }, 
                { lightness: $brightness }, 
                { saturation: $saturation }
            ]
        },
        {
            featureType: "poi.attraction",
            elementType: "geometry.fill",
            stylers: [
                { hue: $main_color },
                { visibility: "on" }, 
                { lightness: $brightness }, 
                { saturation: $saturation }
            ]
        },
        {
            featureType: "poi.business",
            elementType: "geometry.fill",
            stylers: [
                { hue: $main_color },
                { visibility: "on" }, 
                { lightness: $brightness }, 
                { saturation: $saturation }
            ]
        },
        {
            featureType: "transit",
            elementType: "geometry.fill",
            stylers: [
                { hue: $main_color },
                { visibility: "on" }, 
                { lightness: $brightness }, 
                { saturation: $saturation }
            ]
        },
        {
            featureType: "transit.station",
            elementType: "geometry.fill",
            stylers: [
                { hue: $main_color },
                { visibility: "on" }, 
                { lightness: $brightness }, 
                { saturation: $saturation }
            ]
        },
        {
            featureType: "landscape",
            stylers: [
                { hue: $main_color },
                { visibility: "on" }, 
                { lightness: $brightness }, 
                { saturation: $saturation }
            ]
            
        },
        {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
                { hue: $main_color },
                { visibility: "on" }, 
                { lightness: $brightness }, 
                { saturation: $saturation }
            ]
        },
        {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
                { hue: $main_color },
                { visibility: "on" }, 
                { lightness: $brightness }, 
                { saturation: $saturation }
            ]
        }, 
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                { hue: $main_color },
                { visibility: "on" }, 
                { lightness: $brightness }, 
                { saturation: $saturation }
            ]
        }
    ];
        
    //set google map options
    var map_options = {
        center: new google.maps.LatLng($latitude, $longitude),
        zoom: $map_zoom,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        styles: style,
    }
    //inizialize the map
    var map = new google.maps.Map(document.getElementById('google-container'), map_options);
    //add a custom marker to the map                
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng($latitude, $longitude),
        map: map,
        visible: true,
        icon: $marker_url,
    });

    //add custom buttons for the zoom-in/zoom-out on the map
    function CustomZoomControl(controlDiv, map) {
        //grap the zoom elements from the DOM and insert them in the map 
        var controlUIzoomIn= document.getElementById('cd-zoom-in'),
            controlUIzoomOut= document.getElementById('cd-zoom-out');
        controlDiv.appendChild(controlUIzoomIn);
        controlDiv.appendChild(controlUIzoomOut);

        // Setup the click event listeners and zoom-in or out according to the clicked element
        google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
            map.setZoom(map.getZoom()+1)
        });
        google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
            map.setZoom(map.getZoom()-1)
        });
    }

    var zoomControlDiv = document.createElement('div');
    var zoomControl = new CustomZoomControl(zoomControlDiv, map);

    //insert the zoom div on the top left of the map
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
});

  





/*?function MostrarAlimentos(){
    
    var opciones = document.formulario.validartip; //guarda el número de opciones de dietas en un array

    for(var i=0; i<opciones.length;i++){ //For que evalua cual de las opciones está seleccionada
        if(opciones[i].checked === true){
            var eleccion = eleccion + opciones[i].value; //Guarda la opción en una variable
            //console.log(eleccion);
        }

        var resultadosEscritos = document.getElementById("resultados"); //Llama en el código HTML al id "resultados" y accede a su contenido guardándolo en una variable
        resultadosEscritos.innerHTML=""; //Limpia el div resultados cada vez que el usuario realiza una busqueda
        listaResultados.innerHTML="";

    }
        
    switch(eleccion){ //Switch que evalua a parir de la selección del tipo de dieta lo que debe hacer en cada caso
        case "vegetariana": //Caso  de tipo vegetariana
        for(k in  Alimentos){ //For que recorre todo el array de objetos
            if(Alimentos[k].vegetariano === true){ //Comprueba si la propiedad vegetariano es verdadera
                    resultadosEscritos.innerHTML +='<li>'+Alimentos[k].nombre+ '</li>'; //De todos los objetos donde vegetariano = "yeah" escribe en el HTML el nombre de ese objeto en el interior del div "resultados" del HTML
                    addLi(Alimentos[k].nombre);

            }
        }
        break;

        case "vegana": //Caso  de tipo vegana
        for(k in  Alimentos){ //For que recorre todo el array de objetos
            if(Alimentos[k].vegana === true){ //Comprueba si la propiedad vegana es verdadera
                    resultadosEscritos.innerHTML += Alimentos[k].nombre + "<br>"; //De todos los objetos donde vegana = "yeah" escribe en el HTML el nombre de ese objeto en el interior del div "resultados" del HTML
                    addLi(Alimentos[k].nombre);
            }
        }
        break;

        case "mediterranea": //Caso  de tipo mediterranea
        for(k in  Alimentos){ //For que recorre todo el array de objetos
            if(Alimentos[k].mediterranea=== true){ //Comprueba si la propiedad mediterranea es verdadera
                    resultadosEscritos.innerHTML += Alimentos[k].nombre + "<br>"; //De todos los objetos donde mediterranea = "yeah" escribe en el HTML el nombre de ese objeto en el interior del div "resultados" del HTML
                    addLi(Alimentos[k].nombre);
            }
        }
        break;

        case "rica_en_fibra": //Caso  de tipo Rica en Fibra
        for(k in  Alimentos){ //For que recorre todo el array de objetos
            if(Alimentos[k].rica_en_fibra=== true){ //Comprueba si la propiedad rica en fibra es verdadera
                    resultadosEscritos.innerHTML += Alimentos[k].nombre + "<br>"; //De todos los objetos donde rica_en_fibra = "yeah" escribe en el HTML el nombre de ese objeto en el interior del div "resultados" del HTML
                    addLi(Alimentos[k].nombre);
            }
        }
        break;

        case "todas": //Caso de todos
        for(k in  Alimentos){ //For que recorre todo el array de objetos
                    resultadosEscritos.innerHTML += Alimentos[k].nombre + "<br>"; //Muestra el nombre de todos los Objetos del Array de objetos
                    addLi(Alimentos[k].nombre);
        }
        break;

        default: alert("Debes seleccionar una opción de Dieta "); break; //Por defecto muestra una alerta al usuario
    }  
    console.log(listaResultados.innerHTML);
}
*/


/* FUNCIÓN CREADA PARA COGER LAS PROPIEDADES DE CADA OBJETO Y ALMACENARLAS EN UN ARRAY

function cogerPropiedadesAlimento_tipo (ArrDeObj){
    propiedadesArrDeObj.push(Object.keys(ArrDeObj[0]));
    return propiedadesArrDeObj; 
}
console.log(propiedadesArrDeObj);*/