export const getGifs = async (searchTerm: string, page: number = 0, limit: number = 15) => {

    const URL = `${process.env.REACT_APP_PUBLIC_URL}/gifs/search?q=${encodeURIComponent(searchTerm)}&api_key=${process.env.REACT_APP_API_KEY}&limit=${limit}&offset=${page * limit}`;
    
    const response = await fetch(URL)
    const { data } = await response.json();

    //transformando array de objetos
    const gifs = data.map((gif: any) => {
        const { id, title, images: { downsized_medium } } = gif;
        return {
            id,
            title,
            url: downsized_medium.url,
            height: downsized_medium.height,
            width: downsized_medium.width
        }
    });

    return gifs;
}

export const getSuggestions = async (searchTerm: string) => {
    const URL = `${process.env.REACT_APP_PUBLIC_URL}/tags/related/${encodeURIComponent(searchTerm)}&?api_key=${process.env.REACT_APP_API_KEY}`;
    
    const response = await fetch(URL);
    const { data } = await response.json();
    return data;
}
