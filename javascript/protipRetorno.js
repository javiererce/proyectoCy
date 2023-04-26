const mensaje = ()=>console.log("hola mundo")
mensaje();
//-------------------------------
function imprimirArgun(){
    console.log(arguments)
}
imprimirArgun(10,"javier","erce",true)

const imprimirArgunto = (...arg)=>console.log(arg)
imprimirArgunto(10,"javier","erce",true)
//-------------------------------------------
