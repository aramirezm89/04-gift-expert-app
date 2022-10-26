import { useState } from "react";
import { GiftGrid,AddCategory } from "./components";

export function GiftExpertApp() {
  const [categories, setCategories] = useState([""]);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;
    setCategories([newCategory,...categories]);
  };
  return (
    <>
      {/*  titulo */}
      <h1>GiftExpertApp</h1>

      {/*  Input busqueda */}
      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />
      
      {/*listado Gif card*/}

        {categories.map((category) =>
          category.length > 0 ? (
           <GiftGrid key={category} category={category}/>
          ) : null
        )}
  
  
    </>
  );
}
