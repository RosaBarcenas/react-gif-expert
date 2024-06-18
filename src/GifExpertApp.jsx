
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


// Los proyectos deben tene runa estructura donde empiezan por un aentrada principal
export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);  
  
  const onAddCategory=(newCategory)=>{
    //console.log(newCategory);
    //evitamos usar push ya que este muta o altera el arreglo inicial
   // setCategories(categories.push('hola'));
   //en su lugar usamos el operador de spread para conservar los elementos que ya trae categories
   //setCategories([...categories, 'Valorant']);

   //para evitar que se repitan las categorias podemos evaluar
   if(categories.includes(newCategory)) return;

   //si queremos que la ultima que agreguemos se muestre primero 
   setCategories([newCategory, ...categories]);
   //otra forma seria usar un callback
   //setCategories(category=>[... category, 'Valorant']);

  }

  return (
    <>
    {/* Titulo */}
        <h1>GifExpertApp</h1>
    {/*Input  */}
    <AddCategory 
    // setCategories={setCategories}
      onNewCategory={(event)=>onAddCategory(event)}
     />
    {/* Listado de Items/Gifs */}

      {/*     <ol>{
      categories.map((category)=>{
        return <li key={category}>{category}</li>
      })} 
           </ol>*/}
      {
        categories.map((category)=>(
          <GifGrid key={category} category={category} />
        ))
      }

        {/* Gif Item */}
    </>
  )
}
