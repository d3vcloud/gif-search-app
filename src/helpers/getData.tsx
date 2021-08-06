
const API_KEY = 'DEAEo7Zfzn5wuErjbs9dJ1D3ECSojzle';
const PUBLIC_URL = 'https://api.giphy.com/v1';

export const getGifs = async (type: string, searchTerm: string, page: number = 0, limit: number = 5) => {

    const URL = `${PUBLIC_URL}/${type}/search?q=${encodeURIComponent(searchTerm)}&api_key=${API_KEY}&limit=${limit}&offset=${page * limit}`;
    
    const response = await fetch(URL)
    const { data } = await response.json();

    //transformando array de objetos
    const gifs = data.map((gif: any) => {
        const { id, title, images: { downsized_medium } } = gif;
        return {
            id,
            title,
            url: downsized_medium.url
        }
    });

    return gifs;
}

export const getSuggestions = async (searchTerm: string) => {
    const URL = `${PUBLIC_URL}/tags/related/${encodeURIComponent(searchTerm)}&?api_key=${API_KEY}`;
    
    const response = await fetch(URL);
    const { data } = await response.json();
    return data;
}
