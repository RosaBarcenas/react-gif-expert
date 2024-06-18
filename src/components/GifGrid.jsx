import { useEffect, useState } from "react";
//import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {
  //asi implementamos el customHook useFetchGifs
  const {images, isLoading}=useFetchGifs(category);
  
  //console.log({images,isLoading});

// const [images, setImages] = useState([]);

//las funciones solo se deberian de ejecutar una vez y no cada que se renderize la aplicacion o el modulo
    //getGifs(category);
//Para lograr que solo se llame una vez usamos un hook llamado useEffect donde 
//va a consistir de el metodo que se quiera llamar y un arreglo de dependencias si el 
//arreglo se deja vacio significa que solo se llamara una vez no importa si se necesita renderizar el componente varias veces

// useEffect(()=>{
//   getGifs(category)
// }, []);

//otra forma de traer las imagenes es usando el then
// useEffect(()=>{
//   getGifs(category).then(newImages=>setImages(newImages));
// }, []);

//para tomar los valores que retorna getGifs(category) que es una promesa usmaos

// const getImages=async()=>{
//   const newImages=await getGifs(category);
//   setImages(newImages);
// };

//como solo queremos ejecutar una vez el metodo y no cada que se renderize el componente
// useEffect(() => {
//   getImages()

// }, [])


  return (
    <>
     <h3> {category} </h3>
     {
      // isLoading ? (<h2>Cargando ...</h2>) : null
      //una forma mas facil seria en donde usamos el operador AND
      isLoading && (<h2>Cargando ...</h2>)
     }
    <div className="card-grid">
      {
        images.map((image)=>(
          // <GifItem key={image.id} title={image.title} url={image.url} />
          //una forma de que nuestro componente GifItem reciba todas las propiedades de image 
          //y luego desde ese componente decidir que props elegir 
          <GifItem key={image.id} {...image} /> 
        ))
      }
    </div>
    </>
  )
}
