
type Props = {
    id: number,
    title: string,
    url: string
}

type tplotOptions = {
    [key: string]: boolean | Promise<any>
}

type ImgCache = {
    cache: tplotOptions,
    read: (src: string) => any;
}

const imgCache: ImgCache = {
    cache : {},
    read(src: string) {
      if (!this.cache[src]) {
        this.cache[src] = new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            this.cache[src] = true;
            resolve(this.cache[src]);
          };
          img.src = src;
        }).then((img) => {
          this.cache[src] = true;
        });
      }
      if (this.cache[src] instanceof Promise) {
        throw this.cache[src];
      }
      return this.cache[src];
    }
};

const Gif = (gif: Props) => {
    
    imgCache.read(gif.url);

    return (
        <img 
            // loading="lazy"
            style={{ display: 'block', width: '100%', padding: 5/2 }} 
            src={gif.url} 
            alt={gif.title} />
    )
}

export default Gif
