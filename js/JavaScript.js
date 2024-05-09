function arrobj() {
    console .log("Punto 1")

    let Lista_de_mercado = ["bread","milk","cheese","hummus","noodles"]

   for (let index = 0; index < Lista_de_mercado.length; index++) {
    console .log(Lista_de_mercado[index])
   }
   
   console .log("\n")

   console .log("Punto 2") 

    let Días_de_la_Semana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]

    console .log(Días_de_la_Semana)
    for (let index = 0; index < Días_de_la_Semana.length; index++) {
        console .log( Días_de_la_Semana[index]);   
    }

    console .log("\n")
    
    console .log("Punto 3")

    let Información_de_usuario = [
                                 {"nombre": "Pablo","apellido" : "Flores","telefono" : "3245674532","edad" : "20"},
                                 {"nombre": "Maria","apellido" : "Pérez","telefono" : "3214589065","edad" : "21"},
                                 {"nombre": "Pedro","apellido" : "Garcia","telefono" : "3234598657","edad" : "25"},
                                 {"nombre": "Laura","apellido" : "Martínez","telefono" : "3126578463","edad" : "22"},
                                 {"nombre": "Carlos","apellido" : "Rodríguez","telefono" : "3156789364","edad" : "18"}
                                ]

    for (let index = 0; index < Información_de_usuario.length; index++) {
        console .log("Usuario " + (index + 1) + ".")
        console .log("Nombre: " + Información_de_usuario[index].nombre);
        console .log("Apellido: " + Información_de_usuario[index].apellido)
        console .log("Telefono: " + Información_de_usuario[index].telefono)
        console .log("Edad: " + Información_de_usuario[index].edad)
        console .log("\n")
    }                            
  
    console .log("Punto 4")   

    let Información_de_Estudiantes = [
                                    {
                                        "nombre": "Pablo",
                                        "apellido" : "Flores",
                                        "telefono" : "3245674532",
                                        "edad" : "20",
                                        "materias" : ["Matematicas","Fisica","Química"],
                                       
                                    },
                                    {
                                        "nombre": "Maria",
                                        "apellido" : "Pérez",
                                        "telefono" : "3214589065",
                                        "edad" : "21",
                                        "materias" : ["Matematicas","Fisica","Ingles",],
                                    },  
                                    {
                                        "nombre": "Pedro",
                                        "apellido" : "Garcia",
                                        "telefono" : "3234598657",
                                        "edad" : "25",
                                        "materias" : ["Matematicas","Fisica","Química"]
                                    },
                                    {
                                        "nombre": "Laura",
                                        "apellido" : "Martínez",
                                        "telefono" : "3126578463",
                                        "edad" : "22",
                                        "materias" : ["Matematicas","Fisica","Química"],  
                                    },
                                    {
                                        "nombre": "Carlos",
                                        "apellido" : "Rodriguez",
                                        "telefono" : "3156789364",
                                        "edad" : "18",
                                        "materias" : ["Matematicas","Fisica","Química"],                                    
                                    }
                                    ]
    
   for (let index = 0; index < Información_de_Estudiantes.length; index++) {
    console .log("Estudiante " + (index + 1) + ".");
    console .log("Nombre: " + Información_de_Estudiantes[index].nombre)
    console .log("Apellido: " + Información_de_Estudiantes[index].apellido)
    console .log("Telefono: " + Información_de_Estudiantes[index].telefono)
    console .log("Edad: " + Información_de_Estudiantes[index].edad)
    console .log("Materias: " + Información_de_Estudiantes[index].materias)
    console .log("\n")
    
   }

   console .log("Punto 5")

    let Mercado = ["carne","pollo","arroz",[ "papa","lechuga","tomate","cebolla"]
    ]

    for (let index = 0; index < Mercado.length; index++) {
        console .log(Mercado[index]);    
    }
}



let url = `https://jsonplaceholder.typicode.com/posts`
fetch(url)
    .then(res => res.json())
    .then(object => {
        
        let html = `<div class="row m-5">`
        for (let datos of object) {
            
            html += `<div class="col-4 border">
                        <h4> 
                            <b> ${datos.userId} </b> 
                        </h4>
                        <p> 
                            ${datos.id} 
                        </p>
                        <p>
                            <b>${datos.title}</b>
                        </p>
                        <p>
                            ${datos.body}
                        </p>    

                     </div>`
        }

        html += `</div>`

        document.getElementById("charContent").innerHTML = html

    })
