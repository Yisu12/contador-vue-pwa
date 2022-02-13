if("serviceWorker" in navigator){
    navigator.serviceWorker
        .register("sw.js")
        .then((reg) => console.log("Registro con exito"))
        .catch((err) => console.log(err));
}