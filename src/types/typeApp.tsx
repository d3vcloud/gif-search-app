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
