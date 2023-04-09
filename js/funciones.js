class OfertasDisponibles{
    constructor(id, destino, dias, mes, precio){
        this.id= id;
        this.destino= destino;
        this.dias= dias;
        this.mes= mes;
        this.precio=parseFloat(precio);
        this.disponible=true;
    }
    sumarIva(){
        return this.precio * 1.21;
    }
    mostrarOfertas(){
        return "ID: "+this.id+"\nDestino: "+this.destino+"\nCantidad de días: "+this.dias+"\nMes: "+this.mes+"\nPrecio: $"+this.precio+"\nPrecio mas IVA: $"+(this.sumarIva().toFixed(2));
    }
}

//creacion de nuevos paquetes dentro de un array
const ofertas = [];
ofertas.push(new OfertasDisponibles("001","Aéreo a Samaná, República Dominicana desde Buenos Aires","10 dias","Mayo", 180000));
ofertas.push(new OfertasDisponibles("002","Hotel Viva Wyndhman Dominicus Beach All Inlusive, Punta Cana, República Dominicana","10 dias","abril", 342000));
ofertas.push(new OfertasDisponibles("003","Aéreo a Río de Janeiro, Brasil desde Córdoba","7 dias","Mayo", 190000));
ofertas.push(new OfertasDisponibles("004","Entrada a Universal Studios, Orlando-Florida, EEUU","10 dias","junio", 150000));
ofertas.push(new OfertasDisponibles("004","Entrada a parques de Disney, Orlando-Florida, EEUU","14 dias","junio", 175000));
ofertas.push(new OfertasDisponibles("005","Hotel Viva Wyndham Azteca All inclusive, Playa del Carmen, México","14 días","junio", 350000));
ofertas.push(new OfertasDisponibles("006","Alquiler de auto en Madrid, España","21 dias","julio", 180000));
ofertas.push(new OfertasDisponibles("007","Alquiler de auto en Wellington, Nueva Zelanda","5 dias","agosto", 105000));

//recorrido de todos las ofertas a por consola
console.log("******* Recorrido de nuestras ofertas *******")


console.table(ofertas)


// interacción con usuario
do{
    alert("Bienvendo a TH Travel")
    let comprobacion = prompt("Selecciona una opcion de Ofertas Disponibles:\n\nÁéreos: 1\nAlojamientos: 2\nActividades: 3\nAlquiler de autos: 4\n\nSi deseas salir escribe Fin".toUpperCase());
    if (comprobacion === "FIN"){
        alert("Gracias por Visitar TH Travel 😄");
        break;
    }else{
        if (comprobacion == "1"){
            let comprobacion = prompt("Tenemos las siguientes Ofertas disponibles para Ud.:\n"+"1: "+ofertas[0].destino+"\n2: "+ofertas[2].destino+"\nEscribe el numero de la opción que deseas conocer mas detalles:");
            if(comprobacion == "1"){
                alert(ofertas[0].mostrarOfertas());
                
            }
            else if(comprobacion == "2"){
                alert(ofertas[2].mostrarOfertas());
            }else{
                alert("Error en la opcion seleccionada");
                
            }
        }else if (comprobacion == "2"){
            let comprobacion = prompt("Tenemos las siguientes Ofertas disponibles para Ud.:\n"+"1: "+ofertas[1].destino+"\n2: "+ofertas[5].destino+"\nEscribe el numero de la opción que deseas conocer mas detalles:");
            if(comprobacion == "1"){
                alert(ofertas[1].mostrarOfertas());
            }
            else if(comprobacion == "2"){
                alert(ofertas[5].mostrarOfertas());
            }else{
                alert("Error en la opcion seleccionada");
            }
        }else if (comprobacion == "3"){
            let comprobacion = prompt("Tenemos las siguientes Ofertas disponibles para Ud.:\n"+"1: "+ofertas[3].destino+"\n2: "+ofertas[4].destino+"\nEscribe el numero de la opción que deseas conocer mas detalles:");
            if(comprobacion == "1"){
                alert(ofertas[3].mostrarOfertas());
            }
            else if(comprobacion == "2"){
                alert(ofertas[4].mostrarOfertas());
            }else{
                alert("Error en la opcion seleccionada");
            }
        }else if (comprobacion == "4"){
            let comprobacion = prompt("Tenemos las siguientes Ofertas disponibles para Ud.:\n"+"1: "+ofertas[6].destino+"\n2: "+ofertas[7].destino+"\nEscribe el numero de la opción que deseas conocer mas detalles:");
            if(comprobacion == "1"){
                alert(ofertas[6].mostrarOfertas());
            }
            else if(comprobacion == "2"){
                alert(ofertas[7].mostrarOfertas());
            }else{
                alert("Error en la opcion seleccionada");
            }
        }else{
            alert("Error en la opcion seleccionada 😵");
        }
    }
}
while (comprobacion = "FIN");

