
type Props = {
    id: number,
    title: string,
    url: string
}

const Gif = (gif: Props) => {
    return (
        <img 
            // loading="lazy"
            style={{ display: 'block', width: '100%', padding: 5/2 }} 
            src={gif.url} 
            alt={gif.title} />
    )
}

export default Gif
