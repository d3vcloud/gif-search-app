
type Props = {
    id: number,
    title: string,
    url: string
}

const Gif = (gif: Props) => {
    return (
        <div >
            <img 
                style={{ display: 'block', width: '100%', padding: 5/2 }} 
                src={gif.url} 
                alt={gif.title} />
        </div>
    )
}

export default Gif
