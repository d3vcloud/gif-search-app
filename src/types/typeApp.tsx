import { Dispatch } from 'react';

export type QueryFetch = {
    data: any[];
    isLoading: boolean;
    isError: boolean
}

export type Theme = {
    isThemeDark: boolean;
    setIsThemeDark: (state: boolean) => void;
}

export type ActionReducer = {
    payload: any;
    type: 'ADD' | 'REMOVE'
}

export type GifData = {
    id:number;
    title:string;
    url:string;
    width: number;
    height: number;
    isFavorite: boolean;
}

export type Favorite = {
    favorites: GifData[];
    dispatch: Dispatch<ActionReducer>;
    // isFavorite: boolean;
    // setIsFavorite: (state: boolean) => void;
}
