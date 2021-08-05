
const API_KEY = 'DEAEo7Zfzn5wuErjbs9dJ1D3ECSojzle';

//TODO: separar APIKEY en una variable de ambiente

export const getGifs = async (type: string, searchTerm: string) => {

    const response = await fetch(`https://api.giphy.com/v1/${ type }/search?q=${encodeURIComponent(searchTerm)}&api_key=${API_KEY}`)
    const { data } = await response.json();

    return data;
}

export const getSuggestions = async(searchTerm: string) => {
    const response = await fetch(`https://api.giphy.com/v1/tags/related/${encodeURIComponent(searchTerm)}&?api_key=${API_KEY}`);
    const { data } = await response.json();
    return data;
}
