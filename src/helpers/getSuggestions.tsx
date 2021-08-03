
//TODO: separar APIKEY en una variable de ambiente

const getSuggestions = async(searchTerm: string) => {
    const response = await fetch(`https://api.giphy.com/v1/tags/related/${encodeURIComponent(searchTerm)}&?api_key=DEAEo7Zfzn5wuErjbs9dJ1D3ECSojzle`);
    const { data } = await response.json();
    return data;
}

export default getSuggestions;