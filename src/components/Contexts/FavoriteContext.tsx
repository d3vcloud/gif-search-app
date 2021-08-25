import { createContext } from "react";
import { GifData } from "../../types/typeApp";

export type Favorite = {
    state: GifData;
    dispatch:() => void;
}

const FavoriteContext = createContext<any>(null);

export default FavoriteContext;