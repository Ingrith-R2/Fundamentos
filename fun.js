/*asincrono
allbacks -- infierno 
promesas 
asyn - await */


const conexBD = (datoscon) => { 
    return new Promise ((resolve,reject)=>{
        setTimeout (()=>{
            datoscon ? resolve("conexion ok "): reject("conexion error")
        })
    })
}
/*
conexBD(true).then((respuesta)=>{console.log(respuesta);})

conexBD(false)
.then(res=>console.log(res))
.catch(err => console.log(err))
*/


//console.log(conexBD)*/
/*const obtenerDat = fetch("https://jsonplaceholder.typicode.com/users") 

obtenerDat
    .then(peticion => peticion.json())
    .then(peticion => console.log(peticion))
    //.then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))
*/
const conexBDd = async() => {
    try {
        const r = await conexBD(true)
        console.log(r)
    } catch (e) {
        console.log(e)
    }
}

conexBDd()

/*
const conectpi = async() => {
try {
    const res = await fetch ("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    console.log(data)
} catch (error) {
   console.log(error) 
}

}
*/