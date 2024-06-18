import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');
    const onInputChange=(event)=>{
        //con el event nosotros podemos ver que eventos se desencadenan cuando agregamos algo al input
        //para ver que valores se estan agregando usamos event.target.value
        setinputValue(event.target.value);
    }

    const onSubmit=(event)=>{
        //para evitar el refresh del navegador que es una accion por default del <form></form>
        event.preventDefault();
        //Para evitar que se guarden valores vacios o con un solo caracter
        if (inputValue.trim().length <=1) return;
            
        //para obtener los valores anteriores usamos un callback
        //donde categories representa el valor que trae consigo el setCategories
        //esta es una forma de hacerlo 
        // setCategories(categories=>[inputValue,...categories]);
        onNewCategory(inputValue.trim());
        //para limpiar el input
        setinputValue('');
    }

  return (
    <form onSubmit={(event)=>onSubmit(event)}>
     <input 
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
     />
    </form>

  )
}
