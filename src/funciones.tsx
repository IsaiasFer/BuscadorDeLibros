import axios, { AxiosResponse } from "axios";
import { Libro } from "./interfaces";
import { libroCargando } from "./objetos";
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

export function cargarLibros(librosObtenidos:AxiosResponse):Libro[]{
  const datos :Libro[]= [];
  for (const element of librosObtenidos.data.docs) {
    const imageUrl:string = `https://covers.openlibrary.org/b/olid/${element.cover_edition_key}-M.jpg`;
    const libro:Libro = {
      name: element.title,
      author: element.author_name,
      year: element.first_publish_year,
      url: imageUrl,
      code:element.key.slice(7),
      added: false
    };
    datos.push(libro);
  }
  return datos
}

export async function obtenerDatos(nombredelibro: string,evento:React.FormEvent,setearLibro:(value: React.SetStateAction<Libro[]>) => void) {
  evento.preventDefault()
  const nombreDeLibroFinal = reemplazarEspaciosPorMas(nombredelibro);
  const linkFinal = `https://openlibrary.org/search.json?q=${nombreDeLibroFinal}&fields=title,author_name,first_publish_year,cover_edition_key,key&limit=3`;
  // Ponemos los libros a cargar
  setearLibro([libroCargando])
  try {
    const response:AxiosResponse = await axios.get(linkFinal);
    setearLibro(cargarLibros(response));
  } catch (error) {
    console.log("Hubo un error: " + error);
  }
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
