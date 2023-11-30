
export const getGif = async(category) =>{
  
    const url = `https://api.giphy.com/v1/gifs/search?api_key=1W1WidX5B49Sv0V4wt9GGQalUJ7V8pfQ&q=${category}&limit=10`
    const resp = await fetch(url);
  
    const {data} = await resp.json();
    const gifs = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    
    return gifs
    
}