// o primeiro Hello world!!
//let mensagem="ola mundo"
//console.log(mensagem);

let metas1 = ["trabalhar ","curso ","escola "]
let metas2 = ["comer ","beber ","dormir "]
console.log(metas1[2] + metas2[2])
let meta = {
    value:"Ir a academia",
    checked:false,
    log: (info) => {
        console.log(info)
    }
}
meta.value = "Parar de tomar esteróides";
meta.log(meta.value)