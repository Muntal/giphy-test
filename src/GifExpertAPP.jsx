import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'


export const GifExpertAPP = () => {

const [categories, setCategories] = useState(['One Punch Man'])
const onAddCategory  = (newCategory) =>{

    if ( categories.includes(newCategory) ) return;
    setCategories([ newCategory, ...categories]);
}
  return (
    <>
    <h1>GifExpertAPP</h1>
    <AddCategory 
        onNewCategory ={(value) => onAddCategory(value)}
    />
    
    
    
    {categories.map( (category) =>{
        return (
            <GifGrid 
            key={category} 
            category={ category }/>
        )
        
        })
    }
    
    </>
  )
}
