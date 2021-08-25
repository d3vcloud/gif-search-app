// import React from "react";

export type QueryFetch = {
    data: any[];
    isLoading: boolean;
    isError: boolean
}

export type Theme = {
    isThemeDark: boolean;
    handleChangeTheme: () => void;
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
}


// export type FavoriteReducer = {
//     dispatch: (state: GifData[], action: ActionReducer) => GifData[]
// }