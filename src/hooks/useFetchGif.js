import { useState,useEffect } from "react";
import {getGifs} from "../helpers/getGifs"

export const useFetchGif = (category) => {
 

 const [images, setImages] = useState([]);
 const [isLoading,setIsloading] = useState(true);

 const getImages = async () => {
   const newImages = await getGifs(category);
   setImages(newImages);
   setIsloading(false);
 };

 useEffect(() => {
   getImages();
 }, [category]);
 
    return {
    images,
    isLoading

  }
}
