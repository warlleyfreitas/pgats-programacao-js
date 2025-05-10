import { listaDogs }  from "./exercicio-distribuidor-petisco-export.js";

function entregaPetisco(){

    listaDogs.forEach(dog => {
        console.log("Entregando petisco para", dog)
    });
}

entregaPetisco();
