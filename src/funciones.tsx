import axios from "axios";
const instance=axios.create({
  baseURL:'https://4dd6-2803-9800-9404-bad0-6ff0-a6fb-381f-fe7e.ngrok-free.app',
  timeout:5000,
  headers:{
    'Access-Control-Allow-Origin': '*'
  }
})

export function reemplazarEspaciosPorMas(cadena: string): string {
    return cadena.replace(/\s+/g, '+');
  }

export function cambiarEstado():void{
  console.log("La funcion de cambiar estado está funcionando")
}

export async function getEmaBooks(){
  try {
    const response = await instance.post('/product/getAll');
    return response.data.products
  }
  catch (error) {
    console.log("Hubo un error: " + error);
  }
}

export async function createBook(codigo:string){
  try{
    await instance.post(`/product/create/${codigo}`);
  }
  catch(error){
    console.log('No se pudo crear el libro')
  }
}
export async function deleteBook(codigo:string){
  try{
    await instance.post(`/product/delte${codigo}`);
  }
  catch(error){
    console.log('No se pudo crear el libro')
  }
}
export async function addBook(codigo:string){
  try{
    await instance.post(`/product/delte${codigo}`);
  }
  catch(error){
    console.log('No se pudo crear el libro')
  }
}
