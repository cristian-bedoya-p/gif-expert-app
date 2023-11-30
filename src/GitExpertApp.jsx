import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GitExpertApp = () => {

    const [Categories, setCategories] = useState(['']);

    const onAddCategory = (newCategory) =>{
         if(Categories.includes(newCategory)) return;
        setCategories([newCategory, ...Categories]);
    }

  return (
    <>
        <h1>GitExpertApp</h1>
        <AddCategory 
            
            onNewCategory={event => onAddCategory(event)}
        />

     
        {
          
            Categories.map((category) => (<GifGrid key={category} category={category}/>) )
        }
       



    </>
  )
}
