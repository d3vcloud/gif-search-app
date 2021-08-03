
const getResults = async (type: string, searchTerm: string) => {

    const category = type.toLowerCase(); //gifs or stickers
    const response = await fetch(`https://api.giphy.com/v1/${ category }/search?q=${ searchTerm }&api_key=DEAEo7Zfzn5wuErjbs9dJ1D3ECSojzle`)
    const { data } = await response.json();

    return data;
}

export default getResults;