export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=fKCbfsxY6vBrr8YFfuF18MN6V9HyZRgs&q=${ category }&limit=10`
    const resp = await fetch( url )
    const { data } = await resp.json()
    /*hacer nueva data de gifs, solo con los datos que necesito*/
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs
}

