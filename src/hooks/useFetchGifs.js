import React from 'react'
import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
    const [Images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true)
        const getImages = async() =>{
        const newImages = await getGif(category);
        setImages(newImages);
        setisLoading(false)
    
        }

    useEffect(() => {
        getImages(); 
    }, []);
  
    return{
        images:Images,
        isloading: isLoading
    }
}

